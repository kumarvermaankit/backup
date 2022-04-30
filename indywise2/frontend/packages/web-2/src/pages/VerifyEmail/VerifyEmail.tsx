import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Text, Button } from '@indywise/uikit';
import { Helmet } from 'react-helmet';
import { LocalStorage } from '../../utils/storage';
import styled from 'styled-components';
import { api } from '../../api';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import VerifySuccess from '../../assets/VerifySuccess.svg';
import VerifyFail from '../../assets/VerifyFail.svg';

const VerifyEmailPage: React.FC<RouteComponentProps<{
  token: string;
}>> = (props) => {
  const [verified, setVerified] = useState<boolean>(false);
  const [alreadyVerified, setAlreadyVerified] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [resentEmail, setResentEmail] = useState<boolean>(false);

  const token = props.match.params.token;
  // console.log(token);

  const submitForm = async () => {
    try {
      const res = await api.auth.user.VerifyEmail(token);
      if (res?.data?.email_verified) {
        setVerified(true);
      }
    } catch (err) {
      const statusCode: string = err.response?.status?.toString();
      if (statusCode === '400' && err?.response?.data?.error?.code === 30407) {
        setAlreadyVerified(true);
      } else {
        setError(true);
      }
    }
  };

  // token expired
  const resendEmailVerification = async () => {
    const user = LocalStorage.getUser();
    try {
      if (user) {
        await api.auth.user.ReSendEmail(user.email);
        setResentEmail(true);
      }
    } catch (err) {
      console.log('error in sending');
    }
  };

  useEffect(() => {
    submitForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <title>Verify Email</title>
      </Helmet>
      <Header />
      <Container>
        {(verified || alreadyVerified) && !error ? (
          <Div>
            <img src={VerifySuccess} alt="Verify Success" />
            <Text type="title" size="24px" bold>
              Congratulations !
            </Text>
            <Text type="body">
              {alreadyVerified
                ? 'Your E-mail is already verified'
                : 'Your E-mail is verified'}
            </Text>
            <Button
              color="primary"
              onClick={() => {
                props.history.push('/');
              }}
            >
              Continue
            </Button>
          </Div>
        ) : error && !verified ? (
          <Div>
            <img src={VerifyFail} alt="Verify Failed" />
            <Text type="title" size="24px" bold>
              E-mail Verification Failed !
            </Text>
            <Text type="body">An error occured</Text>
            <Button
              color="primary"
              isDisabled={resentEmail}
              onClick={resendEmailVerification}
            >
              Resend E-mail
            </Button>
          </Div>
        ) : (
          <Div>
            <img src={VerifyFail} alt="Verify Pending" />
            <Text type="title" size="24px" bold>
              Pending Verification
            </Text>
            <Text type="body">Your E-mail is being verified</Text>
          </Div>
        )}
      </Container>
      <Footer />
    </PageContainer>
  );
};

export default VerifyEmailPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  text-align: center;
  padding: 40px 40px 24px 40px;

  h1 {
    line-height: 32px;
    font-family: Mulish;
    font-weight: 900;
    margin-top: 24px;
  }

  img {
    height: 118px;
  }

  p {
    margin-top: 8px;
  }

  button {
    margin-top: 24px;
    width: 80%;
    span {
      p {
        margin-top: auto;
      }
    }
  }
`;

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 20px;
  max-width: 90%;
  margin: 7rem auto 2.5rem auto;
`;
