import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import BigImageMain from '../../../components/BigImageMain';

const LandingArea: React.FC = () => {
  return (
    <>
      <Container>
        <BigImageMain
          smallCircleColor="#8597DD"
          midCircleColor="#3C54AF"
          bigCircleColor="#8597DD"
          boxShadow="0px 0px 40px rgba(12, 53, 89, 0.2)"
          page="startups"
        />
        <div>
          <MidText>
            <Text type="hl">Indywise for</Text>
          </MidText>
          <EndDiv>
            <Text type="hl" size="6vw">
              Startups and SMEs
            </Text>
            <Text type="h2" size="6vw">
              Get Mentored Interns
            </Text>
          </EndDiv>
        </div>
      </Container>
      <Below />
    </>
  );
};

export default LandingArea;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #3c54af;
  text-align: -webkit-center;
`;

const MidText = styled.div`
  top: 22vh;
  left: 0px;
  right: 0px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  h1 {
    color: #fff;
    font-size: 4vw;
    line-height: 8vh;
  }
  @media (max-width: 530px) {
    top: 275px;
    h1 {
      font-size: 6vw;
      line-height: 36px;
    }
  }
`;

const EndDiv = styled.div`
  top: 36vh;
  left: 0px;
  right: 0px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  h1 {
    color: #fff;
    line-height: 4vh;
  }
  h2 {
    color: #042039;
    font-size: 4vw;
    padding-top: 3vw;
  }
  @media (max-width: 530px) {
    top: 335px;
    h1 {
      font-size: 12vw;
      line-height: 48px;
    }
  }
`;

const Below = styled.div`
  width: 100%;
  height: 90vh;
  background: linear-gradient(180deg, #3c54af 0%, rgba(60, 84, 175, 0) 100%);
  text-align: -webkit-center;
  @media (min-width: 1000px) and (max-width: 1800px) {
    height: 75vh;
  }
  @media (max-width: 530px) {
    height: 30vh;
  }
`;
