import React from 'react';
import { CurrentStepTitle, Label } from '../NewEditKPIMetrics';
// import Step from '../Step';
import Checkbox from '@material-ui/core/Checkbox';

const StepSeven = () => {
  return (
    <>
      <CurrentStepTitle>Submit</CurrentStepTitle>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '1.2rem'
        }}
      >
        <Label size="16px" lineHeight="24px" fontWeight="normal">
          Once submitted, this assessment can't be amended
        </Label>
        <Checkbox style={{ padding: 0, alignSelf: 'flex-start' }} />
      </div>
      <div>
        <Label size="16px" lineHeight="24px" fontWeight="bold">
          How would you rate your mentee, mentoring-wise?
        </Label>
        {/* <Step value={4} type="blah" /> */}
      </div>
    </>
  );
};

export default StepSeven;
