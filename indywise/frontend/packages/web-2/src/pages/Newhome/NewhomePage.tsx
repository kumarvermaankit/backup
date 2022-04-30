import React, { useEffect, useContext } from 'react';
import { MenteesListContext } from '../../contexts/MenteesListContext';
import { AuthContext } from '../../contexts/AuthContext';
import styled from 'styled-components';
import { PageView, initGA } from '../Tracking';
import Header from '../../components/Header/Header';
import LandingArea from './parts/LandingArea';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import Footer from '../../components/Footer';
import CallToActions from './parts/CallToActions';
import HowIndyWiseWorks from './parts/HowIndyWiseWorks';
import IndyInsights from './parts/IndyInsights';
import WeAreOnAMission from './parts/WeAreOnAMission';
import JoinAsAMentor from './parts/JoinAsAMentor';
import BrowseMentors from './parts/BrowseMentors';
import SecureDreamJob from './parts/SecureDreamJob';
import Testimonials from './parts/Testimonials';
import { Helmet } from 'react-helmet';

const NewhomePage: React.FC = () => {
  const { business } = useContext(AuthContext);
  const { initList } = useContext(MenteesListContext);

  useEffect(() => {
    if (business) {
      initList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [business]);

  useEffect(() => {
    initGA();
    PageView('HomePage');
  }, []);

  return (
    <PageContainer>
      <Helmet>
        <title>IndyWise - Next-gen Mentoring Driven Upskilling Platform</title>
        <meta
          name="description"
          content="IndyWise is a Mentoring driven and AI Powered Upskilling Platform which enables students, job seekers and young professionals to get personalized mentoring and upskilling.  We help students secure Mentored Internships with Global Startups. We help startups and enterprises to upskill their junior employees with our unique competency frameworks and mentoring ecosystem."
        />
      </Helmet>
      <Header
        headerColor="#042039"
        textColor="white"
        buttonTextColor="#042039"
        buttonColor="#E9E9E9"
      />
      <LandingArea />
      <CallToActions />
      <SecureDreamJob />
      <BrowseMentors />
      <JoinAsAMentor />
      <WeAreOnAMission />
      <HowIndyWiseWorks />
      <Testimonials />
      <IndyInsights />
      <CallToActions type="dark" />
      <NewsletterSignUp />
      <Footer />
    </PageContainer>
  );
};

export default NewhomePage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
