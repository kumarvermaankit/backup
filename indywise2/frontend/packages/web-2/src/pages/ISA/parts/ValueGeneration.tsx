import * as React from 'react';
import HeadingContentSplit from './HeadingContentSplit';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';

const ValueGeneration: React.FC = () => {
  return (
    <Wrapper>
      <HeadingContentSplit heading="Get mentored, for free!">
        <Text type="paragraph">1. Zero fees, no payments.</Text>
        <Text type="paragraph">2. Mentorship by top IndyWise mentors.</Text>
        <Text type="paragraph">
          3. 1 mentoring session/week. Total 16 mentoring sessions.
        </Text>
        <Text type="paragraph">
          4. Get direction, industry exposure and precious knowledge of your
          domain.
        </Text>
      </HeadingContentSplit>
    </Wrapper>
  );
};

export default ValueGeneration;

const Wrapper = styled.div`
  margin-top: 10vh;
  width: 100%;

  @media (max-width: 530px) {
    margin-top: 5vh;
  }
`;
