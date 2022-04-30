import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { useBookingModal } from '../../../contexts/BookingModalContext';

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
}

const CircleCallToAction: React.FC<IProps> = (props) => {
  const { openBookingModal } = useBookingModal();

  const applyNow = () => {
    const serviceNumber = 121;
    openBookingModal(serviceNumber);
  };

  return (
    <CircleButtonBody
      color={props.color}
      shadow={props.shadow}
      onClick={applyNow}
    >
      <Text type="body">{props.text}</Text>
    </CircleButtonBody>
  );
};

export default CircleCallToAction;

const CircleButtonBody = styled.button<{ color?: string; shadow?: string }>`
  width: 108px;
  height: 108px;
  background: ${(props) => props.color || '#225219'};
  box-shadow: ${(props) =>
    props.shadow || '0px 8px 16px rgba(17, 17, 17, 0.16)'};
  border: none;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  p {
    color: #ffffff;
  }
`;
