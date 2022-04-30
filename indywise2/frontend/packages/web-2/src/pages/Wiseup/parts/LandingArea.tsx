import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import WiseupTop from '../../../assets/WiseupTop.svg';
import WiseupBg from '../../../assets/WiseUpBg.svg';
import ButtonPart from './ButtonPart';

const LandingArea: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <Text type="h1" color="#030F44">
            Upskill Your Employees
          </Text>
          <Text type="subtitle" color="#203999">
            Upskill your employees with IndyWise’s unique competency framework
            and mentoring ecosystem
          </Text>
          <ButtonPart page="landing" />
          <img src={WiseupTop} alt="WiseUp lady" />
        </Contain>
      </Container>
    </>
  );
};

export default LandingArea;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8fbfd;
  background-image: url(${WiseupBg});
  background-position: center bottom;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    background: #f8fbfd;
    align-items: center;
  }
`;

const Contain = styled.div`
  margin-top: 10rem;
  width: 60%;
  text-align: center;

  img {
    display: none;
  }

  h1 {
    font-size: 64px;
    line-height: 72px;
    font-weight: bold;
  }

  h2 {
    font-size: 20px;
    line-height: 28px;
    margin: 24px 0;
    font-family: Mulish;
  }

  @media (max-width: 1300px) {
    margin-top: 5rem;
  }

  @media (max-width: 1024px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;

    img {
      display: flex;
      width: 80%;
      margin: 40px auto auto auto;
    }

    h1 {
      font-size: 48px;
      line-height: 56px;
    }

    h2 {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 724px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media (max-width: 380px) {
    width: 90%;
  }

  @media (max-width: 360px) {
    img {
      width: 75%;
      margin-top: 20px auto auto auto;
    }
  }
`;
