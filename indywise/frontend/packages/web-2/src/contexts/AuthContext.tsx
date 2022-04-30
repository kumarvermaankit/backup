import * as React from 'react';
import { LocalStorage, SessionStorage } from '../utils/storage';
import { api } from '../api';
import { IOAuthData } from '../interfaces/IOAuth';
import { useHistory } from 'react-router-dom';

export interface ISignUp {
  email: string;
  username: string;
  country_code: string;
  mobile_number: string;
  password: string;
  first_name: string;
  last_name: string;
  wiseup_foundation?: boolean;
}

export interface ISignUpPortfolio {
  dateOfBirth: {
    day: number;
    month: string;
    year: number;
  };
  nationality: string;
  occupation: string;
  skillsOfInterest: Array<string>;
  categoriesOfInterest: Array<string>;
}

export interface ISignIn {
  username: string;
  password: string;
  rememberMe: boolean;
}

interface IUserSignInResponse {
  access_token: string;
  refresh_token: string;
  ID: string;
  first_name: string;
  last_name: string;
  email: string;
  user: IUserInSignInRes;
}

interface IUserInSignInRes {
  ID: string;
  avatar: IAvatar;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  referral_code: string;
  referred_by: string;
  user_type?: string[];
  mobile_number: string;
  country_code: string;
  wiseup_foundation?: boolean;
}

export interface IAvatar {
  hash: null | string;
  small: null | string;
  medium: null | string;
  large: null | string;
}

export interface IUser {
  ID: string;
  avatar: IAvatar;
  firstName: string;
  lastName: string;
  email: string;
  referralCode: string;
  referredBy: string;
  userType?: string[];
  username?: string;
  mobileNumber?: string;
  countryCode?: string;
  isOAuth?: boolean;
  wiseupFoundation?: boolean;
}

interface IBusinessSignInResponse {
  access_token: string;
  refresh_token: string;
  business_account: {
    username: string;
    organization_name: string;
    email: string;
    avatar: string;
  };
}

export interface IBusiness {
  access_token: string;
  refresh_token: string;
  username: string;
  organization_name: string;
  email: string;
  avatar?: string;
}

enum IAuthType {
  user = 'user',
  business = 'business'
}

