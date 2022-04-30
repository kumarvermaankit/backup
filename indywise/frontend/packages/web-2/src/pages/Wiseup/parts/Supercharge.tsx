import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import SuperWiseup from '../../../assets/SuperWiseup.svg';
import ButtonPart from './ButtonPart';

const Supercharge: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <Content>
            <Text type="h2" color="#262626">
              We Supercharge Your Interns.
            </Text>
            <Text type="body" color="#4B4B4B">
              Your interns can turn into highly productive employees because the
              start to their career is done right. Leave it to us to mentor and
              upskill them so your managers can focus on more important tasks.
              By the end of the program your Interns are more productive and
              focused making them great full time employees
            </Text>
            <ButtonPart />
          </Content>
          <img src={SuperWiseup} alt="Man Steping Up" />
        </Contain>
      </Container>
    </>
  );
};

export default Supercharge;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const Contain = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;

    img {
      height: 360px;
      margin: 40px 0;
    }
  }

  @media (max-width: 720px) {
    img {
      height: 240px;
    }
  }
`;

const Content = styled.div`
  width: 60%;
  margin-right: 5%;

  h2 {
    font-size: 48px;
    line-height: 56px;
  }

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    margin: 40px 0 48px 0;
  }

  button {
    p {
      margin: auto;
    }
  }

  @media (max-width: 1360px) {
    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    h2 {
      font-size: 40px;
      line-height: 48px;
    }
  }

  @media (max-width: 720px) {
    h2 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;
