import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Founders from './Founders';
import Advisors from './Advisors';
import Indywisers from './Indywisers';

const Team: React.FC = () => {
  return (
    <Wrapper id="team">
      <Content>
        <Text type="h1">Team</Text>
        <Founders />
        <Advisors />
        <Indywisers />
      </Content>
    </Wrapper>
  );
};

export default Team;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 120px 0px;
  h1 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #262626;
  }
`;
