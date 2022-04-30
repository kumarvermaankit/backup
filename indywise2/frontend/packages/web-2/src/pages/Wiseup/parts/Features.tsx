import React from 'react';
import styled from 'styled-components';
import ButtonPart from './ButtonPart';
import { Text, Icon } from '@indywise/uikit';

const Features: React.FC = () => {
  return (
    <>
      <Container>
        <Text type="h2" color="#E9E9E9">
          What is Included
        </Text>
        <Contain>
          <Each>
            <Icon size="120px" icon="unlimitedMentoring" />
            <Text type="h3" color="#F8BD4F">
              Quality Mentoring
            </Text>
            <Text type="paragraph" color="#CBCBCB">
              We ensure your mentors are subject matter experts with 8+ years of
              experience
            </Text>
          </Each>
          <Each>
            <Icon size="120px" icon="employeeEvaluation" />
            <Text type="h3" color="#F8BD4F">
              Constant Guidance
            </Text>
            <Text type="paragraph" color="#CBCBCB">
              We track your skill progression and give weekly progress reports,
              guiding you all along the way
            </Text>
          </Each>
          <Each>
            <Icon size="120px" icon="experiencedMentors" />
            <Text type="h3" color="#F8BD4F">
              Completion Certificate
            </Text>
            <Text type="paragraph" color="#CBCBCB">
              Completion Certificate and letter of recommendation from the
              mentor
            </Text>
          </Each>
          <Each>
            <Icon size="120px" icon="hireGloballyWhite" />
            <Text type="h3" color="#F8BD4F">
              Adaptive Learning
            </Text>
            <Text type="paragraph" color="#CBCBCB">
              Your program evolves as you do, at your pace
            </Text>
          </Each>
        </Contain>
        <ButtonPart />
      </Container>
    </>
  );
};

export default Features;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #030f44;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
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
  justify-content: center;
  margin: 80px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
  }
`;

const Each = styled.div`
  width: 25%;
  margin: 40px 16px;
  text-align: center;

  h3 {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin: 20px 0px;
  }
`;
