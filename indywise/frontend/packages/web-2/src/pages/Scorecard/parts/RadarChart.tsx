import React from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import { useMediaQuery } from '@material-ui/core';

interface IRadarProps {
  kpi: string;
  final?: number[];
  current?: number[];
  initial?: number[];
}

const RadarChart: React.FC<IRadarProps> = ({
  kpi,
  final,
  current,
  initial
}) => {
  const Matches = useMediaQuery('(min-width:520px)');

  return (
    <Container>
      <ReactApexChart
        type="radar"
        series={[
          {
            name: 'Current',
            data: current
          },
          {
            name: 'Initial',
            data: initial
          },

          {
            name: 'Final',
            data: final
          }
        ]}
        options={{
          fill: {
            opacity: 0
          },
          legend: {
            show: true,
            labels: {
              colors: ['#F2A922', '#A66BD8', '#219A99']
            },
            itemMargin: {
              horizontal: 10
            }
          },
          stroke: {
            show: true,
            width: 3,
            curve: 'straight',
            colors: ['#F2A922', '#A66BD8', '#219A99'],
            dashArray: [0, 10, 3]
          },

          xaxis: {
            categories: [
              'Technical Skills',
              'Project Delivery',
              'Communication',
              'Leadership',
              'Strategic Impact'
            ]
          },
          yaxis: {
            show: false
          }
        }}
        height={!Matches ? 350 : 450}
      />
    </Container>
  );
};

export default RadarChart;

const Container = styled.div`
  align-self: stretch;
  height: 100%;
  width: 100%;
`;
