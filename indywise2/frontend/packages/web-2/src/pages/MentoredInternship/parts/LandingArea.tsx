import React from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { Link } from 'react-router-dom';
import BigImageMain from '../../../components/BigImageMain';

const LandingArea: React.FC = () => {
  return (
    <>
      <Container>
        <BigImageMain
          smallCircleColor="linear-gradient(180deg, #F8BD4F 0%, #FAD897 100%)"
          page="isa"
        />
        <div>
          <Text type="hl" color="#362401">
            Mentored Internships{' '}
          </Text>
          <Text type="h2" color="#362401">
            Get upskilled and be job ready with
          </Text>
          <div>
            <Text type="hl" size="8vw" color="#362401">
              Zero Fees
            </Text>
            <Link to="/internship/apply" target="_blank" rel="noreferrer">
              <Button text="Apply Here" />
            </Link>
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
  height: 70vh;
  background: #faefd9;
  text-align: -webkit-center;

  div {
    h1 {
      position: absolute;
      top: 10vh;
      font-size: 4vw;
      left: 0;
      right: 0;
    }
    h2 {
      position: absolute;
      font-family: Roboto;
      top: 20vh;
      font-size: 2vw;
      font-weight: 500;
      left: 0;
      right: 0;
    }
    div {
      h1 {
        top: 24vh;
      }
      a {
        position: absolute;
        top: 38vh;
        right: 0;
        left: 0;
      }
    }
  }

  @media (max-width: 1030px) {
    height: 20vh;
  }

  @media (max-width: 530px) {
    height: 280px;
    div {
      h1 {
        top: 18vh;
        font-size: 8vw;
        line-height: 10vw;
      }
      h2 {
        top: 22vh;
        font-size: 4vw;
      }
      div {
        h1 {
          top: 30vh;
          font-size: 10vw;
        }
      }
    }
  }
  @media (max-width: 430px) {
    height: 350px;
  }
  @media (max-width: 380px) {
    height: 410px;
  }
  @media (max-width: 330px) {
    height: 500px;
  }
`;

const Below = styled.div`
  width: 100%;
  height: 100vh;
  color: F2A922;
  background: linear-gradient(180deg, #faefd9 0%, rgba(250, 239, 217, 0) 100%);

  text-align: -webkit-center;
`;
