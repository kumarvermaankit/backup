import React from 'react';
import { Input } from '../MentorOnboardForm';
import PhoneInput from 'react-phone-input-2';
import { IDateOfBirthFields } from '../MentorOnboardForm';
import styled from 'styled-components';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import FormFieldErrorMsg from './../../FormFieldErrorMsg';
// import { Country } from '../../../pages/SignUp/Country';

export type hearAboutIndyWiseType =
  | 'LinkedIn'
  | 'Facebook'
  | 'Google Search'
  | 'Emailer'
  | 'Friends'
  | 'Others';

export interface IFormStepOne {
  fullName: string;
  email: string;
  countryCode: string;
  mobileNumber?: string;
  dateOfBirth: null | IDateOfBirthFields;
  country: string;
  hearAboutUs?: hearAboutIndyWiseType | string;
}

const StepOne: React.FC<{
  inputs: IFormStepOne;
  handleUpdate: (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | { value?: unknown; name?: any; type?: unknown }
    >
  ) => void;
  calenderDate: string;
  explicitUpdate: (key: string, value: any) => void;
  handleNextStep: () => void;
  handleCalenderDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: IFormStepOne;
}> = React.memo(
  ({
    inputs,
    handleNextStep,
    calenderDate,
    handleUpdate,
    explicitUpdate,
    handleCalenderDateChange,
    errors
  }) => {
    const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(
      true
    );

    const [phone, setPhone] = React.useState(() => ({
      phone: inputs.countryCode + inputs.mobileNumber,
      countryCode: '91',
      mobileNumber: inputs.mobileNumber
    }));

    // @ts-ignore
    const handlePhoneChange = (value, data) => {
      const mobileNumber = value.slice(data.dialCode.length);
      const countryCode = data.dialCode;
      setPhone({ phone: value, countryCode, mobileNumber });
      explicitUpdate('mobileNumber', mobileNumber);
    };

    const handlePhoneBlur = (...args: any) => {
      explicitUpdate('countryCode', phone.countryCode);
    };

    React.useEffect(() => {
      if (
        inputs.fullName.trim() &&
        inputs.email.trim() &&
        // inputs.hearAboutUs.trim() &&
        // inputs.mobileNumber.trim() &&
        // inputs.country.trim() &&
        inputs.dateOfBirth
      ) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    }, [inputs]);

    return (
      <Step>
        <Title>Basic Info (Step 1/3)</Title>
        <SubTitle>
          Please fill in the following key details in order to help us verify
          your credentials and build a good mentor profile for you
        </SubTitle>
        <Input
          type="text"
          name="fullName"
          onChange={handleUpdate}
          value={inputs.fullName}
          placeholder="Full Name *"
          autoComplete="off"
        />
        {errors.fullName && <FormFieldErrorMsg text={errors.fullName} />}
        <Input
          type="email"
          name="email"
          id="email"
          onChange={handleUpdate}
          value={inputs.email}
          placeholder="Email *"
          autoComplete="off"
        />
        {errors.email && <FormFieldErrorMsg text={errors.email} />}
        <PhoneInput
          inputProps={{ name: 'phone' }}
          country={'in'}
          value={phone.phone}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
          placeholder="+91 99888-99888"
          autocompleteSearch={false}
          enableSearch
          disableSearchIcon
          containerStyle={{
            marginTop: '2.25em',
            border: 'none'
          }}
          inputStyle={{
            border: 'none',
            borderBottom: '1px solid #727272',
            borderRadius: '0',
            width: '100%',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '1rem',
            lineHeight: '1.5em',
            color: '#0c3559'
          }}
          buttonStyle={{ background: 'none', border: 'none' }}
          dropdownStyle={{
            borderRadius: '0px 0px 12px 12px',
            boxShadow: '0px 16px 32px rgba(12, 53, 89, 0.24)'
          }}
          searchStyle={{
            color: '#0c3559',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '1rem',
            width: '90%'
          }}
        />
        {/* {errors.mobileNumber && (
          <FormFieldErrorMsg text={errors.mobileNumber} />
        )} */}

        <Input
          type="text"
          name="country"
          onChange={handleUpdate}
          value={inputs.country}
          placeholder="Country*"
          autoComplete="off"
        />
        {/* 
        <Select
          value={inputs.country}
          onChange={handleUpdate}
          placeholder="Country"
          style={{
            width: '100%',
            margin: '2.25em 0 0 0',
            fontSize: '16px',
            lineHeight: '24px'
          }}
        >
          <MenuItem value="country">Country</MenuItem>
          {Country.map((count) => {
            return <MenuItem value={count.name}>{count.name}</MenuItem>;
          })}
        </Select> */}

        <Input
          type="date"
          name="dob"
          onChange={handleCalenderDateChange}
          value={calenderDate}
          placeholder="Date of birth*"
          autoComplete="off"
        />

        <Input
          type="text"
          name="hearAboutUs"
          onChange={handleUpdate}
          value={inputs.hearAboutUs}
          placeholder="Where did you hear about Indywise?*"
          autoComplete="off"
        />
        {/* {errors.hearAboutUs && <FormFieldErrorMsg text={errors.hearAboutUs} />} */}
        <Button
          onClick={handleNextStep}
          type="submit"
          className="submitbtn"
          disabled={isButtonDisabled}
        >
          Go to Step 2/3
        </Button>
      </Step>
    );
  }
);

export default StepOne;

export const Step = styled.div`
  position: relative !important;
  width: 90%;

  height: 100%;

  overflow-y: scroll;
  padding: 35px 5% 20px 5%;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 475px) {
    width: 100%;
    padding: 35px 40px 20px 40px;
  }
`;

export const Button = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 8px 16px;
  font-family: Roboto;
  border: none;
  box-sizing: border-box;
  /* width: 400px; */
  margin-top: 1.25em;
  padding: 8px 16px;
  height: fit-content;
  padding: 0.4em 0;
  border-radius: 8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;

  background-color: #f2a922;
  color: #042039;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  filter: drop-shadow(0px 8px 16px rgba(242, 169, 34, 0.32));

  &:hover {
    background-color: #f8bd4f;
  }
  :disabled {
    background-color: #faefd9;
    color: #a3a3a3;
  }
`;

export const Title = styled.h3`
  color: '#262626';
  margin: 8px 0;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;

  @media (max-width: 425px) {
    font-size: 26px;
  }
`;

export const SubTitle = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: '#4B4B4B';
`;
