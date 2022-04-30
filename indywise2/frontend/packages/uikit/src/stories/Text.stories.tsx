import { boolean, color, select, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import * as React from 'react';

import { Text } from '../components/Text';

export default {
  title: 'Text',
  component: Text
} as Meta;

export const uiText = () => {
  return (
    <Text
      type={select(
        'type',
        [
          'h1',
          'h2',
          'h3',
          'h4',
          'hl',
          'title',
          'subtitle',
          'body',
          'small',
          'paragraph'
        ],
        'h1'
      )}
      bold={boolean('bold', false)}
      underline={boolean('underline', false)}
      color={color('color', '#333')}
      size={text('size', '')}
    >
      Sample Text
    </Text>
  );
};
