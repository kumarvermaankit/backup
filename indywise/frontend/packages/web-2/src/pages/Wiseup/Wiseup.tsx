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
import Pricing from './parts/Pricing';
import HyperPersonalized from './parts/HyperPersonalized';
import Supercharge from './parts/Supercharge';
import KeyHighlights from './parts/KeyHighlight';
import { SnapScrollCompEndToStart } from '../../components/SnapScrollComp';
import Mixpanel from 'mixpanel-browser';

Mixpanel.init('443966eb9316ce0c87909b540848ebb5');

const Wiseup: React.FC = () => {
  useEffect(() => {
    initGA();
    PageView('Wiseup');
  }, []);

  useEffect(() => {
    Mixpanel.track('Links', {
      url: window.location.href
    });
  });

  return (
    <PageContainer>
      <Helmet>
        <title>Wiseup - IndyWise</title>
      </Helmet>
      <SnapScrollCompEndToStart>
        <Header
          headerColor="#F8FBFD"
          textColor="#262626"
          buttonTextColor="#262626"
          hideStartForFree={true}
        />
        <LandingArea />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <WeHelp />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <WeHelpYou />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <Supercharge />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <HyperPersonalized />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <KeyHighlights />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <ValueProposition />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <WhatYouAchieve />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <Features />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <Pricing />
      </SnapScrollCompEndToStart>
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
