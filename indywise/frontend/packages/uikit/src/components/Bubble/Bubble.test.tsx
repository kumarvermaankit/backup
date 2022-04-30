import * as React from 'react';
import { create } from 'react-test-renderer';

import { Bubble } from './Bubble';

describe('Bubble', () => {
  it('Size', () => {
    const component = create(<Bubble size="100px" />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Color', () => {
    const component = create(<Bubble color="#222" />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Style', () => {
    const component = create(<Bubble style={{}} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
