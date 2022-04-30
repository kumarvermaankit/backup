import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import { MentorContext } from '../../contexts/MentorContext';

interface ISkillsFormProps {
  index: number;
}

const skillCategories = [
  'Select a Skill',
  'Youtube, Social Media, Digital Marketing',
  'HealthCare',
  'EdTech and Online Learning',
  'Consulting',
  'Information Technology',
  'E Commerce'
];

const SkillsForm: React.FC<ISkillsFormProps> = ({ index }) => {
  const { removeRow, variables, handleValueChange } = React.useContext(
    MentorContext
  );

  const { skills } = variables;
  const { skill = '', category = '' } = skills[index];

  return (
    <Line>
      <Flex>
        <Index>
          <span>{index + 1}</span>
        </Index>
        <Tooltip title="Remove skill">
          <Remove onClick={(e) => removeRow(e, index, 'skills')} />
        </Tooltip>
      </Flex>
      <Flex>
        <TextField
          label="Skill"
          variant="outlined"
          name="skill"
          onChange={(e) => handleValueChange(e, index, 'skills')}
          value={skill || ''}
          style={{ marginRight: '2vw', width: '50%' }}
        />
        <TextField
          label="Category"
          variant="outlined"
          name="category"
          onChange={(e) => handleValueChange(e, index, 'skills')}
          value={category || ''}
          style={{ width: '50%' }}
          select
          SelectProps={{
            native: true
          }}
        >
          {skillCategories.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </TextField>
      </Flex>
    </Line>
  );
};

export default SkillsForm;

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
