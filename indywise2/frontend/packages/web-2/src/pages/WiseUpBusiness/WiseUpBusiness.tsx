import React from 'react';
import styled from 'styled-components';
import PlansDetailOverview from './parts/PlansDetailOverview';
import SelectLicenses from './parts/SelectLicences';
import StartupHeader from '../../components/StartupHeader';

const WiseUpBusiness = () => {
  return (
    <Container>
      <StartupHeader type="getresources" />

      <Wrapper>
        <Main>
          <PlansDetailOverview />
          <SelectLicenses />
        </Main>
      </Wrapper>
    </Container>
  );
};

export default WiseUpBusiness;

const Container = styled.div`
  width: 100%;

  position: relative;
  display: flex;
`;

const Wrapper = styled.div`
  margin: 0 auto;

  margin-left: 72px;
  flex: 1 1 0;
  padding: 35px;
  display: flex;

  @media (max-width: 770px) {
    margin: 0;
  }
  @media (max-width: 600px) {
    padding: 25px;
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
