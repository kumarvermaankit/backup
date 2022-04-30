import * as React from 'react';
import styled from 'styled-components';

import { Icon, IconTypes } from '../Icons';

export interface IButtonProps {
  /**
   * Text to be displayed on the button. You can also use `props.children`.
   *
   * @example `My Button`
   */
  text?: string;

  /**
   * We have three color designs, `primary`, `secondary` and `tertiary`.
   *
   * @default `primary`
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Callback function to be triggered on `onClick` event on the button.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e?: any) => any;

  /**
   * If set to `true`, the button will not execute `onClick` event to deny spamming
   * of the button and will also display a loading animation.
   */
  isLoading?: boolean;

  /**
   * If set to `true`, the button will be disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Custom CSS style. Applies to the `ButtonText` element.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fontStyle?: any;

  /**
   * Icon to be rendered in the button. It can a string which should be a valid
   * string based on `IconTypes` or it can be a React Component.
   */
  icon?: IconTypes | React.ReactElement | string;

  /**
   * Defines the color of the Icon rendered on the button
   */
  iconColor?: string;

  /**
   * Icon to be rendered left or right side of the text.
   *
   * @default left
   */
  iconAlign?: 'left' | 'right';

  /**
   * Icon size.
   *
   * @default `100%``
   */
  iconSize?: string;

  /**
   * Roate the icon of the button.
   */
  iconRotate?: number;

  /**
   * Custom CSS style. Applies to the `ButtonBody` element.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const color = props.color || 'primary';
  const style = props.style || {};
  const fontStyle = props.fontStyle || {};
  // Text for the button can be passed as a prop or a children.
  const text = props.text ? props.text : props.children;

  if (props.isDisabled) {
    return (
      <DisabledButton style={style} color={color}>
        <ButtonText style={fontStyle} color={color}>
          {text}
        </ButtonText>
      </DisabledButton>
    );
  }

  let onClick;
  // The callback function which is triggered on `onClick` event will only be
  // executed if `isLoading` and `isDisabled` are both `false`.
  if (!props.isLoading && !props.isDisabled) {
    onClick = props.onClick;
  }

  let icon;
  const iconAlign = props.iconAlign || 'left';
  const iconSize = props.iconSize || '24px';
  const iconColor = props.iconColor;
  const iconRotate = props.iconRotate;
  if (typeof props.icon === 'string' && props.icon) {
    icon = (
      <Icon
        icon={props.icon as IconTypes}
        size={iconSize}
        color={iconColor}
        rotate={iconRotate}
      />
    );
  } else if (typeof props.icon !== 'string' && props.icon) {
    icon = props.icon;
  }

  let contents;
  if (icon && iconAlign === 'right') {
    contents = (
      <ContentWrapper>
        <ButtonText style={fontStyle} color={color}>
          {text}
        </ButtonText>
        <i style={{ marginLeft: '0.5em', height: `${iconSize}` }}>{icon}</i>
      </ContentWrapper>
    );
  } else {
    contents = (
      <ContentWrapper>
        <i style={{ marginRight: '0.5em', height: `${iconSize}` }}>{icon}</i>
        <ButtonText style={fontStyle} color={color}>
          {text}
        </ButtonText>
      </ContentWrapper>
    );
  }

  if (icon === undefined) {
    contents = (
      <ContentWrapper>
        <ButtonText style={fontStyle} color={color}>
          {text}
        </ButtonText>
      </ContentWrapper>
    );
  }

  return (
    <ButtonBody style={style} color={color} onClick={onClick}>
      {contents}
    </ButtonBody>
  );
};

const ContentWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const ButtonBody = styled.button<{
  color: 'primary' | 'secondary' | 'tertiary';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style: any;
}>`
  background-color: ${(props) =>
    props.color === 'primary'
      ? '#F2A922'
      : props.color === 'secondary'
      ? '#FFFFFF'
      : '#0C3559'};
  border: 0;
  border-radius: 8px;
  padding: 8px 16px;
  filter: ${(props) =>
    props.color === 'primary'
      ? 'drop-shadow(0px 8px 16px rgba(242, 169, 34, 0.32))'
      : props.color === 'secondary'
      ? 'drop-shadow(0px 8px 16px rgba(17, 17, 17, 0.16))'
      : 'box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16)'};

  &:hover {
    cursor: pointer;
    border: ${(props) =>
      props.color === 'primary'
        ? 'none'
        : props.color === 'secondary'
        ? '1px solid #F2A922'
        : 'none'};
    background-color: ${(props) =>
      props.color === 'primary'
        ? '#F8BD4F'
        : props.color === 'secondary'
        ? '#FFFFFF'
        : '#19588F'};
    filter: ${(props) =>
      props.color === 'primary'
        ? 'drop-shadow(0px 16px 32px rgba(242, 169, 34, 0.24))'
        : props.color === 'secondary'
        ? 'drop-shadow(0px 16px 32px rgba(17, 17, 17, 0.08))'
        : 'box-shadow: 0px 16px 32px rgba(17, 17, 17, 0.08)'};
  }

  &:focus {
    box-shadow: 0 0 0 2px
        ${(props) =>
          props.color === 'primary'
            ? '#F8BD4F'
            : props.color === 'secondary'
            ? '#E9E9E9'
            : '#90C0EA'},
      0 0 3px 5px
        ${(props) =>
          props.color === 'primary'
            ? '#CB870A'
            : props.color === 'secondary'
            ? '#727272'
            : '#90C0EA'};
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }

  &:active {
    filter: ${(props) =>
      props.color === 'primary'
        ? 'drop-shadow(0px 4px 8px rgba(242, 169, 34, 0.4))'
        : props.color === 'secondary'
        ? 'drop-shadow(0px 4px 8px rgba(17, 17, 17, 0.32))'
        : 'box-shadow: 0px 4px 8px rgba(17, 17, 17, 0.32)'};
  }
`;

// A seperate button because we dont care about `active` state, also to keep
// `ButtonBody` a bit clean by not adding `props.isDisabled` check everywhere.
const DisabledButton = styled.button<{ color: string }>`
  background-color: ${(props) =>
    props.color === 'primary'
      ? '#F8BD4F'
      : props.color === 'secondary'
      ? '#E9E9E9'
      : '#EAF3FA'};
  border: 0;
  border-radius: 8px;
  padding: 8px 16px;

  p {
    color: #727272;
  }

  &:hover {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonText = styled.p<{ color: 'primary' | 'secondary' | 'tertiary' }>`
  margin: auto 0;
  font-family: 'Roboto', 'sans-serif';
  font-size: 16px;
  line-height: 28px;
  color: ${(props) =>
    props.color === 'primary'
      ? '#042039'
      : props.color === 'secondary'
      ? '#0C3559'
      : '#FFFFFF'};
`;
