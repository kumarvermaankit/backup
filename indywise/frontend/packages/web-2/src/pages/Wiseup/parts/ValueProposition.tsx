import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';

const ValueProposition: React.FC = () => {
  return (
    <>
      <Container>
        <Text type="h2" color="#262626">
          Value Proposition
        </Text>
        <Contain>
          <Each>
            <Icon icon="goals" color="#3C54AF" />
            <Text type="h3" color="#3C54AF">
              Set Your Own goals. Your own pace.
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              We don’t believe in one size fits all! Transform your employees
              into being highly efficient and performing professionals with
              personal guidance from an expert mentor, you will soon notice the
              change in productivity and profits
            </Text>
          </Each>
          <Each>
            <Icon icon="monitorWiseup" />
            <Text type="h3" color="#3C54AF">
              Personalized Mentoring with ICF KPIs
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Upskill your employees with tailored training by our dedicated
              subject matter experts with live unlimited mentoring. See the
              results through weekly assessments on KPI’S set you under the
              guidance of your mentor based on the IndyWise competency
              frameworks (ICF)
            </Text>
          </Each>
          <Each>
            <Icon icon="qresult" color="#3C54AF" />
            <Text type="h3" color="#3C54AF">
              Quick results
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Find out the pain points of your employees in just two weeks. Our
              specific training delivers better, faster results than in-house or
              outsourced training
            </Text>
          </Each>
          <Each>
            <Icon icon="affordWiseup" />
            <Text type="h3" color="#3C54AF">
              Affordable
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Avoid spending thousands of dollars on outsourced training without
              control. We are cheaper than in-house and outsourced training
            </Text>
          </Each>
        </Contain>
      </Container>
    </>
  );
};

export default ValueProposition;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8fbfd;
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
  justify-content: space-between;

  @media (max-height: 650px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Each = styled.div`
  width: 20%;

  svg {
    width: auto;
    height: 78px;
  }

  h3 {
    margin: 24px 0 8px 0;
    font-size: 20px;
    line-height: 28px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: 1024px) {
    margin: 24px auto;
    width: 90%;
  }
`;
