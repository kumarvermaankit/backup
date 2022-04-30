import React from 'react';
import styled from 'styled-components';
import SkillsetEvaluation from './SkillsetEvaluation';

const Skillset: React.FC<{ feedbackData: any; assessmentData: any }> = ({
  feedbackData,
  assessmentData
}) => {
  return (
    <>
      <Container>
        <Flex>
          <SkillsetEvaluation
            assessmentData={assessmentData}
            feedbackData={feedbackData}
          />
          {/* <Line />
          <SkillsetEvolution /> */}
        </Flex>
        <HLine />
      </Container>
    </>
  );
};

export default Skillset;

const HLine = styled.div`
  margin: 0vh 6%;
  border: 1px solid #e9e9e9;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  padding: 4rem 0;
  width: 100%;
`;
