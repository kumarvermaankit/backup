import { boolean, color, number, select, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import * as React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const uiButton = () => (
  <Button
    isDisabled={boolean('Disabled', false)}
    isLoading={boolean('Loading', false)}
    color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')}
    icon={text('Icon', '')}
    iconColor={color('Icon Color', '')}
    iconAlign={select('iconAlign', ['left', 'right'], 'left')}
    iconSize={text('iconSize', '24px')}
    iconRotate={number('Rotate Icon', 0)}
  >
    {text('Label', 'Button')}
  </Button>
);
