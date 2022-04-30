import * as React from 'react';
import { create } from 'react-test-renderer';

import { Button } from './Button';

describe('Button', () => {
  it('Disable Primary', () => {
    const component = create(
      <Button text="Button" color="primary" isDisabled={true}>
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Disable Secondary', () => {
    const component = create(
      <Button text="Button" color="secondary" isDisabled={true}>
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Disable Tertiary', () => {
    const component = create(
      <Button text="Button" color="tertiary" isDisabled={true}>
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Primary', () => {
    const component = create(
      <Button text="Button" color="primary">
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Secondary', () => {
    const component = create(
      <Button text="Button" color="secondary">
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Tertiary', () => {
    const component = create(
      <Button text="Button" color="tertiary">
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Primary with Icon props left align', () => {
    const component = create(
      <Button
        text="Button"
        color="primary"
        icon="download"
        iconAlign="left"
        iconColor="#0C3559"
        iconSize="24px"
      >
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Primary with Icon props right align', () => {
    const component = create(
      <Button
        text="Button"
        color="primary"
        icon="download"
        iconAlign="right"
        iconColor="#0C3559"
        iconSize="24px"
      >
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Secondary with Icon props left align', () => {
    const component = create(
      <Button
        text="Button"
        color="secondary"
        icon="download"
        iconAlign="left"
        iconColor="#262626"
        iconSize="24px"
      >
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Secondary with Icon props right align', () => {
    const component = create(
      <Button
        text="Button"
        color="secondary"
        icon="download"
        iconAlign="right"
        iconColor="#262626"
        iconSize="24px"
      >
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Tertiary with Icon props left align', () => {
    const component = create(
      <Button
        text="Button"
        color="tertiary"
        icon="download"
        iconAlign="left"
        iconColor="#FFFFFF"
        iconSize="24px"
      >
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Tertiary with Icon props right align', () => {
    const component = create(
      <Button
        text="Button"
        color="tertiary"
        icon="download"
        iconAlign="right"
        iconColor="#FFFFFF"
        iconSize="24px"
      >
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Styled Button', () => {
    const component = create(
      <Button
        style={{
          backgroundColor: '#222',
          color: '#fff',
          border: '1px solid #F2A922'
        }}
      >
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Font styled', () => {
    const component = create(
      <Button
        fontStyle={{
          fontFamily: 'Robot',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#333'
        }}
      >
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Loading Button', () => {
    const component = create(<Button isLoading={true}>Button</Button>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Click fun', () => {
    const component = create(
      <Button onClick={() => console.log('Button Clicked!')}>Button</Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Icon rotation', () => {
    const component = create(
      <Button icon="arrow" iconRotate={-90} iconColor="#fff">
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('No Type and Text', () => {
    const component = create(
      <Button
        icon="download"
        iconAlign="right"
        iconColor="#262626"
        iconSize="24px"
      >
        Button
      </Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('only icon', () => {
    const component = create(<Button icon="download">Button</Button>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('React Element icon', () => {
    const component = create(
      <Button icon={<div>Hello</div>}>Button</Button>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
