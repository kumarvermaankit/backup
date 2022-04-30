import * as React from 'react';
import { Text, Button, Input, Icon, Pill } from '@indywise/uikit';
import styled from 'styled-components';
import Bg from '../../assets/SignUpBg.svg';
import FormPage from '../../components/FormPage';
import FormErrorMsg from '../../components/FormErrorMsg';
import FormFieldErrorMsg from '../../components/FormFieldErrorMsg';
import { useForm } from '../../hooks/useForm';
import { validateSignUpForm } from '../../utils/validateForm';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ISignUp, useAuth, ISignUpPortfolio } from '../../contexts/AuthContext';
import LoadingScreen from '../../components/LoadingScreen';
import { Helmet } from 'react-helmet';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Country } from './Country';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { api } from '../../api';

export interface ISignUpForm {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  confirmEmail: string;
  countryCode: string;
  mobileNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  occupation: string;
  instituteName: string;
  courseName: string;
  companyName: string;
  position: string;
  categories: Array<string>;
}

const defaultValues: ISignUpForm = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  confirmEmail: '',
  countryCode: '',
  mobileNumber: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  nationality: 'nationality',
  occupation: 'professional',
  instituteName: '',
  courseName: '',
  companyName: '',
  position: '',
  categories: []
};

export interface ISkill {
  name: string;
  category: string;
  ID: string;
  isActive: boolean;
}

