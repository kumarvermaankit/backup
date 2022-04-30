import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import LinearProgressBar from './LinearProgressBar';

const metrics = [
  { title: 'Technical Skills', value: 8.3 },
  { title: 'Delivery', value: 5.5 },
  { title: 'Communication', value: 7.0 },
  { title: 'Leadership', value: 9.1 },
  { title: 'Strategic Impact', value: 2.5 }
];

const KPIAggregatesLinear: React.FC = () => {
  return (
    <>
      {metrics.map((m) => (
        <Flex>
          <LineWrap>
            <Text type="subtitle" color="#4B4B4B">
              {m.title}
            </Text>
            <LinearProgressBar value={m.value} />
          </LineWrap>
          <Text type="h4" color="#4B4B4B">
            {m.value}
          </Text>
        </Flex>
      ))}
    </>
  );
};

export default KPIAggregatesLinear;

const Flex = styled.div`
  display: flex;
  margin-bottom: 3vh;
  align-items: center;
  justify-content: space-between;
`;

const LineWrap = styled.div`
  width: 90%;

  h2 {
    margin-bottom: 1vh;
  }

  @media (max-width: 1099px) {
    width: 80%;
  }
`;