export interface IAuth {
  authType: IAuthType | null;
  isAuthenticating: boolean;
  user: IUser | null;
  business: IBusiness | null;
  signup: (data: ISignUp) => void;
  isSigningUp: boolean;
  signupErr: string | null;
  resetSignupErr: () => void;
  signinUser: (data: ISignIn) => Promise<boolean>;
  signinBusiness: (data: ISignIn) => Promise<boolean>;
  isSigningIn: boolean;
  signinErr: string | null;
  setSigninError: (err: string) => void;
  resetSigninErr: () => void;
  signout: () => void;
  updateUser: () => Promise<IUser>;
  signinUserWithOAuthData: (data: IOAuthData) => boolean;
  setPortfolioDataFn: (data: ISignUpPortfolio) => any;
  getPortfolio: () => void;
  portfolioData: any;
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
  const [business, setBusiness] = React.useState<IBusiness | null>(null);
  const [isSigningUp, setIsSigningUp] = React.useState(false);
  const [isSigningIn, setIsSigningIn] = React.useState(false);
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);
  const [signinErr, setSigninErr] = React.useState<string | null>(null);
  const [signupErr, setSignupErr] = React.useState<string | null>(null);
  const [portfolioData, setPortfolioData] = React.useState<any>({});
  const history = useHistory();

  const resetSigninErr = () => {
    setSigninErr(null);
  };

  const resetSignupErr = () => {
    setSignupErr('');
  };

  const setSigninError = (err: string) => {
    setSigninErr(err);
  };

  const authType: IAuthType | null =
    user && !business
      ? IAuthType.user
      : business && !user
      ? IAuthType.business
      : null;

  const signup = async (data: ISignUp) => {
    setIsSigningUp(true);
    resetSignupErr();

    try {
      const signedUp = await api.auth.user.Signup(data);
      if (signedUp?.data?.user_created) {
        const res = await signinUser({
          username: data.username,
          password: data.password,
          rememberMe: true
        });
        if (res) {
          window.localStorage.setItem('from', 'FirstFoundation');
          history.push('/foundation');

          if (window.localStorage.getItem('portfolioData')) {
            signUpPortfolio(
              JSON.parse(window.localStorage.getItem('portfolioData') as string)
            );
          }
        }
      }
      history.push('/sign-in');
    } catch (e) {
      console.log(e);
      const statusCode: string = e?.response?.status?.toString();

      if (statusCode?.startsWith('5')) {
        setSignupErr("Something didn't go quite as expected!");
      } else if (statusCode?.startsWith('4')) {
        setSignupErr(e.response.data.error.message);
      }
    }

    setIsSigningUp(false);
  };

  const signUpPortfolio = async (data: ISignUpPortfolio | null) => {
    // const accessToken = window.localStorage.getItem('access_token');
    try {
      await api.auth.user.SignupPortfolio(data);
    } catch (e) {
      console.log(e);
    }
  };

  const setPortfolioDataFn = (data: ISignUpPortfolio) => {
    window.localStorage.setItem('portfolioData', JSON.stringify(data));
  };

  const getPortfolio = async () => {
    try {
      const res = await api.user.getPortfolio();
      const resData: any = res.data.data;
      setPortfolioData(resData.signUpData);
    } catch (e) {
      setPortfolioData({});
    }
  };

  const signinUser = async (data: ISignIn) => {
    try {
      setIsSigningIn(true);
      const res = await api.auth.user.Signin(data);
      const resData: IUserSignInResponse = res.data;

      const user: IUser = {
        ID: resData.user.ID,
        avatar: resData.user.avatar,
        firstName: resData.user.first_name,
        lastName: resData.user.last_name,
        email: resData.user.email,
        username: resData.user.username,
        referralCode: resData.user.referral_code,
        referredBy: resData.user.referred_by,
        userType: resData.user.user_type,
        countryCode: resData.user.country_code,
        mobileNumber: resData.user.mobile_number,
        wiseupFoundation: resData.user.wiseup_foundation
      };

      if (data?.rememberMe) {
        LocalStorage.setUser(user);
      } else {
        SessionStorage.setUser(user);
      }

      LocalStorage.setTokens(resData.access_token, resData.refresh_token);
      LocalStorage.setFirstName(user.firstName);
      setUser(user);
      setSigninErr(null);
      setIsSigningIn(false);

      return true;
    } catch (e) {
      const statusCode: string = e?.response?.status?.toString();

      if (statusCode?.startsWith('5')) {
        setSigninErr("Something didn't go quite as expected!");
      } else if (statusCode?.startsWith('4')) {
        setSigninErr(e?.response?.data?.error?.message);
      }
      setIsSigningIn(false);

      return false;
    }
  };

  const signinUserWithOAuthData = (data: IOAuthData): boolean => {
    if (!data.access_token || !data.refresh_token) return false;

    const user: IUser = {
      ID: data.user.ID,
      avatar: data.user.avatar,
      firstName: data.user.first_name,
      lastName: data.user.last_name,
      email: data.user.email,
      referralCode: data.user.referral_code,
      referredBy: data.user.referred_by,
      userType: data.user.user_type,
      username: data.user.username,
      countryCode: data.user.country_code,
      mobileNumber: data.user.mobile_number,
      wiseupFoundation: data.user.wiseup_foundation,
      isOAuth: true
    };

    LocalStorage.setTokens(data.access_token, data.refresh_token);
    LocalStorage.setFirstName(data.user.first_name);
    LocalStorage.setUser(user);
    setUser(user);
    return true;
  };

  const signinBusiness = async (data: ISignIn) => {
    try {
      setIsSigningIn(true);
      const res = await api.auth.business.Signin(data);

      const resData: IBusinessSignInResponse = res.data;
      const business: IBusiness = {
        access_token: resData.access_token,
        refresh_token: resData.refresh_token,
        username: resData.business_account.username,
        organization_name: resData.business_account.organization_name,
        email: resData.business_account.email,
        avatar: resData.business_account.avatar
      };

      if (data.rememberMe) {
        LocalStorage.setBusiness(business);
      } else {
        SessionStorage.setBusiness(business);
      }

      LocalStorage.setTokens(business.access_token, business.refresh_token);
      setBusiness(business);
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
    setBusiness(null);
    window.location.assign('/'); // Redirect to root
  };

  const updateUser = async (): Promise<IUser> => {
    try {
      const res = await api.user.getMyProfileData();
      const userData: IUserInSignInRes = res.data;

      const user: IUser = {
        ID: userData.ID,
        avatar: userData.avatar,
        countryCode: userData.country_code,
        email: userData.email,
        firstName: userData.first_name,
        lastName: userData.last_name,
        mobileNumber: userData.mobile_number,
        referralCode: userData.referral_code,
        referredBy: userData.referred_by,
        wiseupFoundation: userData.wiseup_foundation,
        username: userData.username,
        userType: userData.user_type
      };

      setUser(user);
      LocalStorage.setUser(user);
      return user;
    } catch (err) {
      throw err;
    }
  };

  React.useEffect(() => {
    setIsAuthenticating(true);

    const initAuth = async () => {
      const user = LocalStorage.getUser() || SessionStorage.getUser();
      const business =
        LocalStorage.getBusiness() || SessionStorage.getBusiness();
      const accessToken = LocalStorage.getAccessToken();
      const refreshToken = LocalStorage.getRefreshToken();

      if (accessToken && refreshToken) {
        if (user) {
          try {
            const res = await api.auth.user.RefreshTokens(refreshToken);
            const new_access_token = res.data.access_token;
            const new_refresh_token = res.data.refresh_token;
            LocalStorage.setTokens(new_access_token, new_refresh_token);
            await updateUser();
          } catch (err) {
            signout();
          }
        } else if (business) {
          try {
            const res = await api.auth.business.RefreshTokens(refreshToken);
            const new_access_token = res.data.access_token;
            const new_refresh_token = res.data.refresh_token;
            LocalStorage.setTokens(new_access_token, new_refresh_token);
            setBusiness(business);
          } catch (err) {
            signout();
          }
        }
      }

      setIsAuthenticating(false);
    };

    initAuth();
  }, []);

  return {
    authType,
    user,
    business,
    isAuthenticating,
    signup,
    isSigningUp,
    signupErr,
    resetSignupErr,
    signinUser,
    setSigninError,
    signinBusiness,
    isSigningIn,
    signinUserWithOAuthData,
    signinErr,
    resetSigninErr,
    signout,
    updateUser,
    setPortfolioDataFn,
    getPortfolio,
    portfolioData
  };
};
