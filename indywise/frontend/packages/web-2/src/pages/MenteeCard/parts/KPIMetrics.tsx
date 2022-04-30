import React, { useContext } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import LinearProgressBar from './LinearProgressBar';
import { MenteesListContext } from '../../../contexts/MenteesListContext';

const metrics = [
  { title: 'Quality & testing: Writing code', value: 5, color: 'blue' },
  { title: 'Quality and Testing : Testing', value: 4, color: 'orange' },
  { title: 'Debugging and Observability : Debugging', value: 5, color: 'pink' },
  {
    title: 'Software design & architecture: Understanding Code',
    value: 4,
    color: 'green'
  },
  {
    title: 'Software design & architecture: Software Architecture',
    value: 5,
    color: 'green'
  },
  { title: 'Security', value: 4, color: 'purple' },
  {
    title: 'Incremental value delivery: Work breakdown',
    value: 4,
    color: 'blue'
  },
  {
    title: 'Incremental value delivery: Prioritisation, dependencies',
    value: 4,
    color: 'orange'
  },
  {
    title: 'Self-organization: Reliability, delivery accountability',
    value: 5,
    color: 'pink'
  },
  {
    title: 'Self-organization: Economic thinking',
    value: 4,
    color: 'green'
  },
  {
    title: 'Feedback: Delivering Feedback',
    value: 5,
    color: 'green'
  },
  {
    title: 'Feedback: Seeking and receiving feedback',
    value: 5,
    color: 'green'
  },
  {
    title: 'Communication: Effective communication',
    value: 4,
    color: 'green'
  },
  {
    title: 'Communication: Knowledge Sharing',
    value: 4,
    color: 'green'
  },
  {
    title: 'Collaboration: Teamwork',
    value: 4,
    color: 'green'
  },
  {
    title: 'Collaboration: Relationship building',
    value: 4,
    color: 'green'
  },
  {
    title: 'Collaboration: Handling disagreement',
    value: 4,
    color: 'green'
  },
  {
    title: 'Decision making',
    value: 4,
    color: 'green'
  },
  {
    title: 'Driving alignment',
    value: 4,
    color: 'green'
  },
  {
    title: 'Process thinking',
    value: 4,
    color: 'green'
  },
  {
    title: 'Business Acumen & Strategy: Business Acumen',
    value: 4,
    color: 'green'
  },
  {
    title: 'Business Acumen & Strategy: Product Thinking',
    value: 5,
    color: 'green'
  }
];

const KPIMetrics: React.FC = () => {
  const { changeGraph } = useContext(MenteesListContext);

  return (
    <>
      {metrics.map((m) => (
        <Flex>
          <LineWrap onClick={() => changeGraph(m.color)}>
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

export default KPIMetrics;

const Flex = styled.div`
  display: flex;
  margin-bottom: 3vh;
  align-items: center;
  justify-content: space-between;
`;

const LineWrap = styled.div`
  width: 90%;
  cursor: pointer;

  h2 {
    margin-bottom: 1vh;
  }
`;
