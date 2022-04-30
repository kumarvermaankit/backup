import axios from 'axios';

// Sign In
interface signInRes {
  data: { ID: string; access_token: string; refresh_token: string };
}
interface loginuser {
  username: string;
  password: string;
}
export const signInUser = async (userData: loginuser): Promise<signInRes> => {
  try {
    const response = await axios.post('/command/user/sign-in', userData);
    return response;
  } catch (error) {
    throw error;
  }
};

// Signup
interface signUpRes {
  data: { ID: string; verify_email_link_token: string };
}
interface registeruser {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
}

export const signUpUser = async (
  userData: registeruser
): Promise<signUpRes> => {
  try {
    const response = await axios.post('/command/user/sign-up', userData);
    return response;
  } catch (error) {
    throw error;
  }
};

// Send OTP
interface otpData {
  ID: string | null;
  mobile_number: string;
}
export const sendOtp = async (userData: otpData): Promise<any> => {
  try {
    const response = await axios.post('/profile/user/mobile-number', userData);
    return response;
  } catch (error) {
    throw error;
  }
};

// Verify OTP
interface otpVerifyData {
  ID: string | null;
  otp: string;
}
export const verifyOtp = async (userData: otpVerifyData): Promise<any> => {
  try {
    const response = await axios.post(
      '/profile/user/verify-mobile-number',
      userData
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// Set Profile Type
interface usertype {
  ID: string | null;
  user_type: string;
}
export const setProfileType = async (userTypeData: usertype): Promise<any> => {
  try {
    const response = await axios.post('/profile/user/user-type', userTypeData);
    return response;
  } catch (error) {
    throw error;
  }
};

// Resend Otp
export const resendOtp = async (mobile_number: string): Promise<any> => {
  try {
    const response = await axios.post(
      `/profile/user/request-new-otp/${mobile_number}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// Resend Verification Email
export const resendVerificationEmail = async (email: string): Promise<any> => {
  try {
    const response = await axios.post(
      `/profile/user/request-email-verify-link/${email}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// Get Recover Password Link
export const getResetPasswordLink = async (username: string): Promise<any> => {
  try {
    const response = await axios.post(
      `/identity/user/request-password-reset/${username}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// Change Password
interface passChangeType {
  token: string | null;
  data: {
    new_password: string;
  };
}
export const changePassword = async (
  passwordData: passChangeType
): Promise<any> => {
  try {
    const response = await axios.post(
      `/identity/user/reset-password/${passwordData.token}`,
      passwordData.data
    );
    return response;
  } catch (error) {
    throw error;
  }
};
