import React from 'react';
import { useContext } from 'react';
import { Text, Icon, Button } from '@indywise/uikit';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { AuthContext } from '../../../contexts/AuthContext';
import AllKPIMetrics from '../../MenteeCard/parts/AllKPIMetrics';

const NoKPISection: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Main>
      {user?.username === 'qureshlakdawala' ||
      user?.username === 'halirashika11' ? null : (
        <Text type="h4" color="#262626">
          KPI Aggregate Scores
        </Text>
      )}
      {user?.username === 'qureshlakdawala' ||
      user?.username === 'halirashika11' ? (
        <AllKPIMetrics />
      ) : (
        <>
          <NoKpi>
            <Icon icon="notSetKPI" size="6vw" />
            <Text type="body" color="#4B4B4B">
              Your KPIs are currently not set
            </Text>
            <Text type="body" color="#4B4B4B">
              Join WiseUp Standard program
            </Text>
          </NoKpi>
          <Button
            style={{
              // display: "flex"
              width: '203px',
              height: '40px'
            }}
          >
            <Link
              to="/wiseupx"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Check WiseUp Standard
            </Link>
          </Button>
        </>
      )}
    </Main>
  );
};

export default NoKPISection;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
  h4 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }

  @media (max-width: 1024px) {
    h4 {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;

const NoKpi = styled.div`
  margin: 10vh auto;
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
