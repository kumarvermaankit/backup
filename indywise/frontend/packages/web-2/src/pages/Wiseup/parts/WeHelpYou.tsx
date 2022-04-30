import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import WhuWiseup from '../../../assets/WhuWiseup.svg';
import ButtonPart from './ButtonPart';
import WhuBg from '../../../assets/WhuBg.svg';

const WeHelpYou: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <img src={WhuWiseup} alt="Man Steping Up" />
          <Content>
            <Text type="h2" color="#262626">
              We Help You Grow Faster, Quicker.
            </Text>
            <Text type="body" color="#4B4B4B">
              We ensure you get the best your employees have to offer. Get
              weekly reports based on their assessments and identify the pain
              points that are holding your business back
            </Text>
            <ButtonPart />
          </Content>
        </Contain>
      </Container>
    </>
  );
};

export default WeHelpYou;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8fbfd;
  background-image: url(${WhuBg});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 50vh;
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

  img {
    margin-right: 5%;
  }

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
