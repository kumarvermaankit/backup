import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import LaptopImage from '../../../assets/Struggling.png';
import CircleButton from '../../../components/CircleCallToAction';

const Struggling: React.FC<{ showModal: () => void }> = ({ showModal }) => {
  return (
    <Wrapper>
      <TextDiv>
        <Text type="hl" size="3.2vw" bold>
          Facing a resource crunch that impacts your work delivery?
        </Text>
        <Text type="body" size="1.3vw">
          Solve your problem in a week. IndyWise enables startups to source
          mentored interns at a most affordable cost, which is 5X lower than a
          local unpaid internship. These Mentored Interns will help you to
          deliver your work and product faster, all with the augmentation of the
          IndyWise platform which provides performance analytics and deep KPIs
          analysis. It will essentially save over 75% time for the founders,
          which is worth thousands of dollars.
        </Text>
      </TextDiv>
      <ImageAndButtonWrapper>
        <IconWrapper>
          <Icon icon="circle" size="35vw" />
        </IconWrapper>
        <Image src={LaptopImage} />
        <ButtonWrapper onClick={showModal}>
          <CircleButton text="Contact Sales" color="blue" />
        </ButtonWrapper>
      </ImageAndButtonWrapper>
    </Wrapper>
  );
};

export default Struggling;

const Wrapper = styled.div`
  height: auto;
  margin: 8vh 2vw;
  display: flex;
  flex-direction: row-reverse;
  h1 {
    line-height: 5vw;
    color: #042039;
  }
  p {
    line-height: 2.7vw;
    margin: 6vh auto 0 auto;
  }
  @media (max-width: 530px) {
    margin: 0px;
    height: auto;
    display: block;
    h1 {
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      margin-top: 2rem;
    }
    p {
      font-size: 12px;
      line-height: 18px;
      margin: 30px auto 0 auto;
      width: 75vw;
    }
  }
  @media (max-width: 359px) {
    h1 {
      width: 90vw;
      margin: 5vh auto 2vh auto;
    }
    p {
      width: 90vw;
    }
  }
`;

const TextDiv = styled.div`
  width: 45%;
  margin-right: 2vw;
  @media (max-width: 530px) {
    width: 100%;
  }
`;

const ImageAndButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
  z-index: 1;
  @media (max-width: 530px) {
    margin-top: 10vh;
  }
`;

const Image = styled.img`
  width: 35vw;
  @media (max-width: 530px) {
    width: 75vw;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0vh;
  right: 0;
  left: 27vw;
  a {
    text-decoration: none;
  }
  @media (max-width: 530px) {
    right: 4vw;
    top: -15vw;
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

const IconWrapper = styled.div`
  position: absolute;
  left: -8vw;
  top: 10vh;
  z-index: -100;
`;
