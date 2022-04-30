import * as React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';

const HowIndyWiseWorks: React.FC = () => {
  return (
    <Wrapper>
      <Text type="h1" size="4vw">
        Values
      </Text>
      <ValuesFlexBox>
        <Each>
          <Icon size="100px" icon="outcomeBased" />
          <Text type="h4">Outcome Based</Text>
        </Each>
        <Each>
          <Icon size="100px" icon="quality" />
          <Text type="h4">Quality</Text>
        </Each>
        <Each>
          <Icon size="100px" icon="communityCentric" />
          <Text type="h4">Community Centric</Text>
        </Each>
      </ValuesFlexBox>
      <Text type="h1" size="4vw">
        Competitive Edge
      </Text>
      <CompetitiveEdgeFirstFlexBox>
        <Each>
          <Icon size="100px" icon="isa" />
          <Text type="h4">Personalized Upskilling</Text>
        </Each>
        <Each>
          <Icon size="100px" icon="qualityMentorNetwork" />
          <Text type="h4">Quality Mentor Network</Text>
        </Each>
        <Each>
          <Icon size="100px" icon="job" />
          <Text type="h4">Job Referencing</Text>
        </Each>
        <Each>
          <Icon size="100px" icon="lowestFees" />
          <Text type="h4">Lowest Fees</Text>
        </Each>
      </CompetitiveEdgeFirstFlexBox>
    </Wrapper>
  );
};

export default HowIndyWiseWorks;

const Wrapper = styled.div`
  height: auto;
  max-width: 100%;
  width: 100%;
  margin: 0 10vw 15vh 10vw;

  h1 {
    color: #042039;
    line-height: 9rem;
    text-align: center;
    margin-bottom: 5vh;
  }

  h2 {
    color: #f2a922;
    line-height: 4.5rem;
    text-align: center;
  }

  @media (max-width: 530px) {
    width: 100%;
    height: auto;
    margin: 0 auto;

    h1 {
      font-size: 2rem;
      line-height: 2rem;
      margin-top: 5vh;
    }

    h2 {
      font-size: 1.25rem;
      line-height: 1.5rem;
      margin-top: 1.5rem;
    }
  }
`;

const Each = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto 2vw auto;

  h4 {
    text-align: center;
    line-height: 40px;
  }

  @media (max-width: 530px) {
    h4 {
      line-height: 2.25rem;
      font-size: 1.5rem;
    }
  }
`;

const ValuesFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 10vw;

  p {
    display: block;
  }

  @media (max-width: 530px) {
    width: 100%;
    display: block;
    margin: auto;
  }
`;

const CompetitiveEdgeFirstFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 10vw;

  div {
    width: 25%;
  }

  @media (max-width: 530px) {
    width: 100%;
    display: block;
    margin: 10vh auto;

    div {
      width: 80%;
      text-align: center;
    }
  }
`;