const SignUp: React.FC<RouteComponentProps> = ({ history }) => {
  const {
    authType,
    signup,
    signupErr,
    isSigningUp,
    setPortfolioDataFn
  } = useAuth();

  const submitForm = () => {
    const data: ISignUp = {
      email: values.email,
      username: values.username,
      country_code: values.countryCode,
      mobile_number: values.mobileNumber,
      password: values.password,
      first_name: values.firstName,
      last_name: values.lastName
    };

    const [year, month, day] = values.dateOfBirth.split('-');

    const getMonth = (month: string) => {
      switch (month) {
        case '01':
          return 'Jan';
        case '02':
          return 'Feb';
        case '03':
          return 'Mar';
        case '04':
          return 'Apr';
        case '05':
          return 'May';
        case '06':
          return 'June';
        case '07':
          return 'July';
        case '08':
          return 'Aug';
        case '09':
          return 'Sept';
        case '10':
          return 'Oct';
        case '11':
          return 'Nov';
        case '12':
          return 'Dec';
        default:
          return '';
      }
    };

    const dataPortfolio: ISignUpPortfolio = {
      dateOfBirth: {
        day: parseInt(day, 10),
        month: getMonth(month),
        year: parseInt(year, 10)
      },
      nationality: values.nationality,
      occupation: values.occupation,
      skillsOfInterest: [],
      categoriesOfInterest: values.categories
    };

    signup(data);
    setPortfolioDataFn(dataPortfolio);
  };

  const [categories, setCategories] = React.useState([]);

  const getCategories = async () => {
    try {
      const categoryDB = await api.user.fetchCategories();
      setCategories(
        categoryDB?.data?.allowedTypes?.map((a: any) => a.category)
      );
    } catch (e) {
      console.log(e);
    }
  };
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const { values, errors, handleChange, handleSubmit, setValue } = useForm<
    ISignUpForm
  >(defaultValues, submitForm, validateSignUpForm);

  const [phone, setPhone] = React.useState({
    phone: '',
    countryCode: '',
    mobileNumber: ''
  });

  // @ts-ignore
  const handlePhoneChange = (value, data, event, formattedValue) => {
    const mobileNumber = value.slice(data.dialCode.length);
    const countryCode = data.dialCode;
    setPhone({ phone: value, countryCode, mobileNumber });
    setValue('mobileNumber', mobileNumber);
  };

  // A very cheeeky hack. Apparently, `setValue` from `useForm` don't set
  // two values(mobileNumber, countryCode) in the `handlePhoneChange`. So we
  // save `mobileNumber` in `handlePhoneChange` and save `countryCode` in
  // `handlePhoneBlur`. Although good thing is, the `Signup` button will be
  // disabled until both `mobileNumber` and `countryCode` values are set
  const handlePhoneBlur = (...args: any) => {
    setValue('countryCode', phone.countryCode);
  };

  const [occupation, Setoccupation] = React.useState('professional');
  const [activeStep, SetActiveStep] = React.useState(1);

  const handleStep = (prop: string) => {
    if (prop === 'forward') {
      SetActiveStep(activeStep + 1);
    }

    if (prop === 'backward') {
      SetActiveStep(activeStep - 1);
    }
  };

  const handleCarerType = (prop: string) => {
    Setoccupation(prop);
    setValue('occupation', prop);
  };

  const handleNationality = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue('nationality', event.target.value as string);
  };

  const handleCategories = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue('categories', event.target.value as string[]);
  };

  React.useEffect(() => {
    setIsLoading(true);
    if (authType) {
      history.push('/');
    }
    setIsLoading(false);
  }, [history, authType]);

  React.useEffect(() => {
    if (
      values.username.trim() &&
      values.email.trim() &&
      values.confirmEmail.trim() &&
      values.password.trim() &&
      values.confirmPassword.trim() &&
      values.firstName.trim() &&
      values.lastName.trim() &&
      values.countryCode.trim() &&
      values.mobileNumber.trim() &&
      values.nationality.trim() &&
      values.dateOfBirth.trim() &&
      !isSigningUp
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [isSigningUp, values]);

  React.useEffect(() => {
    getCategories();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <FormPage bgImage={Bg}>
      <Helmet>
        <title>Signup - IndyWise</title>
      </Helmet>
      <div>
        <Text type="h3" size="2rem">
          Signup
        </Text>
        <NoAccountDiv>
          <NoAccount>Already have an account?</NoAccount>
          <Link to="/sign-in" style={{ textDecoration: 'none' }}>
            <SignIn>SIGN IN</SignIn>
          </Link>
        </NoAccountDiv>
        {signupErr && (
          <FormErrorMsg text={signupErr} style={{ marginTop: '1.5em' }} />
        )}
        {errors.password && (
          <FormErrorMsg text={errors.password} style={{ marginTop: '1.5em' }} />
        )}
        {errors.username && (
          <FormErrorMsg text={errors.username} style={{ marginTop: '1.5em' }} />
        )}
        {errors.email && (
          <FormErrorMsg text={errors.email} style={{ marginTop: '1.5em' }} />
        )}

        <Form>
          <Step active={activeStep === 1 ? true : false}>
            <Input
              type="text"
              name="username"
              id="username"
              autoFocus
              onChange={handleChange}
              value={values.username}
              placeholder="Username *"
            />
            {errors.username && <FormFieldErrorMsg text={errors.username} />}

            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Password *"
            />

            <Input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={values.confirmPassword}
              placeholder="Confirm Password *"
            />
            <Text size="0.75rem" style={{ marginTop: '0.66em' }}>
              Minimum requirements - 8 characters, 1 lowercase, 1 uppercase, 1
              numeric value, 1 special character. Eg - "P@ssword1"
            </Text>
            {errors.password && <FormFieldErrorMsg text={errors.password} />}

            <Input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Email *"
            />
            <Input
              type="text"
              name="confirmEmail"
              id="confirmEmail"
              onChange={handleChange}
              value={values.confirmEmail}
              placeholder="Confirm Email *"
            />
            {errors.email && <FormFieldErrorMsg text={errors.email} />}

            <PhoneInput
              inputProps={{ name: 'phone' }}
              country={'in'}
              value={phone.phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              placeholder="+91 99888-99888"
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

            {errors.countryCode && (
              <FormFieldErrorMsg text={errors.countryCode} />
            )}
            {errors.mobileNumber && (
              <FormFieldErrorMsg text={errors.mobileNumber} />
            )}

            <Name>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                value={values.firstName}
                placeholder="First Name *"
                width="48%"
              />
              <Input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                value={values.lastName}
                placeholder="Last Name *"
                width="48%"
              />
            </Name>
            {errors.firstName && <FormFieldErrorMsg text={errors.firstName} />}
            {errors.lastName && <FormFieldErrorMsg text={errors.lastName} />}

            <Input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={handleChange}
              value={values.dateOfBirth}
            />
            {errors.dateOfBirth && (
              <FormFieldErrorMsg text={errors.dateOfBirth} />
            )}

            <Select
              value={values.nationality}
              onChange={handleNationality}
              placeholder="Nationality"
              style={{
                width: '100%',
                margin: '2.25em 0 0 0',
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              <MenuItem value="nationality">Nationality</MenuItem>
              {Country.map((country) => {
                return <MenuItem value={country.name}>{country.name}</MenuItem>;
              })}
            </Select>

            <Button
              isDisabled={isButtonDisabled}
              onClick={() => handleStep('forward')}
              text="Go to Step 2/3"
            />
          </Step>

          <Step active={activeStep === 2 ? true : false}>
            <Text type="h1" color="#4B4B4B">
              Are you a
            </Text>
            <TypeSelect>
              <Student
                onClick={() => handleCarerType('student')}
                isActive={occupation}
              >
                <Icon
                  icon="student"
                  size="60px"
                  color={occupation === 'student' ? '#fff' : '#317EC2'}
                />
                <Text type="paragraph">Student</Text>
              </Student>
              <Professional
                onClick={() => handleCarerType('professional')}
                isActive={occupation}
              >
                <Icon
                  icon="professional"
                  size="60px"
                  color={occupation === 'professional' ? '#fff' : '#317EC2'}
                />
                <Text type="paragraph">Professional</Text>
              </Professional>
            </TypeSelect>
            {occupation === 'student' ? (
              <>
                <Input
                  type="instituteName"
                  name="instituteName"
                  onChange={handleChange}
                  value={values.instituteName}
                  placeholder="Name of University"
                />

                <Input
                  type="courseName"
                  name="courseName"
                  onChange={handleChange}
                  value={values.courseName}
                  placeholder="Name of Course"
                />
              </>
            ) : (
              <>
                <Input
                  type="companyName"
                  name="companyName"
                  onChange={handleChange}
                  value={values.companyName}
                  placeholder="Name of Company"
                />

                <Input
                  type="position"
                  name="position"
                  onChange={handleChange}
                  value={values.position}
                  placeholder="Name of Position"
                />
              </>
            )}

            <Button
              isDisabled={isButtonDisabled}
              onClick={() => handleStep('forward')}
              text="Go to Step 3/3"
            />

            <Button
              color="secondary"
              isDisabled={isButtonDisabled}
              onClick={() => handleStep('backward')}
              text="Go Backward"
            />
          </Step>

          <Step active={activeStep === 3 ? true : false}>
            <Text type="h1" color="#4B4B4B">
              Select at most 3 categories you are interested in
            </Text>

            <Select
              multiple
              value={values.categories}
              onChange={handleCategories}
              placeholder="Select Categories"
              style={{
                width: '100%',
                margin: '2.25em 0 0 0',
                fontSize: '16px',
                lineHeight: '24px'
              }}
              renderValue={(selected) => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {(selected as string[]).map((value) => (
                    <Pill
                      text={value}
                      key={value}
                      style={{
                        width: 'max-content',
                        padding: '4px 8px',
                        margin: '2px',
                        borderRadius: '50px',
                        fontSize: '14px',
                        lineHeight: '20px'
                      }}
                    />
                  ))}
                </div>
              )}
            >
              {categories.map((category: string) => {
                return (
                  <MenuItem
                    value={category}
                    disabled={
                      values.categories.length >= 3 &&
                      !values.categories.includes(category)
                    }
                  >
                    {category}
                  </MenuItem>
                );
              })}
            </Select>

            <Button
              isDisabled={isButtonDisabled}
              onClick={handleSubmit}
              text="Go to Verify Contact Details"
            />

            <Button
              color="secondary"
              isDisabled={isButtonDisabled}
              onClick={() => handleStep('backward')}
              text="Go Backward"
            />
          </Step>
        </Form>
      </div>
    </FormPage>
  );
};

export default SignUp;

const NoAccount = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #0c3559;
`;

const NoAccountDiv = styled.div`
  margin-top: 1vh;
`;

const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  input {
    width: 45%;
  }
`;

const SignIn = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #a16a06;
  margin-left: 1vw;
  text-decoration: none;
`;

const Form = styled.div`
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

const Step = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
  }
`;

const TypeSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 24px 0;
`;
const Student = styled.div<{ isActive: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    background: ${(props) => (props.isActive === 'student' ? '#0C3559' : '')};
    border-radius: 50%;
    padding: 24px;
    width: max-content;
    height: max-content;
    border: 1px solid #317ec2;
  }
  p {
    color: ${(props) => (props.isActive === 'student' ? '#0C3559' : '#317EC2')};
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
  }
`;
const Professional = styled.div<{ isActive: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    background: ${(props) =>
      props.isActive === 'professional' ? '#0C3559' : ''};
    border-radius: 50%;
    padding: 24px;
    width: max-content;
    height: max-content;
    border: 1px solid #317ec2;
  }
  p {
    color: ${(props) =>
      props.isActive === 'professional' ? '#0C3559' : '#317EC2'};
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
  }
`;
