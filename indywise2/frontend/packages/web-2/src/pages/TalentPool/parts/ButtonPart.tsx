import React from 'react';
import { Button } from '@indywise/uikit';

const ButtonPart: React.FC = () => {
  const mailMessage =
    'mailto:sales@indywise.com?subject=IndyWise WiseUp&body=Hi Team IndyWise! I am interested in getting a business account.';

  return (
    <>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none', color: '#042039' }}
          href={mailMessage}
        >
          <Button
            icon="arrow"
            iconAlign="right"
            iconRotate={-90}
            iconColor="#262626"
          >
            Contact Sales
          </Button>
        </a>
      </div>
    </>
  );
};

export default ButtonPart;
