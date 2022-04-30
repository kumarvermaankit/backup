import React from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';
import TelegramCommunity from '../../../assets/TelegramCommunity.svg';
import { useAuth } from '../../../contexts/AuthContext';

const LandingArea: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Container>
        <Contain>
          <div>
            <Text type="h1" color="#4B4B4B">
              Be a part of our
              <br />
              <Color>Community of Mentors!</Color>
            </Text>
            <Text type="paragraph" color="#727272">
              A telegram group connecting people from all walks of life with a
              goal to inspire, transform, and educate. Helping you realise your
              full potential and bringing you closer to your success
            </Text>
            <Button color="primary" icon="telegram">
              <Link
                to={user ? '/foundation' : '/sign-in'}
                style={{ textDecoration: 'none', color: '#042039' }}
              >
                Join Telegram Community
              </Link>
            </Button>
          </div>
        </Contain>
        <TImg>
          <img src={TelegramCommunity} alt="Telegram Community" />
        </TImg>
      </Container>
    </>
  );
};

export default LandingArea;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const TImg = styled.div`
  margin: auto;
  width: 50%;

  img {
    width: 90%;
  }
`;

const Contain = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto auto auto 100px;

    h1 {
      font-size: 48px;
      line-height: 64px;
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
      margin: 24px 0;
      width: 60%;
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
  color: #317ec2;
`;
