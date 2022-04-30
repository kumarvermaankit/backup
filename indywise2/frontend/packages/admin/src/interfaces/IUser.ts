export interface IUser {
  ID: string;

  country_code: string;

  email: string;

  email_verified: boolean;

  is_active: boolean;

  mobile_number_verified: boolean;

  username: string;

  first_name: string;

  last_name: string;

  mobile_number: string;

  wiseup_foundation?: boolean;

  roles?: Array<string>;

  simplybook_client_id: string;
}
