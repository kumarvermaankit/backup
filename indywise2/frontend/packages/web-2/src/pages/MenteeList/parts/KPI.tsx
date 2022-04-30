import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { KPI } from '../../../interfaces/IMentee';
import CircleProgress from './CircularProgressValue';

export interface IKPIProps {
  kpi: KPI[];
}

const KPIPage: React.FC<IKPIProps> = ({ kpi }) => {
  // Method to calculate the value of that particular KPI
  const calculateValue = (kp: any): any => {
    const val = kpi.find((k) => k.kpi === kp)
      ? (kpi.find((k) => k.kpi === kp) || {}).value
      : 0;

    return Number(val);
  };

  return (
    <>
      <Wrapper>
        <Each>
          <CircleProgress value={calculateValue('technicalSkills')} />
          <Text type="body" color="#4B4B4B">
            Technical Skills
          </Text>
        </Each>
        <Each>
          <CircleProgress value={calculateValue('delivery')} />
          <Text type="body" color="#4B4B4B">
            Delivery
          </Text>
        </Each>
        <Each>
          <CircleProgress value={calculateValue('fcc')} />
          <Text type="body" color="#4B4B4B">
            Communication
          </Text>
        </Each>
        <Each>
          <CircleProgress value={calculateValue('leadership')} />
          <Text type="body" color="#4B4B4B">
            Leadership
          </Text>
        </Each>
        <Each>
          <CircleProgress value={calculateValue('strategicImpact')} />
          <Text type="body" color="#4B4B4B">
            Strategic Impact
          </Text>
        </Each>
      </Wrapper>
    </>
  );
};

export default KPIPage;

const Wrapper = styled.div`
  margin: 16px 0vw;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 530px) {
    margin: 2vh 0vw 3vh -28vw;
    display: block;
  }
`;

const Each = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1vw;

  p {
    font-size: 14px;
    margin-left: 1vw;
  }
`;
