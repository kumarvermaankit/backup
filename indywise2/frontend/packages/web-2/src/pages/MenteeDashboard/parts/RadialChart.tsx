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
    colors: ['#8AE6E3', '#F2A922', '#C396E9'],
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
  /*   const series: any = [60, 80, 50];
   */
  return (
    <Container>
      <div style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0) rotate(90deg)' }}>
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          width={150}
          height={150}
        />
      </div>
      <Label>{kpi}</Label>
      <SeriesValueContainer>
        <ValueDiv color="#66289D">
          <div
            style={{
              fontSize: '1rem',
              lineHeight: '1.5rem',
              fontWeight: 'bold'
            }}
          >
            I
          </div>
          <span>{initial}%</span>
        </ValueDiv>
        <ValueDiv color="#F2A922">
          <div
            style={{
              fontSize: '1rem',
              lineHeight: '1.5rem',
              fontWeight: 'bold'
            }}
          >
            C
          </div>
          <span>{current}%</span>
        </ValueDiv>
        <ValueDiv color="#127776">
          <div
            style={{
              fontSize: '1rem',
              lineHeight: '1.5rem',
              fontWeight: 'bold'
            }}
          >
            F
          </div>
          <span>{final}%</span>
        </ValueDiv>
      </SeriesValueContainer>
    </Container>
  );
};

export default RadialChart;

const Label = styled.h3`
  font-size: 0.875rem;
  margin: 0.25rem 0;
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
  line-height: 1.5rem;
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
    /* margin-top: 1.2rem; */
  }
`;
