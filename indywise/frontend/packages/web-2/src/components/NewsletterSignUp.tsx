import React, { useState } from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

interface IFormProps {
  onSubmitted: Function;
  message?: string;
  status?: string;
}

export const CustomForm: React.FC<IFormProps> = (props) => {
  const { onSubmitted, status, message } = props;
  let email: any;
  const [errorMessage, setErrorMessage] = useState('');

  const submit = (e: any) => {
    e.preventDefault();
    if (!email.value) {
      setErrorMessage('You have not entered any email');
    } else if (!email.value.includes('@')) {
      setErrorMessage('Please Enter a Valid Email Address ');
    } else {
      email &&
        email.value.indexOf('@') > -1 &&
        onSubmitted({
          EMAIL: email.value
        });
    }
  };

  return (
    <>
      <Form>
        <EmailInput
          type="text"
          placeholder="Enter your E-mail address"
          ref={(node) => (email = node)}
        />
        <ButtonWrapper>
          <button type="submit" onClick={submit}>
            Signup
          </button>
        </ButtonWrapper>
      </Form>
      <>
        <Text type="small" style={{ color: 'red' }}>
          {errorMessage}
        </Text>
        {status === 'sending' && (
          <Message statusColor="cornflowerblue">Sending...</Message>
        )}
        {status === 'error' && (
          <Message statusColor="red">{message || 'Error'}</Message>
        )}
        {status === 'success' && (
          <Message statusColor="seagreen">Subscribed!</Message>
        )}
      </>
    </>
  );
};

const NewsletterSignUp: React.FC = () => {
  const url =
    'https://indywise.us17.list-manage.com/subscribe/post?u=a7fa95b16a80ff9654c7204e4&id=1a79c072c3';

  return (
    <Wrapper>
      <Text type="hl">Newsletter Signup</Text>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }: any) => (
          <div>
            <CustomForm
              onSubmitted={(formData: any) => subscribe(formData)}
              status={status}
              message={message}
            />
          </div>
        )}
      />
    </Wrapper>
  );
};

export default NewsletterSignUp;

const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;

  h1 {
    font-size: 48px;
    line-height: 56px;
  }

  @media (max-width: 1000px) {
    h1 {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 530px) {
    width: 100%;
    height: 15.375rem;
    margin-bottom: 10vh;
    h1 {
      margin: 0;
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
    }
  }
`;

const EmailInput = styled.input`
  width: 50vw;
  margin-right: 3vw;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid rgba(12, 53, 89, 0.5);
  font-size: 24px;
  line-height: 36px;
  color: #0c3559;
  font-family: Roboto, sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #0c3559;
    opacity: 0.5;
  }

  @media (max-width: 530px) {
    font-size: 16px;
    line-height: 24px;
    width: 20.5rem;
  }

  @media (max-width: 360px) {
    width: 90vw;
  }
`;

const Form = styled.form`
   margin-top:136px;
   display: flex;
  }
  @media (max-width: 1000px) {
    margin-top:50px;
    flex-direction: column;
    justify-content:center;
  }
  @media (max-width: 530px) {
    flex-direction: column;
    width: 100%;

}
`;

const Message = styled.div<{ statusColor: string }>`
  font-family: Roboto;
  color: ${(props) => props.statusColor};
  margin-top: 0.5em;
`;

const ButtonWrapper = styled.div`
  margin: auto;

  button {
    width: 240px;
    height: 52px;
    background: #f2a922;
    box-shadow: 0px 10px 20px rgba(12, 53, 89, 0.2);
    border-radius: 10px;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
    border: 0;
    cursor: pointer;
    padding: 8px 16px;
    margin-top: 12px;
  }
  @media (max-width: 1000px) {
    button {
      border-radius: 8px;
      width: 240px;
      height: 40px;
      font-size: 16px;
      line-height: 24px;
      margin-top: 30px;
    }
  }

  @media (max-width: 530px) {
    button {
      width: 240pxpx;
      height: 40px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
