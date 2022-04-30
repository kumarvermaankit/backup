import * as React from 'react';
import { create } from 'react-test-renderer';

import { Text } from './Text';

describe('Text', () => {
  it('H1', () => {
    const component = create(<Text type="h1">Sample Text</Text>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H1 bold', () => {
    const component = create(
      <Text type="h1" bold={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H1 underline', () => {
    const component = create(
      <Text type="h1" underline={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H2', () => {
    const component = create(<Text type="h2">Sample Text</Text>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H2 bold', () => {
    const component = create(
      <Text type="h2" bold={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H2 underline', () => {
    const component = create(
      <Text type="h2" underline={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H3', () => {
    const component = create(<Text type="h3">Sample Text</Text>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H3 bold', () => {
    const component = create(
      <Text type="h3" bold={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H3 underline', () => {
    const component = create(
      <Text type="h3" underline={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H4', () => {
    const component = create(<Text type="h4">Sample Text</Text>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H4 bold', () => {
    const component = create(
      <Text type="h4" bold={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('H4 underline', () => {
    const component = create(
      <Text type="h4" underline={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('HL', () => {
    const component = create(<Text type="hl">Sample Text</Text>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('HL bold', () => {
    const component = create(
      <Text type="hl" bold={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('HL underline', () => {
    const component = create(
      <Text type="hl" underline={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Body', () => {
    const component = create(<Text type="body">Sample Text</Text>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Body bold', () => {
    const component = create(
      <Text type="body" bold={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Body underline', () => {
    const component = create(
      <Text type="body" underline={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Paragraph', () => {
    const component = create(
      <Text type="paragraph">Sample Text</Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Paragraph bold', () => {
    const component = create(
      <Text type="paragraph" bold={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Paragraph underline', () => {
    const component = create(
      <Text type="paragraph" underline={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Title', () => {
    const component = create(<Text type="title">Sample Text</Text>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Title bold', () => {
    const component = create(
      <Text type="title" bold={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Title underline', () => {
    const component = create(
      <Text type="title" underline={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Small', () => {
    const component = create(<Text type="small">Sample Text</Text>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Small bold', () => {
    const component = create(
      <Text type="small" bold={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Small underline', () => {
    const component = create(
      <Text type="small" underline={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Subtitle', () => {
    const component = create(<Text type="subtitle">Sample Text</Text>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Subtitile bold', () => {
    const component = create(
      <Text type="subtitle" bold={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Subtitle underline', () => {
    const component = create(
      <Text type="subtitle" underline={true}>
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Size Color', () => {
    const component = create(
      <Text size="24px" color="red">
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Styled', () => {
    const component = create(
      <Text
        style={{
          color: '#333',
          fontSize: '40px'
        }}
      >
        Sample Text
      </Text>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
