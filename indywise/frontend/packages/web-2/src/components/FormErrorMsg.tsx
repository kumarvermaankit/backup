import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';

interface IFormErrorMsgProps {
  text: string;
  style?: any;
}

const FormFieldErrorMsg: React.FC<IFormErrorMsgProps> = (props) => {
  const style = props.style || {};

  return (
    <Container style={style}>
      <Text type="body">{props.text}</Text>
    </Container>
  );
};

export default FormFieldErrorMsg;

const Container = styled.div`
  width: 100%;
  margin-top: 0.3em;
  display: flex;

  p {
    font-size: 1rem;
    line-height: 1.5em;
    color: #dd5d00;
  }
`;
