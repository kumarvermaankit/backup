import * as React from 'react';
import styled from 'styled-components';

interface FooProp {
  children: any;
}

const KycListWrapper = (props: FooProp) => {
  return (
    <div>
      <List>
        <ul>{props.children}</ul>
      </List>
    </div>
  );
};

export default KycListWrapper;

const List = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    padding-left: 24px;
    display: flex;
  }

  li a {
    display: inline-block;
    color: #0c3559;
    padding: 14px 4px;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;
  }
`;
