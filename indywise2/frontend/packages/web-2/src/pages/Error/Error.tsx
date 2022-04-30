import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageView, initGA } from '../Tracking';
import Header from '../../components/Header/Header';
import IMG from '../../assets/SpaceBG.svg';
import Image from '../../assets/404.png';
import { Text, Button } from '@indywise/uikit';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  useEffect(() => {
    initGA();
    PageView('Error');
  }, []);

  return (
    <>
      <Header />
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      <BackgroundImage>
        <CenterImage>
          <img src={Image} alt="404" />
        </CenterImage>
        <CenterText>
          <Text type="h3">Lost in Space </Text>
          <Text type="body">
            The page you are looking for isn't found :( We suggest you to go
            back to Home
          </Text>
        </CenterText>
        <Link to="/">
          <Button>
            <Text type="body">Back to Home</Text>
          </Button>
        </Link>
      </BackgroundImage>
    </>
  );
};

export default ErrorPage;

const BackgroundImage = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${IMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;

  button {
    margin-top: 30px;
    width: 320px;
    height: 52px;
    border-radius: 12px;
    padding: 8px 16px;
  }
  p {
    font-size: 24px;
    line-height: 36px;
    @media (max-width: 560px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media (max-width: 560px) {
    button {
      width: 200px;
      height: 40px;
      padding: 0;
    }
  }
`;

const CenterImage = styled.div`
  img {
    height: 25vh;
    transform: translateY(60px);
    @media (max-width: 1100px) {
      height: 20vh;
    }
    @media (max-width: 560px) {
      height: 17vh;
    }
    @media (max-width: 360px) {
      height: 14vh;
    }
  }
`;

const CenterText = styled.div`
  h3 {
    text-align: center;
    font-family: Mulish;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 56px;
    margin-top: 100px;
    margin-bottom: 20px;

    /* IndyGrey/IG3 */

    color: #cbcbcb;
    @media (max-width: 560px) {
      font-size: 34px;
      line-height: 44px;
    }
  }
  p {
    font-size: 24px;
    font-style: roboto;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    color: white;
    width: 440px;
    @media (max-width: 560px) {
      font-size: 16px;
      line-height: 24px;
      width: 300px;
    }
    @media (max-width: 360px) {
      width: 260px;
    }
  }
`;
