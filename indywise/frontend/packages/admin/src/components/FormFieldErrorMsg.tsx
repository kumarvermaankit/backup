import * as React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';

interface IFormFieldErrorMsgProps {
  text: string;
  style?: any;
}

const FormFieldErrorMsg: React.FC<IFormFieldErrorMsgProps> = (props) => {
  const style = props.style || {};

  return (
    <Container style={style}>
      <Icon icon="warning" size="1rem" />
      <Text type="body">{props.text}</Text>
    </Container>
  );
};

export default FormFieldErrorMsg;

const Container = styled.div`
  width: 100%;
  margin-top: 0.3em;
  display: flex;

  svg {
    width: 1em;
    margin-right: 0.25em;
  }

  p {
    font-size: 0.75rem;
    line-height: 1.5em;
  }
`;
