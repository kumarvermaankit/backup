import { IAvatar } from '../contexts/AuthContext';

interface IUserData {
  ID: string;
  avatar: IAvatar;
  first_name: string;
  last_name: string;
  email: string;
  referral_code: string;
  referred_by: string;
  is_active: boolean;
  email_verified?: boolean;
  username?: string;
  country_code?: string;
  mobile_number?: string;
  mobile_number_verified?: boolean;
  simplybook_client_id?: string;
  wiseup_foundation?: boolean;
  user_type?: string[] | undefined;
}

export interface IOAuthData {
  access_token: string;
  refresh_token: string;
  user: IUserData;
}
