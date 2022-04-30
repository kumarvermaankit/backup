import React from 'react';
import Header from './CommonFiles/Header';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Div>
        <Text type="h2">Welcome Back!</Text>
        <Text type="h2">Admin Home</Text>
        <Text type="h4">Explore the menu to perform your operations!</Text>
      </Div>
    </>
  );
};

export default Home;

const Div = styled.div`
  display: flex;
  width: 100%;
  margin: 200px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
