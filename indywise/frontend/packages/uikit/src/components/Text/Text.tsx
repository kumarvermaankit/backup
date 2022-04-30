import * as React from 'react';
import styled from 'styled-components';

export type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'hl'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'small'
  | 'paragraph';

export interface ITextProps {
  /**
   * Type of text.
   *
   * @example `h1` for heading
   *
   * @example `hl` for large heading
   *
   * @default p
   */
  type?: TextType;

  /**
   * Text should be bold or not.
   *
   * @example `true` for bold text.
   *
   * @example `false` for normal text.
   */
  bold?: boolean;

  /**
   * Text should be underlined or not.
   *
   * @example `true` for underlined text.
   *
   * @example `false` for normal text.
   */
  underline?: boolean;

  /**
   * Color to override the default color.
   *
   * @example `#f3f3f3` or `green`
   */
  color?: string;

  /**
   * Size of text.
   *
   * @example `24px`
   */
  size?: string;

  /**
   * Custom CSS styling.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}

export const Text: React.FC<ITextProps> = (props) => {
  const bold = props.bold || false;
  const style = props.style || {};
  if (props.underline) {
    style['text-decoration'] = 'underline';
  }
  if (props.color) {
    style['color'] = props.color;
  }

  switch (props.type) {
    case 'hl':
      return (
        <HL style={style} bold={bold} size={props.size}>
          {props.children}
        </HL>
      );

    case 'h1':
      return (
        <H1 style={style} bold={bold} size={props.size}>
          {props.children}
        </H1>
      );

    case 'h2':
      return (
        <H2 style={style} bold={bold} size={props.size}>
          {props.children}
        </H2>
      );

    case 'h3':
      return (
        <H3 style={style} bold={bold} size={props.size}>
          {props.children}
        </H3>
      );

    case 'h4':
      return (
        <H4 style={style} bold={bold} size={props.size}>
          {props.children}
        </H4>
      );

    case 'title':
      return (
        <Title style={style} bold={bold} size={props.size}>
          {props.children}
        </Title>
      );

    case 'subtitle':
      return (
        <SubTitle style={style} bold={bold} size={props.size}>
          {props.children}
        </SubTitle>
      );

    case 'body':
      return (
        <Body style={style} bold={bold} size={props.size}>
          {props.children}
        </Body>
      );

    case 'small':
      return (
        <Small style={style} bold={bold} size={props.size}>
          {props.children}
        </Small>
      );

    case 'paragraph':
      return (
        <StyledText style={style} bold={bold} size={props.size}>
          {props.children}
        </StyledText>
      );

    default:
      return (
        <StyledText style={style} bold={bold} size={props.size}>
          {props.children}
        </StyledText>
      );
  }
};

const HL = styled.h1<{
  bold: boolean;
  size: string | undefined;
}>`
  margin: 0;
  font-style: normal;
  font-size: ${(props) => props.size || '80px'};
  font-family: 'Mulish', sans-serif;
  font-weight: 900;
  line-height: 100px;
  color: #0c3559;
`;

const H1 = styled.h1<{
  bold: boolean;
  size: string | undefined;
}>`
  margin: 0;
  font-size: ${(props) => props.size || '64px'};
  font-style: normal;
  font-family: 'Mulish', sans-serif;
  font-weight: 900;
  line-height: 80px;
  color: #0c3559;
`;

const H2 = styled.h2<{
  bold: boolean;
  size: string | undefined;
}>`
  margin: 0;
  font-style: normal;
  font-size: ${(props) => props.size || '48px'};
  font-family: 'Mulish', sans-serif;
  font-weight: ${(props) => (props.bold ? '900' : '700')};
  line-height: 60px;
  color: #0c3559;
`;

const H3 = styled.h3<{
  bold: boolean;
  size: string | undefined;
}>`
  margin: 0;
  font-style: normal;
  font-size: ${(props) => props.size || '32px'};
  font-family: 'Mulish', sans-serif;
  font-weight: ${(props) => (props.bold ? '900' : '700')};
  line-height: 40px;
  color: #0c3559;
`;

const H4 = styled.h4<{
  bold: boolean;
  size: string | undefined;
}>`
  margin: 0;
  font-style: normal;
  font-size: ${(props) => props.size || '24px'};
  font-family: 'Mulish', sans-serif;
  font-weight: ${(props) => (props.bold ? '900' : '700')};
  line-height: 30px;
  color: #0c3559;
`;

const Title = styled.h1<{
  bold: boolean;
  size: string | undefined;
}>`
  margin: 0;
  font-style: normal;
  font-size: ${(props) => props.size || '1.25rem'};
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: 30px;
  color: #0c3559;
`;

const SubTitle = styled.h2<{
  bold: boolean;
  size: string | undefined;
}>`
  margin: 0;
  font-style: normal;
  font-size: ${(props) => props.size || '16px'};
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: 24px;
  color: #0c3559;
`;

const Body = styled.p<{
  bold: boolean;
  size: string | undefined;
}>`
  margin: 0;
  font-style: normal;
  font-size: ${(props) => props.size || '16px'};
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: 19px;
  color: #0c3559;
`;

const Small = styled.p<{
  bold: boolean;
  size: string | undefined;
}>`
  margin: 0;
  font-style: normal;
  font-size: ${(props) => props.size || '12px'};
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: 18px;
  color: #0c3559;
`;

const StyledText = styled.p<{
  bold: boolean;
  size: string | undefined;
}>`
  margin: 0;
  font-style: normal;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-size: ${(props) => props.size || '16px'};
  line-height: 18px;
  color: #0c3559;
`;
