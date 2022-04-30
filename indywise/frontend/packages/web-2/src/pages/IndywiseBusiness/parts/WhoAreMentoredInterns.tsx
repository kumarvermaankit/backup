import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import LaptopImage from '../../../assets/MentoredInterns.png';
import CircleButton from '../../../components/CircleCallToAction';

const WhoAreMentoredInterns: React.FC<{ showModal: () => void }> = ({
  showModal
}) => {
  return (
    <Wrapper>
      <TextDiv>
        <Text type="hl" size="3.2vw" bold>
          Who are Mentored Interns?
        </Text>
        <Text type="body" size="1.3vw">
          Mentored Interns are specialized talent filtered through the rigorous
          assessment process of IndyWise and paired with a dedicated mentor.
          They deliver a higher quality work and they have a guided approach
          from our mentors to achieve the KPIs set by the startups/businesses.
          Every Mentored Intern will be mentored by top-notch IndyWise mentors
          to ensure their training needs are fulfilled and that they have an
          optimised performance.
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

export default WhoAreMentoredInterns;

const Wrapper = styled.div`
  height: auto;
  margin: 8vh 2vw;
  display: flex;
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
  margin-left: 2vw;
  @media (max-width: 530px) {
    width: 100%;
    margin-left: 0vw;
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
  left: -4vw;
  top: 10vh;
  z-index: -100;
`;
