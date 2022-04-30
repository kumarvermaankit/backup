import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { Helmet } from 'react-helmet';
import { PageView, initGA } from '../Tracking';
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
import {
  SnapScrollCompEndToStart,
  SnapScrollComp
} from '../../components/SnapScrollComp';

const WiseUpX: React.FC = () => {
  useEffect(() => {
    initGA();
    PageView('Wiseup X Internships');
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <title>WiseUp X Upskilling - IndyWise</title>
      </Helmet>
      <SnapScrollCompEndToStart>
        <Header />
        <LandingArea />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <IconWrapper>
          <Icon icon="xLogo" />
        </IconWrapper>
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <Second />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <KeyHighlights />
      </SnapScrollCompEndToStart>
      <SnapScrollComp>
        <ValueProposition />
      </SnapScrollComp>
      <SnapScrollCompEndToStart>
        <WhatYouAchieve />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <Includes />
      </SnapScrollCompEndToStart>
      <SnapScrollComp>
        <WhoCanApply />
      </SnapScrollComp>
      <SnapScrollComp>
        <Pricing />
      </SnapScrollComp>
      <SnapScrollCompEndToStart>
        <NewsletterSignUp />
      </SnapScrollCompEndToStart>
      <SnapScrollComp>
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

const IconWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;

  span {
    svg {
      width: auto;
      height: 40px;
    }
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
