import React from 'react';
import { useForm } from './../hooks/useForm';

export type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement
>;

interface ISessionAssessmentForm {
  assessmentType: string;
  comments: string;
  painPoints: string;
  forcastedSpecificRemarks: string;
  techinicalSkills: number;
}

interface ContextState {
  formValues: ISessionAssessmentForm;
  handleChange: (e: InputChangeEvent) => void;
  setValue: (key: string, value: any) => void;
}

const SessionAssessmentContext = React.createContext<ContextState>(
  {} as ContextState
);

const initialSessionAssessmentFormValues: ISessionAssessmentForm = {
  assessmentType: '',
  comments: '',
  painPoints: '',
  forcastedSpecificRemarks: '',
  techinicalSkills: 0
};

export const useSessionAssessmentProvider = () =>
  React.useContext(SessionAssessmentContext);

const SessionAssessmentProvider: React.FC = ({ children }) => {
  const { values: formValues, handleChange, setValue } = useForm<
    ISessionAssessmentForm
  >(
    initialSessionAssessmentFormValues,
    () => {},
    () => {}
  );

  return (
    <SessionAssessmentContext.Provider
      value={{ formValues, handleChange, setValue }}
    >
      {children}
    </SessionAssessmentContext.Provider>
  );
};

export default SessionAssessmentProvider;
