import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import { StepIconProps } from '@material-ui/core/StepIcon';
import clsx from 'clsx';

export interface IStepperProps {
  value: number;
  handleStepChange?: (key: string, value: any) => void;
  type?: string;
}

export interface ConnectorProps {
  activeColor: string;
}

function getStepLabels() {
  return [
    {
      label: 'Code is not understandable at all',
      color: '#C23131'
    },
    {
      label: 'Code is not understandable at all',
      color: '#E38282'
    },
    {
      label: 'Code is not understandable at all',
      color: '#F2A922'
    },
    {
      label: 'Code is not understandable at all',
      color: '#8C9E40'
    },
    {
      label: 'Code is not understandable at all',
      color: '#4A963A'
    }
  ];
}

const HorizontalStepper: React.FC<IStepperProps> = ({
  value,
  handleStepChange,
  type
}) => {
  const steps = getStepLabels();
  const [activeStep, setActiveStep] = useState(value);
  const [activeColor, setActiveColor] = useState(steps[value].color);
  const prvStep = value;
  const handleStep = (step: number) => () => {
    setActiveStep(step);
    setActiveColor(steps[step].color);
    // handleStepChange(type, value);
  };

  const useStepIconPrvStyles = makeStyles({
    root: {
      backgroundColor: '#CBCBCB',
      color: '#333',
      width: 24,
      height: 24,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #333'
    }
  });

  const useStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#fff',
      color: '#333',
      width: 24,
      height: 24,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #333'
    },
    active: {
      color: '#fff',
      backgroundColor: `${activeColor} !important`,
      border: `2px solid ${activeColor}`
    }
  });

  const useConnectorStyles = makeStyles({
    active: {
      '& $line': {
        borderColor: activeColor,
        borderTopWidth: 2
      }
    },
    completed: {
      '& $line': {
        borderColor: activeColor,
        borderTopWidth: 2
      }
    },
    line: {
      borderColor: '#333',
      borderTopWidth: 1
    }
  });

  function StepIcon(props: StepIconProps) {
    const classes = useStepIconStyles();
    const { active } = props;
    const icons: { [index: string]: React.ReactElement } = {
      1: <div>1</div>,
      2: <div>2</div>,
      3: <div>3</div>,
      4: <div>4</div>,
      5: <div>5</div>
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  function StepIconPrv(props: StepIconProps) {
    const classes = useStepIconPrvStyles();
    const icons: { [index: string]: React.ReactElement } = {
      1: <div>1</div>,
      2: <div>2</div>,
      3: <div>3</div>,
      4: <div>4</div>,
      5: <div>5</div>
    };

    return (
      <div className={clsx(classes.root)}>{icons[String(props.icon)]}</div>
    );
  }

  const connectorClasses = useConnectorStyles();

  return (
    <div>
      <Stepper
        alternativeLabel
        nonLinear
        activeStep={activeStep}
        connector={
          <StepConnector
            classes={{
              line: connectorClasses.line,
              active: connectorClasses.active,
              completed: connectorClasses.completed
            }}
          />
        }
      >
        {steps.map(({ label }, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step
              key={index}
              completed={index < activeStep ? true : false}
              {...stepProps}
            >
              <StepButton key={index} onClick={handleStep(index)}>
                <StepLabel
                  {...labelProps}
                  key={index}
                  StepIconComponent={
                    index === activeStep
                      ? StepIcon
                      : index === prvStep
                      ? StepIconPrv
                      : StepIcon
                  }
                >
                  {index === activeStep ? label : ''}
                </StepLabel>
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default HorizontalStepper;
