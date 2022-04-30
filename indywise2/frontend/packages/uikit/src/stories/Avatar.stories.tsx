import { select, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import * as React from 'react';

import { Avatar } from '../components/Avatar';

export default {
  title: 'Avatar',
  component: Avatar
} as Meta;

export const uiAvatar = () => {
  return (
    <Avatar
      src={text('src', '')}
      size={text('size', '72px')}
      type={select(
        'type',
        ['mentor', 'mentee', 'education', 'employment'],
        'mentee'
      )}
    />
  );
};
