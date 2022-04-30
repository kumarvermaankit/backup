import React from 'react';
import styled from 'styled-components';
// import ScorecardBG from '../../../assets/ScorecardHeadingPride.svg';
import ScorecardBG from '../../../assets/scoreCardBG.svg';
import { Logo } from '@indywise/uikit';

const Landing: React.FC = () => {
  return (
    <Container>
      <h2>WiseUp SCORECARD</h2>
      <ImageWrapper>
        <img src={ScorecardBG} alt="heading" />
      </ImageWrapper>
      <a href="https://indywise.com/">
        <Logo />
      </a>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  width: 100%;
  height: 15rem;
  position: relative;
  /* background-image: url(${ScorecardBG});
  background-repeat: no-repeat;
  background-size: cover; */

  i {
    z-index: 10;
    position: absolute;
    right: 4%;
    top: 3%;
    svg {
      height: 32px;
      width: auto;
    }
  }

  & > h2 {
    z-index: 10;
    position: absolute;
    left: 1rem;
    top: 0;
    font-size: 40px;

    font-family: Mulish;

    @media (max-width: 770px) {
      width: 208px;
      font-size: 32px;
    }
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }

  @media (max-width: 475px) {
    height: 145px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  border-radius: 12px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;
