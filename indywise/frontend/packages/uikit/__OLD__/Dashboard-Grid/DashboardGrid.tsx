import * as React from 'react';
import styled from 'styled-components';

interface FooProp {
  left: any;
  right: any;
  style_left: any;
  style_right: any;
}

const DashboardGrid = (props: FooProp) => {
  return (
    <div>
      <Wrapper>
        <FlexLeft style={props.style_left}>{props.left}</FlexLeft>
        <FlexRight style={props.style_right}>{props.right}</FlexRight>
      </Wrapper>
    </div>
  );
};

export default DashboardGrid;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: hidden;
`;

const FlexLeft = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: hidden;
`;

const FlexRight = styled.div`
  flex: 4;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 6px 36px rgba(164, 164, 164, 0.35);
  border-top-left-radius: 30px;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: scroll;
`;
