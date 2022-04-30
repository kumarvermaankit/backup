import * as React from 'react';
import { Text } from '@indywise/uikit';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../../assets/BlueBg1.svg';
import WhoWillMentorYouLady from '../../../assets/WhoWillMentorYouLadys.png';
import CircleButton from '../../../components/CircleCallToAction';

const WhoWillMentorYouLadys: React.FC = () => {
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold color="#262626">
        Who will Mentor you
      </Text>
      <ImageWrapper>
        <Image src={WhoWillMentorYouLady} alt="WhoWillMentorYouLadys" />
      </ImageWrapper>
      <ButtonWrapper>
        <Link to="/internship/apply" target="_blank" rel="noreferrer">
          <CircleButton text="Apply Now" color="blue" />
        </Link>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default WhoWillMentorYouLadys;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 0 50px 0;

  h1 {
    font-size: 96px;
    line-height: 120px;
    margin-top: 16vh;
    text-align: center;
    width: 100%;
    color: #042039;
  }

  @media (max-width: 1030px) {
    padding: 0;
    h1 {
      font-size: 40px;
      line-height: 48px;
    } 
  }

  @media (max-width: 530px) {
    padding: 0;
    height: auto;
    h1 {
      width: 70vw;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      margin: 15vh auto 0 auto;
    }
  @media (max-width: 359px) {
    h1 {
      margin: 6vh auto 2vh auto;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  text-align: center;
  @media (max-width: 530px) {
    margin-top: 10vh;
  }
`;

const Image = styled.img`
  width: 65vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
  @media (max-width: 530px) {
    margin-top: 0vh;
    width: 90vw;
  }
`;

const ButtonWrapper = styled.div`
  text-align: -webkit-center;
  margin-top: -15vh;
  margin-bottom: 10vh;

  a {
    text-decoration: none;
    cursor: pointer;

    button {
      background: #fff;
      h2 {
        color: #042039;
      }
      span {
        svg {
          line {
            stroke: #042039;
          }
        }
      }
    }
  }

  @media (max-width: 530px) {
    right: 0;
    top: 0;
    a {
      button {
        h2 {
          font-size: 4vw;
          line-height: 6vw;
        }
        width: 120px;
        height: 120px;
        span {
          svg {
            width: 4vw;
            height: 4vw;
          }
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
