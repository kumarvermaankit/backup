import * as React from 'react';

import Card from '../components/Card/Card';

export default {
  title: 'Card',
  component: Card
};

export const Default = () => (
  <Card title="Identity" left={4} rest={{ borderLeft: '5px solid #ffffff' }}>
    Default
  </Card>
);
export const Orange = () => (
  <Card title="Identity" left={4} rest={{ borderLeft: '5px solid #DD5D00' }}>
    Orange
  </Card>
);
export const Yellow = () => (
  <Card title="Identity" left={4} rest={{ borderLeft: '5px solid #F2A922' }}>
    Yellow
  </Card>
);
export const Blue = () => (
  <Card title="Identity" left={4} rest={{ borderLeft: '5px solid  #7DA6CA' }}>
    Blue
  </Card>
);
export const Green = () => (
  <Card title="Identity" left={4} rest={{ borderLeft: '5px solid  #70AC78' }}>
    Green
  </Card>
);
