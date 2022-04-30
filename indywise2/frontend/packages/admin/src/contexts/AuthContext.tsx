import React from 'react';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';
import { LocalStorage, SessionStorage } from '../utils/storage';

export interface ISignIn {
  username: string;
  password: string;
}

interface ISignInResponse {
  access_token: string;
  refresh_token: string;
  admin: IUser;
}

export interface IToken {
  access_token: string;
  refresh_token: string;
  last_login: number;
  name: string;
  username: string;
}

export interface IUser {
  username: string;
  name: string;
  roles: any;
  last_login: number;
}

export interface IAuth {
  isAuthenticating: boolean;
  loading: boolean;
  user: IUser | null;
  signin: (data: ISignIn) => Promise<boolean>;
  isSigningIn: boolean;
  signinErr: string | null;
  signout: () => void;
  variables: any;
  handleChange: (event: any) => void;
  updatePassword: () => Promise<boolean>;
}

export const AuthContext = React.createContext<IAuth>({} as IAuth);

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const useProvideAuth = (): IAuth => {
  const [user, setUser] = React.useState<IUser | null>(null);
  const [isSigningIn, setIsSigningIn] = React.useState(false);
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);
  const [signinErr, setSigninErr] = React.useState<string | null>(null);
  const [loading, toggleLoading] = React.useState(false);
  const [variables, setVariables] = React.useState<any>({
    passwordOld: '',
    passwordConfirm: '',
    passwordNew: ''
  });

  const signin = async (data: ISignIn) => {
    try {
      setIsSigningIn(true);
      const res = await Axios({
        url: '/admin/admins/login',
        method: 'POST',
        data: {
          username: data.username,
          password: data.password
        }
      });

      const resData: ISignInResponse = res.data;
      const user: IUser = {
        last_login: resData.admin.last_login,
        name: resData.admin.name,
        username: resData.admin.username,
        roles: resData.admin.roles
      };

      SessionStorage.setUser(user);
      LocalStorage.setUser(user);

      LocalStorage.setTokens(resData.access_token, resData.refresh_token);
      LocalStorage.setFirstName(data.username);
      setUser(user);
      setSigninErr(null);
      setIsSigningIn(false);

      return true;
    } catch (e) {
      const statusCode: string = e.response.status.toString();

      if (statusCode.startsWith('5')) {
        setSigninErr("Something didn't go quite as expected!");
      } else if (statusCode.startsWith('4')) {
        setSigninErr(e.response.data.error.message);
      }
      setIsSigningIn(false);

      return false;
    }
  };

  const signout = () => {
    LocalStorage.destroy();
    SessionStorage.destroy();
    setUser(null);
    window.location.assign('/'); // Redirect to root
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.persist();
    const {
      target: { name, value }
    } = event;

    setVariables({
      ...variables,
      [name]: value
    });
  };

  const updatePassword = async () => {
    const { passwordOld, passwordNew, passwordConfirm } = variables;

    try {
      if (passwordOld !== passwordConfirm) {
        toast.warning('Passwords do not match!');
        return false;
      }

      toggleLoading(true);
      const res = await Axios({
        url: '/admin/admins/me/password',
        method: 'PATCH',
        data: {
          current_password: passwordOld,
          new_password: passwordNew
        }
      });

      const resData: any = res.data;
      if (resData.sucess) {
        toast.success('Password updated successfully!');
        signout();
      }

      toggleLoading(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            toast.error(e.response.data.error.message);
          }
        }
      }
      toggleLoading(false);

      return false;
    }
  };

  React.useEffect(() => {
    setIsAuthenticating(true);

    const updateUser = async (): Promise<IUser> => {
      try {
        const res = await Axios({
          method: 'GET',
          url: '/admin/admins/me'
        });

        const userData: ISignInResponse = res.data;
        const user: IUser = {
          username: userData.admin.username,
          name: userData.admin.name,
          roles: userData.admin.roles,
          last_login: userData.admin.last_login
        };
        return user;
      } catch (err) {
        throw err;
      }
    };

    const initAuth = async () => {
      const user = LocalStorage.getUser() || SessionStorage.getUser();
      const accessToken = LocalStorage.getAccessToken();
      const refreshToken = LocalStorage.getRefreshToken();

      if (user && accessToken && refreshToken) {
        try {
          const response = await Axios({
            method: 'post',
            url: `/admin/admins/refresh-token?token=${refreshToken}`
          });

          const new_access_token = response.data.access_token;
          const new_refresh_token = response.data.refresh_token;
          LocalStorage.setTokens(new_access_token, new_refresh_token);
          const updatedUser = await updateUser();
          setUser(updatedUser);
        } catch (err) {
          signout();
        }
      }

      setIsAuthenticating(false);
    };

    initAuth();
  }, []);

  return {
    user,
    isAuthenticating,
    signin,
    isSigningIn,
    signinErr,
    signout,
    handleChange,
    variables,
    loading,
    updatePassword
  };
};
