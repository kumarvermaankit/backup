import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import TPBgTab from '../../../assets/TPBgTab.svg';
import ButtonPart from './ButtonPart';
import TPBg from '../../../assets/TPBg.svg';
import TPBgHover from '../../../assets/TPBgHover.svg';

const LandingArea: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <Text type="h1" color="#3C54AF">
            Find Eager Interns Who Are Curious To Learn And Grow
          </Text>
          {/* <Text type="subtitle" color="#4B4B4B">
            All Talents have been Vetted and Quantified Based on their Skills
          </Text> */}
          <ButtonPart />
        </Contain>
        <Img />
      </Container>
    </>
  );
};

export default LandingArea;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8fbfd;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    background: #f8fbfd;
    align-items: center;
    background-image: unset;
  }
`;

const Contain = styled.div`
  position: absolute;
  top: 10%;
  width: 60%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;

  h1 {
    font-size: 64px;
    line-height: 72px;
    font-weight: bold;
    margin: 24px 0;
  }

  @media (max-width: 1300px) {
    margin-top: 5rem;
  }

  @media (max-height: 600px) {
    margin-top: 0rem;
  }

  @media (max-width: 1024px) {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 724px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media (max-width: 380px) {
    width: 90%;
  }
`;

const Img = styled.div`
  position: absolute;
  bottom: 0;
  width: 45vw;
  height: 350px;
  background-image: url(${TPBg});
  background-size: contain;
  background-position: bottom center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    background-image: url(${TPBgTab});
  }

  @media (max-width: 380px) {
    width: 300px;
  }

  &:hover {
    background-image: url(${TPBgHover});
  }
`;
