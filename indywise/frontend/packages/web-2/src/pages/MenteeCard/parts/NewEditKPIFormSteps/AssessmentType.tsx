import React from 'react';
// import { createStyles, Theme } from '@material-ui/core';
import Select from '@material-ui/core/Select';
// import { makeStyles } from '@material-ui/core/styles';
import { CurrentStepTitle } from '../NewEditKPIMetrics';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import MenuItem from '@material-ui/core/MenuItem';

interface Props {
  value: string;
  setValue: (key: string, value: any) => void;
}

const AssessmentType: React.FC<Props> = ({ value, setValue }) => {
  // const useStyles = makeStyles((theme: Theme) =>
  //   createStyles({
  //     formControl: {
  //       margin: theme.spacing(1),
  //       minWidth: 120,
  //       width: '90%'
  //     },
  //     selectEmpty: {
  //       marginTop: theme.spacing(2)
  //     }
  //   })
  // );
  // const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue('assessmentType', event.target.value as string);
  };

  return (
    <>
      <CurrentStepTitle>Assessment type</CurrentStepTitle>
      <InputLabel htmlFor="name-multiple">Division</InputLabel>
      {/* <FormControl className={classes.formControl}> */}
      <Select
        placeholder="sdaasds"
        onChange={handleChange}
        style={{
          width: '100%',
          margin: '2.25em 0 0 0',
          fontSize: '16px',
          lineHeight: '24px'
        }}
        input={<Input id="name-multiple" />}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      {/* </FormControl> */}
    </>
  );
};

export default AssessmentType;
