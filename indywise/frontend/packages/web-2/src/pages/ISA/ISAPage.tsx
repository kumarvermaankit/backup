import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageView, initGA } from '../../pages/Tracking';
import Footer from '../../components/Footer';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import CallToActions from './parts/CallToActions';
import Intro from './parts/Intro';
import Industries from './parts/Industries';
import ProgramStructure from './parts/ProgramStructure';
import ProgramDelivery from './parts/ProgramDelivery';
import ValueGeneration from './parts/ValueGeneration';
import ReadyToStart from './parts/ReadyToStart';
import WhoWillMentorYou from './parts/WhoWillMentorYou';
import StickyOverlay from './parts/StickyOverlay';
import LandingArea from './parts/LandingArea';
import Header from '../../components/Header/Header';
import { Helmet } from 'react-helmet';

const ISAPage: React.FC = (props) => {
  useEffect(() => {
    initGA();
    PageView('ISA');
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <title>Mentored Internships - IndyWise</title>
      </Helmet>
      <Header headerColor="#F2A922" />
      <LandingArea />
      <StickyOverlay />
      <CallToActions />
      <Intro />
      <Industries />
      <ProgramStructure />
      <ProgramDelivery />
      <ValueGeneration />
      <WhoWillMentorYou />
      <ReadyToStart />
      <NewsletterSignUp />
      <Footer />
    </PageContainer>
  );
};

export default ISAPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
