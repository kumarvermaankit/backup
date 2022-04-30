import React from 'react';
import {
  CurrentStepTitle,
  FormControlStyles,
  Label,
  Input,
  Button,
  RecommendCourseIcon,
  AddRecommendCourseContainer
} from '../NewEditKPIMetrics';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Icon } from '@indywise/uikit';

const StepSix = () => {
  const [showAddCoursesBtn, setshowAddCoursesBtn] = React.useState('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setshowAddCoursesBtn((event.target as HTMLInputElement).value);
  };

  const [showRecommendCourseForm, setShowRecommendCourseForm] = React.useState(
    false
  );

  const handleshowRecommendCourseFormAction = () => {
    setShowRecommendCourseForm((prevState) => !prevState);
  };

  return (
    <div>
      <CurrentStepTitle>Recommended Courses</CurrentStepTitle>
      <FormControlStyles>
        <Label size="16px" lineHeight="28px" fontWeight="normal" htmlFor="">
          Would you submit new recommended courses for the mentee?
        </Label>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={showAddCoursesBtn}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControlStyles>

      {showAddCoursesBtn === 'yes' && (
        <AddRecommendCourseContainer>
          {!showRecommendCourseForm && (
            <div className="overview">
              <RecommendCourseIcon
                onClick={handleshowRecommendCourseFormAction}
              >
                <Icon icon="addKpi" />
              </RecommendCourseIcon>
              <span>Add recommended course</span>
            </div>
          )}

          {showRecommendCourseForm ? (
            <div className="formInputs">
              <Input type="text" placeholder="Course name *" />
              <Input type="text" placeholder="Course line *" />

              <Input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                placeholder="Expected date of completion *"
                //   onChange={handleChange}
                //   value={values.dateOfBirth}
              />
              <div
                style={{
                  marginTop: '1.2rem',
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                <Button
                  btnType="secondary"
                  style={{ marginRight: '10px' }}
                  onClick={handleshowRecommendCourseFormAction}
                  fontSize="16px"
                  lineHeight="24px"
                  color="#262626"
                >
                  Cancel
                </Button>
                <Button
                  btnType="primary"
                  color="#042039"
                  fontSize="16px"
                  lineHeight="24px"
                >
                  save
                </Button>
              </div>
            </div>
          ) : null}
        </AddRecommendCourseContainer>
      )}
    </div>
  );
};

export default StepSix;
