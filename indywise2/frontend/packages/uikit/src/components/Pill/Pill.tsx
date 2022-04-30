/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';

import { Icon, IconTypes } from '../Icons';

export interface IPillProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Text to be displayed inside Pill.
   *
   * @example `Price`
   */
  text?: string;

  textColor?: string;

  /**
   * This component is mainly used as a filter button on pages like `Browse
   * Mentors`, `Browse Mentees` etc and when the filer is applied we want to
   * show that by changing the UI.
   *
   * Set `true` to render `active` state UI.
   */
  isActive?: boolean;

  /**
   * If `active` is true, this prop can be passed which will replace `text` with
   * `activeText`.
   */
  activeText?: string;

  /**
   * Custom CSS styling. Applies to `PillBody`.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;

  /**
   * Icon to be rendered in the left side of Pill. It can a string which should be a valid
   * string based on `IconTypes` or it can be a React Component.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  leftIcon?: IconTypes | string;

  /**
   * Icon to be rendered in the right side of Pill. It can a string which should be a valid
   * string based on `IconTypes` or it can be a React Component.
   */
  rightIcon?: IconTypes | string;

  /**
   * Icon size defines the size of both the icons.
   *
   * @default `24px`
   */
  iconSize?: string;

  /**
   * It defines the color of the icons. Both icon have same color in same pill.
   */
  iconColor?: string;
}

export const Pill: React.FC<IPillProps> = (props) => {
  const {
    text,
    isActive,
    activeText,
    style,
    leftIcon,
    rightIcon,
    iconSize,
    iconColor,
    textColor,
    ...rest
  } = props;
  const _style = style || {};

  return (
    <>
      <PillBody style={_style} isActive={isActive} {...rest}>
        <Container>
          {leftIcon ? (
            <Icon icon={leftIcon} size={iconSize} color={iconColor} />
          ) : (
            <></>
          )}
          {text ? (
            <PillText textColor={textColor}>
              {isActive && activeText ? activeText : text}
            </PillText>
          ) : (
            <></>
          )}
          {rightIcon ? (
            <Icon icon={rightIcon} size={iconSize} color={iconColor} />
          ) : (
            <></>
          )}
        </Container>
      </PillBody>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PillBody = styled.button<{ isActive?: boolean }>`
  text-align: center;
  background-color: ${(props) => (props.isActive ? '#19588F' : '#ffffff')};
  border: 1px solid #4b4b4b;
  outline: none;
  padding: 4px 16px;
  border-radius: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const PillText = styled.p<{ textColor?: string }>`
  margin: 0;
  padding: 0 4px;
  color: ${(props) => props.textColor || '#333333'};
  font-size: 16px;
  line-height: 24px;
  font-family: Roboto, sans-serif;
`;
