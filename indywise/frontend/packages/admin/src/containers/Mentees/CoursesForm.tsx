import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import { UpdatedMenteeContext } from '../../contexts/UpdatedMenteeContext';

interface ISkillsFormProps {
  index: number;
}

const CoursesForm: React.FC<ISkillsFormProps> = ({ index }) => {
  const { removeRow, variables, handleValueChange } = React.useContext(
    UpdatedMenteeContext
  );

  const { menteeCourses } = variables;
  const { status = '', courseID = '' } = menteeCourses[index];

  return (
    <Line>
      <Flex>
        <Index>
          <span>{index + 1}</span>
        </Index>
        <Tooltip title="Remove course">
          <Remove onClick={(e) => removeRow(e, index, 'menteeCourses')} />
        </Tooltip>
      </Flex>
      <Flex>
        <TextField
          label="Course ID"
          variant="outlined"
          name="courseID"
          onChange={(e) => handleValueChange(e, index, 'menteeCourses')}
          value={courseID || ''}
          style={{ marginRight: '2vw', width: '50%' }}
        />
        <TextField
          label="Status"
          variant="outlined"
          name="status"
          onChange={(e) => handleValueChange(e, index, 'menteeCourses')}
          value={status || ''}
          style={{ width: '50%' }}
          select
          SelectProps={{
            native: true
          }}
        >
          {['', 'not_started', 'in_progress', 'finished'].map(
            (course: string) => (
              <option key={course} value={course}>
                {course}
              </option>
            )
          )}
        </TextField>
      </Flex>
    </Line>
  );
};

export default CoursesForm;

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
