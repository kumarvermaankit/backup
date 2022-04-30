import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import { MenteeContext } from '../../contexts/MenteeContext';

interface IKPIsFormProps {
  index: number;
}

const KPICategory = [
  'Select a KPI',
  'technicalSkills',
  'delivery',
  'fcc',
  'leadership',
  'strategicImpact'
];

const KPIForm: React.FC<IKPIsFormProps> = ({ index }) => {
  const { removeRow, variables, handleValueChange } = React.useContext(
    MenteeContext
  );

  const { KPIs } = variables;
  const { kpi = '', value = '' } = KPIs[index];

  return (
    <Line>
      <Flex>
        <Index>
          <span>{index + 1}</span>
        </Index>
        <Tooltip title="Remove KPI">
          <Remove onClick={(e) => removeRow(e, index, 'KPIs')} />
        </Tooltip>
      </Flex>
      <Flex>
        <TextField
          label="KPI"
          variant="outlined"
          name="kpi"
          onChange={(e) => handleValueChange(e, index, 'KPIs')}
          value={kpi || ''}
          style={{ width: '50%' }}
          select
          SelectProps={{
            native: true
          }}
        >
          {KPICategory.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </TextField>
        <TextField
          label="Value"
          variant="outlined"
          name="value"
          type="number"
          onChange={(e) => handleValueChange(e, index, 'KPIs')}
          value={value || 0}
          style={{ marginLeft: '2vw', width: '50%' }}
        />
      </Flex>
    </Line>
  );
};

export default KPIForm;

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
