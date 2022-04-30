import React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';

const Footer: React.FC = () => {
  return (
    <Container>
      <Box>
        <p>Made by IndyWise with</p>
        <Icon icon="heart" />
      </Box>
      <LinksContainer>
        <a
          href="https://www.linkedin.com/company/indywise/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="linkedinWithCircle" />
        </a>
        <a
          href="https://www.facebook.com/IndyWiser"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="facebookWithCircle" />
        </a>
        <a
          href="https://twitter.com/indywiser"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="twitter" />
        </a>
        <a
          href="https://www.instagram.com/indywiser"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="instagram" />
        </a>
        <a
          href="https://indywise.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="medium" />
        </a>
      </LinksContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding: 5px 8px;

  background: #042039;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 475px) {
    padding: 8px 8px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  position: relative;

  & > p {
    font-size: 1.2rem;
    color: #fad897;
    margin-right: 5px;

    @media (max-width: 735px) {
      font-size: 0.9rem;
    }

    @media (max-width: 425px) {
      font-size: 0.5rem;
    }
  }

  & > span {
    transform: translateY(2px);
    width: 24.43px;
    height: 20px;
    svg {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 425px) {
      transform: translateY(0px);
      width: 18px;
      height: 18px;
    }
  }
`;

const LinksContainer = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 1rem;
  }

  & > a {
    & > span > svg {
      width: 30px;
      height: 30px;
      transform: translateY(2px);

      @media (max-width: 735px) {
        width: 26px;
        height: 26px;
      }

      @media (max-width: 475px) {
        width: 22px;
        height: 22px;
      }
    }
  }
`;
