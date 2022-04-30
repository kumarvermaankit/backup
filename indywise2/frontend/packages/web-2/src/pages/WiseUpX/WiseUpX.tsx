import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { PageView, initGA } from '../../pages/Tracking';
import Header from '../../components/Header/Header';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import Footer from '../../components/Footer';
import LandingArea from './parts/LandingArea';
import Second from './parts/Second';
import KeyHighlights from './parts/KeyHighlights';
import ValueProposition from './parts/ValueProposition';
import WhatYouAchieve from './parts/WhatYouAchieve';
import Includes from './parts/Includes';
import WhoCanApply from './parts/WhoCanApply';
import Pricing from './parts/Pricing';
import ToggleButton from '../../components/ToggleButton';
import {
  SnapScrollCompEndToStart,
  SnapScrollComp
} from '../../components/SnapScrollComp';
import Mixpanel from 'mixpanel-browser';

Mixpanel.init('443966eb9316ce0c87909b540848ebb5');

const WiseUpX: React.FC = () => {
  useEffect(() => {
    initGA();
    PageView('Wiseup X');
  }, []);

  useEffect(() => {
    Mixpanel.track('Links', {
      url: window.location.href
    });
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <title>Wiseup X - IndyWise</title>
      </Helmet>
      <SnapScrollCompEndToStart>
        <Header />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <LandingArea />
        <ToggleButton />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <Second />
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
        <Includes />
      </SnapScrollCompEndToStart>
      <SnapScrollComp>
        <WhoCanApply />
      </SnapScrollComp>
      <Pricing />
      <SnapScrollComp>
        <NewsletterSignUp />
        <Footer />
      </SnapScrollComp>
    </PageContainer>
  );
};

export default WiseUpX;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
