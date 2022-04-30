import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { PageView, initGA } from '../../pages/Tracking';
import { useHistory, useLocation } from 'react-router-dom';

import LandingArea from './parts/LandingArea';
import CallToActions from './parts/CallToActions';
import Header from '../../components/Header/Header';
import IdealMentor from './parts/IdealMentor';
import KeyBenefits from './parts/KeyBenefits';
import ReadyToJoin from './parts/ReadyToJoin';
import WhatYouDo from './parts/WhatYouDo';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import Footer from '../../components/Footer';
import { ModalState } from '../../contexts/BookingModalContext';
import { initModalState, isOnApplyPage } from '../../utils/helpers';
import GoogleFormModal from '../../components/GoogleFormModal';
// import MentorOnboardForm from './../../components/MentorOnboardingForm/MentorOnboardForm';
import {
  SnapScrollComp,
  SnapScrollCompEndToStart
} from '../../components/SnapScrollComp';
import Mixpanel from 'mixpanel-browser';

Mixpanel.init('443966eb9316ce0c87909b540848ebb5');

const JoinAsAMentor: React.FC = () => {
  const path = useLocation().pathname;
  const history = useHistory();
  const [modalState, setModalState] = React.useState<ModalState>(
    initModalState(path)
  );

  const closeModal = () => {
    setModalState(ModalState.CLOSE);
    if (isOnApplyPage(path)) history.push('/join-as-a-mentor');
  };

  const showModal = () => {
    setModalState(ModalState.OPEN);
  };

  useEffect(() => {
    initGA();
    PageView('Join As A Mentor');
  }, []);

  useEffect(() => {
    Mixpanel.track('Links', {
      url: window.location.href
    });
  });

  return (
    <>
      <JoinAsAMentorContainer>
        <Helmet>
          <title>Join as a Mentor - IndyWise</title>
        </Helmet>
        <GoogleFormModal
          modalState={modalState}
          closeModal={closeModal}
          src="https://docs.google.com/forms/d/18El5WQSFVnwfqXCOyHJQrf1b7ynZU-SYOTODXhsaCDQ/viewform?embedded=true"
          title="mentor apply form"
        />
        {/* <MentorOnboardForm modalState={modalState} closeModal={closeModal} /> */}
        <Header />
        <SnapScrollCompEndToStart>
          <LandingArea showModal={showModal} />
        </SnapScrollCompEndToStart>
        <SnapScrollCompEndToStart>
          <CallToActions />
        </SnapScrollCompEndToStart>
        <SnapScrollCompEndToStart>
          <IdealMentor showModal={showModal} />
        </SnapScrollCompEndToStart>
        <SnapScrollCompEndToStart>
          <WhatYouDo showModal={showModal} />
        </SnapScrollCompEndToStart>
        <SnapScrollCompEndToStart>
          <KeyBenefits />
        </SnapScrollCompEndToStart>
        <SnapScrollCompEndToStart>
          <ReadyToJoin showModal={showModal} />
        </SnapScrollCompEndToStart>
        <SnapScrollComp>
          <NewsletterSignUp />
          <Footer />
        </SnapScrollComp>
      </JoinAsAMentorContainer>
    </>
  );
};

export default JoinAsAMentor;

const JoinAsAMentorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
