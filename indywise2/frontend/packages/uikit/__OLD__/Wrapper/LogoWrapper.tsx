import * as React from 'react';
import styled from 'styled-components';

const LogoWrapperComp = styled.div`
  position: absolute;
  top: 40%;
  margin-left: 80px;
  @media (max-width: 830px) {
    display: none;
  }
`;

export const LogoWrapper = ({ children }: any) => {
  return <LogoWrapperComp>{children}</LogoWrapperComp>;
};
