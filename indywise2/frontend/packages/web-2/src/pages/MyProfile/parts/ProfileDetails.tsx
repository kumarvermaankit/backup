import React from 'react';
import { IUser, useAuth } from '../../../contexts/AuthContext';
import styled from 'styled-components';
import { Text, Icon, StyledInput, Button, Pill } from '@indywise/uikit';
import EditField from '../../../components/EditField';
import { copyToClipboard } from '../../../utils/copy-to-clipboard';
import { api } from '../../../api';
import FormErrorMsg from '../../../components/FormErrorMsg';
import FormFieldErrorMsg from '../../../components/FormFieldErrorMsg';
import { useForm } from '../../../hooks/useForm';
import {
  validateUpdateEmailForm,
  validateUpdateMobileNumberForm,
  validateUpdatePasswordForm,
  validateUpdateCategoryForm,
  referralCodeForm
} from '../../../utils/validateForm';
import { useDesktop } from '../../../hooks/useDesktop';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ProfileDetails: React.FC<{ user: IUser; ratings?: number }> = ({
  user,
  ratings
}) => {
  // const { updateUser } = useAuth();
  // const [wiseupFoundation, setValues] = useState(user.wiseupFoundation);
  const isDesktop = useDesktop(1200);

  // const submitForm = async () => {
  //   try {
  //     const res = await api.user.updateWiseupFoundation(!wiseupFoundation);

  //     if (res.data.wiseup_foundation_updated === true) {
  //       setValues(!wiseupFoundation);
  //       updateUser();
  //     }
  //   } catch (err) { }
  // };

  // const handleCheckboxChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   e.persist();

  //   submitForm();
  // };

  return (
    <Container>
      <FlexCheckbox>
        <Text type="h3" size="2rem">
          {user.firstName + ' ' + user.lastName}
        </Text>
        {/* <WiseUpF>
          <Checkbox
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            onChange={handleCheckboxChange}
            checked={user.wiseupFoundation}
            placeholder="Remember Me"
          />
          <Text size="1.25rem">WiseUp Foundation</Text>
        </WiseUpF> */}
      </FlexCheckbox>

      <Text
        type="body"
        size="1.25rem"
        style={{ marginTop: '0.2em', marginBottom: '0.5em' }}
      >
        {user.username}
      </Text>

      <Flex>
        <Icon icon="star" size="24px" />
        <Text type="body" size="1.25rem" style={{ marginLeft: '0.2em' }}>
          - - ({ratings || 0} Ratings)
        </Text>
      </Flex>

      <FieldsContainer>
        <Category />
        <Email initEmail={user.email} />

        <MobileNumber
          initMobileNumberWithCode={user.mobileNumber || ''}
          initCountryCode={user.countryCode || ''}
        />

        {/* Show update password only if its not OAuth login */}
        {!user.isOAuth && <Password />}
        <ReferralCode />

        <ReferralCodeBox>
          <div style={{ display: isDesktop ? 'flex' : '' }}>
            <Text size="1.25rem" bold>
              Your Referral Code -
            </Text>
            <Text
              size="1.25rem"
              style={{ margin: isDesktop ? '0 0 0 0.25em' : '0.5em 0 0 0' }}
            >
              {user.referralCode}
            </Text>
          </div>
          <Icon
            icon="copyToClipboard"
            style={{ marginLeft: '0.5em' }}
            width={isDesktop ? '14px' : '20px'}
            height={isDesktop ? '18px' : '28px'}
            onClick={() => copyToClipboard(user.referralCode)}
          />
        </ReferralCodeBox>
      </FieldsContainer>
    </Container>
  );
};

export default ProfileDetails;

const Container = styled.div`
  width: 58%;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-top: 2em;
  }
`;

