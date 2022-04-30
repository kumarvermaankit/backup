import React from 'react';
import { Text } from '@indywise/uikit';
import Rating from '@material-ui/lab/Rating';

const RatingFilter = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Text bold type="body" size="16px">
        Rating
      </Text>
      <Text type="body" size="20px" style={{ margin: '15px 0' }}>
        Please Select Rating
      </Text>
      <Rating size="large" />
    </div>
  );
};

export default RatingFilter;
