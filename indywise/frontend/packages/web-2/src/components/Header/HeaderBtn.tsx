import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';

export interface IHeaderBtn extends React.HTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  fgColor?: string;
  fontSize?: string;
  text: string;
  noBg?: boolean;
}

const HeaderBtn: React.FC<IHeaderBtn> = (props) => {
  const { bgColor, fgColor, fontSize, noBg, text, ...rest } = props;
  return (
    <StyledButton
      background={bgColor}
      color={fgColor}
      fontSize={fontSize}
      noBg={noBg}
      {...rest}
    >
      <Text>{text}</Text>
    </StyledButton>
  );
};

export default HeaderBtn;

const StyledButton = styled.button<{
  background?: string;
  color?: string;
  fontSize?: string;
  noBg?: boolean;
}>`
  background: ${(props) =>
    props.noBg ? 'transparent' : props.background || '#0c3559'};
  border: 2px solid ${(props) => props.background || '#0c3559'};
  border-radius: 1.25em;
  padding: 0.5em 1em;

  p {
    padding: 0;
    margin: 0;
    color: ${(props) =>
      props.color ? props.color : props.noBg ? '#0c3559' : '#ffffff'};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