const FieldsContainer = styled.div`
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const FlexCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReferralCodeBox = styled(Flex)`
  margin-top: 1.5em;
  border: 1px solid #a3a3a3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0.75em 1em;
  width: fit-content;

  svg {
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`;

const FormBtnContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    margin-top: 1em;
  }
`;

// const WiseUpF = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Checkbox = styled.input`
//   width: 1.25rem;
//   height: 1.25rem;
//   margin-right: 10px;

//   &:checked {
//     background: white;
//   }

//   &:hover {
//     cursor: pointer;
//   }
// `;

const Email: React.FC<{ initEmail: string }> = ({ initEmail }) => {
  const { updateUser } = useAuth();
  const [editing, setEditing] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [sendingRequest, setSendingRequest] = React.useState(false);
  const isDesktop = useDesktop(1200);

  const submitForm = async () => {
    setSendingRequest(true);
    setErrorMsg('');

    try {
      const res = await api.user.updateEmail(values.email);
      if (res.data.email_updated === true) {
        setErrorMsg('');
        setEditing(false);
        updateUser();
      }
    } catch (err: any) {
      setErrorMsg(
        err.response.data.error.message ||
          'Something went wrong, please try again!'
      );
    }

    setSendingRequest(false);
  };

  const defaultValues = {
    email: initEmail
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetValues,
    resetErrors
  } = useForm(defaultValues, submitForm, validateUpdateEmailForm);

  const handleCancel = () => {
    resetValues();
    resetErrors();
    setEditing(false);
    setErrorMsg('');
  };

  if (!editing) {
    return (
      <EditField
        type="text"
        value={values.email}
        name="E-mail"
        htmlName="email"
        onClick={() => setEditing(true)}
      />
    );
  }

  return (
    <>
      <Form noValidate onSubmit={sendingRequest ? () => {} : handleSubmit}>
        <Input
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
          style={{ marginRight: isDesktop ? '1.75em' : '0' }}
          placeholder="E-mail"
          autoFocus
        />
        {!isDesktop && (
          <>
            {errors.email && <FormFieldErrorMsg text={errors.email} />}
            {errorMsg && <FormErrorMsg text={errorMsg} />}
          </>
        )}
        <FormBtnContainer>
          <Button
            color="secondary"
            onClick={handleCancel}
            style={{ marginRight: '0.75em' }}
            isDisabled={sendingRequest}
          >
            Cancel
          </Button>

          <Button
            onClick={sendingRequest ? () => {} : handleSubmit}
            isDisabled={sendingRequest || values.email === initEmail}
          >
            Save
          </Button>
        </FormBtnContainer>
      </Form>
      {isDesktop && (
        <>
          {errors.email && <FormFieldErrorMsg text={errors.email} />}
          {errorMsg && <FormErrorMsg text={errorMsg} />}
        </>
      )}
    </>
  );
};

const ReferralCode: React.FC = () => {
  const { updateUser, user } = useAuth();
  const [editing, setEditing] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [sendingRequest, setSendingRequest] = React.useState(false);
  const isDesktop = useDesktop(1200);

  const submitForm = async () => {
    setSendingRequest(true);
    setErrorMsg('');

    try {
      const res = await api.user.updateReferredBy({
        userReferredBy: values.referralCode,
        ID: user?.ID
      });

      if (res.data.userReferralUpdated === true) {
        setEditing(false);
        updateUser();
      }
    } catch (err: any) {
      setErrorMsg(
        err?.response?.data?.error?.message ||
          'Something went wrong, please try again!'
      );
    }

    setSendingRequest(false);
  };

  const defaultValues = {
    referralCode: user?.referredBy || ''
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetValues,
    // setValue,
    resetErrors
  } = useForm(defaultValues, submitForm, referralCodeForm);

  const handleCancel = () => {
    resetValues();
    resetErrors();
    setEditing(false);
    setErrorMsg('');
  };

  if (!editing) {
    return (
      <EditField
        type="text"
        value={values.referralCode}
        name="Referred By"
        htmlName="string"
        onClick={() => setEditing(true)}
      />
    );
  }

  return (
    <>
      <Form noValidate onSubmit={sendingRequest ? () => {} : handleSubmit}>
        <Input
          type="text"
          name="referralCode"
          onChange={handleChange}
          value={values.referralCode}
          style={{ marginRight: isDesktop ? '1.75em' : '0' }}
          placeholder="Referral Code"
          autoFocus
        />
        {!isDesktop && (
          <>
            {errors.referralCode && (
              <FormFieldErrorMsg text={errors.referralCode} />
            )}
            {errorMsg && <FormErrorMsg text={errorMsg} />}
          </>
        )}
        <FormBtnContainer>
          <Button
            color="secondary"
            onClick={handleCancel}
            style={{ marginRight: '0.75em' }}
            isDisabled={sendingRequest}
          >
            Cancel
          </Button>

          <Button
            onClick={sendingRequest ? () => {} : handleSubmit}
            isDisabled={sendingRequest || values.referralCode === ''}
          >
            Save
          </Button>
        </FormBtnContainer>
      </Form>
      {isDesktop && (
        <>
          {errors.referralCode && (
            <FormFieldErrorMsg text={errors.referralCode} />
          )}
          {errorMsg && <FormErrorMsg text={errorMsg} />}
        </>
      )}
    </>
  );
};

export interface ISignUpData {
  dateOfBirth: {
    day: number;
    month: string;
    year: number;
  };
  nationality: string;
  occupation: string;
  skillsOfInterest: Array<string>;
  categoriesOfInterest: Array<string>;
}
export interface ISkill {
  name: string;
  category: string;
  ID: string;
  isActive: boolean;
}

const Category: React.FC = () => {
  const { updateUser } = useAuth();
  const [editing, setEditing] = React.useState(false);
  const [sendingRequest, setSendingRequest] = React.useState(false);
  const isDesktop = useDesktop(1200);
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

  const { getPortfolio, portfolioData } = useAuth();
  const defaultValues: ISignUpData = {
    dateOfBirth: {
      day: 0,
      month: ' ',
      year: 0
    },
    nationality: 'Indian',
    occupation: 'professional',
    skillsOfInterest: [],
    categoriesOfInterest: []
  };

  React.useEffect(() => {
    getPortfolio();
    getCategories();
    // eslint-disable-next-line
  }, []);

  // console.log(portfolioData); // {}

  const handleCategories = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue('categoriesOfInterest', event.target.value as string[]);
  };

  const submitForm = async () => {
    setSendingRequest(true);

    try {
      const res = await api.user.signUpDataUpdate({
        dateOfBirth: {
          day:
            portfolioData && portfolioData.dateOfBirth
              ? portfolioData.dateOfBirth.day
              : 0,
          month:
            portfolioData && portfolioData.dateOfBirth
              ? portfolioData.dateOfBirth.month
              : ' ',
          year:
            portfolioData && portfolioData.dateOfBirth
              ? portfolioData.dateOfBirth.year
              : 0
        },
        nationality:
          portfolioData && portfolioData.nationality
            ? portfolioData.nationality
            : 'Indian',
        occupation:
          portfolioData && portfolioData.occupation
            ? portfolioData.occupation
            : 'professional',
        skillsOfInterest: [],
        categoriesOfInterest: values.categoriesOfInterest
      });
      if (res.data.success === true) {
        setEditing(false);
        updateUser();
      }
    } catch (err: any) {
      console.log(err.message);
    }
    setSendingRequest(false);
    getPortfolio();
  };

  const handleCancel = () => {
    resetValues();
    resetErrors();
    setEditing(false);
  };

  const { values, handleSubmit, resetValues, resetErrors, setValue } = useForm(
    defaultValues,
    submitForm,
    validateUpdateCategoryForm
  );

  if (!editing) {
    return (
      <ContainerS>
        {isDesktop ? (
          <>
            <LeftContainer>
              <Label>Categories of Interest</Label>
            </LeftContainer>
            <RightContainer>
              {portfolioData ? (
                portfolioData.categoriesOfInterest ? (
                  portfolioData.categoriesOfInterest.map((category: string) => (
                    <Pill
                      text={category}
                      key={category}
                      style={{
                        width: 'max-content',
                        margin: '2px',
                        borderRadius: '50px',
                        fontSize: '16px',
                        lineHeight: '4px'
                      }}
                    />
                  ))
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </RightContainer>
            <IconContainer onClick={() => setEditing(true)}>
              <Icon icon="editPen" size="1.25em" />
            </IconContainer>
          </>
        ) : (
          <>
            <div
              style={{
                width: '95%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Label>Category</Label>
              {portfolioData ? (
                portfolioData.categoriesOfInterest ? (
                  portfolioData.categoriesOfInterest.map((category: string) => (
                    <Pill
                      text={category}
                      key={category}
                      style={{
                        width: 'max-content',
                        margin: '2px',
                        borderRadius: '50px',
                        fontSize: '16px',
                        lineHeight: '4px'
                      }}
                    />
                  ))
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            <IconContainer onClick={() => setEditing(true)}>
              <Icon icon="editPen" size="1.25em" />
            </IconContainer>
          </>
        )}
      </ContainerS>
    );
  }

  return (
    <>
      <Form noValidate onSubmit={sendingRequest ? () => {} : handleSubmit}>
        <Select
          multiple
          value={values.categoriesOfInterest}
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
                    borderRadius: '50px'
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
                  values.categoriesOfInterest.length >= 3 &&
                  !values.categoriesOfInterest.includes(category)
                }
              >
                {category}
              </MenuItem>
            );
          })}
        </Select>
        <FormBtnContainer>
          <Button
            color="secondary"
            onClick={handleCancel}
            style={{ marginRight: '0.75em' }}
            isDisabled={sendingRequest}
          >
            Cancel
          </Button>

          <Button onClick={sendingRequest ? () => {} : handleSubmit}>
            Save
          </Button>
        </FormBtnContainer>
      </Form>
    </>
  );
};

const ContainerS = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5em;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  button {
    p {
      color: #0c3559;
    }
  }
`;

const LeftContainer = styled.div`
  width: 30%;
  display: flex;
`;

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.4em;
  color: #0c3559;
`;

const IconContainer = styled.span`
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    margin: auto 0;
  }
`;

export interface IUpdateMobileNumber {
  mobileNumberWithCode: string;
  countryCode: string;
  mobileNumber: string;
}

const MobileNumber: React.FC<{
  initMobileNumberWithCode: string;
  initCountryCode: string;
}> = ({ initMobileNumberWithCode, initCountryCode }) => {
  const { updateUser } = useAuth();
  const [editing, setEditing] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [sendingRequest, setSendingRequest] = React.useState(false);
  const isDesktop = useDesktop(1200);

  const submitForm = async (e: React.SyntheticEvent<EventTarget>) => {
    setSendingRequest(true);

    try {
      const res = await api.user.updateMobileNumber(
        values.countryCode,
        values.mobileNumber
      );
      if (res.data.mobile_number_updated === true) {
        setErrorMsg('');
        setValue(
          'mobileNumberWithCode',
          `+${values.countryCode}${values.mobileNumber}`
        );
        setEditing(false);
        updateUser();
      }
    } catch (err: any) {
      setErrorMsg(
        err.response.data.error.message ||
          'Something went wrong, please try again!'
      );
    }

    setSendingRequest(false);
  };

  const getMobileNumber = () => {
    const codeLen = initCountryCode.length + 1;
    const mobileNumber = initMobileNumberWithCode.slice(codeLen);
    return mobileNumber;
  };

  const defaultValues = {
    mobileNumberWithCode: initMobileNumberWithCode,
    countryCode: initCountryCode,
    mobileNumber: getMobileNumber()
  };

  const {
    values,
    errors,
    handleChange,
    setValue,
    handleSubmit,
    resetValues,
    resetErrors
  } = useForm<IUpdateMobileNumber>(
    defaultValues,
    submitForm,
    validateUpdateMobileNumberForm
  );

  const handleCancel = () => {
    resetValues();
    resetErrors();
    setEditing(false);
    setErrorMsg('');
  };

  if (!editing) {
    return (
      <EditField
        type="text"
        value={values.mobileNumberWithCode}
        name="Phone Number"
        htmlName="phone-number"
        onClick={() => setEditing(true)}
      />
    );
  }

  return (
    <>
      <Form noValidate onSubmit={sendingRequest ? () => {} : handleSubmit}>
        <div style={{ width: '100%', display: 'flex' }}>
          <StyledInput
            type="text"
            name="countryCode"
            onChange={handleChange}
            value={values.countryCode}
            style={{ marginRight: '1.75em', width: '15%', minWidth: '2.5em' }}
            placeholder="Code"
          />

          <StyledInput
            type="text"
            name="mobileNumber"
            onChange={handleChange}
            value={values.mobileNumber}
            style={{ marginRight: isDesktop ? '1.75em' : '0' }}
            placeholder="Mobile Number"
            autoFocus
          />
        </div>

        {!isDesktop && (
          <>
            {errorMsg && <FormErrorMsg text={errorMsg} />}
            {errors.countryCode && (
              <FormFieldErrorMsg text={errors.countryCode} />
            )}
            {errors.mobileNumber && (
              <FormFieldErrorMsg text={errors.mobileNumber} />
            )}
          </>
        )}

        <FormBtnContainer>
          <Button
            color="secondary"
            onClick={sendingRequest ? () => {} : handleCancel}
            style={{ marginRight: '0.75em' }}
            isDisabled={sendingRequest}
          >
            Cancel
          </Button>

          <Button
            onClick={sendingRequest ? () => {} : handleSubmit}
            isDisabled={
              sendingRequest ||
              !values.mobileNumber ||
              (values.mobileNumberWithCode &&
              values.mobileNumberWithCode === initMobileNumberWithCode
                ? true
                : false)
            }
          >
            Save
          </Button>
        </FormBtnContainer>
      </Form>

      {isDesktop && (
        <>
          {errorMsg && <FormErrorMsg text={errorMsg} />}
          {errors.countryCode && (
            <FormFieldErrorMsg text={errors.countryCode} />
          )}
          {errors.mobileNumber && (
            <FormFieldErrorMsg text={errors.mobileNumber} />
          )}
        </>
      )}
    </>
  );
};

export interface IUpdatePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Password: React.FC = () => {
  const [editing, setEditing] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [sendingRequest, setSendingRequest] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const isDesktop = useDesktop(1200);

  const reset = () => {
    resetValues();
    setEditing(false);
    setErrorMsg('');
    resetErrors();
  };

  const submitForm = async (e: React.SyntheticEvent<EventTarget>) => {
    setSendingRequest(true);

    try {
      const res = await api.user.updatePassword(
        values.currentPassword,
        values.newPassword,
        values.confirmPassword
      );
      if (res.data.password_updated === true) {
        reset();
      }
    } catch (err: any) {
      setErrorMsg(
        err.response.data.error.message ||
          'Something went wrong, please try again!'
      );
    }

    setSendingRequest(false);
  };

  const defaultValues: IUpdatePassword = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetValues,
    resetErrors
  } = useForm<IUpdatePassword>(
    defaultValues,
    submitForm,
    validateUpdatePasswordForm
  );

  const handleCancel = () => {
    resetValues();
    resetErrors();
    setEditing(false);
    setErrorMsg('');
  };

  React.useEffect(() => {
    if (
      values.currentPassword.trim() &&
      values.newPassword.trim() &&
      values.confirmPassword.trim() &&
      !sendingRequest
    ) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [values, sendingRequest]);

  if (!editing) {
    return (
      <EditField
        type="password"
        value="password"
        name="Password"
        htmlName="password"
        onClick={() => setEditing(true)}
      />
    );
  }

  return (
    <>
      <Form
        noValidate
        style={{ display: 'flex', alignItems: 'flex-end' }}
        onSubmit={isDisabled ? () => {} : handleSubmit}
      >
        <div style={{ marginRight: isDesktop ? '1.75em' : '0', width: '100%' }}>
          <Input
            type="password"
            name="currentPassword"
            onChange={handleChange}
            value={values.currentPassword}
            style={{ marginTop: '2em' }}
            placeholder="Current Password"
            autoFocus
          />
          {errors.currentPassword && (
            <FormFieldErrorMsg text={errors.currentPassword} />
          )}

          <Input
            type="password"
            name="newPassword"
            onChange={handleChange}
            value={values.newPassword}
            style={{ marginTop: '2em' }}
            placeholder="New Password"
          />
          <Text size="0.75rem" style={{ marginTop: '0.66em' }}>
            Minimum requirements - 8 characters, 1 lowercase, 1 uppercase, 1
            numeric value, 1 special character. Eg - "P@ssword1"
          </Text>
          {errors.newPassword && (
            <FormFieldErrorMsg text={errors.newPassword} />
          )}

          <Input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
            style={{ marginTop: '2em' }}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <FormFieldErrorMsg text={errors.confirmPassword} />
          )}
        </div>

        {!isDesktop && <>{errorMsg && <FormErrorMsg text={errorMsg} />}</>}

        <div style={{ display: 'flex' }}>
          <FormBtnContainer>
            <Button
              color="secondary"
              onClick={handleCancel}
              style={{ marginRight: '0.75em' }}
              isDisabled={sendingRequest ? true : false}
            >
              Cancel
            </Button>

            <Button
              onClick={isDisabled ? () => {} : handleSubmit}
              isDisabled={isDisabled}
            >
              Save
            </Button>
          </FormBtnContainer>
        </div>
      </Form>

      {isDesktop && <>{errorMsg && <FormErrorMsg text={errorMsg} />}</>}
    </>
  );
};

const Input = styled(StyledInput)`
  margin-top: 0;
`;
