import React from 'react';
import {
  CurrentStepTitle,
  FormControlStyles,
  Label,
  InfoText,
  Input
} from '../NewEditKPIMetrics';
import Step from '../Step';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Props {
  value: number;
  setValue: (key: string, value: any) => void;
}

const StepFive: React.FC<Props> = ({ value, setValue }) => {
  return (
    <div>
      <CurrentStepTitle>Forecast</CurrentStepTitle>

      <FormControlStyles>
        <Label size="16px" lineHeight="28px" fontWeight="normal" htmlFor="">
          Is this the first session with this particular mentee?
        </Label>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          // value={value}
          // onChange={handleRadioChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControlStyles>

      <FormControlStyles>
        <Label size="16px" lineHeight="28px" fontWeight="normal" htmlFor="">
          Would you like to submit a new forecast for the mentee?
        </Label>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          // value={value}
          // onChange={handleRadioChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControlStyles>
      <FormControlStyles>
        <Label size="20px" lineHeight="28px" fontWeight={600}>
          Technical Skills
        </Label>
        <InfoText size="14px" lineHeight="20px">
          Please note down which level of technical skills would the mentee have
          after the internship is completed.
        </InfoText>
        <Step
          value={value}
          handleStepChange={setValue}
          type="techinicalSkills"
        />
      </FormControlStyles>
      {/* <FormControlStyles>
        <Label size="20px" lineHeight="28px" fontWeight={600}>
          Quality and Testing : Testing
        </Label>
        <InfoText size="14px" lineHeight="20px">
          Writes code with testability, readability, edge cases, and errors in
          mind
        </InfoText>
        <Step value={3} />
      </FormControlStyles>
      <FormControlStyles>
        <Label size="20px" lineHeight="28px" fontWeight={600}>
          Debugging and Observability : Debugging
        </Label>
        <InfoText size="14px" lineHeight="20px">
          Writes code with testability, readability, edge cases, and errors in
          mind
        </InfoText>
        <Step value={3} />
      </FormControlStyles> */}
      <Label size="16px" lineHeight="24px" fontWeight="bold">
        Forecast specific remarks
      </Label>
      <InfoText size="14px" lineHeight="24px">
        Please add here any remarks or specific comments you'd like to mention
        about this forecast
      </InfoText>
      <Input placeholder="Forecast specific remarks" />
    </div>
  );
};

export default StepFive;
