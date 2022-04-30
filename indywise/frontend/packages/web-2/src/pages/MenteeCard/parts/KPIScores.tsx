import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import CircleProgress from '../../MenteeList/parts/CircularProgressValue';
import menteeD from '../../../data/mentees-data.json';
import { KPI } from '../../../interfaces/IMentee';

const metrics = [
  { title: 'Technical Skills', str: 'technicalSkills' },
  { title: 'Delivery', str: 'delivery' },
  { title: 'Communication', str: 'fcc' },
  { title: 'Leadership', str: 'leadership' },
  { title: 'Strategic Impact', str: 'strategicImpact' }
];

const KPIScores: React.FC = () => {
  const mentee = menteeD.data[0];
  const { KPIs } = mentee;

  const calculateValue = (kp: string): number => {
    const val = KPIs.find((k: KPI) => k.kpi === kp)
      ? (KPIs.find((k: KPI) => k.kpi === kp) || {}).value
      : 0;

    return Number(val);
  };

  let size = '4vw';
  let fontSize = '1.2vw';
  if (window.screen.width <= 530) size = '10vw';
  if (window.screen.width <= 530) fontSize = '4vw';

  return (
    <>
      {metrics.map((m) => (
        <Each>
          <CircleProgress
            value={calculateValue(m.str)}
            width={size}
            height={size}
            fontSize={fontSize}
          />
          <Text type="subtitle" color="#4B4B4B">
            {m.title}
          </Text>
        </Each>
      ))}
    </>
  );
};

export default KPIScores;

const Each = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5vh;

  h2 {
    margin-left: 1vw;
  }

  @media (max-width: 530px) {
    h2 {
      margin-left: 4vw;
    }
  }
`;
