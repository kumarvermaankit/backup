import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import WhatWeOfferImg from '../../../assets/WhatWeOffer.png';
import CircleButton from '../../../components/CircleCallToAction';

const WhatWeOffer: React.FC<{ showModal: () => void }> = ({ showModal }) => {
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold>
        What You Achieve
      </Text>
      <Container>
        <ImgWrapper>
          <IconWrapper>
            <Icon icon="circle" size="30vw" />
          </IconWrapper>
          <img src={WhatWeOfferImg} alt="What We Offer" />
          <ButtonWrapper onClick={showModal}>
            <CircleButton text="Contact Sales" color="blue" />
          </ButtonWrapper>
        </ImgWrapper>
        <Center>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw">
              5X cost savings vs a traditional internship
            </Text>
          </Div>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw">
              Save up to 75% of your time
            </Text>
          </Div>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw">
              Ensured work delivery on set KPIs
            </Text>
          </Div>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw">
              Reduced training costs and needs
            </Text>
          </Div>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw">
              Higher quality delivery through our mentoring programs
            </Text>
          </Div>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw">
              Mentor’s direct impact on your startup performance and results
            </Text>
          </Div>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw">
              Access to IndyWise mentoring Ecosystem
            </Text>
          </Div>
        </Center>
      </Container>
    </Wrapper>
  );
};

export default WhatWeOffer;

const Wrapper = styled.div`
  height: auto;
  margin: 8vh 0;
  h1 {
    line-height: 6vw;
    text-align: center;
    width: 100%;
    color: #042039;
  }
  @media (max-width: 530px) {
    margin: 0px;
    height: auto;
    h1 {
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      margin-top: 0;
    }
  }
  @media (max-width: 359px) {
    h1 {
      width: 90vw;
      margin: 5vh auto 2vh auto;
    }
  }
`;

const Container = styled.div`
  margin: 16vh 8vw 10vh 8vw;
  display: flex;
  div {
    width: fit-content;
    img {
      width: 30vw;
      height: 30vw;
    }
  }
  @media (max-width: 530px) {
    margin: 10vh 5vw;
    display: block;
    div {
      img {
        width: 328px;
        height: 328px;
      }
    }
  }
  @media (max-width: 359px) {
    div {
      img {
        width: 90vw;
        height: 90vw;
      }
    }
  }
`;

const Center = styled.div`
  align-self: center;
  margin-left: 5vw;
  font-weight: 400;
  h1 {
    display: inherit;
  }
  h2 {
    line-height: 72px;
    color: #042039;
  }

  @media (max-width: 530px) {
    margin: 5vh auto auto auto;

    h1 {
      display: none;
    }
    h2 {
      line-height: 32px;
      font-size: 6vw;
      margin-top: 5vh;
    }
  }
`;

const Circle = styled.div`
  width: 1vw !important;
  height: 1vw;
  border-radius: 50%;
  background: #f2a922;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3vh;
  p {
    margin-left: 1vw;
  }
  @media (max-width: 530px) {
    p {
      font-size: 4vw;
      margin-left: 2vw;
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: -4vw;
  top: -4vh;
  z-index: -100;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: -10vh;
  right: 0;
  a {
    text-decoration: none;
  }
  @media (max-width: 530px) {
    right: 0;
    top: 0;
    a {
      button {
        width: 120px;
        height: 120px;
        h2 {
          font-size: 16px;
          line-height: 24px;
        }
        i {
          svg {
            width: 24px;
            height: 12px;
          }
        }
      }
    }
  }
`;
