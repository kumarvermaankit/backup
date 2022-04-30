import React from 'react';
import styled from 'styled-components';
import Chart from 'react-google-charts';

const LineChart: React.FC = () => {
  const data = [
    [
      'Date',
      'Your Skillset Evolution',
      'Platform Average',
      'Expected Final Skill Level'
    ],
    ['1st Jan', 1, 3, 4],
    ['8th Jan', 3, 5, 6],
    ['15th Jan', 2, 6, 7],
    ['22nd Jan', 4, 3, 5],
    ['29th Jan', 4, 6, 7]
  ];

  return (
    <Container>
      <Chart
        chartType="LineChart"
        width="100%"
        height="50vh"
        data={data}
        options={{
          hAxis: {
            title: 'Date',
            minValue: 0
          },
          vAxis: {
            title: 'Skill Level'
          },
          colors: ['#F2A922', '#A66BD8', '#219A99'],
          series: {
            0: {},
            1: {
              lineWidth: 2,
              lineDashStyle: [2, 0, 2]
            },
            2: {
              lineWidth: 2,
              lineDashStyle: [1, 0, 1]
            }
          },
          animation: {
            duration: 300,
            easing: 'linear',
            startup: true
          },
          legend: {
            position: 'top',
            textStyle: { color: '#262626', fontSize: 14 },
            maxLines: 3
          }
        }}
      />
    </Container>
  );
};

export default LineChart;

const Container = styled.div``;
