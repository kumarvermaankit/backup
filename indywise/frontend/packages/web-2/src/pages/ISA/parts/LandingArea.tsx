import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import BigImageMain from '../../../components/BigImageMain';

const LandingArea: React.FC = () => {
  return (
    <>
      <Container>
        <BigImageMain
          smallCircleColor="linear-gradient(180deg, #F8BD4F 0%, #FAD897 100%)"
          midCircleColor="#F2A922"
          bigCircleColor="#F8BD4F"
          boxShadow="0px 0px 40px rgba(242, 169, 34, 0.3)"
          page="isa"
        />
        <div>
          <Text type="hl">Mentored Internships</Text>
          <Text type="h2">get upskilled and be job ready with</Text>
          <div>
            <Text type="hl" size="8vw">
              Zero Fees
            </Text>
          </div>
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
  background: #f2a922;
  text-align: -webkit-center;

  div {
    h1 {
      position: absolute;
      align-items: center;
      font-size: 4vw;
      top: 18vh;
      color: white;
      left: 0;
      right: 0;
      margin-right: auto;
      margin-left: auto;
    }
    h2 {
      position: absolute;
      align-items: center;
      top: 28vh;
      font-size: 2.5vw;
      color: white;
      left: 0;
      right: 0;
      margin-right: auto;
      margin-left: auto;
    }
    div {
      h1 {
        color: #042039;
        top: 34vh;
        font-size: 8vw;
      }
    }
  }

  @media (max-width: 530px) {
    div {
      h1 {
        top: 230px;
        font-size: 8vw;
        line-height: 10vw;
      }
      h2 {
        top: 300px;
        font-size: 4vw;
      }
      div {
        h1 {
          top: 345px;
          font-size: 10vw;
        }
      }
    }
  }
`;

const Below = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #f2a922 0%, rgba(242, 169, 34, 0) 100%);
  text-align: -webkit-center;
`;
