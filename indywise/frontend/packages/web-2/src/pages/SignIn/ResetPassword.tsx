import * as React from 'react';
import { Text, Button, Input } from '@indywise/uikit';
import styled from 'styled-components';
import Bg from '../../assets/SignUpBg.svg';
import FormPage from '../../components/FormPage';
import FormFieldErrorMsg from '../../components/FormFieldErrorMsg';
import { useForm } from '../../hooks/useForm';
import { validateChangePasswordForm } from '../../utils/validateForm';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '../../contexts/AuthContext';
import LoadingScreen from '../../components/LoadingScreen';
import { api } from '../../api';

export interface IChangePasswordForm {
  password: string;
  confirmPassword: string;
}

const defaultValues: IChangePasswordForm = {
  password: '',
  confirmPassword: ''
};

const ResetPassword: React.FC<RouteComponentProps<{ token: string }>> = (
  props
) => {
  const { authType } = useAuth();
  const [isTokenValid, setIsTokenValid] = React.useState<boolean | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const [errMsg, setErrMsg] = React.useState('');
  const token = props.match.params.token;

  const submitForm = async () => {
    try {
      await api.auth.user.ResetPassword(token, values.password);
      props.history.push('/sign-in');
    } catch {
      setErrMsg('Something went wrong! Please try again.');
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm<
    IChangePasswordForm
  >(defaultValues, submitForm, validateChangePasswordForm);

  const gotoRecoverPassword = () => {
    props.history.push('/recover-password');
  };

  React.useEffect(() => {
    if (authType) {
      props.history.push('/');
    }
  }, [props.history, authType]);

  React.useEffect(() => {
    if (values.password.trim() && values.confirmPassword.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [values]);

  React.useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await api.auth.user.VerifyPasswordResetToken(token);

        if (res.data.is_token_valid === true) {
          setIsTokenValid(true);
        } else if (res.data.is_token_valid === false) {
          setIsTokenValid(false);
        }
      } catch {
        setIsTokenValid(false);
      }
    };

    verifyToken();
  }, [token]);

  if (isTokenValid === false) {
    return (
      <FormPage bgImage={Bg}>
        <div>
          <Text type="h3" size="2rem">
            Unable to Reset Password
          </Text>
          <Text type="body" size="1rem" style={{ marginTop: '1.5em' }}>
            There’s an issue with this password reset link. Please make sure
            that the link is correct otherwise try requesting a new one.
          </Text>
          <ButtonContainer>
            <Button
              text="Recover Password"
              onClick={gotoRecoverPassword}
              style={{ width: '100%', marginTop: '1.5em' }}
            />
          </ButtonContainer>
        </div>
      </FormPage>
    );
  }

  if (isTokenValid) {
    return (
      <FormPage bgImage={Bg}>
        <Helmet>
          <title>Reset Password - IndyWise</title>
        </Helmet>
        <div>
          <Text type="h3" size="2rem">
            Change Password
          </Text>

          {errMsg && <FormFieldErrorMsg text={errMsg} />}
          <Form noValidate onSubmit={handleSubmit}>
            <Input
              type="password"
              name="password"
              id="password"
              autoFocus
              onChange={handleChange}
              value={values.password}
              placeholder="Password *"
            />
            {errors.password && <FormFieldErrorMsg text={errors.password} />}

            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password *"
              onChange={handleChange}
              value={values.confirmPassword}
              onEnterPress={handleSubmit}
            />
            {errors.confirmPassword && (
              <FormFieldErrorMsg text={errors.confirmPassword} />
            )}

            <Button
              isDisabled={isButtonDisabled}
              onClick={handleSubmit}
              text="Change Password"
            />
          </Form>
        </div>
      </FormPage>
    );
  }

  return <LoadingScreen />;
};

export default ResetPassword;

const Form = styled.form`
  /* "Input" also has 2.25em and this was supposed to be 3em */
  margin-top: 0.75em;

  /* Submit button (To validate the form and if valid show next screen) */
  button {
    width: 100%;
    font-size: 1.25rem;
    height: fit-content;
    padding: 0.5em 0.8em;
    border-radius: 0.5em;
    margin-top: 1.2em;

    p {
      font-size: 1.25rem;
    }
  }
`;

const ButtonContainer = styled.div`
  p {
    font-size: 1.25rem;
  }
`;
