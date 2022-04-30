import * as React from 'react';
import { create } from 'react-test-renderer';

import KycListWrapper from './KycListWrapper';

describe('Kyc List Item Wrapper', () => {
  it('should render correctly', () => {
    const component = create(
      <KycListWrapper>Wrap Kyc List With KycListWrapper </KycListWrapper>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
