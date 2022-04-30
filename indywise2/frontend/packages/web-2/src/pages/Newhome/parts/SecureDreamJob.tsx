import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import LaptopImage from '../../../assets/DreamJob.svg';
import CircleButton from '../../../components/CircleCallToAction';
import { Link } from 'react-router-dom';

const SecureDreamJob: React.FC = () => {
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold>
        Supercharge your professional <ColoredText>Career</ColoredText>
      </Text>
      <Text type="paragraph" size="1.5vw">
        <br />
        IndyWise helps startups and enterprises to build more productive
        workforces by giving employees dynamic and personalized mentoring,
        identify their strengths, achieve their goals & reach their full
        potential. <br /> <br />
        We give access to unprecedented insights about your employees'
        performance & your business.{' '}
        <b>Watch growth happen in real-time, and monitor the outcomes</b> that
        are holding your business back.
      </Text>
      <ImageAndButtonWrapper>
        <Image src={LaptopImage} />
        <ButtonWrapper>
          <Link to="/wiseup">
            <CircleButton text="Get Upskilling" color="purple" />
          </Link>
        </ButtonWrapper>
      </ImageAndButtonWrapper>
    </Wrapper>
  );
};

export default SecureDreamJob;

const Wrapper = styled.div`
  height: auto;
  margin: 8vh 0;

  h1 {
    line-height: 4vw;
    text-align: center;
    width: 100%;
  }

  p {
    line-height: 2.7vw;
    width: 50vw;
    text-align: center;
    margin: 10vh auto 0 auto;
  }

  @media (max-width: 1030px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media (max-width: 530px) {
    margin: 0px;
    height: auto;

    h1 {
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      margin-top: 2rem;
    }

    p {
      width: 85vw;
      font-size: 12px;
      line-height: 18px;
      margin: 30px auto 20px auto;
    }
  }
`;

const ImageAndButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;

const Image = styled.img`
  margin-top: 10vh;
  width: 75vw;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;

  a {
    text-decoration: none;
  }

  @media (max-width: 530px) {
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
`;

const ColoredText = styled.span`
  color: #a16a06;
`;
