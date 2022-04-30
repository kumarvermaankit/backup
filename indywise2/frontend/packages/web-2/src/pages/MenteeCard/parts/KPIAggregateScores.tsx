import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { Link } from 'react-router-dom';
import KPIScores from './KPIScores';
import EditKPIMetrics from './EditKPIMetrics';

const KPIAggregateScores: React.FC = () => {
  return (
    <>
      <Text type="h4" color="#262626">
        KPI Aggregate Scores
      </Text>
      <Wrapper>
        <KPIScores />
      </Wrapper>
      <ButtonContainer>
        <Link to="/">
          <Text type="body" color="#A16A06">
            Show All KPIs
          </Text>
        </Link>
        <EditKPIMetrics />
      </ButtonContainer>
    </>
  );
};

export default KPIAggregateScores;

const Wrapper = styled.div`
  margin: 3vh 0vw;
  overflow-y: auto;
  height: 50vh;

  @media (max-width: 1099px) {
    display: block;
    max-height: 50vh;
    height: auto;
  }
`;

const ButtonContainer = styled.div`
  bottom: 4vw;
  position: absolute;
  width: 21%;

  a {
    color: #a16a06;
    text-align: center;
  }

  button {
    margin-top: 2vh;
    width: 100%;
  }

  @media (max-width: 1099px) {
    position: unset;
    width: auto;
  }
`;
