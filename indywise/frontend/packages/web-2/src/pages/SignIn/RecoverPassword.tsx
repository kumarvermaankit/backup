import * as React from 'react';
import { Text, Button, Icon, Input } from '@indywise/uikit';
import styled from 'styled-components';
import Bg from '../../assets/SignUpBg.svg';
import FormPage from '../../components/FormPage';
import FormFieldErrorMsg from '../../components/FormFieldErrorMsg';
import { useForm } from '../../hooks/useForm';
import { validateRecoverPasswordForm } from '../../utils/validateForm';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '../../contexts/AuthContext';
import LoadingScreen from '../../components/LoadingScreen';
import { api } from '../../api';

export interface IRecoverPasswordForm {
  username: string;
}

const defaultValues: IRecoverPasswordForm = {
  username: ''
};

const RecoverPassword: React.FC<RouteComponentProps> = ({ history }) => {
  const { authType } = useAuth();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isSendingRequest, setIsSendingRequest] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState('');

  const submitForm = async () => {
    setIsSendingRequest(true);
    try {
      await api.auth.user.RequestPasswordReset(values.username);
      setIsSuccess(true);
    } catch {
      setIsSuccess(false);
      setErrMsg('Something went wrong! Please try again.');
    }
    setIsSendingRequest(false);
  };

  const { values, errors, handleChange, handleSubmit } = useForm<
    IRecoverPasswordForm
  >(defaultValues, submitForm, validateRecoverPasswordForm);

  const gotoSignIn = () => {
    history.push('/sign-in');
  };

  React.useEffect(() => {
    setIsLoading(true);
    if (authType) {
      history.push('/');
    }
    setIsLoading(false);
  }, [history, authType]);

  React.useEffect(() => {
    if (values.username.trim() && !isSendingRequest) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [values, isSendingRequest]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <FormPage bgImage={Bg}>
      <Helmet>
        <title>Recover Password - IndyWise</title>
      </Helmet>
      <div>
        <Text type="h3" size="2rem">
          Recover Password
        </Text>
        {isSuccess && <EmailSent gotoSignIn={gotoSignIn} />}

        {!isSuccess && (
          <NoAccountDiv>
            <NoAccount>
              Please enter username to get password recovery link.
            </NoAccount>
          </NoAccountDiv>
        )}

        {!isSuccess && (
          <>
            {errMsg && <FormFieldErrorMsg text={errMsg} />}
            <Form noValidate onSubmit={handleSubmit}>
              <Input
                type="text"
                name="username"
                id="username"
                autoFocus
                onChange={handleChange}
                value={values.username}
                placeholder="Username *"
                onEnterPress={handleSubmit}
              />
              {errors.username && <FormFieldErrorMsg text={errors.username} />}

              <Button
                isDisabled={isButtonDisabled}
                onClick={handleSubmit}
                text="Send Recovery Link"
              />
            </Form>
          </>
        )}
      </div>
    </FormPage>
  );
};

export default RecoverPassword;

const EmailSent: React.FC<{ gotoSignIn: any }> = ({ gotoSignIn }) => {
  return (
    <>
      <FlexCenter style={{ marginTop: '2.5em' }}>
        <Icon icon="verified" size="1em" />
        <Text type="body" size="1rem" bold style={{ marginLeft: '0.5em' }}>
          Email Sent!
        </Text>
      </FlexCenter>
      <Text type="body" size="1rem" style={{ marginTop: '1.5em' }}>
        A link to reset your password has been sent to you on your registered
        email.
      </Text>
      <FlexCenter>
        <Button
          text="Return to Sign In"
          onClick={gotoSignIn}
          style={{ marginTop: '1em', width: '100%' }}
        />
      </FlexCenter>
    </>
  );
};

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-size: 1.25rem;
  }
`;

const NoAccount = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #0c3559;
`;

const NoAccountDiv = styled.div`
  margin-top: 2vh;
`;

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
