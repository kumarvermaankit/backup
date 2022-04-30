import React, { useContext } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { Link } from 'react-router-dom';
import KPIMetrics from './KPIMetrics';
import ViewCharts from './ViewCharts';
import { AuthContext } from '../../../contexts/AuthContext';

const AllKPIMetrics: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Text type="h4" color="#262626">
        All KPI Metrics
      </Text>
      <Wrapper>
        <KPIMetrics />
      </Wrapper>
      {user?.username === 'qureshlakdawala' ||
      user?.username === 'halirashika11' ? null : (
        <ButtonContainer>
          <Link to="/">
            <Text type="body" color="#A16A06">
              Show KPI Aggregate Scores
            </Text>
          </Link>
          <ViewCharts />
        </ButtonContainer>
      )}
    </>
  );
};

export default AllKPIMetrics;

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
