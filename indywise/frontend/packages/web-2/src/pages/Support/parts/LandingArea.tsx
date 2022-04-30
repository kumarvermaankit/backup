import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import BigImageMain from '../../../components/BigImageMain';

const LandingArea: React.FC = () => {
  return (
    <>
      <Container>
        <BigImageMain
          smallCircleColor="#317EC2"
          midCircleColor="#0C3559"
          bigCircleColor="#19588F"
          boxShadow="none"
          page="support"
        />
        <div>
          <Text type="hl" size="8vw">
            Support
          </Text>
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
  background: #0c3559;
  text-align: -webkit-center;

  div {
    h1 {
      top: 23vh;
      left: 0px;
      right: 0px;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      color: white;
      font-size: 8vw;
    }
  }

  @media (max-width: 530px) {
    div {
      h1 {
        top: 320px;
        font-size: 10vw;
        line-height: 10vw;
      }
    }
  }
`;

const Below = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #0c3559 0%, rgba(12, 53, 89, 0) 100%);
  text-align: -webkit-center;
`;
