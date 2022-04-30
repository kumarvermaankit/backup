import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Jobprofiles from '../../../assets/Jobprofile.svg';
import JobprofilesTab from '../../../assets/JobprofilesTab.svg';
import ButtonPart from './ButtonPart';

const JobProfiles: React.FC = () => {
  return (
    <>
      <Container id="pricing">
        <Text type="h2" color="#262626">
          Job Profiles
        </Text>
        <Contain>
          <Left>
            {window.innerWidth > 768 ? (
              <img src={Jobprofiles} alt="Job profiles" />
            ) : (
              <img src={JobprofilesTab} alt="Job profiles" />
            )}
            <ButtonPart />
          </Left>
        </Contain>
      </Container>
    </>
  );
};

export default JobProfiles;

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 10vh 10vw;
  img {
    width: 30vw;
    height: auto;
  }

  h2 {
    margin-top: 5vh;
    text-align: center;
  }

  @media (max-width: 770px) {
    height: auto;
  }
`;

const Contain = styled.div`
  justify-content: space-between;
  align-items: center;
  text-align: center;

  img {
    margin-top: 10vh;
  }

  @media (max-width: 770px) {
    display: block;
    margin: 6vh auto;
  }
`;

const Left = styled.div`
  text-align: center;
  img {
    width: 65vw;
    height: auto;
    margin-bottom: 3vh;
  }

  div {
    text-align: center;
  }

  h2 {
    margin-bottom: 5vh;
  }

  button {
    span {
      i {
        span {
          svg {
            line {
              stroke: #262626;
            }
          }
        }
      }
    }
  }

  @media (max-width: 770px) {
    h2 {
      font-size: 6.5vw;
    }
    img {
      width: auto;
    }
  }

  @media (max-width: 530px) {
  }
`;
