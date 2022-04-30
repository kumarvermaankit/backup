import * as React from 'react';
import HeadingContentSplit from './HeadingContentSplit';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';

const ProgramStructure: React.FC = () => {
  return (
    <Wrapper>
      <HeadingContentSplit heading="Program Structure">
        <Text type="paragraph">1. Duration - 30-120 days</Text>
        <Text type="paragraph">
          2. Get a mentored internship, with guidance that ensures you have a
          high chance of success. The Practicum program you’re missing on your
          CV to prove you’re capable of delivering the job you aim for.
        </Text>
        <Text type="paragraph">3. Customized training sessions</Text>
        <Text type="paragraph">4. Enterprise Projects</Text>
        <Text type="paragraph">
          5. Certificate of Internship and verified skills labelled by reputed
          mentors giving to excellent opportunities to secure your dream job
          quickly.
        </Text>
      </HeadingContentSplit>
    </Wrapper>
  );
};

export default ProgramStructure;

const Wrapper = styled.div`
  margin-top: 10vh;

  @media (max-width: 530px) {
    margin-top: 5vh;
  }
`;
