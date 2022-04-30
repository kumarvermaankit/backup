import React from 'react';
import styled from 'styled-components';
import { Text, Icon, Button } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';

function KPIModal(props: any) {
  return (
    <Card>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: '20px',
          paddingRight: '40px'
        }}
      >
        <Text type="h4" color="#262626">
          KPI Aggregate Scores
        </Text>
        <span
          onClick={() => props.setModalState()}
          style={{
            position: 'absolute',
            top: '44px',
            right: '24px',
            cursor: 'pointer'
          }}
        >
          <Icon icon="redexit" />
        </span>
      </div>
      <Main>
        <NoKpi>
          <Icon icon="notSetKPI" size="102px" />
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
      </Main>
    </Card>
  );
}

export default KPIModal;

const Card = styled.div`
  position: relative;
  margin: auto;
  margin-top: 206px;
  // width: 220px;
  width: 65%;
  padding: 40px 40px 24px 40px;
  height: 400px;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 20px;
  background: #ffffff;

  // @media (max-width: 1099px) {
  //   width: auto;
  //   margin-top: 5vh;
  //   padding: 2vh 5vw 4vh 5vw;
  // }
`;

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

  // @media (max-width: 1024px) {
  //   h4 {
  //     font-size: 20px;
  //     line-height: 28px;
  //   }
  // }
`;

const NoKpi = styled.div`
  margin: 40px auto;
  text-align: center;

  p {
    font-weight: 300;
    margin-top: 2vh;
  }

  // @media (max-width: 1099px) {
  //   position: unset;
  //   width: auto;
  //   margin-top: 5vh;
  // }
`;
