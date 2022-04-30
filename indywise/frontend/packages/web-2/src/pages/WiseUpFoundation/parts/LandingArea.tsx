import React from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';
import WiseupFoundationH from '../../../assets/WiseupFoundationH.svg';
import { useAuth } from '../../../contexts/AuthContext';

const LandingArea: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Container>
        <Contain>
          <div>
            <Text type="h1" color="#262626">
              Give wings to your career.
              <br />
              Career readiness at <Color>zero fee.</Color>
            </Text>
            <Text type="paragraph" color="#4B4B4B">
              Upskill yourself with IndyWise’s unique mentoring ecosystem. This
              platform is all you need to shine through, gain insights on
              different topics and make that excellent first impression
            </Text>
            <Button color="primary">
              <Link
                to={user ? '/foundation' : '/sign-in'}
                style={{ textDecoration: 'none', color: '#042039' }}
              >
                Join Now
              </Link>
            </Button>
          </div>
        </Contain>
      </Container>
    </>
  );
};

export default LandingArea;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(72.46deg, #eaf3fa 0%, #ffffff 100vw);
`;

const Contain = styled.div`
  width: 100%;
  height: 100%;
  background: url(${WiseupFoundationH});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto 120px;

    h1 {
      font-size: 64px;
      line-height: 72px;
      color: #19588f;
      margin: 24px 0;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      color: #727272;
      width: 80%;
    }

    button {
      max-width: 200px;
      margin: 24px 0;
      P {
        color: #042039;
      }
    }
  }

  @media (max-width: 1024px) {
    div {
      width: 60%;
      margin: 0 100px;

      h1 {
        font-size: 32px;
        line-height: 40px;
      }
    }
  }

  @media (max-width: 724px) {
    div {
      width: 80%;
      margin: 0 100px;

      h1 {
        font-size: 24px;
        line-height: 32px;
      }

      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  @media (max-width: 540px) {
    div {
      width: 100%;
      margin: 0 40px;
    }
  }
`;

const Color = styled.span`
  color: #f2a922;
`;
