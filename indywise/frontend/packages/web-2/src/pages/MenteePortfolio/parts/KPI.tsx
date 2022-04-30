import React from 'react';
import styled from 'styled-components';
import NoKPIs from './NoKPIs';

const KPISection: React.FC = () => {
  return (
    <>
      <Card>
        <NoKPIs />
      </Card>
    </>
  );
};

export default KPISection;

const Card = styled.div`
  position: sticky;
  top: 15%;
  height: fit-content;
  width: 21vw;
  padding: 2vw;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 20px;
  background: #ffffff;

  @media (max-width: 1099px) {
    width: auto;
    margin-top: 5vh;
    padding: 2vh 5vw 4vh 5vw;
  }
`;
