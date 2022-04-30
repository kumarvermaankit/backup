import * as React from 'react';

import KycList from '../components/Kyc-List/KycList';
import KycListWrapper from '../components/Kyc-List/KycListWrapper';

export default {
  title: 'Kyc List Wrapper',
  component: KycListWrapper
};

export const Default = () => (
  <KycListWrapper>
    <KycList icon="" title="Education Qualification" />{' '}
  </KycListWrapper>
);
