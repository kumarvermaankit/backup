import React from 'react';
import { Button } from '@indywise/uikit';
import { WiseUpXPageContext } from '../../../contexts/WiseUpXPageContext';
import { useBookingModal } from '../../../contexts/BookingModalContext';

const ButtonPart: React.FC = () => {
  const { getWiseupXType } = React.useContext(WiseUpXPageContext);
  const { openBookingModal } = useBookingModal();

  const wiseupXType = getWiseupXType();

  const applyNow = () => {
    openBookingModal(wiseupXType === 'student' ? 72 : 73);
  };

  return (
    <>
      <div>
        <Button onClick={applyNow}>Apply Now</Button>
      </div>
    </>
  );
};

export default ButtonPart;
