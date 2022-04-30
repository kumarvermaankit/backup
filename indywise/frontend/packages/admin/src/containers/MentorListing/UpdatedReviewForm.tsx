import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import { UpdatedMentorContext } from '../../contexts/UpdatedMentorContext';

interface IReviewsFormProps {
  index: number;
}

const ReviewForm: React.FC<IReviewsFormProps> = ({ index }) => {
  const { removeRow, variables, handleValueChangeA } = React.useContext(
    UpdatedMentorContext
  );

  const { reviews } = variables;
  const {
    name = '',
    place = '',
    subject = '',
    avatar = '',
    review = '',
    rating = 0
  } = reviews[index];

  return (
    <Line>
      <Flex>
        <Index>
          <span>{index + 1}</span>
        </Index>
        <Tooltip title="Remove review">
          <Remove onClick={(e) => removeRow(e, index, 'reviews')} />
        </Tooltip>
      </Flex>
      <Flex>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          onChange={(e) => handleValueChangeA(e, index, 'reviews')}
          value={name || ''}
          style={{ marginRight: '2vw', marginBottom: '0%', width: '50%' }}
        />
        <TextField
          label="Place"
          variant="outlined"
          name="place"
          onChange={(e) => handleValueChangeA(e, index, 'reviews')}
          value={place || ''}
          style={{ marginRight: '2vw', marginBottom: '0%', width: '50%' }}
        />
        <TextField
          label="Subject"
          variant="outlined"
          name="subject"
          onChange={(e) => handleValueChangeA(e, index, 'reviews')}
          value={subject || ''}
          style={{ marginBottom: '0%', width: '50%' }}
        />
        <TextField
          label="Rating"
          type="number"
          variant="outlined"
          name="rating"
          onChange={(e) => handleValueChangeA(e, index, 'reviews')}
          value={rating || ''}
          style={{ marginBottom: '0%', width: '50%' }}
        />
      </Flex>
      <TextField
        label="Review"
        variant="outlined"
        name="review"
        onChange={(e) => handleValueChangeA(e, index, 'reviews')}
        value={review || ''}
        multiline
      />
      <TextField
        label="Avatar"
        variant="outlined"
        name="avatar"
        onChange={(e) => handleValueChangeA(e, index, 'reviews')}
        value={avatar || ''}
        multiline
      />
    </Line>
  );
};

export default ReviewForm;

const Line = styled.div`
  margin-top: 2vh;
  background: aliceblue;
  padding: 2vw;

  svg {
    margin: inherit;
    fill: red;
    cursor: pointer;
  }
`;

const Flex = styled.div`
  display: flex !important;

  svg {
    margin-left: 1vw;
  }
`;

const Index = styled.div`
  width: 2vw;
  text-align: center;
  align-self: center;
  background: #0c3559;

  span {
    color: white;
    font-family: Mulish;
  }
`;
