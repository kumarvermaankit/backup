import * as React from 'react';
import styled from 'styled-components';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEnterPress?: (...args: any) => any;
}

export const Input: React.FC<IInputProps> = (props) => {
  const { onEnterPress } = props;

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onEnterPress) onEnterPress();
  };

  return (
    <>
      <StyledInput {...props} onKeyPress={handleOnKeyPress} />
    </>
  );
};

const StyledInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #0c3559;
  width: 100%;
  padding-bottom: 8px;
  margin-top: 2.25em;
  border: none;
  border-bottom: 1px solid #727272;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  &::placeholder {
    color: #4b4b4b;
  }

  &:focus {
    outline: none;
  }
`;
