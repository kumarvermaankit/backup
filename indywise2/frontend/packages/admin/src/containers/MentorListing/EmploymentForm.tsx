import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import { MentorContext } from '../../contexts/MentorContext';

interface IEmploymentFormProps {
  index: number;
}

const jobStatus = [
  'Select a Job Status',
  'Full Time',
  'Part Time',
  'Internship'
];

const EmploymentForm: React.FC<IEmploymentFormProps> = ({ index }) => {
  const { removeRow, variables, handleValueChange } = React.useContext(
    MentorContext
  );

  const { employment } = variables;
  const {
    designation = '',
    organization_name = '',
    worked_from = '',
    worked_till = '',
    location = '',
    avatar = '',
    job_status = '',
    description = ''
  } = employment[index];

  return (
    <Line>
      <Flex>
        <Index>
          <span>{index + 1}</span>
        </Index>
        <Tooltip title="Remove education">
          <Remove onClick={(e) => removeRow(e, index, 'employment')} />
        </Tooltip>
      </Flex>
      <Flex>
        <TextField
          label="Designation"
          variant="outlined"
          name="designation"
          onChange={(e) => handleValueChange(e, index, 'employment')}
          value={designation || ''}
          style={{ marginRight: '2vw', marginBottom: '0%', width: '50%' }}
        />
        <TextField
          label="Organization Name"
          variant="outlined"
          name="organization_name"
          onChange={(e) => handleValueChange(e, index, 'employment')}
          value={organization_name || ''}
          style={{ marginRight: '2vw', marginBottom: '0%', width: '50%' }}
        />
        <TextField
          label="Job Status"
          variant="outlined"
          name="job_status"
          onChange={(e) => handleValueChange(e, index, 'employment')}
          value={job_status || ''}
          style={{ marginRight: '2vw', marginBottom: '0%', width: '50%' }}
          select
          SelectProps={{
            native: true
          }}
        >
          {jobStatus.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </TextField>
      </Flex>
      <Flex>
        <TextField
          label="Worked From"
          variant="outlined"
          name="worked_from"
          onChange={(e) => handleValueChange(e, index, 'employment')}
          value={worked_from || ''}
          style={{ marginRight: '2vw', marginBottom: '0%', width: '50%' }}
        />
        <TextField
          label="Worked Till"
          variant="outlined"
          name="worked_till"
          onChange={(e) => handleValueChange(e, index, 'employment')}
          value={worked_till || ''}
          style={{ marginRight: '2vw', marginBottom: '0%', width: '50%' }}
        />
        <TextField
          label="Location"
          variant="outlined"
          name="location"
          onChange={(e) => handleValueChange(e, index, 'employment')}
          value={location || ''}
          style={{ marginBottom: '0%', width: '50%' }}
        />
      </Flex>
      <TextField
        label="Description"
        variant="outlined"
        name="description"
        onChange={(e) => handleValueChange(e, index, 'employment')}
        value={description || ''}
      />
      <TextField
        label="Avatar"
        variant="outlined"
        name="avatar"
        onChange={(e) => handleValueChange(e, index, 'employment')}
        value={avatar || ''}
      />
    </Line>
  );
};

export default EmploymentForm;

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
