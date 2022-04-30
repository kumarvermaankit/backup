import React, { useContext } from 'react';
import styled from 'styled-components';
import Chart from 'react-google-charts';
import { MenteesListContext } from '../../../contexts/MenteesListContext';

const AreaChart: React.FC = () => {
  const { graphColor } = useContext(MenteesListContext);

  const data = [
    ['Date', 'Skill Level'],
    ['1st Jan', 1],
    ['8th Jan', 3],
    ['15th Jan', 2],
    ['22nd Jan', 4],
    ['29th Jan', 4]
  ];

  return (
    <Container>
      <Chart
        chartType="AreaChart"
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
          colors: [graphColor],
          animation: {
            duration: 300,
            easing: 'linear',
            startup: true
          },
          legend: { position: 'top' }
        }}
      />
    </Container>
  );
};

export default AreaChart;

const Container = styled.div``;
