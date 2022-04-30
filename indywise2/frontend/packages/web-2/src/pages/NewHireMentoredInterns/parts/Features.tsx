import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Hire from '../../../assets/Hiring.svg';
import Stipends from '../../../assets/Stipend.svg';
import Payrolls from '../../../assets/Payroll.svg';
import Training from '../../../assets/Trainings.svg';
import Performances from '../../../assets/Performance.svg';

const Features: React.FC = () => {
  return (
    <>
      <Container>
        <Text type="h2" color="#ffffff">
          What is Included
        </Text>
        <Contain>
          <Each>
            <img src={Hire} alt="Hiring" />
            <Text type="h4" color="#ffffff">
              Hiring Process
            </Text>
          </Each>
          <Each>
            <img src={Stipends} alt="stipend" />
            <Text type="h4" color="#ffffff">
              Stipend Paid to Interns
            </Text>
          </Each>
          <Each>
            <img src={Payrolls} alt="Payroll" />
            <Text type="h4" color="#ffffff">
              Payroll Management
            </Text>
          </Each>
          <Each>
            <img src={Training} alt="Trainings" />
            <Text type="h4" color="#ffffff">
              Intern’s Training and Upskilling
            </Text>
          </Each>
          <Each>
            <img src={Performances} alt="Performances" />
            <Text type="h4" color="#ffffff">
              Performance aligned to your set KPIs
            </Text>
          </Each>
        </Contain>
      </Container>
    </>
  );
};

export default Features;

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #030f44;
  h2 {
    margin-top: 15vh;
    text-align: center;
  }
  @media (max-width: 770px) {
    margin-top: 1vh;
    height: auto;
    h2 {
      margin: 10vh auto;
      font-size: 8vw;
    }
  }
`;

const Contain = styled.div`
  display: flex;
  margin: 10vh 5vw 15vh 5vw;
  justify-content: space-evenly;
  @media (max-width: 770px) {
    display: block;
    margin: 10vh 10vw;
  }
`;

const Each = styled.div`
  text-align: center;
  margin-right: 3vw;
  width: 14vw;
  img {
    display: flex;
    height: auto;
    margin-bottom: 2vh;
  }
  @media (max-width: 770px) {
    width: auto;
    margin-bottom: 5vh;
    img {
      margin-left: 17vw;
      width: 40vw;
      height: auto;
    }
  }
`;
