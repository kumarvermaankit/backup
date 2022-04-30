import * as React from 'react';
import styled from 'styled-components';
import Loading from './Animations/LoadingSpinner/LoadingSpinner';

const LoadingScreen: React.FC = () => {
  return (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  );
};

export default LoadingScreen;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
