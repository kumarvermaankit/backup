import { boolean, color, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import * as React from 'react';

import { Pill } from '../components/Pill';

export default {
  title: 'Pill',
  component: Pill
} as Meta;

export const uiPill = () => {
  return (
    <Pill
      text={text('text', 'Title')}
      textColor={color('textColor', '')}
      isActive={boolean('Active State', false)}
      activeText={text('Active text', 'Active Text')}
      leftIcon={text('leftIcon', '')}
      rightIcon={text('rightIcon', '')}
      iconSize={text('iconSize', '24px')}
      iconColor={color('iconColor', '')}
    />
  );
};
