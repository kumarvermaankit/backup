import * as React from 'react';
import BasicInfo from './parts/BasicInfo';
import AboutYourself from './parts/AboutYourself';
import Skills from './parts/Skills';
import Bg from '../../assets/ISASignUpBg.svg';
import { ISASignUpContext } from '../../contexts/ISASignUpContext';
import { IBasicInfoForm } from './parts/BasicInfo';
import { IAboutYourselfForm } from './parts/AboutYourself';
import { ISkillsForm } from './parts/Skills';
import FormPage from '../../components/FormPage';

const ISASignUpPage: React.FC = () => {
  // There are 3 steps of this form. We start with step 1 and then if that step
  // form validation is successfull we move to next step.
  const [showFormStep, setShowFormStep] = React.useState(1);
  const {
    setBasicInfoFormValues,
    setAboutYourselfFormValues,
    setSkillsFormValues,
    doSignUp
  } = React.useContext(ISASignUpContext);

  const showStep2Form = (values: IBasicInfoForm) => {
    if (showFormStep === 1) {
      setBasicInfoFormValues(values);
      setShowFormStep(2);
    }
  };

  const showStep3Form = (values: IAboutYourselfForm) => {
    if (showFormStep === 2) {
      setAboutYourselfFormValues(values);
      setShowFormStep(3);
    }
  };

  const submitForm = (values: ISkillsForm) => {
    if (showFormStep === 3) {
      setSkillsFormValues(values);
      doSignUp();
    }
  };

  const title = 'Application for Job Success Program and 1 Free Session';

  return (
    <FormPage bgImage={Bg} title={title}>
      {showFormStep === 1 && <BasicInfo submitForm={showStep2Form} />}
      {showFormStep === 2 && <AboutYourself submitForm={showStep3Form} />}
      {showFormStep === 3 && <Skills submitForm={submitForm} />}
    </FormPage>
  );
};

export default ISASignUpPage;
