import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import CircleProgress from '../../MenteeList/parts/CircularProgressValue';

const KPIs: React.FC = () => {
  return (
    <Container>
      <MainFlex>
        <Text color="#262626" type="h4">
          KPIs EVALUATION
        </Text>
        <Flex>
          <Text color="#A16A06" type="body">
            See All KPIs
          </Text>
          <Icon icon="visit" size="24px" />
        </Flex>
      </MainFlex>
      <Text color="#4B4B4B" type="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
        vestibulum morbi diam donec. Adipiscing massa eget sed aliquam turpis
        morbi eu ut. Nascetur aliquet non nunc nisl volutpat mi feugiat
        vulputate. Aenean eget purus nisl non.
      </Text>
      <Wrapper>
        <Each>
          <CircleProgress
            value={5}
            width="56px"
            height="56px"
            fontSize="20px"
          />
          <Text type="body" color="#4B4B4B">
            Technical Skills
          </Text>
        </Each>
        <Each>
          <CircleProgress
            value={8}
            width="56px"
            height="56px"
            fontSize="20px"
          />
          <Text type="body" color="#4B4B4B">
            Delivery
          </Text>
        </Each>
        <Each>
          <CircleProgress
            value={7}
            width="56px"
            height="56px"
            fontSize="20px"
          />
          <Text type="body" color="#4B4B4B">
            Communication
          </Text>
        </Each>
        <Each>
          <CircleProgress
            value={6}
            width="56px"
            height="56px"
            fontSize="20px"
          />
          <Text type="body" color="#4B4B4B">
            Leadership
          </Text>
        </Each>
        <Each>
          <CircleProgress
            value={9}
            width="56px"
            height="56px"
            fontSize="20px"
          />
          <Text type="body" color="#4B4B4B">
            Strategic Impact
          </Text>
        </Each>
      </Wrapper>
      <Line />
    </Container>
  );
};

export default KPIs;

const Flex = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: auto 1vw !important;
    text-decoration: underline;
  }

  span {
    svg {
      path {
        stroke: #a16a06;
      }
    }
  }
`;

const MainFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3vh;
`;

const Container = styled.div`
  margin: auto 6%;
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

const Line = styled.div`
  margin: 5vh auto 0vh auto;
  border: 1px solid #e9e9e9;
`;

const Wrapper = styled.div`
  margin: 3vh 0vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

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
    margin: auto 1vw !important;
  }
`;
