import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { PageView, initGA } from '../../pages/Tracking';
import Header from '../../components/Header/Header';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import Footer from '../../components/Footer';
import LandingArea from './parts/LandingArea';
import LevelUp from './parts/LevelUp';
import KeyHighlights from './parts/KeyHighlights';
import ValueProposition from './parts/ValueProposition';
import DemandFeatures from './parts/DemandFeatures';
import WhatYouAchieve from './parts/WhatYouAchieve';
import WhatIsIncluded from './parts/WhatIsIncluded';
import Pricing from './parts/Pricing';
import { SnapScrollCompEndToStart } from '../../components/SnapScrollComp';
import Mixpanel from 'mixpanel-browser';

Mixpanel.init('443966eb9316ce0c87909b540848ebb5');

const WiseUpFoundation: React.FC = () => {
  useEffect(() => {
    initGA();
    PageView('Wiseup Foundation');
  }, []);

  useEffect(() => {
    Mixpanel.track('Links', {
      url: window.location.href
    });
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <title>Wiseup Foundation - IndyWise</title>
      </Helmet>
      <SnapScrollCompEndToStart>
        <Header
          headerColor="linear-gradient(72.46deg, #EAF3FA 0%, #FFFFFF 100%)"
          textColor="#262626"
          buttonTextColor="#262626"
          hideStartForFree={true}
        />
        <LandingArea />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <LevelUp />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <KeyHighlights />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <ValueProposition />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <DemandFeatures />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <WhatYouAchieve />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <WhatIsIncluded />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <Pricing />
      </SnapScrollCompEndToStart>
      <SnapScrollCompEndToStart>
        <NewsletterSignUp />
        <Footer />
      </SnapScrollCompEndToStart>
    </PageContainer>
  );
};

export default WiseUpFoundation;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
