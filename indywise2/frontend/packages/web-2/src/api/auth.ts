import { ISignIn, ISignUp, ISignUpPortfolio } from '../contexts/AuthContext';
import Axios, { baseURL } from '../utils/Axios';

export const user = {
  Signup: (data: ISignUp) => {
    return Axios({
      method: 'POST',
      url: '/profile/users',
      data
    });
  },

  SignupPortfolio: (data: ISignUpPortfolio | null) => {
    return Axios({
      method: 'PUT',
      url: '/portfolios/portfolio/signupdata',
      data
    });
  },

  Signin: (data: ISignIn) => {
    return Axios({
      method: 'POST',
      url: '/profile/users/login',
      data: {
        username: data.username,
        password: data.password
      }
    });
  },

  RefreshTokens: (refresh_token: string) => {
    return Axios({
      method: 'POST',
      url: '/profile/user/refresh-tokens',
      data: {
        refresh_token
      }
    });
  },

  RequestPasswordReset: (username: string) => {
    return Axios({
      method: 'POST',
      url: `/profile/users/request-password-reset/${username}`
    });
  },

  VerifyPasswordResetToken: (token: string) => {
    return Axios({
      method: 'GET',
      url: `/profile/users/reset-password/${token}`
    });
  },

  VerifyEmail: (token: string) => {
    return Axios({
      method: 'POST',
      url: `/profile/user/verify-email/${token}`
    });
  },

  ReSendEmail: (email: string) => {
    return Axios({
      method: 'POST',
      url: `/user/request-new-email-verify-link/${email}`
    });
  },

  ResetPassword: (token: string, new_password: string) => {
    return Axios({
      method: 'POST',
      url: '/profile/users/reset-password',
      data: {
        token,
        new_password
      }
    });
  }
};

export const business = {
  Signin: (data: ISignIn) => {
    return Axios({
      method: 'POST',
      url: '/business/business/login',
      data: {
        username: data.username,
        password: data.password
      }
    });
  },

  RefreshTokens: (refresh_token: string) => {
    return Axios({
      method: 'POST',
      url: '/business/business/refresh-tokens',
      data: {
        refresh_token
      }
    });
  },

  VerifyPasswordUpdateToken: (token: string) => {
    return Axios({
      method: 'GET',
      url: `/business/business/update-password-with-token/${token}`
    });
  },

  UpdatePasswordWithToken: (token: string, new_password: string) => {
    return Axios({
      method: 'POST',
      url: '/business/business/update-password-with-token',
      data: {
        token,
        new_password
      }
    });
  }
};

export const oauth = {
  google: `${baseURL}/profile/oauth/google`,
  linkedin: `${baseURL}/profile/oauth/linkedin`,
  facebook: `${baseURL}/profile/oauth/facebook`
};
