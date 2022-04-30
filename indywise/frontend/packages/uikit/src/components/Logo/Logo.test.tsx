import * as React from 'react';
import { create } from 'react-test-renderer';

import { Logo } from './Logo';

describe('Logo', () => {
  it('Primary', () => {
    const component = create(
      <Logo type="primary" width="168px" height="55px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('white', () => {
    const component = create(
      <Logo type="white" width="168px" height="55px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Footer', () => {
    const component = create(
      <Logo type="footer" width="168px" height="55px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('No Type', () => {
    const component = create(<Logo width="168px" height="55px" />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('No width', () => {
    const component = create(<Logo type="primary" height="55px" />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('No height', () => {
    const component = create(<Logo type="primary" width="168px" />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('only Type', () => {
    const component = create(<Logo type="primary" />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
