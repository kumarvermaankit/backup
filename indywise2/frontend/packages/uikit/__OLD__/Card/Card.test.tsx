import * as React from 'react';
import { create } from 'react-test-renderer';

import Card from './Card';

describe('Dashboard Card', () => {
  it('should render correctly', () => {
    const component = create(
      <Card title="Card Title" left={3} rest={{}}>
        Test
      </Card>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
