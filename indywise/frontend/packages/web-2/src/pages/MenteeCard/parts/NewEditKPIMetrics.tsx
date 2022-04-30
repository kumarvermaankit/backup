import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Text, Icon } from '@indywise/uikit';

// import AssessmentType from './NewEditKPIFormSteps/AssessmentType';
// import StepThree from './NewEditKPIFormSteps/AdditonalEvaluationComments';
// import StepTwo from './NewEditKPIFormSteps/EditKPIMetrics';
// import StepFour from './NewEditKPIFormSteps/MentoringResults';
// import StepFive from './NewEditKPIFormSteps/Forecast';
// import StepSix from './NewEditKPIFormSteps/RecommendedCourses';
// import StepSeven from './NewEditKPIFormSteps/Submit';
import { useForm } from '../../../hooks/useForm';

const useStyles = makeStyles({
  root: {
    padding: window.screen.width <= 475 ? '20px 20px 10px' : '40px 40px 24px',
    margin: window.screen.width < 475 ? 0 : '0 10px',
    width: '100%',
    maxWidth: '480px',
    position: 'absolute',
    // maxHeight: '659px',
    height: window.screen.width <= 475 ? '100vh' : '659px',
    boxSizing: 'border-box',
    boxShadow: '0px 16px 32px rgba(12, 53, 89, 0.24)',
    borderRadius: '20px'
  },

  rootDA: {
    padding: '8px 0',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  rootTitle: {
    padding: 0
  },

  rootContent: {
    padding: window.screen.width < 475 ? 0 : '8px 0'
  },

  rootSelectInput: {
    width: '100%'
  }
});

interface IFormValues {
  assessmentType: string;
  kpiMetricsWriting: string;
  kpiMetricsTesting: string;
  comments: string;
  menteeEvolvingSkillsAsPlanned: boolean | null;
  weeklyMentoringRemark: string;
  painPointsOnMentee: string;
  firstSession: boolean | null;
  newForecastforMentee: boolean | null;
  techinicalSKills: string;
  skills: string[];
}

const defualtValues: IFormValues = {
  assessmentType: '',
  kpiMetricsWriting: '',
  kpiMetricsTesting: '',
  skills: [],
  comments: '',
  menteeEvolvingSkillsAsPlanned: null,
  weeklyMentoringRemark: '',
  painPointsOnMentee: '',
  firstSession: null,
  newForecastforMentee: null,
  techinicalSKills: ''
};

const NewEditKPIMetrics: React.FC<{
  isOpen: boolean;
  close: () => void;
}> = ({ isOpen, close }) => {
  const classes = useStyles();

  // const { formValues, handleChange, setValue } = useSessionAssessmentProvider();

  const [formCurStep, setFormCurStep] = React.useState<number>(1);

  const handleNextStep = () => {
    setFormCurStep((prevState) => prevState + 1);
  };

  const handlePrevState = () => {
    setFormCurStep((prevState) => prevState - 1);
  };

  const SubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
  };

  const { values, handleSubmit } = useForm<IFormValues>(
    defualtValues,
    SubmitForm,
    () => {}
  );

  return (
    <Container>
      <Dialog
        open={isOpen}
        onClose={close}
        classes={{
          paperScrollPaper: classes.root
        }}
      >
        <DialogTitle
          id="form-dialog-title"
          classes={{ root: classes.rootTitle }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Text type="h4" color="#262626">
                Fill Assessment
              </Text>
            </div>
            <div>
              <CloseIconStyles onClick={close} />
            </div>
          </div>
        </DialogTitle>
        <DialogContent classes={{ root: classes.rootContent }}>
          <form onSubmit={handleSubmit}>
            {/* {formCurStep === 1 && <AssessmentType />}
            {formCurStep === 2 && (
              <StepTwo
                inputValues={{
                  kpiMetricsWriting: values.kpiMetricsWriting,
                  kpiMetricsTesting: values.kpiMetricsTesting
                }}
                setValue={setValue}
              />
            )}
            {formCurStep === 3 && <StepThree />}
            {formCurStep === 4 && <StepFour />}
            {formCurStep === 5 && <StepFive />}
            {formCurStep === 6 && <StepSix />}
            {formCurStep === 7 && <StepSeven />} */}
          </form>
        </DialogContent>
        <DialogActions
          classes={{
            root: classes.rootDA
          }}
        >
          <CurrentStepStyles>{formCurStep}/7</CurrentStepStyles>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            {formCurStep !== 1 && (
              <span
                style={{
                  display: 'inline-block',
                  transform: 'translateY(10px)',
                  cursor: 'pointer',
                  alignSelf: 'center'
                }}
                onClick={handlePrevState}
              >
                <Icon icon="carouselLeft" rotate={90} size="52px" />
              </span>
            )}

            {formCurStep === 7 ? (
              <Button
                color="#042039"
                btnType="primary"
                fontSize="20px"
                lineHeight="28px"
                type="submit"
                onClick={handleSubmit}
              >
                Submit Assessment
              </Button>
            ) : (
              <Button
                btnType="primary"
                color="#042039"
                fontSize="20px"
                lineHeight="28px"
                width="200px"
                onClick={handleNextStep}
              >
                Go to Step {formCurStep + 1}
              </Button>
            )}
          </div>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default NewEditKPIMetrics;

const Container = styled.div`
  padding: 0 10px;
`;

const CloseIconStyles = styled(CloseIcon)`
  color: #d55555;
  cursor: pointer;
  width: 26.4px;
  height: 26.4px;
`;

export const CurrentStepTitle = styled.h2`
  color: #262626;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  margin: 10px 0;
`;

export const LabelWrapper = styled.div`
  label {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #111111;
    margin: 8px 0px;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #4b4b4b;
    margin: 8px 0px;
  }
`;

export const InfoText = styled.p<{ size: string; lineHeight: string }>`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  /* or 171% */

  letter-spacing: 0.02em;

  /* IndyGrey/IG6 */
  margin: 10px 0;
  color: #4b4b4b;
`;

export const Label = styled.label<{
  size: string;
  lineHeight: string;
  fontWeight: string | number;
}>`
  font-family: Roboto;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  /* identical to box height, or 175% */
  margin: 8px 0;
  /* IndyGrey/IG7 */

  color: #262626;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #a3a3a3;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5em;
  width: 100%;
  padding-bottom: 0.5em;
  margin-top: 12px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  &::placeholder {
    color: #727272;
  }
  &:focus {
    outline: none;
  }
`;

export const FormControlStyles = styled.div`
  margin: 10px 0;
`;

export const AddRecommendCourseContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;

  .overview {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span {
      margin-top: 5px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #4b4b4b;
    }
  }
  .formInputs {
    display: flex;
    flex-direction: column;
  }
`;

export const RecommendCourseIcon = styled.div`
  cursor: pointer;
  & > span > svg {
    width: 32px;
    height: 32px;

    & > circle {
      fill: #0c3559;
      stroke: #0c3559;
    }
    & > line {
      fill: #fff;
      stroke: #fff;
    }
  }
`;

export const Button = styled.button<{
  btnType: string;
  fontSize: string;
  lineHeight: string;
  color: string;
  width?: string;
}>`
  padding: 8px 16px;
  background: ${(props) => (props.btnType === 'primary' ? '#f2a922' : '#fff')};
  color: ${(props) => props.color || '#000'} #042039;
  box-shadow: ${(props) =>
    props.btnType === 'primary'
      ? '0px 8px 16px rgba(242, 169, 34, 0.32)'
      : '0px 8px 16px rgba(17, 17, 17, 0.16)'};
  width: ${(props) => props.width};
  border-radius: 8px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  cursor: pointer;

  @media (max-width: 475px) {
    width: max-content;
  }
`;

const CurrentStepStyles = styled.span`
  /* display: 'inline-block',
              fontFamily: 'Roboto',
              color: ,
              fontSize: '24px',
              lineHeight: '32px'

               */

  display: inline-block;
  font-family: 'Roboto';
  color: '#262626';
  font-size: '24px';
  line-height: '32px';

  @media (max-width: 475px) {
    font-size: '16px';
    line-height: '26px';
  }
`;
