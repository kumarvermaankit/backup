import * as React from 'react';
import HeadingContentSplit from './HeadingContentSplit';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';

const ProgramDelivery: React.FC = () => {
  return (
    <Wrapper>
      <HeadingContentSplit heading="Program Delivery">
        <Text type="paragraph">1. Assessment session.</Text>
        <Text type="paragraph">
          2. Signing of program agreement and non disclosure agreement.
        </Text>
        <Text type="paragraph">
          3. Mentee is placed to work with a startup/business.
        </Text>
        <Text type="paragraph">4. Mentor is assigned to the mentee.</Text>
        <Text type="paragraph">
          5. Mentoring sessions will be conducted on key areas like - interview
          prep, mock interviews, comm. skills, resume curation, industry
          exposure, expert advice, and so on.
        </Text>
        <Text type="paragraph">
          6. Mentee works on the live enterprise project as directed by the
          internship partner.
        </Text>
        <Text type="paragraph">
          7. Successful completion of the program awards internship
          certification from partner.
        </Text>
        <Text type="paragraph">
          8. IndyWise Certificate of Completion after assessment on set KPIs.
        </Text>
      </HeadingContentSplit>
    </Wrapper>
  );
};

export default ProgramDelivery;

const Wrapper = styled.div`
  margin-top: 10vh;

  @media (max-width: 530px) {
    margin-top: 5vh;
  }
`;
