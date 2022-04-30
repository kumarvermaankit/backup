import * as React from 'react';
import { create } from 'react-test-renderer';

import { SkillTag } from './SkillTag';

describe('SkillTag', () => {
  it('IndyChartreuse', () => {
    const component = create(
      <SkillTag skill="Name of SKill" colorType="IndyChartreuse" size="16px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('IndyKelly', () => {
    const component = create(
      <SkillTag skill="Name of SKill" colorType="IndyKelly" size="16px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('IndyJade', () => {
    const component = create(
      <SkillTag skill="Name of SKill" colorType="IndyJade" size="16px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('IndyLavender', () => {
    const component = create(
      <SkillTag skill="Name of SKill" colorType="IndyLavender" size="16px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('IndyMagenta', () => {
    const component = create(
      <SkillTag skill="Name of SKill" colorType="IndyMagenta" size="16px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('IndyRuby', () => {
    const component = create(
      <SkillTag skill="Name of SKill" colorType="IndyRuby" size="16px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Style', () => {
    const component = create(
      <SkillTag skill="Name of SKill" style={{}} size="16px" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('Style', () => {
    const component = create(
      <SkillTag
        skill="Name of SKill"
        onClick={() => alert('Hello')}
        size="16px"
      />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('only Skill', () => {
    const component = create(<SkillTag skill="Name of SKill" />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
