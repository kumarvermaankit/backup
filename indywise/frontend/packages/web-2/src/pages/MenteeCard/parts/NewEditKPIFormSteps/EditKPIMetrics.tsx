import React from 'react';
import { CurrentStepTitle, LabelWrapper } from '../NewEditKPIMetrics';
// import Step from '../Step';

const StepTwo: React.FC<{
  inputValues: {
    kpiMetricsWriting: string;
    kpiMetricsTesting: string;
  };
  setValue: (key: string, value: string) => void;
}> = () => {
  return (
    <>
      <CurrentStepTitle>Edit KPI Metrics</CurrentStepTitle>
      <LabelWrapper>
        <label> Quality and Testing : Writing</label>
        <p>
          Writes code with testability, readability, edge cases, and errors in
          mind
        </p>
      </LabelWrapper>
      {/* <Step value={2} type="blah" /> */}
      <LabelWrapper>
        <label>Quality and Testing : Testing</label>
        <p>
          Writes code with testability, readability, edge cases, and errors in
          mind
        </p>
      </LabelWrapper>
      {/* <Step value={4} type="blah" /> */}
    </>
  );
};

export default StepTwo;
