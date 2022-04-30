import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { PageView, initGA } from '../../pages/Tracking';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Mixpanel from 'mixpanel-browser';
import LandingPage from './parts/LandingPage';

Mixpanel.init('443966eb9316ce0c87909b540848ebb5');

const TelegramCommunity: React.FC = () => {
  useEffect(() => {
    initGA();
    PageView('Telegram Community');
  }, []);

  useEffect(() => {
    Mixpanel.track('Links', {
      url: window.location.href
    });
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <title>Telegram Community - IndyWise</title>
      </Helmet>
      <Header
        headerColor="#FFF"
        textColor="#262626"
        buttonTextColor="#262626"
        hideStartForFree={true}
      />
      <LandingPage />
      <Footer />
    </PageContainer>
  );
};

export default TelegramCommunity;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
