import { text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import * as React from 'react';

import { Input } from '../components/Input';

export default {
  title: 'Input',
  component: Input
} as Meta;

export const uiInput = () => {
  return <Input placeholder={text('placeholder', 'Place Holder *')} />;
};
