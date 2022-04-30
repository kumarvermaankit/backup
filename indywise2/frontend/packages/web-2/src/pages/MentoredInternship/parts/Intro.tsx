import * as React from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LaptopImage from '../../../assets/MentoredIntern.png';
import CircleButton from '../../../components/CircleCallToAction';

const IntroGroups: React.FC = () => {
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold color="#262626">
        Overview
      </Text>
      <OverviewSection>
        <Text type="paragraph" color="#4B4B4B">
          IndyWise Mentored Internship is a revolutionary one of its kind global
          reskilling and upskilling program. We put wings to your aspirations
          enabling you to succeed in your career. We help you secure a remote
          internship and work on live enterprise projects with companies
          worldwide, and we assign you a mentor so that you achieve desired
          success!
        </Text>
        <Text type="paragraph" bold color="#4B4B4B">
          Because having a job should be a right, not a privilege.
        </Text>
      </OverviewSection>
      <ImageAndButtonWrapper>
        <Image src={LaptopImage} alt="browse mentors" />
        <ButtonWrapper>
          <Link to="/internship/apply" target="_blank" rel="noreferrer">
            <CircleButton text="Apply Now" color="purple" />
          </Link>
        </ButtonWrapper>
      </ImageAndButtonWrapper>
    </Wrapper>
  );
};

export default IntroGroups;

const Wrapper = styled.div`
  h1 {
    text-align: center;
    font-size: 96px;
    line-height: 120px;
  }
  max-width: 100%;
  text-align: center;
  img {
    width: 40vw;
  }

  @media (max-width: 1030px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }
  }

  @media (max-width: 530px) {
    h1 {
      margin-bottom: 10vh;
      font-size: 40px;
      line-height: 48px;
    }
  }
`;

const OverviewSection = styled.div`
  margin: 5vh 10vw;
  text-align: center;

  p {
    font-size: 24px;
    line-height: 36px;
  }

  @media (max-width: 1030px) {
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 530px) {
    margin-bottom: 0;
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const ImageAndButtonWrapper = styled.div`
  position: relative;
  margin: 10vh 10vw;
  z-index: 1;
`;

const Image = styled.img`
  width: 60vw;

  @media (max-width: 530px) {
    width: 75vw;
    height: auto;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 8vh;
  right: 15vw;

  a {
    text-decoration: none;
  }

  @media (max-width: 530px) {
    right: 5%;
    top: -20px;

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
`;
