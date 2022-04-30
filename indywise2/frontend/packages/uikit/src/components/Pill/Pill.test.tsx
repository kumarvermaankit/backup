import * as React from 'react';
import { create } from 'react-test-renderer';

import { Pill } from './Pill';

describe('Pill', () => {
  it('Normal Pill', () => {
    const component = create(<Pill text="Title" textColor="#333" />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Pill left Icon', () => {
    const component = create(
      <Pill text="Title" leftIcon="arrow" iconColor="#333" iconSize="20px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Pill right Icon', () => {
    const component = create(
      <Pill text="Title" rightIcon="rupee" iconColor="#333" iconSize="20px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Pill both side Icon', () => {
    const component = create(
      <Pill
        text="Title"
        rightIcon="rupee"
        leftIcon="arrow"
        iconColor="#333"
        iconSize="20px"
      />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Pill Right Icon no text', () => {
    const component = create(
      <Pill rightIcon="skill" iconColor="#333" iconSize="20px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Pill Left Icon no text', () => {
    const component = create(
      <Pill leftIcon="skill" iconColor="#333" iconSize="20px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Pill two Icon no text', () => {
    const component = create(
      <Pill
        leftIcon="dollar"
        rightIcon="arrow"
        iconColor="#333"
        iconSize="20px"
      />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Active Pill', () => {
    const component = create(
      <Pill text="Title" isActive={true} activeText="Active Title" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
