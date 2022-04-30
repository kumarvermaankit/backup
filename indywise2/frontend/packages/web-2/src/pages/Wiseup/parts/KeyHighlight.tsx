import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import CreamBg from '../../../assets/CreamBg.svg';
import ButtonPart from './ButtonPart';

const KeyHighlight: React.FC = () => {
  return (
    <>
      <Container>
        <Text type="h2" color="#262626">
          Key Highlights
        </Text>
        <Contain>
          <Each>
            <Text type="h3" color="#262626">
              Program Duration
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              1-4 Months (4-16 weeks)
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#262626">
              Unlimited Mentoring
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Unlimited mentoring support through emails and messages
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#262626">
              4 Live Personalised Sessions Every Month
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              by mentors who are industry experts
            </Text>
          </Each>
          <Each>
            <Text type="h3" color="#262626">
              Weekly Assessment Reports
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Exclusive assessment reports, Letter of recommendation and
              certificates
            </Text>
          </Each>
        </Contain>
        <ButtonPart />
      </Container>
    </>
  );
};

export default KeyHighlight;

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
  margin: 80px 0;
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
  padding: 20px;

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
  }

  @media (max-width: 530px) {
    h3 {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;
