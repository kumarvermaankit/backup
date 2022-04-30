import * as React from 'react';
import { Text, Button, Input, Icon } from '@indywise/uikit';
import styled from 'styled-components';
import UserBg from '../../assets/SignUpBg.svg';
import BusinessBg from '../../assets/bg/businessSignIn.svg';
import FormPage from '../../components/FormPage';
import FormFieldErrorMsg from '../../components/FormFieldErrorMsg';
import FormErrorMsg from '../../components/FormErrorMsg';
import { useForm } from '../../hooks/useForm';
import { validateSignInForm } from '../../utils/validateForm';
import { ISignIn, useAuth } from '../../contexts/AuthContext';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoadingScreen from '../../components/LoadingScreen';
import { api } from '../../api';

const defaultValues: ISignIn = {
  username: '',
  password: '',
  rememberMe: false
};

interface IProps extends RouteComponentProps {
  submitForm: Function;
}

const SignIn: React.FC<IProps> = ({ history }) => {
  const [type, setType] = React.useState('user'); // 'user' || 'business'
  const [isLoading, setIsLoading] = React.useState(true);
  const [show, setShow] = React.useState(true);
  const {
    signinUser,
    signinBusiness,
    signinErr,
    isSigningIn,
    authType,
    resetSigninErr
  } = useAuth();

  const submitForm = async () => {
    const data: ISignIn = {
      username: values.username,
      password: values.password,
      rememberMe: values.rememberMe
    };

    const res =
      type === 'user' ? await signinUser(data) : await signinBusiness(data);

    if (res) {
      if (type === 'user') {
        history.push('/foundation');
      } else {
        history.push('/');
      }
    }
  };

  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleCheckboxChange,
    resetValues
  } = useForm<ISignIn>(defaultValues, submitForm, validateSignInForm);

  const toggleSignInType = () => {
    type === 'user' ? setType('business') : setType('user');
    resetSigninErr();
    resetValues();
  };

  React.useEffect(() => {
    setIsLoading(true);
    if (authType) {
      history.push('/');
    }
    setIsLoading(false);
  }, [history, authType]);

  React.useEffect(() => {
    if (values.username.trim() && values.password.trim() && !isSigningIn) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [values, isSigningIn]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <FormPage bgImage={type === 'user' ? UserBg : BusinessBg}>
      {show && type === 'business' && (
        <Banner>
          <Text type="body" color="#FFF">
            Contact our sales team at
            <a
              style={{
                color: '#FAD897',
                textDecoration: 'none',
                margin: 'auto 4px'
              }}
              href="mailto:sales@indywise.com?subject=Business Account Setup&body=I would like to know more about IndyWise Business programs"
              target="_blank"
              rel="noopener noreferrer"
            >
              sales@indywise.com
            </a>
            and request a business account
          </Text>
          <div onClick={() => setShow(false)}>
            <Icon icon="close" size="20px" />
          </div>
        </Banner>
      )}
      <Helmet>
        <title>Sign In - IndyWise</title>
      </Helmet>
      <Text type="h3" size="2rem">
        Sign In
      </Text>
      <NoAccountDiv>
        <NoAccount>Don't have an account?</NoAccount>
        <Link to="/sign-up" style={{ textDecoration: 'none' }}>
          <SignUp>SIGNUP</SignUp>
        </Link>
      </NoAccountDiv>
      <ToggleLoginType onClick={toggleSignInType}>
        <Text
          type="body"
          color="#A16A06"
          size="1rem"
          style={{ marginTop: '0.5em' }}
        >
          {type === 'user'
            ? 'Switch to IndyWise Business (for Startups)'
            : 'Switch to IndyWise (for Mentees / Mentors)'}
        </Text>
      </ToggleLoginType>
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
          autoFocus
        />
        {errors.username && <FormFieldErrorMsg text={errors.username} />}

        <Input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          placeholder="Password *"
          onEnterPress={handleSubmit}
        />
        {errors.password && <FormFieldErrorMsg text={errors.password} />}

        <Button
          isDisabled={isButtonDisabled}
          onClick={handleSubmit}
          text="Sign In"
        />
        <Bottom>
          <RememberMe>
            <Checkbox
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              onChange={handleCheckboxChange}
              checked={values.rememberMe}
              placeholder="Remember Me"
            />
            <BrownText htmlFor="rememberMe">Remember me</BrownText>
          </RememberMe>

          {type === 'user' && (
            <Link to="/recover-password" style={{ textDecoration: 'none' }}>
              <BrownText>Forgot password?</BrownText>
            </Link>
          )}
        </Bottom>

        <div
          style={{ display: 'flex', alignItems: 'center', paddingTop: '0.5em' }}
        >
          <Line />
          <Text style={{ minWidth: 'fit-content', margin: '0 1em' }}>
            Or Continue With
          </Text>
          <Line />
        </div>
      </Form>

      <Button
        color="secondary"
        style={{ width: '100%' }}
        icon="linkedin"
        iconSize="24px"
        onClick={() => window.location.assign(api.auth.oauth.linkedin)}
      >
        LinkedIn
      </Button>

      <Button
        color="secondary"
        style={{ width: '100%', marginTop: '1em' }}
        icon="google"
        iconSize="24px"
        onClick={() => window.location.assign(api.auth.oauth.google)}
      >
        Google
      </Button>

      {/* <Button
        color="secondary"
        style={{ width: '100%', marginTop: '1em' }}
        icon="facebook"
        iconSize="24px"
        onClick={() => window.location.assign(api.auth.oauth.facebook)}
      >
        Facebook
      </Button> */}
    </FormPage>
  );
};

export default SignIn;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 8px 24px;
  background: #0c3559;
  border-radius: 28px;
  width: fit-content;
  height: auto;
  margin: 5vh auto;
  position: absolute;
  bottom: 16px;
  left: 0px;
  right: 0px;
  z-index: 1;

  a {
    color: #a16a06;
    margin: auto 2vw;
  }
  img {
    margin-right: 2vw;
  }
  div {
    background: #fff;
    padding: 8px;
    border-radius: 50%;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span {
      height: 20px;
    }
  }

  @media screen and (max-width: 530px) {
    padding: 4px;
    div {
      padding: 4px;
      span {
        width: 14px;
        height: 14px;
        svg {
          width: 12px;
          height: 14px;
        }
      }
    }
    img {
      width: 18px;
      height: 18px;
    }
    p {
      font-size: 10px;
    }
    a {
      p {
        font-size: 10px;
      }
    }
  }
`;

const Line = styled.span`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #cbcbcb;
  margin: 2em 0;
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
  margin-top: 1vh;
`;

const Bottom = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: space-between;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
`;

const SignUp = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #a16a06;
  margin-left: 1vw;
`;

const BrownText = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #a16a06;
  margin-left: 0.5vw;
  cursor: pointer;
  user-select: none;

  a {
    text-decoration: none;
    color: #a16a06;
  }
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

const Checkbox = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

const ToggleLoginType = styled.a`
  &:hover {
    cursor: pointer;
  }
`;
