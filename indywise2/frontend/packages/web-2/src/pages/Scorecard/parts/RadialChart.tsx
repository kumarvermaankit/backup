import React from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';

interface IRadialProps {
  kpi: string;
  final?: any;
  current?: any;
  initial?: any;
}

const RadialChart: React.FC<IRadialProps> = ({
  kpi,
  final,
  current,
  initial
}) => {
  const options: any = {
    chart: {
      type: 'radialBar'
    },
    colors: ['#219A99', '#F2A922', '#A66BD8'],
    stroke: {
      lineCap: 'round',
      width: 2
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 3,
          size: '30%'
          // background: '#19588F'
        },
        track: {
          background: '#fff'
        },
        dataLabels: {
          name: {
            fontSize: '14px',
            color: '#fff',
            fontFamily: 'Roboto'
          },
          value: {
            fontSize: '14px',
            color: '#fff',
            fontFamily: 'Roboto'
          }
        }
      }
    }
  };

  const series: any = final ? [final, current, initial] : [current, initial];

  return (
    <Container>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        width={120}
        height={120}
      />
      <Label>{kpi}</Label>
      <SeriesValueContainer>
        <ValueDiv color="#66289D">
          <h2>I</h2>
          <span>{initial}%</span>
        </ValueDiv>
        <ValueDiv color="#F2A922">
          <h2>C</h2>
          <span>{current}%</span>
        </ValueDiv>
        <ValueDiv color="#219A99">
          <h2>F</h2>
          <span>{final}%</span>
        </ValueDiv>
      </SeriesValueContainer>
    </Container>
  );
};

export default RadialChart;

const Label = styled.h3`
  font-size: 0.8rem;
  margin: 0.2rem 0;
`;

const SeriesValueContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

const ValueDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: ${(props: { color: string }) => props.color};

  @media (max-width: 475px) {
    font-size: 12px;
  }
`;

const Container = styled.div`
  flex-basis: 33.3%;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 475px) {
    margin-top: 1.2rem;
  }
`;
