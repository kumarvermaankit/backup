import { select, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import * as React from 'react';

import { SkillTag } from '../components/SkillTag';

export default {
  title: 'Skill Tag',
  component: SkillTag
} as Meta;

export const uiSkillTag = () => {
  return (
    <SkillTag
      skill={text('skill', 'Name of Skill')}
      size={text('size', '16px')}
      colorType={select(
        'colorType',
        [
          '',
          'IndyChartreuse',
          'IndyKelly',
          'IndyJade',
          'IndyLavender',
          'IndyMagenta',
          'IndyRuby'
        ],
        ''
      )}
    />
  );
};
