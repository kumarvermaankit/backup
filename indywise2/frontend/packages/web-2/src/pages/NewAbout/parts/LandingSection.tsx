import React from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import img from '../../../assets/hands.svg';

const LandingSection: React.FC = () => {
  return (
    <Wrapper id="about">
      <Section>
        <Content>
          <Text type="h1">We are a group of passionate people</Text>
        </Content>
        <Container>
          <img src={img} alt="landingImg" />
        </Container>
      </Section>
    </Wrapper>
  );
};
export default LandingSection;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    margin: 194px 50px;
    align-items: center;
  }
  button {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const Content = styled.div`
  height: 144px;
  width: 632px;
  h1 {
    font-family: Mulish;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 72px;
  }

  @media (width: 1264px) {
    position: relative;
  }

  @media (max-width: 1024px) {
    padding-bottom: 64px;
    h1 {
      font-size: 48px;
      line-height: 56px;
    }
  }
  @media (max-width: 1000px) and (max-height: 700px) {
    padding-bottom: 0;
    width: 450px;
  }

  @media (max-width: 650px) and (max-height: 1000px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: auto;
    padding: 0;
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;

const Container = styled.div`
  img {
    border-radius: 50%;
    width: 480px;
    background-color: #faefd9;
  }

  @media (max-width: 1264px) and (max-height: 700px) {
    img {
      width: 400px;
      height: 400px;
    }
  }

  @media (max-width: 1024px) {
    img {
      display: initial !important;
      height: 400px;
      width: 400px;
    }
  }

  @media (max-width: 1000px) and (max-height: 700px) {
    img {
      width: 280px;
      height: 280px;
    }
  }
  @media (max-width: 700px) and (max-height: 700px) {
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media (max-width: 500px) {
    margin-top: 64px;
    margin-bottom: 0;
    img {
      height: 280px;
      width: 280px;
    }
  }
  @media (max-width: 320px) {
    margin-top: 40px;
    img {
      height: 240px;
      width: 240px;
    }
  }
`;
