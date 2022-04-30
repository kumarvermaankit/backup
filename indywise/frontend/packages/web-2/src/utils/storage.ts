import { IBusiness, IUser } from '../contexts/AuthContext';
const ACCESS_TOKEN_NAME = 'access_token';
const REFRESH_TOKEN_NAME = 'refresh_token';
const USER_FIRST_NAME = 'first_name';
const USER_AVATAR_URL = 'avatar';
const USER = 'user';
const BUSINESS = 'business';

export class LocalStorage {
  public static destroy() {
    localStorage.clear();
  }

  public static getUser(): IUser | null {
    const user = localStorage.getItem(USER);
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

  public static setUser(user: IUser) {
    localStorage.setItem(USER, JSON.stringify(user));
  }

  public static getBusiness(): IBusiness | null {
    const business = localStorage.getItem(BUSINESS);
    if (business) {
      return JSON.parse(business);
    } else {
      return null;
    }
  }

  public static setBusiness(business: IBusiness) {
    localStorage.setItem(BUSINESS, JSON.stringify(business));
  }

  public static getAccessToken(): string {
    return localStorage.getItem(ACCESS_TOKEN_NAME) || '';
  }

  public static getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN_NAME) || '';
  }

  public static setTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem(ACCESS_TOKEN_NAME, accessToken);
    localStorage.setItem(REFRESH_TOKEN_NAME, refreshToken);
  }

  public static destroyTokens() {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    localStorage.removeItem(REFRESH_TOKEN_NAME);
  }

  public static getAvatarUrl(): string | null {
    return localStorage.getItem(USER_AVATAR_URL) || null;
  }

  public static setAvatarUrl(avatarUrl: string) {
    localStorage.setItem(USER_AVATAR_URL, avatarUrl);
  }

  public static getFirstName(): string | null {
    return localStorage.getItem(USER_FIRST_NAME) || null;
  }

  public static setFirstName(name: string) {
    localStorage.setItem(USER_FIRST_NAME, name);
  }
}

export class SessionStorage {
  public static destroy() {
    sessionStorage.clear();
  }

  public static getUser(): IUser | null {
    const user = sessionStorage.getItem(USER);
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

  public static setUser(user: IUser) {
    sessionStorage.setItem(USER, JSON.stringify(user));
  }

  public static getBusiness(): IBusiness | null {
    const business = sessionStorage.getItem(BUSINESS);
    if (business) {
      return JSON.parse(business);
    } else {
      return null;
    }
  }

  public static setBusiness(business: IBusiness) {
    sessionStorage.setItem(BUSINESS, JSON.stringify(business));
  }
}
