import * as React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 30px 30px 30px 30px;
  background-color: white;
  width: 30%;
  position: absolute;
  right: 200px;
  top: 10%;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 830px) {
    width: 80%;
    position: absolute;
    right: 35px;
    top: 10%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const SimpleCard = ({ children }: any) => {
  return <Card>{children}</Card>;
};
