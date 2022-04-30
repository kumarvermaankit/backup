import * as React from 'react';
import { IBasicInfoForm } from '../pages/ISASignUp/parts/BasicInfo';
import { IAboutYourselfForm } from '../pages/ISASignUp/parts/AboutYourself';
import { ISkillsForm } from '../pages/ISASignUp/parts/Skills';
import axios from 'axios';

export type hearAboutIndyWiseType =
  | 'LinkedIn'
  | 'Facebook'
  | 'Google Search'
  | 'Emailer'
  | 'Friends'
  | 'Others';

export interface IISASignUpForm {
  email: string;
  full_name: string;
  country_code: string;
  mobile_number: string;
  about_yourself?: string;
  work_experience: string;
  linkedin_profile: string;
  other_links?: string;
  hear_about_indywise: hearAboutIndyWiseType;
  skills: string[];
  other_skills?: string;
  anything_special?: string;
}

interface IState {
  isSuccess: boolean | null;
  signUpFormDetails: IISASignUpForm;
  setBasicInfoFormValues: (val: IBasicInfoForm) => any;
  setAboutYourselfFormValues: (val: IAboutYourselfForm) => any;
  setSkillsFormValues: (val: ISkillsForm) => any;
  doSignUp: () => any;
}

const defaultState: IState = {
  isSuccess: null,
  signUpFormDetails: {} as IISASignUpForm,
  setBasicInfoFormValues: () => {},
  setAboutYourselfFormValues: () => {},
  setSkillsFormValues: () => {},
  doSignUp: () => {}
};

const ISASignUpContext = React.createContext(defaultState);

const ISASignUpProvider: React.FC = (props) => {
  const [values, setValues] = React.useState<IISASignUpForm>(
    {} as IISASignUpForm
  );
  const [isSuccess, setIsSuccess] = React.useState<boolean | null>(null);

  const setBasicInfoFormValues = (val: IBasicInfoForm) => {
    setValues({
      ...values,
      email: val.email,
      full_name: val.fullName,
      country_code: val.countryCode,
      mobile_number: val.phoneNumber
    });
  };

  const setAboutYourselfFormValues = (val: IAboutYourselfForm) => {
    setValues({
      ...values,
      work_experience: val.workExperience,
      linkedin_profile: val.linkedinProfile,
      other_links: val.otherLinks,
      hear_about_indywise: val.hearAboutIndyWise as hearAboutIndyWiseType
    });
  };

  const setSkillsFormValues = (val: ISkillsForm) => {
    setValues({
      ...values,
      skills: val.skills as string[],
      other_skills: val.otherSkills,
      anything_special: val.anythingSpecial
    });
  };

  const doSignUp = async () => {
    try {
      await axios({
        url: 'https://dev-api.indywise.com/isa/isa/signup',
        method: 'POST',
        data: values
      });

      setIsSuccess(true);
    } catch (err) {
      setIsSuccess(false);
    }
  };

  return (
    <ISASignUpContext.Provider
      value={{
        isSuccess,
        signUpFormDetails: values,
        setBasicInfoFormValues,
        setAboutYourselfFormValues,
        setSkillsFormValues,
        doSignUp
      }}
    >
      {props.children}
    </ISASignUpContext.Provider>
  );
};

export { ISASignUpContext, ISASignUpProvider };
