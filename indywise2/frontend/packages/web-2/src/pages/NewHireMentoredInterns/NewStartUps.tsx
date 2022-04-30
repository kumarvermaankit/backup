import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { PageView, initGA } from '../../pages/Tracking';
import Header from '../../components/Header/Header';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import Footer from '../../components/Footer';
import LandingArea from './parts/LandingArea';
import WeHelp from './parts/WeHelp';
import WeHelpYou from './parts/WeHelpYou';
import ValueProposition from './parts/ValueProposition';
import WhatYouAchieve from './parts/WhatYouAchieve';
import Features from './parts/Features';
import JobProfiles from './parts/JobProfiles';
import HowToStart from './parts/HowToStart';

const Wiseup: React.FC = () => {
  useEffect(() => {
    initGA();
    PageView('Wiseup');
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <title>Wiseup - IndyWise</title>
      </Helmet>
      <Header
        headerColor="#F8FBFD"
        textColor="#262626"
        buttonTextColor="#262626"
        hideStartForFree={true}
      />
      <LandingArea />
      <WeHelp />
      <WeHelpYou />
      <ValueProposition />
      <WhatYouAchieve />
      <Features />
      <JobProfiles />
      <HowToStart />
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
