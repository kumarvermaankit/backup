import React from 'react';
import styled from 'styled-components';
import StartupHeader from '../../components/StartupHeader';
import StartHeader from '../../components/Header/PortfolioMainHeader';
import Landing from './parts/Landing';
import Resources from './parts/Resources';

const StartupResouces: React.FC = () => {
  return (
    <Container>
      <StartHeader name="Employees" type="startup" />
      <StartupHeader type="resources" />
      <Wrapper>
        <Landing />
        <Resources />
      </Wrapper>
    </Container>
  );
};

export default StartupResouces;

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const Wrapper = styled.div`
  margin: 80px auto 0px auto;
  margin-left: 72px;
  flex: 1 1 0;
  padding: 35px;
  @media (max-width: 770px) {
    margin: 0;
  }
  @media (max-width: 600px) {
    padding: 25px;
  }
`;
