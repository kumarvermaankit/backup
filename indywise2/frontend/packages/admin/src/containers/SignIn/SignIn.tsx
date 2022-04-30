import * as React from 'react';
import { Text, Button } from '@indywise/uikit';
import styled from 'styled-components';
import FormFieldErrorMsg from '../../components/FormFieldErrorMsg';
import FormErrorMsg from '../../components/FormErrorMsg';
import { useForm } from '../../hooks/useForm';
import { validateSignInForm } from '../../utils/validateForm';
import { ISignIn, useAuth } from '../../contexts/AuthContext';
import { RouteComponentProps } from 'react-router-dom';

const defaultValues: ISignIn = {
  username: '',
  password: ''
};

interface IProps extends RouteComponentProps {
  submitForm: Function;
}

const SignIn: React.FC<IProps> = ({ history }) => {
  const { signin, signinErr, isSigningIn, user } = useAuth();

  const submitForm = async () => {
    const data: ISignIn = {
      username: values.username,
      password: values.password
    };

    const res = await signin(data);

    if (res) {
      history.push('/');
    }
  };

  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const { values, errors, handleChange, handleSubmit } = useForm<ISignIn>(
    defaultValues,
    submitForm,
    validateSignInForm
  );

  React.useEffect(() => {
    if (values.username.trim() && values.password.trim() && !isSigningIn) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [values, isSigningIn]);

  React.useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);

  return (
    <Container>
      <Text type="h3" size="2rem">
        Sign In
      </Text>
      {signinErr && (
        <FormErrorMsg text={signinErr} style={{ marginTop: '1.5em' }} />
      )}

      <Form noValidate onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={values.username}
          placeholder="Username *"
        />
        {errors.username && <FormFieldErrorMsg text={errors.username} />}

        <Input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          placeholder="Password *"
        />
        {errors.password && <FormFieldErrorMsg text={errors.password} />}

        <Button
          isDisabled={isButtonDisabled}
          onClick={handleSubmit}
          text="Sign In"
        />
      </Form>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  margin: 10vh 10vw;
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

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5em;
  color: #0c3559;
  width: 100%;
  padding-bottom: 0.5em;
  margin-top: 2.25em;
  border: none;
  border-bottom: 1px solid #727272;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  &::placeholder {
    color: #4b4b4b;
  }

  &:focus {
    outline: none;
  }
`;
