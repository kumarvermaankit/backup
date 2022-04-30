import * as React from 'react';
import HeadingContentSplit from './HeadingContentSplit';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';

const WhoWillMentorYou: React.FC = () => {
  return (
    <Wrapper>
      <HeadingContentSplit heading="Who will mentor you">
        <Text type="paragraph">
          1. CXOs (VP, SVP, HoDs), Sr. Managers, Managers, Directors, General
          Managers in industries.
        </Text>
        <Text type="paragraph">
          2. HR Heads and Hiring Managers recruiting for their company.
        </Text>
        <Text type="paragraph">
          3. They have an average to large network size and are ambitious to
          help young aspirants succeed.
        </Text>
      </HeadingContentSplit>
    </Wrapper>
  );
};

export default WhoWillMentorYou;

const Wrapper = styled.div`
  margin-top: 10vh;

  @media (max-width: 530px) {
    margin-top: 5vh;
  }
`;
