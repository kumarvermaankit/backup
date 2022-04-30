import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Background from '../../../assets/ValueProposition.png';
import LaptopImage from '../../../assets/EmployeeProfiles.png';

const EmployeeProfiles: React.FC = () => {
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold>
        Intern Profiles
      </Text>
      <ImageWrapper>
        <Image src={LaptopImage} alt="Employee Profiles" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default EmployeeProfiles;

const Wrapper = styled.div`
  width: 100%;
  height: 1834px;
  background-image: url(${Background});
  background-repeat: repeat;
  h1 {
    margin-top: 16vh;
    line-height: 6vw;
    text-align: center;
    width: 100%;
    color: #042039;
  }
  @media (min-width: 900px) and (max-width: 1599px) {
    height: auto;
  }
  @media (max-width: 530px) {
    margin: 0px;
    height: auto;
    h1 {
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      margin-top: 10vh;
    }
  @media (max-width: 359px) {
    h1 {
      margin: 6vh auto 2vh auto;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  text-align: center;
  @media (max-width: 530px) {
    margin-top: 10vh;
  }
`;

const Image = styled.img`
  width: 65vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
  @media (max-width: 530px) {
    margin-top: 0vh;
    width: 90vw;
  }
`;
