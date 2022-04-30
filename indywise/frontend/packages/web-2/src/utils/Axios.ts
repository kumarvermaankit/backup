import axios, { AxiosError } from 'axios';
import { LocalStorage, SessionStorage } from './storage';
import { api } from '../api';

enum IAuthType {
  user = 'user',
  business = 'business'
}

const getAuthType = (): IAuthType | null => {
  const user = LocalStorage.getUser() || SessionStorage.getUser();
  const business = LocalStorage.getBusiness() || SessionStorage.getBusiness();

  const authType: IAuthType | null =
    user && !business
      ? IAuthType.user
      : business && !user
      ? IAuthType.business
      : null;

  return authType;
};

export const baseURL =
  process.env.NODE_ENV === 'production' &&
  process.env.REACT_APP_HOST_ENV === 'production'
    ? 'https://api.indywise.com'
    : 'https://dev-api.indywise.com';

const AxiosInstance = axios.create({
  baseURL
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = LocalStorage.getAccessToken();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    // If the request succeeds, we don't have to do anything and just return the response
    return response;
  },
  (error: AxiosError) => {
    if (isTokenExpiredError(error)) {
      return refreshTokenAndReattemptRequest(error);
    }

    // If the error is due to other reasons, we just throw it back to axios
    return Promise.reject(error);
  }
);

const isTokenExpiredError = (err: AxiosError): boolean => {
  if (
    err.response?.status === 401 &&
    err.response?.data.message === 'Unauthorized'
  ) {
    return true;
  }

  return false;
};

let isAlreadyRefreshingAccessToken = false;
// This is the list of waiting requests that will retry after the JWT refresh complete
let subscribers: any = [];

async function refreshTokenAndReattemptRequest(error: AxiosError) {
  try {
    const { response: errorResponse } = error;
    const refreshToken = LocalStorage.getRefreshToken();

    if (!refreshToken) {
      // We can't refresh, throw the error anyway
      return Promise.reject(error);
    }

    // Proceed to the token refresh procedure.
    // We create a new Promise that will retry the request,
    // clone all the request configuration from the failed
    // request in the error object.
    const retryOriginalRequest = new Promise((resolve) => {
      // We need to add the request retry to the queue
      // since there another request that already attempt to
      // refresh the token.
      addSubscriber((access_token: string) => {
        errorResponse!.config.headers.Authorization = 'Bearer ' + access_token;
        resolve(axios(errorResponse!.config));
      });
    });

    if (!isAlreadyRefreshingAccessToken) {
      isAlreadyRefreshingAccessToken = true;

      try {
        const authType = getAuthType();
        const response =
          authType === 'user'
            ? await api.auth.user.RefreshTokens(refreshToken)
            : await api.auth.business.RefreshTokens(refreshToken);

        const new_access_token = response.data.access_token;
        const new_refresh_token = response.data.refresh_token;
        // save the newly refreshed token for other requests to use
        LocalStorage.setTokens(new_access_token, new_refresh_token);
        onAccessTokenRefresh(new_access_token);
      } catch (err) {
        LocalStorage.destroy();
        SessionStorage.destroy();
        window.location.assign('/'); // Redirect to root
        return Promise.reject(error);
      }

      isAlreadyRefreshingAccessToken = false;
    }

    return retryOriginalRequest;
  } catch (err) {
    return Promise.reject(err);
  }
}

function onAccessTokenRefresh(access_token: string) {
  // When the refresh is successful, we start retrying the requests one by one
  // and empty the queue
  subscribers.forEach((callback: any) => callback(access_token));
  subscribers = [];
}

function addSubscriber(callback: any) {
  subscribers.push(callback);
}

export default AxiosInstance;
