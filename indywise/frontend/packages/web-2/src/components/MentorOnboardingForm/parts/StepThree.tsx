import React from 'react';

import { Input } from '../MentorOnboardForm';
import styled from 'styled-components';
import { Title } from './StepOne';
import { HashLink as Link } from 'react-router-hash-link';
import clsx from 'clsx';
import { Step, Button } from './StepOne';
import { FormBtnContainer, GoBackBtn } from './StepTwo';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormFieldErrorMsg from './../../FormErrorMsg';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles({
  root: {
    padding: 0,
    marginRight: '8px',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""'
    },
    input: {
      backgroundColor: '#000',
      border: '1px solid #000'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  }
});

export interface IFormStepThree {
  currency: string;
  hourlySessionPrice: string;
  consent: string;
  mentorshipMotivation: string;
  pastMentoringExperience: string;
  numberOfPastMentees: string;
  firstMenteeLinkedIn?: string;
  secondMenteeLinkedIn?: string;
  commentsAndSuggestions?: string;
  agreeToTermsAndConditions: boolean;
}

interface IFormError {
  currency: string;
  // commentsAndSuggestions: string;
  pastMentoringExperience: string;
  hourlySessionPrice: string;
  mentorshipMotivation: string;
}

const StepThree: React.FC<{
  handleUpdate: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  explicitUpdate: (key: string, value: any) => void;
  goBackHandler: () => void;
  handleCheckboxChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.SyntheticEvent<EventTarget, Event>) => void;
  errors: IFormError;
  inputs: IFormStepThree;
}> = ({
  handleUpdate,
  goBackHandler,
  handleCheckboxChange,
  inputs,

  handleSubmit,
  errors,
  explicitUpdate
}) => {
  const classes = useStyles();

  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    explicitUpdate('consent', value);
  };

  React.useEffect(() => {
    if (
      inputs.currency.trim() &&
      inputs.hourlySessionPrice.toString().trim() &&
      // inputs.commentsAndSuggestions.trim() &&
      inputs.agreeToTermsAndConditions &&
      inputs.mentorshipMotivation.trim() &&
      inputs.pastMentoringExperience.trim() &&
      inputs.numberOfPastMentees.toString().trim() &&
      inputs.consent.trim()
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [inputs]);

  return (
    <>
      <CustomStep>
        <Title>Mentoring Deliverables and T&C (Step 3/3)</Title>

        <FieldControl>
          <Label>
            Your hourly mentoring charges will be listed on the platform to
            allow mentees to book 1-1 instant sessions with you. You can decide
            your own hourly mentoring charges based on your credentials and work
            experience. Please note that the current avg. hourly charges on the
            platform are INR 1500 or USD $20. We urge you to keep your pricing
            affordable with the objective of helping people succeed and to make
            an impact.
          </Label>
          <HourlyChargesContainer>
            <CustomSelect
              name="currency"
              value={inputs.currency}
              onChange={handleUpdate}
            >
              <Option value="dollar">$</Option>
              <Option value="rupee">&#8377;</Option>
            </CustomSelect>
            <Input
              className="removeInputMargine"
              type="number"
              name="hourlySessionPrice"
              onChange={handleUpdate}
              value={inputs.hourlySessionPrice}
              placeholder="Hourly mentoring charges *"
              autoComplete="off"
            />
          </HourlyChargesContainer>
          {errors.currency && <FormFieldErrorMsg text={errors.currency} />}
          {errors.hourlySessionPrice && (
            //@ts-ignore
            <FormFieldErrorMsg text={errors.hourlySessionPrice} />
          )}
        </FieldControl>
        <FieldControl>
          <Label>
            WiseUp upskilling program is a unique mentoring driven upskilling
            program designed for employees/working professionals, founders and
            students (check details here - https://indywise.com/wiseup and
            https://indywise.com/wiseupx). It is a continuous upskilling program
            based on SaaS pricing for the mentees. It is a special opportunity
            for the mentors to handhold and upskill their mentees for a longer
            duration of time which allows you to keep receiving continued
            assignments, engagement and fix earnings. Currently, IndyWise offers
            a fixed earning under this program - $40 or INR 3000 per month for
            delivering 4 mentoring sessions of 1 hr each, doing course
            recommendations and conducting weekly assessments. This is IndyWise
            flagship program and we highly recommend you consent to take these
            assignments.
          </Label>
        </FieldControl>

        <Label style={{ marginTop: '8px' }}>
          WiseUp is an Upskilling Program that helps mentees evolve in
          real-terms.
          <span style={{ fontWeight: 'bolder' }}>
            'Do you give your consent for WiseUp Mentoring?'
          </span>
          WiseUp mentors get a tiered-price system but are guaranteed a higher
          number of upskilling requests. * Check the entire information
          pertaining to the program here-
          <br />
          <a
            href="https://indywise.com/wiseupx"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#a16a06' }}
          >
            https://indywise.com/wiseupx
          </a>
          <span style={{ marginLeft: '3px' }}>or</span>
          <br />
          <a
            href="https://indywise.com/wiseup"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#a16a06' }}
          >
            https://indywise.com/wiseup
          </a>
        </Label>
        <RadioGroup
          aria-label="consent"
          name="consent"
          value={inputs.consent}
          onChange={handleChange}
          style={{ flexDirection: 'row' }}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio style={{ color: '#000' }} disableRipple />}
            label="Yes"
          />
          <FormControlLabel
            value="No"
            control={<Radio style={{ color: '#000' }} disableRipple />}
            label="No"
          />
        </RadioGroup>

        <Input
          type="text"
          name="mentorshipMotivation"
          onChange={handleUpdate}
          value={inputs.mentorshipMotivation}
          placeholder="What motivates you to become a Mentor at IndyWise? *"
          autoComplete="off"
        />
        {errors.mentorshipMotivation && (
          <FormFieldErrorMsg text={errors.mentorshipMotivation} />
        )}

        <Input
          type="text"
          name="pastMentoringExperience"
          onChange={handleUpdate}
          value={inputs.pastMentoringExperience}
          placeholder="Tell us about your past mentoring experience *"
          autoComplete="off"
        />
        {errors.pastMentoringExperience && (
          <FormFieldErrorMsg text={errors.pastMentoringExperience} />
        )}

        <Input
          type="number"
          name="numberOfPastMentees"
          onChange={handleUpdate}
          value={inputs.numberOfPastMentees}
          placeholder="How many mentees/people have you mentored in the past? *"
          autoComplete="off"
        />

        <FieldControl>
          <Label>
            You may like to share 2 references of your mentees (Please put their
            LinkedIn profile links here)
          </Label>
          <Input
            type="text"
            name="firstMenteeLinkedIn"
            value={inputs.firstMenteeLinkedIn}
            onChange={handleUpdate}
            placeholder="Mentee’s LinkedIn link 1"
          />
          <Input
            type="text"
            name="secondMenteeLinkedIn"
            value={inputs.secondMenteeLinkedIn}
            onChange={handleUpdate}
            placeholder="Mentee’s LinkedIn link 2"
          />
        </FieldControl>

        <Input
          type="text"
          name="commentsAndSuggestions"
          onChange={handleUpdate}
          value={inputs.commentsAndSuggestions}
          placeholder="Any Comments/Suggestions"
          autoComplete="off"
        />
        {/* {errors.commentsAndSuggestions && (
            <FormFieldErrorMsg text={errors.commentsAndSuggestions} />
          )} */}

        <TermsAndConditionWrapper>
          <Checkbox
            name="agreeToTermsAndConditions"
            checked={inputs.agreeToTermsAndConditions}
            onChange={handleCheckboxChange}
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={
              <span className={clsx(classes.icon, classes.checkedIcon)} />
            }
            icon={<span className={classes.icon} />}
            inputProps={{ 'aria-label': 'decorative checkbox' }}
          />
          <p className="termsAndCondition">
            I have read the terms and conditions of Mentor Agreement and Best
            Mentoring Practices and Payment Policy document, and I agree to the
            same
          </p>
        </TermsAndConditionWrapper>
        <Link to="/support/terms" style={{ textDecoration: 'none' }}>
          <TC>Read T&C</TC>
        </Link>

        <FormBtnContainer>
          <Button
            onClick={handleSubmit}
            disabled={isButtonDisabled}
            className="submitbtn btn"
            type="submit"
          >
            Finish Onboarding
          </Button>
          <GoBackBtn
            className="gobackbtn btn"
            type="button"
            onClick={() => goBackHandler()}
          >
            Go Back
          </GoBackBtn>
        </FormBtnContainer>
      </CustomStep>
    </>
  );
};

//@ts-ignore
export default StepThree;

const TC = styled.span`
  margin-top: 8px;
  color: #a16a06;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const CustomStep = styled(Step)`
  /* .multiselect-container {
    font-family: Roboto;

    .search-wrapper {
      border: none;
      /* border-bottom: 1px solid #a3a3a3; */

  /* & > input {
        width: 100%;
        overflow-wrap: break-word;
        border-bottom: 1px solid #a3a3a3;
        padding-bottom: 0.5em;
      }

      & > .chip {
        background-color: #ffffff;
        color: #4b4b4b;
        border: 1px solid #4b4b4b;
        border-radius: 30px;
        display: inline-flex;
        align-items: center;

        .custom-close {
          margin-left: 4px;
        }
      }
    }

    .highlightOption {
      background-color: #f3f2f2;
      color: #000;
    }
  }
  .multiSelectContainer li:hover {
    background-color: #f3f2f2;
    color: #000; */
  /* }    */
`;

const CustomSelect = styled.select`
  width: 100%;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5em;
  height: 2.5em;
  outline: none;
  border: none;
  background: #ffffff;
  border-bottom: 1px solid #727272;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`;

const Option = styled.option``;

export const FieldControl = styled.div`
  margin-top: 24px;
`;

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #4b4b4b;
`;

const HourlyChargesContainer = styled.div`
  margin-top: 2.25em;
  display: flex;

  & > :first-child {
    width: min-content;
  }

  .removeInputMargine {
    margin: 0;
    padding: 0;
    padding-left: 5px;
  }
`;

const TermsAndConditionWrapper = styled.div`
  margin-top: 2.5em;
  display: flex;
  align-items: flex-start;

  .termsAndCondition {
    margin: 0;
    color: #4b4b4b;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
  }
`;
