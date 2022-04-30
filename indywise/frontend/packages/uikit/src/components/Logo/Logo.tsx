import * as React from 'react';
import styled from 'styled-components';

import { LogoFooter } from './LogoFooter';
import { LogoPrimary } from './LogoPrimary';
import { LogoWhite } from './LogoWhite';

export interface ILogoProps {
  /**
   * Type of Logo to render.
   *
   * @example `primary`
   */
  type?: 'white' | 'primary' | 'footer';

  /**
   * Width of the logo.
   *
   * @example `168px`
   */
  width?: string;

  /**
   * Height of the logo.
   *
   * @example `48px`
   */
  height?: string;
}

export const Logo: React.FC<ILogoProps> = (props) => {
  if (props.type === 'white')
    return (
      <SVG width={props.width} height={props.height}>
        <LogoWhite />
      </SVG>
    );

  if (props.type === 'primary')
    return (
      <SVG width={props.width} height={props.height}>
        <LogoPrimary />
      </SVG>
    );

  if (props.type === 'footer')
    return (
      <SVG width={props.width} height={props.height}>
        <LogoFooter />
      </SVG>
    );

  return (
    <SVG width={props.width} height={props.height}>
      <LogoPrimary />
    </SVG>
  );
};

const SVG = styled.i<ILogoProps>`
  svg {
    width: ${(props) => props.width || '168px'};
    height: ${(props) => props.height || '48px'};
  }
`;
