import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { PageView, initGA } from '../../pages/Tracking';
import Header from '../../components/Header/Header';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import Footer from '../../components/Footer';
import LandingArea from './parts/LandingArea';
import Pricing from './parts/Pricing';
import ValueProposition from './parts/ValueProposition';
import Mixpanel from 'mixpanel-browser';

Mixpanel.init('443966eb9316ce0c87909b540848ebb5');

const Wiseup: React.FC = () => {
  useEffect(() => {
    initGA();
    PageView('Talent Pool');
  }, []);

  useEffect(() => {
    Mixpanel.track('Links', {
      url: window.location.href
    });
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <title>Talent Pool - IndyWise</title>
      </Helmet>
      <Header
        headerColor="#F8FBFD"
        textColor="#262626"
        buttonTextColor="#262626"
        hideStartForFree={true}
      />
      <LandingArea />
      <ValueProposition />
      <Pricing />
      <NewsletterSignUp />
      <Footer />
    </PageContainer>
  );
};

export default Wiseup;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
