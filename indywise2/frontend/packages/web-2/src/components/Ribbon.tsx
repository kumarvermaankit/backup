import * as React from 'react';
import styled from 'styled-components';

const Ribbon: React.FC<{ text: string }> = (props) => {
  return (
    <RibbonBody>
      <span>{props.text}</span>
    </RibbonBody>
  );
};

export default Ribbon;

const RibbonBody = styled.div`
  position: absolute;
  height: auto;
  left: 0px;
  top: 7em;
  background: #0c3559;
  border-radius: 0px 44px 44px 0px;

  span {
    left: 4px;
    top: 249px;
    font-family: Mulish;
    font-style: normal;
    font-weight: light;
    font-size: 1.25rem;
    line-height: 28px;
    color: #eaf3fa;
    margin: 1.6em 0.3em;
    writing-mode: tb-rl;
    transform: rotate(-180deg);
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
