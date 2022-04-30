import React from 'react';
import { Button } from '@indywise/uikit';
import { useBookingModal } from '../../../contexts/BookingModalContext';

const ButtonPart: React.FC = () => {
  const { openBookingModal } = useBookingModal();

  const applyNow = () => {
    const serviceNumber = 121;
    openBookingModal(serviceNumber);
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
