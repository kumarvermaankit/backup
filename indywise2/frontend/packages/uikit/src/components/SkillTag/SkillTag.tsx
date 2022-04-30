import * as React from 'react';
import styled from 'styled-components';

export type IColorType =
  | 'IndyChartreuse'
  | 'IndyKelly'
  | 'IndyJade'
  | 'IndyLavender'
  | 'IndyMagenta'
  | 'IndyRuby';

export interface ISkillTagProps {
  /**
   * The name of the skill.
   *
   * @example `Project Management`
   *
   * @example `Graphic Designing`
   */
  skill: string;

  /**
   * The color type to which the given skill belong to.
   *
   * @example For `Project Management` skill, it belongs to the category of
   * `Consulting`, and the `colorType` designated to this category is `IndyLavender`.
   *
   * @example For `Graphic Designing` skill, it belong to the category of `EdTech
   * and Online Learning`, and the `colorType` designated to this category is
   * `IndyJade`.
   */
  colorType?: IColorType | string;

  /**
   * Callback function to be triggered on `onClick` event on the button.
   *
   * @example Click on `+2 More` skills button to show the other 2 skills that were hidden.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e?: any) => any;

  /**
   * Custom CSS styling.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;

  /**
   * Font size for the `name` of the skilll. This applies to `SkillText`.
   * @example `20px`
   */
  size?: string;
}

/**
 * Get color's hex code for a given `colorType` prop.
 *
 * @param type `colorType` value provided in the props.
 * @returns The hex code of the background and primary (stroke/text) color
 * belonging to the given `colorType`.
 */
const getColorCode = (
  type: IColorType | string | undefined
): { background: string; primary: string } => {
  //NOTE(Shikhar): Put this in a `util` folder if it can be used somewhere else too.

  switch (type) {
    case 'IndyChartreuse':
      return { background: '#FBFCE4', primary: '#6C7B2D' };

    case 'IndyKelly':
      return { background: '#E4F6E1', primary: '#367229' };

    case 'IndyJade':
      return { background: '#E0F7EB', primary: '#116E3B' };

    case 'IndyLavender':
      return { background: '#F0E6F9', primary: '#471672' };

    case 'IndyMagenta':
      return { background: '#F1DDEC', primary: '#A33F8F' };

    case 'IndyRuby':
      return { background: '#F5E4E6', primary: '#A13D4A' };

    default:
      return { background: '#ffffff', primary: '#0C3559' };
  }
};

export const SkillTag: React.FC<ISkillTagProps> = (props) => {
  const { background, primary } = getColorCode(props.colorType);

  // Color hex code for SkillTag's background.
  const backgroundHex = background;
  // Color hex code for SkillTag's text and border stroke.
  const primaryHex = primary;
  const style = props.style || {};
  const size = props.size || '14px';

  return (
    <>
      <SkillTagBody
        style={style}
        background={backgroundHex}
        primary={primaryHex}
        onClick={props.onClick}
      >
        <SkillText primary={primaryHex} size={size}>
          {props.skill}
        </SkillText>
      </SkillTagBody>
    </>
  );
};

const SkillTagBody = styled.div<{
  background: string;
  primary: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
}>`
  width: fit-content;
  height: fit-content;
  padding: 2px 12px;
  border: 1px solid #cbcbcb;
  box-sizing: border-box;
  border-radius: 14px;
  background: ${(props) => props.background};

  &:hover {
    cursor: ${(props) => (props.onClick ? 'pointer' : '')};
  }
`;

const SkillText = styled.p<{ primary: string; size: string }>`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.size};
  color: #4b4b4b;
`;
