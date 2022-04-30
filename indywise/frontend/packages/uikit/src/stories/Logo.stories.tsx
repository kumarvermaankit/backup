import { select, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import * as React from 'react';

import { Logo } from '../components/Logo';

export default {
  title: 'Logo'
} as Meta;

export const uiLogo = () => {
  return (
    <Logo
      width={text('width', '198px')}
      height={text('height', '55px')}
      type={select('Type', ['white', 'primary', 'footer'], 'primary')}
    />
  );
};
