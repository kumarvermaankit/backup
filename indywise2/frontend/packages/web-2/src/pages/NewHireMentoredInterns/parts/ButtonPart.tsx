import React from 'react';
import { Button } from '@indywise/uikit';

const LandingArea: React.FC = () => {
  return (
    <>
      <div>
        <Button
          icon="arrow"
          iconAlign="right"
          iconRotate={-90}
          iconColor="#262626"
        >
          <a
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: '#042039' }}
            href="mailto:sales@indywise.com?subject=To enquire regarding IndyWise WiseUp&body=I would like to know more about pricing of each intern in the WiseUp program."
          >
            Contact Sales
          </a>
        </Button>
      </div>
    </>
  );
};

export default LandingArea;
