import * as React from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { useForm } from '../../../hooks/useForm';
import { validateIsaBasicInfoForm } from '../../../utils/validateForm';
import FormFieldErrorMsg from '../../../components/FormFieldErrorMsg';

export interface IBasicInfoForm {
  email: string;
  fullName: string;
  countryCode: string;
  phoneNumber: string;
}

const defaultValues: IBasicInfoForm = {
  email: '',
  fullName: '',
  countryCode: '',
  phoneNumber: ''
};

const BasicInfo: React.FC<{ submitForm: Function }> = ({ submitForm }) => {
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const { values, errors, handleChange, handleSubmit } = useForm<
    IBasicInfoForm
  >(defaultValues, submitForm, validateIsaBasicInfoForm);

  React.useEffect(() => {
    if (
      values.email.trim() &&
      values.fullName.trim() &&
      values.countryCode.trim() &&
      values.phoneNumber.trim()
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [values]);

  return (
    <div>
      <Text type="h3" size="2rem">
        Basic Info (Step 1/3)
      </Text>

      <Form noValidate onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
          placeholder="E-mail *"
        />
        {errors.email && <FormFieldErrorMsg text={errors.email} />}

        <Input
          type="text"
          name="fullName"
          onChange={handleChange}
          value={values.fullName}
          placeholder="Full Name *"
        />
        {errors.fullName && <FormFieldErrorMsg text={errors.fullName} />}

        <PhoneInputContainer>
          <select
            name="countryCode"
            onChange={handleChange}
            value={values.countryCode}
          >
            <option value="" selected>
              Select country code
            </option>
            <option value="+91">+91</option>
            <option value="+92">+92</option>
          </select>

          <Input
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            value={values.phoneNumber}
            placeholder="Phone Number *"
          />
        </PhoneInputContainer>
        {errors.countryCode && <FormFieldErrorMsg text={errors.countryCode} />}
        {errors.phoneNumber && <FormFieldErrorMsg text={errors.phoneNumber} />}

        <Button
          isDisabled={isButtonDisabled}
          onClick={handleSubmit}
          text="Go to Step 2/3"
        />
      </Form>
    </div>
  );
};

export default BasicInfo;

const PhoneInputContainer = styled.span`
  display: flex;
  align-items: flex-end;

  select {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.5em;
    height: 2.5em;
    background: #ffffff;
    outline: none;
    border: none;
    border-bottom: 1px solid #727272;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
  }
`;

const Form = styled.form`
  /* "Input" also has 2.25em and this was supposed to be 3em */
  margin-top: 0.75em;

  /* Submit button (To validate the form and if valid show next screen) */
  button {
    width: 100%;
    font-size: 1.25rem;
    height: fit-content;
    padding: 0.5em 0.8em;
    border-radius: 0.5em;
    margin-top: 1.2em;

    p {
      font-size: 1.25rem;
    }
  }
`;

// TODO: Put this as a component in the `@indywise/uikit` ?
export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5em;
  color: #0c3559;
  width: 100%;
  padding-bottom: 0.5em;
  margin-top: 2.25em;
  border: none;
  border-bottom: 1px solid #727272;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  &::placeholder {
    color: #4b4b4b;
  }

  &:focus {
    outline: none;
  }
`;
