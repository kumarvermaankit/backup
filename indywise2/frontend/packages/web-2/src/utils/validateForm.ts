import { IAboutYourselfForm } from '../pages/ISASignUp/parts/AboutYourself';
import { IBasicInfoForm } from '../pages/ISASignUp/parts/BasicInfo';
import { ISkillsForm } from '../pages/ISASignUp/parts/Skills';
import { ISignIn } from '../contexts/AuthContext';
import { ISignUpForm } from '../pages/SignUp/SignUp';
import { IRecoverPasswordForm } from '../pages/SignIn/RecoverPassword';
import { IChangePasswordForm } from '../pages/SignIn/ResetPassword';
import {
  IUpdateMobileNumber,
  IUpdatePassword
} from '../pages/MyProfile/parts/ProfileDetails';

import { IOnboardingForm } from '../components/MentorOnboardingForm/MentorOnboardForm';

/**
 * A password needs to have the following requirements:
 * Minimum 8 characters - `{8,}`
 * Minimum 1 lowercase - `(?=.*[a-z])`
 * Minimum 1 uppercase - `(?=.*[A-Z])`
 * Minimum 1 numeric value - `(?=.*[0-9])`
 * Minimum 1 non-alphanumeric value - `(?=.*[!@#$%^&*])`
 */
const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

/**
 * A username needs to have the following requirements:
 * username can contain alphabets - `a-zA-Z`
 * username can contain digits - `0-9`
 * username can contain ".", "_", "-" - `-_.`
 */
const usernameRegEx = /^[a-zA-Z0-9-_.]+$/;

/**
 * Mobile number has to be a string containing only numbers.
 */
const mobileRegEx = /^\d+$/;

/**
 * Name should not contain a digit.
 */
const nameRegEx = new RegExp(/[0-9]/);

/**
 * Validate if a string is an email.
 *
 * @see https://github.com/manishsaraan/email-validator
 * @params email Email to validate
 * @returns true if the email is valid otherwise false
 */
const validateEmail = (email: string) => {
  const tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (!email) return false;

  if (email.length > 256) return false;

  if (!tester.test(email)) return false;

  // Further checking of some things regex can't handle
  const emailParts = email.split('@');
  const account = emailParts[0];
  const address = emailParts[1];
  if (account.length > 64) return false;

  const domainParts = address.split('.');
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  )
    return false;

  return true;
};

export const validateIsaBasicInfoForm = (values: IBasicInfoForm) => {
  let errors: IBasicInfoForm = {} as IBasicInfoForm;

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Email is invalid';
  }

  if (!values.fullName.trim()) {
    errors.fullName = 'Name is required';
  } else if (nameRegEx.test(values.fullName)) {
    errors.fullName = 'Name cannot contain digits';
  }

  if (!values.countryCode.trim()) {
    errors.countryCode = 'Country code is required';
  }

  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!mobileRegEx.test(values.phoneNumber)) {
    errors.phoneNumber = 'Phone number is invalid';
  }

  return errors;
};

export const validateIsaAboutYourselfForm = (values: IAboutYourselfForm) => {
  let errors: IAboutYourselfForm = {} as IAboutYourselfForm;

  if (!values.workExperience.trim()) {
    errors.workExperience = 'Work experience is required';
  }

  if (!values.linkedinProfile.trim()) {
    errors.linkedinProfile = 'Linkedin profile is required';
  }

  if (!values.hearAboutIndyWise.trim()) {
    errors.hearAboutIndyWise = 'This field is required';
  }

  return errors;
};

export const validateIsaSkillsForm = (values: ISkillsForm) => {
  let errors: ISkillsForm = {} as ISkillsForm;

  if (!values.skills.length) {
    errors.skills = 'Select at least one skill';
  }

  return errors;
};

export const validateSignInForm = (values: ISignIn) => {
  let errors: ISignIn = {} as ISignIn;

  if (!values.username.trim()) {
    errors.username = 'Username is required';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required';
  }

  return errors;
};

export const validateRecoverPasswordForm = (values: IRecoverPasswordForm) => {
  let errors: IRecoverPasswordForm = {} as IRecoverPasswordForm;

  if (!values.username.trim()) {
    errors.username = 'Username is required';
  }

  return errors;
};

