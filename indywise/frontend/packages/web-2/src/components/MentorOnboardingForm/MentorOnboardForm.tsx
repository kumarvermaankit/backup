import React from 'react';
import Modal, { IModalProps } from '../Modal';
import styled from 'styled-components';
import FormBg from '../../assets/bg/mentor-onboard-form-bg.svg';
import StepTwo from './parts/StepTwo';
import StepThree from './parts/StepThree';
import StepOne from './parts/StepOne';
import { ISkill } from './parts/StepTwo';
import { useForm } from '../../hooks/useForm';
import { api } from '../../api';
import { validateMentorOnboardingForm } from '../../utils/validateForm';
import FormFieldErrorMsg from '../FormFieldErrorMsg';
import Axios from '../../utils/Axios';
import OnFormComplete from './parts/OnFormComplete';

interface OnboardFormProps extends IModalProps {}

export interface IDateOfBirthFields {
  day: number;
  month: string;
  year: string;
}

export interface IOnboardingForm {
  fullName: string;
  email: string;
  countryCode: string;
  mobileNumber: string;
  country: string;
  dateOfBirth: null | IDateOfBirthFields;
  avatar: string;
  hearAboutUs: string;

  introduction: string;
  linkedin: string;
  website: string;
  yearsOfWorkExperience: string;
  profileDescription: string;
  expertiseSkills: Array<string>; //TODO this will experties Skills
  additionalSkills: string[];
  mentorshipAudience: string[];

  hourlySessionPrice: string;
  currency: string;
  consent: string;
  mentorshipMotivation: string;
  pastMentoringExperience: string;
  numberOfPastMentees: string;
  firstMenteeLinkedIn: string;
  secondMenteeLinkedIn: string;
  commentsAndSuggestions: string;
  agreeToTermsAndConditions: boolean;
}

