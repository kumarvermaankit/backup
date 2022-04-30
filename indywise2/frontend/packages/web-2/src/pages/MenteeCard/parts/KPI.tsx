import React from 'react';
import styled from 'styled-components';
// import NoKPIs from './NoKPIs';
import KPIAggregateScores from './KPIAggregateScores';
// import AllKPIMetrics from './AllKPIMetrics';

const KPISection: React.FC = () => {
  return (
    <>
      <Card>
        {/* <AllKPIMetrics /> */}
        <KPIAggregateScores />
        {/* <NoKPIs /> */}
      </Card>
    </>
  );
};

export default KPISection;

const Card = styled.div`
  height: 70vh;
  width: 21vw;
  padding: 2vw;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 20px;

  @media (max-width: 1099px) {
    height: auto;
    width: auto;
    margin-top: 5vh;
    padding: 2vh 5vw 4vh 5vw;
  }
`;
