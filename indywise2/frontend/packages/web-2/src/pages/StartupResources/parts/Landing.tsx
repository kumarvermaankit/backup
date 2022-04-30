import React from 'react';
import styled from 'styled-components';
import StartupResourcesBG from '../../../assets/StartupResourcesBG.svg';
import { Logo } from '@indywise/uikit';

const Landing: React.FC = () => {
  return (
    <Wrapper>
      <a href="https://indywise.com/">
        <Logo />
      </a>
      <h1>
        Helping the employees reach their{' '}
        <ColoredText>full potential</ColoredText>
      </h1>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  position: relative;
  height: 15rem;
  border-radius: 12px;
  overflow: hidden;
  background-image: url(${StartupResourcesBG});
  background-repeat: no-repeat;
  background-size: cover;

  & > a > i {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  & > h1 {
    position: absolute;
    z-index: 8;
    max-width: 72%;
    top: 8rem;
    left: 25px;
    font-family: Roboto;
    margin: 0;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    color: #3c54af;

    @media (max-width: 645px) {
      top: 5rem;
    }
  }
`;

const ColoredText = styled.span`
  color: #f2a922;
  text-transform: uppercase;
`;
