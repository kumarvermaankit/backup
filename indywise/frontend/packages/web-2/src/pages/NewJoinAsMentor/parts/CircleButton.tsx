import * as React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Text to be displayed on the button.
   */
  text: string;

  /**
   * The color of the button.
   */
  color?: string;

  shadow?: string;

  showModal?: () => any;
}

const CircleCallToAction: React.FC<IProps> = (props) => {
  return (
    <CircleButtonBody
      color={props.color}
      shadow={props.shadow}
      onClick={props.showModal}
    >
      <Text type="body" size="20px" color="#042039">
        {props.text}
      </Text>
      <Icon icon="arrow" size="24px" rotate={-90} />
    </CircleButtonBody>
  );
};

export default CircleCallToAction;

const CircleButtonBody = styled.button<{ color?: string; shadow?: string }>`
  width: 216px;
  height: 216px;
  background: ${(props) => props.color || '#F2A922'};
  box-shadow: ${(props) => props.shadow};
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  p {
    line-height: 28px;
    margin-right: 16px;
  }
`;