export const validateChangePasswordForm = (values: IChangePasswordForm) => {
  let errors: IChangePasswordForm = {} as IChangePasswordForm;

  if (!values.password.trim()) {
    errors.password = 'Password is required';
  } else if (!passwordRegEx.test(values.password)) {
    errors.password = 'Password failed the minimum requirements';
  }

  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = 'Confirm password is required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export const validateSignUpForm = (values: ISignUpForm) => {
  let errors: ISignUpForm = {} as ISignUpForm;

  if (!values.username.trim()) {
    errors.username = 'Username is required';
  } else if (!usernameRegEx.test(values.username)) {
    errors.username = 'It can contain only alphabets, digits, ".", "_", "-"';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required';
  } else if (values.password !== values.confirmPassword) {
    errors.password = 'Password does not match';
  } else if (!passwordRegEx.test(values.password)) {
    errors.password = 'Password failed the minimum requirements';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Email is invalid';
  } else if (values.email !== values.confirmEmail) {
    errors.email = 'Email does not match';
  }

  if (!values.firstName.trim()) {
    errors.firstName = 'First Name is required';
  } else if (nameRegEx.test(values.firstName)) {
    errors.firstName = 'First Name cannot contain digits';
  }

  if (!values.lastName.trim()) {
    errors.lastName = 'Last Name is required';
  } else if (nameRegEx.test(values.lastName)) {
    errors.lastName = 'Last Name cannot contain digits';
  }

  if (!values.countryCode) {
    errors.countryCode =
      'Please provide country code. Example - "91" for India';
  }

  if (!values.mobileNumber.trim()) {
    errors.mobileNumber = 'Mobile number is required';
  } else if (!mobileRegEx.test(values.mobileNumber)) {
    errors.mobileNumber = 'Mobile number is invalid';
  }

  return errors;
};

export const validateUpdateEmailForm = (values: { email: string }) => {
  let errors = {} as any;

  if (!values.email.trim()) {
    errors.email = 'Email cannot be empty';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Email is invalid';
  }

  return errors;
};

export const validateUpdateMobileNumberForm = (values: IUpdateMobileNumber) => {
  let errors = {} as IUpdateMobileNumber;

  if (!values.countryCode) {
    errors.countryCode =
      'Please provide country code. Example - "91" for India';
  }

  if (!values.mobileNumber.trim()) {
    errors.mobileNumber = 'Mobile number is required';
  } else if (!mobileRegEx.test(values.mobileNumber)) {
    errors.mobileNumber = 'Mobile number is invalid';
  }

  return errors;
};

export const validateUpdatePasswordForm = (values: IUpdatePassword) => {
  let errors = {} as IUpdatePassword;

  if (!values.currentPassword.trim()) {
    errors.currentPassword = 'Current password is required';
  }

  if (!values.newPassword.trim()) {
    errors.newPassword = 'Password is required';
  } else if (!passwordRegEx.test(values.newPassword)) {
    errors.newPassword = 'Password failed the minimum requirements';
  }

  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = 'Confirm password is required';
  } else if (values.confirmPassword !== values.newPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export const validateMentorOnboardingForm = (values: IOnboardingForm) => {
  let errors = {} as IOnboardingForm;

  if (!values.fullName.trim()) {
    errors.fullName = 'Name is Required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Email is invalid';
  }

  if (!values.countryCode) {
    errors.countryCode =
      'Please provide country code. Example - "91" for India';
  }

  // if (!values.mobileNumber.trim()) {
  //   errors.mobileNumber = 'Mobile number is required';
  // } else if (!mobileRegEx.test(values.mobileNumber)) {
  //   console.log('BOOM');
  //   errors.mobileNumber = 'Mobile number is invalid';
  // }

  if (!values.country.trim()) {
    errors.country = 'Country field is required';
  }
  if (!values.dateOfBirth) {
    //@ts-ignore
    errors.dateOfBirth = 'DOB field is required';
  }

  // //TODO validate profile picture
  // if (!values.hearAboutUs.trim()) {
  //   errors.hearAboutUs = 'This field is required';
  // }

  if (!values.introduction.trim()) {
    errors.introduction = 'Introduction field is required';
  }

  if (!values.profileDescription.trim()) {
    errors.profileDescription = 'Profile Description field is required';
  }

  if (!values.linkedin.trim()) {
    errors.linkedin = 'LinkedIn field is required';
  }
  if (!values.yearsOfWorkExperience.toString().trim()) {
    //@ts-ignore
    errors.yearsOfWorkExperience = 'Years Of Work Experience field is required';
  }

  if (!values.pastMentoringExperience.trim()) {
    errors.pastMentoringExperience =
      'Past Mentoring Experience field is required';
  }

  if (!values.mentorshipMotivation.trim()) {
    errors.mentorshipMotivation = 'Mentorship Motivation Field is required';
  }

  // if (!values.commentsAndSuggestions.trim()) {
  //   errors.commentsAndSuggestions = 'This field is required';
  // }

  if (!values.currency.trim()) {
    errors.currency = 'Currency field is required';
  }

  if (values.consent === 'No') {
    errors.consent = 'Consent is required';
  }

  if (!values.hourlySessionPrice.toString().trim()) {
    errors.hourlySessionPrice = 'Hourly Session Price field is required';
  }

  return errors;
};

export const validateUpdateCategoryForm = (value: any) => {
  let errors = {};
  return errors;
};

export const referralCodeForm = (value: any) => {
  let errors = {} as any;
  const reg = /^[0-9a-zA-Z]+$/;
  if (!value.referralCode.trim()) {
    errors.referralCode = 'Referral Code cannot be empty';
  } else if (!reg.test(value.referralCode)) {
    errors.referralCode = 'Invalid Referral Code';
  }

  return errors;
};
