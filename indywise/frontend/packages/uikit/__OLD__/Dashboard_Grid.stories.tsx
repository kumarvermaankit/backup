import * as React from 'react';

import DashboardGrid from '../components/Dashboard-Grid/DashboardGrid';

export default {
  title: 'Dashboard Grid',
  component: DashboardGrid
};

export const Default = () => (
  <DashboardGrid
    left={<h1>Left</h1>}
    right={<h1>Right</h1>}
    style_left={{}}
    style_right={{}}
  />
);
