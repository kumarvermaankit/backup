import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import ButtonPart from './ButtonPart';

const WhatIsIncluded: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <Text type="h2" color="#ffffff">
            What is Included
          </Text>
          <Contain>
            <Each>
              <Icon icon="unlimitedMentoring" />
              <Text type="h3" color="#F8BD4F">
                Quality Group Mentoring
              </Text>
              <Text type="body" color="#CBCBCB">
                From a curated pool of top class industry experts
              </Text>
            </Each>
            <Each>
              <Icon icon="qualityInsights" />
              <Text type="h3" color="#F8BD4F">
                Quality Insights
              </Text>
              <Text type="body" color="#CBCBCB">
                Engage in the community discussion, Q&A and get access to
                valuable insights and content
              </Text>
            </Each>
            <Each>
              <Icon icon="employeeEvaluation" />
              <Text type="h3" color="#F8BD4F">
                Adaptive Learning
              </Text>
              <Text type="body" color="#CBCBCB">
                Your skills evolve as you do
              </Text>
            </Each>
            <Each>
              <Icon icon="stellar" />
              <Text type="h3" color="#F8BD4F">
                Your CV, to Stellar Companies
              </Text>
              <Text type="body" color="#CBCBCB">
                The best upskillers get added to our talent pool accessed by top
                recruiters
              </Text>
            </Each>
          </Contain>
          <ButtonPart />
        </div>
      </Container>
    </>
  );
};

export default WhatIsIncluded;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #042039;

  h2 {
    text-align: center;
  }

  div {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-top: 1vh;
    height: auto;

    div {
      button {
        margin-bottom: 10vh;
      }
    }

    h2 {
      margin: 10vh auto;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;

const Contain = styled.div`
  width: auto !important;
  display: flex;
  margin: 10vh 5vw;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: block;
    margin: 10vh 10vw;
  }
`;

const Each = styled.div`
  text-align: center;

  span {
    display: flex;
    height: auto;
    margin-bottom: 2vh;
    justify-content: center;
    width: auto;

    svg {
      width: auto;
      height: 120px;
    }
  }

  h3 {
    margin: 3vh auto;
    font-size: 24px;
    line-height: 32px;
  }

  p {
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    width: auto;
    margin-bottom: 5vh;

    span {
      margin-left: 17vw;
      width: 40vw;
      height: auto;
    }
  }
`;
