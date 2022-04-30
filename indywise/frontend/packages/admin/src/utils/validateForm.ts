import { ISignIn } from '../contexts/AuthContext';

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
