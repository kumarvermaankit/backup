import * as React from 'react';
import styled from 'styled-components';
// import Background from '../../../assets/Path1.png';
import Background from '../../../assets/YellowBg1.svg';
import { Text } from '@indywise/uikit';
import Weareonmission1 from '../../../assets/Newweareonmission1.png';
import Weareonmission2 from '../../../assets/Newweareonmission2.png';

const WeAreOnAMission: React.FC = () => {
  return (
    <Wrapper>
      <Text type="h1" bold size="5vw">
        We are on a Mission
      </Text>
      <div>
        <FirstIconWrapper>
          <img src={Weareonmission1} alt="weareonmission" />
          <Text type="paragraph" size="1.5vw">
            We are aiming to build a success ecosystem to help talent obtain the
            experience they need to succeed in their career with
            <b> WiseUp Programs.</b>
          </Text>
        </FirstIconWrapper>
        <FirstIconWrapper>
          <img src={Weareonmission2} alt="weareonmission" />
          <Text type="paragraph" size="1.5vw">
            We shape your vision and aspirations through <br />
            <b> Quality Mentoring.</b>
          </Text>
        </FirstIconWrapper>
      </div>
    </Wrapper>
  );
};

export default WeAreOnAMission;

// TODO: Background image should be an SVG so that it adjust it's size on the VW?
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10vh;
  padding-bottom: 10vh;
  display: block;

  div {
    display: flex;
    justify-content: center;
  }

  h1 {
    color: #042039;
    text-align: center;
    line-height: 6vw;
    padding-top: 15vh;
    padding-bottom: 10vh;
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
    background-size: cover;
    margin: 6vh auto;
    height: auto;

    div {
      display: block;
    }

    h1 {
      padding-top: 10rem;
      font-size: 8vw;
      line-height: 7vw;
      text-align: center;
    }

    p {
      display: block;
      font-size: 16px;
      line-height: 5vw;
      margin: 43px auto 0 auto;
    }
  }
`;

const FirstIconWrapper = styled.div`
  display: block !important;
  text-align: center;

  img {
    height: 20vw;
    width: 20vw;
    border-radius: 50%;
  }
  p {
    text-align: center;
    line-height: 3vw;
    width: 35vw;
    margin-top: 2vh;
  }
  @media (max-width: 530px) {
    margin: auto;

    img {
      height: 50vw;
      width: 50vw;
      border-radius: 50%;
    }

    p {
      line-height: 5vw;
      width: 80%;
      margin-bottom: 5vh;
    }
  }
`;
