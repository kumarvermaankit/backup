import * as React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';

type IColor = 'lightGreen' | 'purple' | 'darkGreen' | 'blue';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Text to be displayed on the button.
   */
  text: string;

  /**
   * The color of the button.
   */
  color: IColor;
}

const getColors = (
  color: IColor
): { background: string; shadow: string; iconColor: string } => {
  switch (color) {
    case 'darkGreen':
      return {
        background: '#F2A922',
        shadow: '0px 10px 20px rgba(17, 110, 59, 0.3)',
        iconColor: '#042039'
      };

    case 'lightGreen':
      return {
        background: '#F2A922',
        shadow: '0px 10px 20px rgba(18, 119, 118, 0.3)',
        iconColor: '#042039'
      };

    case 'purple':
      return {
        background: '#F2A922',
        shadow: '0px 10px 20px rgba(163, 63, 143, 0.3)',
        iconColor: '#ffffff'
      };

    case 'blue':
      return {
        background: '#F2A922',
        shadow: '0px 10px 20px rgba(60, 84, 175, 0.3)',
        iconColor: '#042039'
      };
  }
};

const CircleCallToAction: React.FC<IProps> = (props) => {
  const { background, shadow, iconColor } = getColors(props.color);

  return (
    <CircleButtonBody background={background} shadow={shadow}>
      <Text type="subtitle" size="1.8vw">
        {props.text}
      </Text>
      <Icon icon="arrow" size="2vw" rotate={270} color={iconColor} />
    </CircleButtonBody>
  );
};

export default CircleCallToAction;

const CircleButtonBody = styled.button<{ background: string; shadow: string }>`
  width: 13vw;
  height: 13vw;
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.shadow};
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

  h2 {
    line-height: 2.7vw;
    color: #ffffff;
  }
`;
