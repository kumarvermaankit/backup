import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import WeHelpWiseup from '../../../assets/WeHelpWiseup.svg';
import ButtonPart from './ButtonPart';

const WeHelp: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <img src={WeHelpWiseup} alt="Man Steping Up" />
          <Content>
            <Text type="h2" color="#262626">
              We Help Your Employees Fly Higher, Faster and Quicker.
            </Text>
            <Text type="body" color="#4B4B4B">
              We pair every employee with a dedicated mentor who within 14 days
              identifies the shortcomings that are holding back your employee’s
              performance
            </Text>
            <ButtonPart />
          </Content>
        </Contain>
      </Container>
    </>
  );
};

export default WeHelp;

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
  flex-direction: row-reverse;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;

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
  width: 70%;

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
