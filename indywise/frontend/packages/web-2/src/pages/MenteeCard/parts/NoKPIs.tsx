import React from 'react';
import { Text, Icon, Button } from '@indywise/uikit';
import styled from 'styled-components';

const NoKPISection: React.FC = () => {
  return (
    <>
      <Text type="h4" color="#262626">
        KPI Aggregate Scores
      </Text>
      <NoKpi>
        <Icon icon="addKpi" size="6vw" />
        <Text type="body" color="#4B4B4B">
          Start adding KPIs of this Mentee which would help him/her in securing
          Mentored Internship
        </Text>
      </NoKpi>
      <ButtonContainer>
        <Button>Add KPI Metrics</Button>
      </ButtonContainer>
    </>
  );
};

export default NoKPISection;

const NoKpi = styled.div`
  position: absolute;
  top: 50%;
  width: 21%;
  text-align: center;

  p {
    font-weight: 300;
    margin-top: 2vh;
  }

  @media (max-width: 1099px) {
    position: unset;
    width: auto;
    margin-top: 5vh;
  }
`;
const ButtonContainer = styled.div`
  bottom: 4vw;
  position: absolute;
  width: 21%;

  button {
    margin-top: 2vh;
    width: 100%;
  }

  @media (max-width: 1099px) {
    position: unset;
    width: auto;
  }
`;
