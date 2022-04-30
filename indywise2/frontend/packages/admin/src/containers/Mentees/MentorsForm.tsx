import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import { UpdatedMenteeContext } from '../../contexts/UpdatedMenteeContext';
import { MentorContext } from '../../contexts/MentorContext';

interface ISkillsFormProps {
  index: number;
}

const MentorsForm: React.FC<ISkillsFormProps> = ({ index }) => {
  const { removeRow, variables, handleValueChange } = useContext(
    UpdatedMenteeContext
  );

  const { mentorList, getMentorsList } = useContext(MentorContext);

  useEffect(() => {
    getMentorsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { mentors } = variables;
  const { mentorID = '', mentorTill = {}, mentorFrom = {} } = mentors[index];

  return (
    <Line>
      <Flex>
        <Index>
          <span>{index + 1}</span>
        </Index>
        <Tooltip title="Remove mentor">
          <Remove onClick={(e) => removeRow(e, index, 'mentors')} />
        </Tooltip>
      </Flex>
      <Flex>
        <TextField
          label="Mentor From"
          variant="outlined"
          name="mentorFrom"
          type="date"
          onChange={(e) => handleValueChange(e, index, 'mentors')}
          value={
            `${mentorFrom.year}-${mentorFrom.month}-${mentorFrom.day}` ||
            mentorFrom
          }
          style={{ marginRight: '2vw', width: '45%' }}
        />
        <TextField
          label="Mentor Till"
          variant="outlined"
          name="mentorTill"
          type="date"
          onChange={(e) => handleValueChange(e, index, 'mentors')}
          value={
            `${mentorTill.year}-${mentorTill.month}-${mentorTill.day}` ||
            mentorTill
          }
          style={{ marginRight: '2vw', width: '45%' }}
        />
        <TextField
          label="Mentor ID"
          variant="outlined"
          name="mentorID"
          onChange={(e) => handleValueChange(e, index, 'mentors')}
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
      </Flex>
    </Line>
  );
};

export default MentorsForm;

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
