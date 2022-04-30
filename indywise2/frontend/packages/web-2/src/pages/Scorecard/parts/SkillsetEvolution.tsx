import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import LineChart from './LineChart';

const SkillsetEvolution: React.FC = () => {
  return (
    <Container>
      <Text color="#262626" type="h4">
        SKILLSET EVOLUTION
      </Text>
      <Text color="#4B4B4B" type="body">
        Indicates the skills progression on the individual KPIs showcasing the
        evolution and progress over time based on the upskilling program.
        Estimates are provided by the mentee and are a representation of how the
        skills should improve over time, but they do not necessarily need to
        match. Better scores are represented by higher values.
      </Text>
      <Flex>
        <div>
          <Text color="#262626" type="title" bold>
            UX Designs
          </Text>
          <Flex>
            <Text color="#4B4B4B" type="body" bold>
              Current Skill Level - 3
            </Text>
            <Text color="#4B4B4B" type="body">
              Expected Skill Level - 4
            </Text>
            <Text color="#4B4B4B" type="body">
              Platform Average - 3.2
            </Text>
          </Flex>
          <LineChart />
        </div>
        <Line />
        <div>
          <Text color="#262626" type="title" bold>
            Graphic Design
          </Text>
          <Flex>
            <Text color="#4B4B4B" type="body" bold>
              Current Skill Level - 3
            </Text>
            <Text color="#4B4B4B" type="body">
              Expected Skill Level - 4
            </Text>
            <Text color="#4B4B4B" type="body">
              Platform Average - 3.2
            </Text>
          </Flex>
          <LineChart />
        </div>
      </Flex>
    </Container>
  );
};

export default SkillsetEvolution;

const Line = styled.div`
  height: auto;
  border: 1px solid #e9e9e9;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    margin-right: 1vw;
  }
`;

const Container = styled.div`
  margin: 50px 6% 40px 6%;
  padding-bottom: 5vh;

  p {
    line-height: 20px;
    margin-top: 2vh;
    margin-bottom: 5vh;
  }

  div {
    button {
      span {
        p {
          margin: auto;
        }
      }
    }
  }
`;
