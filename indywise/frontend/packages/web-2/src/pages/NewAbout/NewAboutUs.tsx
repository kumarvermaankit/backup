import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageView, initGA } from '../../pages/Tracking';
import Header from '../../components/Header/Header';
import LandingSection from './parts/LandingSection';
import NewsletterSignUp from '../../components/NewsletterSignUp';
import Footer from '../../components/Footer';
import BrandStory from './parts/BrandStory';
import MissionVision from './parts/MissionVision';
import Team from './parts/Team';
import Partners from './parts/Partners';
import Investors from './parts/Investors';
import Careers from './parts/Careers';
import Office from './parts/Office';
import MenuBar from './parts/MenuBar';
import AOS from 'aos';
import {
  SnapScrollComp,
  SnapScrollCompEndToStart
} from '../../components/SnapScrollComp';

const NewAboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init();
    initGA();
    PageView('About');
    document.title = 'About - IndyWise';
  }, []);

  return (
    <>
      <AboutUsContainer>
        <Header
          headerColor="#ffffff"
          buttonColor="#0C3559"
          textColor="#0C3559"
          buttonTextColor="#ffffff"
        />
        <MenuBar />
        <SnapScrollCompEndToStart>
          <LandingSection />
        </SnapScrollCompEndToStart>
        <SnapScrollCompEndToStart>
          <div data-aos="fade" data-aos-delay="1000">
            <BrandStory />
          </div>
        </SnapScrollCompEndToStart>
        <SnapScrollComp>
          <div data-aos-delay="1000">
            <MissionVision />
          </div>
        </SnapScrollComp>
        <SnapScrollComp>
          <Team />
        </SnapScrollComp>
        <SnapScrollCompEndToStart>
          <Office />
        </SnapScrollCompEndToStart>
        <SnapScrollCompEndToStart>
          <Investors />
        </SnapScrollCompEndToStart>
        <SnapScrollCompEndToStart>
          <Partners />
        </SnapScrollCompEndToStart>
        <SnapScrollComp>
          <Careers />
        </SnapScrollComp>
        <SnapScrollComp>
          <div id="footer-section">
            <NewsletterSignUp />
            <Footer />
          </div>
        </SnapScrollComp>
        <SnapScrollCompEndToStart>
          <div
            style={{
              width: '100vw',
              height: '0px'
            }}
          ></div>
        </SnapScrollCompEndToStart>
      </AboutUsContainer>
    </>
  );
};

export default NewAboutUs;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
`;
