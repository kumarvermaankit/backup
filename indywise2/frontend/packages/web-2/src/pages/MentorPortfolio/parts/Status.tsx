import React from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import LinearProgressBar from '../../MenteeCard/parts/LinearProgressBar';

const Status: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  return (
    <Container>
      <Text type="h4" color="#262626">
        Status
      </Text>
      <Brown>
        <Flex>
          <LineWrap>
            <Text type="subtitle" color="#E9E9E9">
              Profile Completeness
            </Text>
            <LinearProgressBar value={2} />
          </LineWrap>
          <Text type="h4" color="#FFFFFF">
            10%
          </Text>
        </Flex>
        <Text type="body" color="#CBCBCB" style={{ marginBottom: '2vh' }}>
          Complete your profile to get it Published
        </Text>
        <Flex type="no">
          <Text type="body" color="#CBCBCB">
            Show your Portfolio publicly
          </Text>
          <Button color="secondary" onClick={openModal}>
            See Pending Actions
          </Button>
        </Flex>
      </Brown>
      <Line />
    </Container>
  );
};

export default Status;

const Container = styled.div`
  margin: 40px auto;
  h4 {
    font-size: 20px;
    line-height: 28px;
  }
`;

// Add this circle in the background
// const Circle = styled.div`
//   width: 20vw;
//   height: 20vw;
//   z-index: 0;
//   background: linear-gradient(180deg, #362401 0%, #A16A06 100%);
//   border-radius: 50%;
//   position: absolute;
// `;

const Brown = styled.div`
  background: #362401;
  border-radius: 12px;
  height: auto;
  margin: 24px auto;
  padding: 24px;
`;

const Flex = styled.div<{
  type?: string | undefined;
}>`
  display: flex;
  margin-bottom: ${(props) => (props.type === 'no' ? '0vh' : '3vh')};
  align-items: ${(props) => (props.type === 'no' ? 'center' : '')};
  justify-content: space-between;

  @media (max-width: 740px) {
    flex-wrap: ${(props) => (props.type === 'no' ? 'wrap' : 'no-wrap')};
    button {
      margin: 8px 0;
    }
  }
`;

const Line = styled.div`
  border: 1px solid #e9e9e9;
  width: auto;
  margin-top: 5vh;
`;

const LineWrap = styled.div`
  width: 90%;

  h2 {
    margin-bottom: 1vh;
  }
`;
