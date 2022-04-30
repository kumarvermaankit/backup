import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageView, initGA } from '../../pages/Tracking';
import Header from '../../components/Header/Header';
import LandingArea from './parts/LandingArea';
import CallToActions from './parts/CallToActions';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import Footer from '../../components/Footer';
import PaymentPolicy from './parts/PaymentPolicy';
import PrivacyPolicy from './parts/PrivacyPolicy';
import WayOfMentoring from './parts/WayOfMentoring';
import FAQ from './parts/FAQs';
import TermsAndConditions from './parts/TermsAndCondtitions';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const map = {
  'payment-policy': PaymentPolicy,
  'privacy-policy': PrivacyPolicy,
  terms: TermsAndConditions,
  'way-of-mentoring': WayOfMentoring,
  faq: FAQ
};

const Support: React.FC<RouteComponentProps<{ type: string }>> = ({
  match
}) => {
  useEffect(() => {
    initGA();
    PageView('Support');
  }, []);

  return (
    <>
      <Helmet>
        <title>Support - IndyWise</title>
      </Helmet>
      <AboutUsContainer>
        <Header
          headerColor="#0C3559"
          buttonColor="white"
          textColor="white"
          buttonTextColor="#0c3559"
        />
        <LandingArea />
        <CallToActions />
        {((map as any)[match.params.type] ?? map['faq'])({})}
        <NewsletterSignUp />
        <Footer />
      </AboutUsContainer>
    </>
  );
};

export default Support;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
