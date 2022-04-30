import { color, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import * as React from 'react';

import { Bubble } from '../components/Bubble';

export default {
  title: 'Bubble',
  component: Bubble
} as Meta;

export const uiBubble = () => {
  return (
    <Bubble color={color('color', '#DDC2E4')} size={text('size', '100px')} />
  );
};
