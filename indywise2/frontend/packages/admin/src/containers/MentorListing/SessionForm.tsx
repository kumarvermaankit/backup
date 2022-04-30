import React, { useContext } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { UpdatedMentorContext } from '../../contexts/UpdatedMentorContext';

// interface ISessionFormProps {
//   sessions: any
// }

const SessonDetails: React.FC = () => {
  const { handleValueChange, variables } = useContext(UpdatedMentorContext);

  const { sessions } = variables;
  const {
    currency = '',
    service = 0,
    sessionBookingLink = '',
    sessionPrice = '',
    discountedPrice = ''
  } = sessions || {
    currency: '',
    service: 0,
    sessionBookingLink: '',
    sessionPrice: '',
    discountedPrice: ''
  };

  return (
    <div>
      <Flex>
        <TextField
          label="Service"
          variant="outlined"
          name="service"
          onChange={(e) => handleValueChange(e, 'sessions')}
          value={service || ''}
          type="number"
          style={{ marginRight: '2vw', width: '50%' }}
        />
        <TextField
          label="Currency"
          variant="outlined"
          name="currency"
          onChange={(e) => handleValueChange(e, 'sessions')}
          value={currency || ''}
          style={{ marginRight: '2vw', width: '50%' }}
        />
        <TextField
          label="Session Booking Link"
          variant="outlined"
          name="sessionBookingLink"
          onChange={(e) => handleValueChange(e, 'sessions')}
          value={sessionBookingLink || ''}
          style={{ marginRight: '2vw', width: '50%' }}
        />
        <TextField
          label="Session Price"
          variant="outlined"
          name="sessionPrice"
          onChange={(e) => handleValueChange(e, 'sessions')}
          value={sessionPrice || ''}
          type="number"
          style={{ marginRight: '2vw', width: '50%' }}
        />
        <TextField
          label="Discounted Price"
          variant="outlined"
          name="discountedPrice"
          onChange={(e) => handleValueChange(e, 'sessions')}
          value={discountedPrice || ''}
          type="number"
          style={{ marginRight: '2vw', width: '50%' }}
        />
      </Flex>
    </div>
  );
};

export default SessonDetails;

const Flex = styled.div`
  display: flex !important;

  svg {
    margin-left: 1vw;
  }
`;
