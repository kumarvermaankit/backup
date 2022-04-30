import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import HPwiseup from '../../../assets/HPwiseup.svg';
import ButtonPart from './ButtonPart';
import WhuBg from '../../../assets/WhuBg.svg';

const HyperPersonalized: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <img src={HPwiseup} alt="Man Siting" />
          <Content>
            <Text type="h2" color="#262626">
              Hyper-personalised, Customised, Live and Mentor Driven.
            </Text>
            <Text type="body" color="#4B4B4B">
              A dedicated mentor with a friendly approach will help and guide
              your employee(s) through the journey of up-skilling with live
              unlimited mentoring, course recommendations and subject matter
              knowledge transfer including readings recommendation, insights and
              much more
            </Text>
            <ButtonPart />
          </Content>
        </Contain>
      </Container>
    </>
  );
};

export default HyperPersonalized;

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
