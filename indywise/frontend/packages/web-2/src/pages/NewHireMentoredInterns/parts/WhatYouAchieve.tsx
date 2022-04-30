import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import WhuBg from '../../../assets/WhuBg.svg';
// import Effects from '../../../assets/Effects.svg';

const WhatYouAchieve: React.FC = () => {
  return (
    <>
      <Container>
        <img src={WhuBg} alt="wise up we help you bg"></img>
        <Text type="h2" color="#262626">
          What You Achieve
        </Text>
        <Second>
          <OneThird>
            <Text type="h4" color="#262626">
              5X Cheaper
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Up to 5 times cheaper than sourcing your own interns
            </Text>
          </OneThird>
          <OneThird>
            <Text type="h4" color="#262626">
              Save 75% Time
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Save up to 75% on the time spent training your employees
            </Text>
          </OneThird>
          <OneThird>
            <Text type="h4" color="#262626">
              Personalized KPIs
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Personalized KPIs according to your business needs
            </Text>
          </OneThird>
        </Second>
        <Second>
          <OneThird>
            <Text type="h4" color="#262626">
              Tailored Interns
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Global, tailored interns sourcing, including geographical needs
            </Text>
          </OneThird>
          <OneThird>
            <Text type="h4" color="#262626">
              Experienced Mentors
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Benefit from mentor’s experience in your work
            </Text>
          </OneThird>
          <OneThird>
            <Text type="h4" color="#262626">
              Efficient Training
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Reduce the time needed to see the results from the training
            </Text>
          </OneThird>
        </Second>
        <Contain>
          <Text type="h4" color="#262626">
            Dedicated Manager from IndyWise
          </Text>
          <Text type="paragraph" color="#4B4B4B">
            Dedicated Business Experience Manager to help coordinate your
            interns
          </Text>
        </Contain>
        {/* <img src={Effects} alt="wise up we help you bg" /> */}
      </Container>
    </>
  );
};

export default WhatYouAchieve;

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #f8fbfd;

  p {
    padding-top: 15vh;
    text-align: center;
    line-height: 28px;
  }

  h2 {
    margin: 15vh auto 10vh auto;
    text-align: center;
    z-index: 1;
  }

  img {
    position: absolute;
    width: 30%;
    z-index: 0;
  }

  @media (max-width: 770px) {
    height: auto;

    h2 {
      margin: 10vh auto;
      font-size: 8vw;
    }
    img {
      height: auto;
    }
    div {
      img {
        margin-top: 82vh;
      }
    }
  }
`;

const Contain = styled.div`
  margin: 8vh auto 12vh auto;
  text-align: center;

  p {
    margin: -13vh auto auto auto;
    width: 35%;
    line-height: 28px;
    text-align: center;
  }

  @media (max-width: 770px) {
    p {
      width: 80%;
    }
  }
`;

const Second = styled.div`
  display: flex;
  margin: 5vh 15vw;
  justify-content: space-between;

  @media (max-width: 770px) {
    padding-left: 2vw;
    display: block;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const OneThird = styled.div`
  width: 18vw;
  text-align: center;
  margin-bottom: 3vh;

  h4 {
    margin: 2vh auto;
    font-weight: normal;
  }
  p {
    margin-top: -15vh;
    line-height: 28px;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;