const defaultValues: IOnboardingForm = {
  fullName: '',
  email: '',
  countryCode: '91',
  mobileNumber: '',
  country: '',
  dateOfBirth: null,
  avatar: '',
  hearAboutUs: '',
  // -------STEP TWO FIELDS-----------
  introduction: '',
  linkedin: '',
  website: '',
  yearsOfWorkExperience: '',
  //TODO rember to add upload photo field
  profileDescription: '',
  expertiseSkills: [],
  additionalSkills: [],
  mentorshipAudience: [],
  // -------STEP THREE FIELDS-----------
  currency: 'rupee',
  hourlySessionPrice: '',
  consent: '',
  mentorshipMotivation: '',
  pastMentoringExperience: '',
  numberOfPastMentees: '',
  firstMenteeLinkedIn: '',
  secondMenteeLinkedIn: '',
  commentsAndSuggestions: '',
  agreeToTermsAndConditions: false
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const MentorOnboardForm: React.FC<OnboardFormProps> = (props) => {
  const [curStep, setCurStep] = React.useState(1);

  //@ts-ignore
  const [skills, setSkills] = React.useState<ISkill[]>([]);

  const [calenderDate, setCalenderDate] = React.useState('');

  const audienceRef = React.useRef<string[]>([]);

  const handleCalenderDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCalenderDate(e.target.value);

    const [year, monthNum, date] = e.target.value.split('-');

    setValue('dateOfBirth', {
      day: +date,
      month: monthNames[+monthNum - 1],
      year
    });
  };

  const handleMentorShipAudienceSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    if (audienceRef.current.includes(value)) {
      const filtered = [...audienceRef.current.filter((el) => el !== value)];

      audienceRef.current = filtered;
    } else {
      audienceRef.current = [...audienceRef.current, value];
    }

    setValue('mentorshipAudience', audienceRef.current);
  };

  const getSkills = async () => {
    try {
      const skillDB = await api.user.fetchSkills();

      setSkills(
        skillDB.data.skillsInDB.skills.map((skill: any) => ({
          name: skill.name,
          id: skill.ID
        }))
      );
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getSkills();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBackHandler = () => {
    setCurStep((prevState) => prevState - 1);
  };

  const filterBeforeSubmit = (nv: any) => {
    Object.keys(nv).forEach((key) =>
      nv[key] === null ||
      nv[key] === '' ||
      nv[key] === 0 ||
      nv[key]?.length <= 0
        ? delete nv[key]
        : null
    );

    return nv;
  };

  const handleFormSubmit = async () => {
    const newV: Partial<IOnboardingForm> = filterBeforeSubmit(values);

    const data: any = {
      fullName: newV.fullName,
      email: newV.email,
      mobileNumber: newV.mobileNumber,
      country: newV.country,
      countryCode: newV.countryCode,
      dateOfBirth: newV.dateOfBirth,
      hearAboutUs: newV.hearAboutUs,
      introduction: newV.introduction,
      linkedin: newV.linkedin,
      website: newV.website,
      yearsOfWorkExperience: newV.yearsOfWorkExperience,
      avatar: newV.avatar,
      profileDescription: newV.profileDescription,
      expertiseSkills: newV.expertiseSkills,
      additionalSkills: newV.additionalSkills,
      mentorshipAudience: newV.mentorshipAudience,
      hourlySessionPrice: {
        value: newV.hourlySessionPrice, //?using the old fields,bcz before curreny and hourlySessionPrice, were passed as seperate values
        currency: newV.currency
      },
      currency: newV.currency,
      consent: newV.consent,
      mentorshipMotivation: newV.mentorshipMotivation,
      pastMentoringExperience: newV.pastMentoringExperience,
      numberOfPastMentees: newV.numberOfPastMentees,
      firstMenteeLinkedIn: newV.firstMenteeLinkedIn,
      secondMenteeLinkedIn: newV.secondMenteeLinkedIn,
      commentsAndSuggestions: newV.commentsAndSuggestions,
      agreeToTermsAndConditions: newV.agreeToTermsAndConditions
    };

    try {
      const res: any = await Axios({
        method: 'POST',
        url: '/mentors/mentors/interest-form',
        data: data
      });

      if (res.data.mentorFormSubmitted) {
        setCurStep(4);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    setValue,
    resetValues,
    resetErrors,
    handleCheckboxChange
  } = useForm<IOnboardingForm>(
    defaultValues,
    handleFormSubmit,
    validateMentorOnboardingForm
  );

  const handleNextStep = () => {
    setCurStep((prevState) => prevState + 1);
  };

  const resetForm = () => {
    resetValues();
    setCalenderDate('');
    resetErrors();
    setCurStep(1);
  };

  const handleCloseAction = () => {
    props.closeModal();
    resetForm();
  };

  return (
    <Modal modalState={props.modalState} closeModal={props.closeModal}>
      <Container>
        <FormContainer>
          <Error>
            {Object.values(errors).map((error, idx) => (
              <FormFieldErrorMsg text={error} key={idx} />
            ))}
          </Error>
          <form
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: `${curStep === 4 ? 'center' : 'initial'}`
            }}
          >
            {curStep === 1 && (
              <StepOne
                inputs={{
                  email: values.email,
                  fullName: values.fullName,
                  countryCode: values.countryCode,
                  mobileNumber: values.mobileNumber,
                  country: values.country,
                  dateOfBirth: values.dateOfBirth,
                  hearAboutUs: values.hearAboutUs
                }}
                errors={{
                  email: errors.email,
                  fullName: errors.fullName,
                  countryCode: errors.countryCode,
                  mobileNumber: errors.mobileNumber,
                  country: errors.country,
                  dateOfBirth: errors.dateOfBirth,
                  hearAboutUs: errors.hearAboutUs
                }}
                calenderDate={calenderDate}
                explicitUpdate={setValue}
                handleUpdate={handleChange}
                handleNextStep={handleNextStep}
                handleCalenderDateChange={handleCalenderDateChange}
              />
            )}

            {curStep === 2 && (
              <StepTwo
                inputs={{
                  fullName: values.fullName,
                  avatar: values.avatar,
                  expertiseSkills: values.expertiseSkills,
                  additionalSkills: values?.additionalSkills,
                  introduction: values.introduction,
                  yearsOfWorkExperience: values.yearsOfWorkExperience,
                  profileDescription: values.profileDescription,
                  linkedin: values.linkedin,
                  website: values.website,
                  mentorshipAudience: values.mentorshipAudience
                }}
                errors={{
                  introduction: errors.introduction,
                  profileDescription: errors.profileDescription,
                  linkedin: errors.linkedin
                }}
                skills={skills}
                handleMentorShipAudienceSelect={handleMentorShipAudienceSelect}
                explicitUpdate={setValue}
                handleNextStep={handleNextStep}
                handleUpdate={handleChange}
                goBackHandler={goBackHandler}
              />
            )}

            {curStep === 3 && (
              <StepThree
                inputs={{
                  currency: values.currency,
                  consent: values.consent,
                  numberOfPastMentees: values.numberOfPastMentees,
                  firstMenteeLinkedIn: values.firstMenteeLinkedIn,
                  secondMenteeLinkedIn: values.secondMenteeLinkedIn,
                  mentorshipMotivation: values.mentorshipMotivation,
                  hourlySessionPrice: values.hourlySessionPrice,
                  commentsAndSuggestions: values.commentsAndSuggestions,
                  agreeToTermsAndConditions: values.agreeToTermsAndConditions,
                  pastMentoringExperience: values.pastMentoringExperience
                }}
                errors={{
                  currency: errors.currency,
                  mentorshipMotivation: errors.mentorshipMotivation,
                  // commentsAndSuggestions: errors.commentsAndSuggestions,
                  hourlySessionPrice: errors.hourlySessionPrice,
                  pastMentoringExperience: errors.pastMentoringExperience
                }}
                handleUpdate={handleChange}
                explicitUpdate={setValue}
                handleCheckboxChange={handleCheckboxChange}
                goBackHandler={goBackHandler}
                handleSubmit={handleSubmit}
              />
            )}

            {curStep === 4 && (
              <OnFormComplete closeAction={handleCloseAction} />
            )}
          </form>
        </FormContainer>
      </Container>
    </Modal>
  );
};

export default MentorOnboardForm;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  background-image: url(${FormBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  & > * {
    box-sizing: border-box;
  }
`;

const Error = styled.div`
  div {
    justify-content: center;
    margin-bottom: -2vh;
    margin-top: 4vh;
  }
`;

const FormContainer = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 24px 48px rgba(12, 53, 89, 0.16);
  border-radius: 0px 20px 20px 0px;
  overflow-y: hidden;
  max-width: 640px;
  height: 100%;

  @media (max-width: 1150px) {
    width: 550px;
    max-width: unset;
  }

  @media (max-width: 775px) {
    width: 100%;
  }
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
  margin-top: 2.25em;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  &:placeholder {
    color: #727272;
  }

  &:focus {
    outline: none;
  }
`;
