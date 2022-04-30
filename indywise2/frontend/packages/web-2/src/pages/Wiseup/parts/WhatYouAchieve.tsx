import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import ButtonPart from './ButtonPart';

const WhatYouAchieve: React.FC = () => {
  return (
    <>
      <Container>
        <Text type="h2" color="#262626">
          What You Achieve
        </Text>
        <Contain>
          <Each>
            <Text type="h3" color="#3C54AF">
              3X
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Employees end up being up to 3 times more productive
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#3C54AF">
              5X
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Up to 5 times cheaper than in-house training
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#3C54AF">
              10X
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Up to 10 times cheaper than professional trainers
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#3C54AF">
              75%
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Save up to 75% on the time spent training your employees
            </Text>
          </Each>
          <Each>
            <Icon icon="skill" size="60px" color="#3C54AF" />
            <Text type="paragraph" color="#4B4B4B">
              Benefit from mentor’s experience in your work
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#3C54AF">
              14 Days
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Identify the pain points faced by your employees within 14 days
            </Text>
          </Each>
          <Each>
            <Icon icon="ladderwiseup" size="60px" />
            <Text type="paragraph" color="#4B4B4B">
              Level up your employees to the specific skills needed for the
              role/profile
            </Text>
          </Each>
        </Contain>
        <ButtonPart />
      </Container>
    </>
  );
};

export default WhatYouAchieve;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;

  h2 {
    font-size: 48px;
    line-height: 56px;
    margin: 0 0 80px 0;
    text-align: center;
  }

  button {
    margin-top: 20px;
  }

  @media (max-height: 650px) {
    margin: 80px 0;
  }

  @media (max-width: 1024px) {
    margin: 80px 0;

    h2 {
      font-size: 40px;
      line-height: 48px;
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;

const Contain = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const Each = styled.div`
  width: 250px;
  margin: 20px 16px;
  text-align: center;

  h3 {
    font-size: 40px;
    line-height: 60px;
  }

  p {
    margin: 8px 0;
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 20px 0px;
  }
`;
