import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageView, initGA } from '../../pages/Tracking';
import Footer from '../../components/Footer';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import CallToActions from './parts/CallToActions';
import Intro from './parts/Intro';
import KeyHighlights from './parts/KeyHighlights';
import ProgramDelivery from './parts/ProgramDelivery';
import ReadyToStart from './parts/ReadyToStart';
import ValueGeneration from './parts/ValueGeneration';
import WhoWillMentorYou from './parts/WhoWillMentorYou';
import WhoCanApply from './parts/WhoCanApply';
import LandingArea from './parts/LandingArea';
import Header from '../../components/Header/Header';
import { Helmet } from 'react-helmet';

const MentoredInternshipPage: React.FC = (props) => {
  useEffect(() => {
    initGA();
    PageView('MentoredInternshipPage');
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <title>Mentored Internships - IndyWise</title>
      </Helmet>
      <Header headerColor="#FAEFD9" />
      <LandingArea />
      <CallToActions />
      <Intro />
      <KeyHighlights />
      <ValueGeneration />
      <WhoWillMentorYou />
      <WhoCanApply />
      <ProgramDelivery />
      <ReadyToStart />
      <NewsletterSignUp />
      <Footer />
    </PageContainer>
  );
};

export default MentoredInternshipPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
