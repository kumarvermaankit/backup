import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageView, initGA } from '../../pages/Tracking';
import Header from '../../components/Header/Header';
import LandingArea from './parts/LandingArea';
import Struggling from './parts/Struggling';
import ValueProposition from './parts/ValueProposition';
import WhatWeOffer from './parts/WhatWeOffer';
import EmployeeProfiles from './parts/EmployeeProfiles';
import WhoAreMentoredInterns from './parts/WhoAreMentoredInterns';
import HowToStart from './parts/HowToStart';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import GoogleFormModal from '../../components/GoogleFormModal';
import { ModalState } from '../../contexts/BookingModalContext';
import { initModalState, isOnApplyPage } from '../../utils/helpers';
import { useLocation, useHistory } from 'react-router-dom';

const Startups: React.FC = () => {
  const path = useLocation().pathname;
  const history = useHistory();
  const [modalState, setModalState] = React.useState<ModalState>(
    initModalState(path)
  );

  const closeModal = () => {
    if (isOnApplyPage(path)) history.push('/startups');
    setModalState(ModalState.CLOSE);
  };

  const showModal = () => {
    setModalState(ModalState.OPEN);
  };

  useEffect(() => {
    initGA();
    PageView('Startups');
  }, []);

  return (
    <>
      <StartupsContainer>
        <Helmet>
          <title>Startups - IndyWise</title>
        </Helmet>
        <GoogleFormModal
          modalState={modalState}
          closeModal={closeModal}
          src="https://docs.google.com/forms/d/e/1FAIpQLSexTJ3oDmPcfjhI-0I8Lk4xNoNwTj-4dUvqSRdQg656FjFjlA/viewform?embedded=true"
          title="startups apply form"
        />
        <Header
          headerColor="#3C54AF"
          buttonColor="white"
          textColor="white"
          buttonTextColor="#3C54AF"
        />
        <LandingArea />
        <Struggling showModal={showModal} />
        <WhoAreMentoredInterns showModal={showModal} />
        <ValueProposition />
        <WhatWeOffer showModal={showModal} />
        <EmployeeProfiles />
        <HowToStart showModal={showModal} />
        <NewsletterSignUp />
        <Footer />
      </StartupsContainer>
    </>
  );
};

export default Startups;

const StartupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
