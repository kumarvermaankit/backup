import * as React from 'react';
import styled from 'styled-components';

interface FooProp {
  icon: any;
  title: string;
}

const Icons = styled.img`
  display: inline-block;
  margin-right: 10px;
`;

const KycList = (props: FooProp) => {
  return (
    <li>
      <Icons src={props.icon} />
      <a href="#">{props.title}</a>
    </li>
  );
};

export default KycList;
