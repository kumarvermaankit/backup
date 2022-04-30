import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import { UpdatedMenteeContext } from '../../contexts/UpdatedMenteeContext';
import { MentorContext } from '../../contexts/MentorContext';

interface ISkillsFormProps {
  index: number;
}

const ReviewsForm: React.FC<ISkillsFormProps> = ({ index }) => {
  const { removeRow, variables, handleValueChange } = React.useContext(
    UpdatedMenteeContext
  );

  const { reviews } = variables;
  const {
    mentorID = '',
    name = '',
    place = '',
    subject = '',
    review = '',
    rating = '',
    avatar = ''
  } = reviews[index];

  const { mentorList, getMentorsList } = useContext(MentorContext);

  useEffect(() => {
    getMentorsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          label="Mentor ID"
          variant="outlined"
          name="mentorID"
          onChange={(e) => handleValueChange(e, index, 'reviews')}
          value={mentorID || ''}
          style={{ width: '45%' }}
          select
          SelectProps={{
            native: true
          }}
        >
          {[''].concat(mentorList).map((mentor: any) => (
            <option key={mentor.username} value={mentor.ID}>
              {mentor.username}
            </option>
          ))}
        </TextField>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          onChange={(e) => handleValueChange(e, index, 'reviews')}
          value={name || ''}
          style={{ marginRight: '2vw', width: '45%' }}
        />
        <TextField
          label="Place"
          variant="outlined"
          name="place"
          onChange={(e) => handleValueChange(e, index, 'reviews')}
          value={place || ''}
          style={{ marginRight: '2vw', width: '45%' }}
        />
        <TextField
          label="Subject"
          variant="outlined"
          name="subject"
          onChange={(e) => handleValueChange(e, index, 'reviews')}
          value={subject || ''}
          style={{ marginRight: '2vw', width: '45%' }}
        />
        <TextField
          label="Review"
          variant="outlined"
          name="review"
          onChange={(e) => handleValueChange(e, index, 'reviews')}
          value={review || ''}
          style={{ marginRight: '2vw', width: '45%' }}
        />
        <TextField
          label="Rating"
          variant="outlined"
          name="rating"
          type="number"
          onChange={(e) => handleValueChange(e, index, 'reviews')}
          value={rating || ''}
          style={{ marginRight: '2vw', width: '45%' }}
        />
        <TextField
          label="Avatar"
          variant="outlined"
          name="avatar"
          onChange={(e) => handleValueChange(e, index, 'reviews')}
          value={avatar || ''}
          style={{ marginRight: '2vw', width: '45%' }}
        />
      </Flex>
    </Line>
  );
};

export default ReviewsForm;

const Line = styled.div`
  margin-top: 2vh;
  background: aliceblue;
  padding: 2vw 2vw 0vw 2vw;

  svg {
    margin: inherit;
    fill: red;
    cursor: pointer;
  }
`;

const Flex = styled.div`
  display: flex !important;
  flex-wrap: wrap;

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
