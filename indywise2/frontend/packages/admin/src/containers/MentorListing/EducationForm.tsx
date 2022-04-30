import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import { MentorContext } from '../../contexts/MentorContext';

interface IEducationFormProps {
  index: number;
}

const courseTypes = [
  'Select a Course Type',
  'Full Time',
  'Part Time',
  'Distance Learning'
];

const EducationForm: React.FC<IEducationFormProps> = ({ index }) => {
  const { removeRow, variables, handleValueChange } = React.useContext(
    MentorContext
  );

  const { education } = variables;
  const {
    courseName,
    specialization,
    instituteName,
    avatar,
    courseType,
    passingYear,
    description
  } = education[index];

  return (
    <Line>
      <Flex>
        <Index>
          <span>{index + 1}</span>
        </Index>
        <Tooltip title="Remove education">
          <Remove onClick={(e) => removeRow(e, index, 'education')} />
        </Tooltip>
      </Flex>
      <Flex>
        <TextField
          label="Course Name"
          variant="outlined"
          name="courseName"
          onChange={(e) => handleValueChange(e, index, 'education')}
          value={courseName || ''}
          style={{ marginRight: '2vw', marginBottom: '0%', width: '50%' }}
        />
        <TextField
          label="Course Type"
          variant="outlined"
          name="courseType"
          onChange={(e) => handleValueChange(e, index, 'education')}
          value={courseType || ''}
          style={{ marginRight: '2vw', marginBottom: '0%', width: '50%' }}
          select
          SelectProps={{
            native: true
          }}
        >
          {courseTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </TextField>
        <TextField
          label="Passing Year"
          variant="outlined"
          name="passingYear"
          onChange={(e) => handleValueChange(e, index, 'education')}
          value={passingYear || ''}
          style={{ marginBottom: '0%', width: '50%' }}
        />
      </Flex>
      <Flex>
        <TextField
          label="Specialization"
          variant="outlined"
          name="specialization"
          onChange={(e) => handleValueChange(e, index, 'education')}
          value={specialization || ''}
          style={{ marginRight: '2vw', marginBottom: '0%', width: '50%' }}
        />
        <TextField
          label="Institute Name"
          variant="outlined"
          name="instituteName"
          onChange={(e) => handleValueChange(e, index, 'education')}
          value={instituteName || ''}
          style={{ marginBottom: '0%', width: '50%' }}
        />
      </Flex>
      <TextField
        label="Avatar"
        variant="outlined"
        name="avatar"
        onChange={(e) => handleValueChange(e, index, 'education')}
        value={avatar || ''}
        multiline
      />
      <TextField
        label="Description"
        variant="outlined"
        name="description"
        onChange={(e) => handleValueChange(e, index, 'education')}
        value={description || ''}
        multiline
      />
    </Line>
  );
};

export default EducationForm;

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
