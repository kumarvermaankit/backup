import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import CreamBg from '../../../assets/CreamBg.svg';

const KeyHighlights: React.FC = () => {
  return (
    <>
      <Container>
        <Text type="h2" color="#262626">
          Key Highlights
        </Text>
        <Contain>
          <Each>
            <Text type="h3" color="#262626">
              Unlimited Duration
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Once enrolled, the journey of learning and upskilling never ends
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#262626">
              Zero Cost
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Career readiness at zero fee
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#262626">
              Up to 4 Live Group Sessions / Month
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              by top global mentors from the IndyWise pool of curated mentors
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#262626">
              Free Assessment Reports
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Get quantified on basic skills, get extra assessments based on
              your engagement
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#262626">
              Quality Content
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Cut the clutter and chaos! From the sea of content we screen and
              bring you only the most relevant videos, podcasts, articles,
              reports, use cases, and much more
            </Text>
          </Each>
        </Contain>
      </Container>
    </>
  );
};

export default KeyHighlights;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #eaf3fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 48px;
    line-height: 56px;
    text-align: center;
  }

  @media (max-height: 650px) {
    padding: 80px 0;
  }

  @media (max-width: 1024px) {
    padding: 80px 0;

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
  margin: 40px 0;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-height: 650px) {
    width: 90%;
    margin: 40px 0;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Each = styled.div`
  width: 40%;
  padding: 10px;

  h3 {
    background: url(${CreamBg});
    background-repeat: no-repeat;
    background-position: top left;
    margin: 24px 0 8px 0;
    padding-left: 40px;
    font-size: 32px;
    line-height: 40px;
  }
  p {
    padding-left: 40px;
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: 1024px) {
    padding: 0px;
    margin: 24px auto;
    width: 90%;

    h3 {
      font-size: 24px;
      line-height: 32px;
    }

    p {
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media (max-width: 530px) {
    h3 {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;
