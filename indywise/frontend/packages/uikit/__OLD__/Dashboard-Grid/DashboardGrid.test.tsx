import * as React from 'react';
import { create } from 'react-test-renderer';

import DashboardGrid from './DashboardGrid';

describe('Dashboard Grid', () => {
  it('should render correctly', () => {
    const component = create(
      <DashboardGrid
        left="Left Children"
        right="Right Children"
        style_left={{}}
        style_right={{}}
      />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
