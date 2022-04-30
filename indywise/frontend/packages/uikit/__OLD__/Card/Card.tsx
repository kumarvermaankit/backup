import * as React from 'react';
import styled from 'styled-components';

interface FooProp {
  title: string;
  left: number;
  children: any;
  rest: any;
}

const CardComp = (props: FooProp) => {
  return (
    <Card style={props.rest}>
      <CardHead>
        <h2>{props.title}</h2>
        <p>{props.left} Left</p>
      </CardHead>
      <List>{props.children}</List>
    </Card>
  );
};

export default CardComp;

const Card = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  padding-bottom: 20px;
  border-radius: 20px;
`;

const CardHead = styled.div`
  & {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #0c3559;
    margin-left: 24px;
  }
  p {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #0c3559;
    margin-right: 24px;
    padding-top: 15px;
  }
`;
const List = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;
