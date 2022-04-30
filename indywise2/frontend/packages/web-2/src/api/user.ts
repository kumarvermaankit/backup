import Axios from '../utils/Axios';

export const getAvatarUrl = (ID: string) => {
  return Axios.get(`/image/user/avatar/${ID}`);
};

export const getPortfolio = () => {
  return Axios.get('/portfolios/portfolio/');
};

export const signUpDataUpdate = (data: any) => {
  return Axios({
    method: 'PUT',
    url: '/portfolios/portfolio/signupdata/',
    data
  });
};

export const updateReferredBy = (data: any) => {
  return Axios({
    method: 'POST',
    url: '/profile/users/referral',
    data
  });
};

export const getMyProfileData = () => {
  return Axios.get('/profile/users/me');
};

export const fetchCategories = () => {
  return Axios.get('/skills/skills/categories');
};

export const fetchSkills = () => {
  return Axios.get('/skills/all/skills/user');
};

export const updateEmail = (email: string) => {
  return Axios({
    method: 'PATCH',
    url: '/profile/users/me/email',
    data: { email }
  });
};

export const updateMobileNumber = (
  country_code: string,
  mobile_number: string
) => {
  return Axios({
    method: 'PATCH',
    url: '/profile/users/me/mobile-number',
    data: { country_code, mobile_number }
  });
};

export const updatePassword = (
  current_password: string,
  new_password: string,
  confirm_password: string
) => {
  return Axios({
    method: 'PATCH',
    url: '/profile/users/me/password',
    data: { current_password, new_password, confirm_password }
  });
};

export const updateWiseupFoundation = (wiseup_foundation: boolean) => {
  return Axios({
    method: 'PATCH',
    url: '/profile/users/me/wiseup-foundation',
    data: { wiseup_foundation }
  });
};

export const uploadAvatar = (formData: FormData) => {
  return Axios({
    method: 'PUT',
    url: '/image/user/avatar',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

export const deleteAvatar = () => {
  return Axios({
    method: 'DELETE',
    url: '/image/user/avatar'
  });
};

export const getAvatarPresignedUrl = () => {
  return Axios({
    method: 'POST',
    url: '/image/avatars/presigned-url'
  });
};

export const deleteMyAvatar = () => {
  return Axios({
    method: 'DELETE',
    url: '/image/avatars/me'
  });
};
