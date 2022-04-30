import * as React from 'react';
import { create } from 'react-test-renderer';

import KycList from './KycList';

describe('Kyc Card List Item', () => {
  it('should render correctly', () => {
    const component = create(
      <KycList icon={''} title="List Title"></KycList>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
