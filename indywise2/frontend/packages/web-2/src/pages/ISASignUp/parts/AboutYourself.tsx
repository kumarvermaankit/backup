import * as React from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { Input } from './BasicInfo';
import { getFileFormat } from '../../../utils/getFileFormat';
import axios from 'axios';
import { useForm } from '../../../hooks/useForm';
import { validateIsaAboutYourselfForm } from '../../../utils/validateForm';
import FormFieldErrorMsg from '../../../components/FormFieldErrorMsg';
import { hearAboutIndyWiseType } from '../../../contexts/ISASignUpContext';

export interface IAboutYourselfForm {
  workExperience: string;
  linkedinProfile: string;
  otherLinks: string;
  hearAboutIndyWise: hearAboutIndyWiseType | string;
}

const defaultValues: IAboutYourselfForm = {
  workExperience: '',
  linkedinProfile: '',
  otherLinks: '',
  hearAboutIndyWise: ''
};

const AboutYourself: React.FC<{ submitForm: Function }> = ({ submitForm }) => {
  const [isFileSelected, setIsFileSelected] = React.useState(false);
  const [filename, setFilename] = React.useState('');
  const [isFileUploaded, setIsFileUploaded] = React.useState(false);
  const [fileErr, setFileErr] = React.useState('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const { values, errors, handleChange, handleSubmit } = useForm<
    IAboutYourselfForm
  >(defaultValues, submitForm, validateIsaAboutYourselfForm);

  const workExpMap = [
    'Working professional < 3 years of exp.',
    'Working professional > 3 years of exp.',
    'Fresher looking for a job',
    'College student studying in the final year'
  ];
  const hearAboutIndyWiseMap = [
    'LinkedIn',
    'Facebook',
    'Google Search',
    'Emailer',
    'Friends',
    'Others'
  ];

  const handleFileUploadOnChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsFileSelected(true);
    setFilename('Uploading...');
    const files = e.target.files || [];

    // If one file(CV) is uploaded via the HTML Input File API
    if (files.length === 1) {
      // TODO: Refactor this logic into ISA form context.
      // Store the `cvUploaded` state in the ISA form context.
      const format = getFileFormat(files[0].name);
      const content_type = files[0].type;
      // TODO: Replace it with `email` from context provider for ISA form.
      const email = 'john1@doe.com';
      const reqBody = {
        email,
        format,
        content_type
      };
      let s3Url = '';

      try {
        const res = await axios({
          url: 'https://dev-api.indywise.com/isa/isa/signup/presigned-url',
          method: 'POST',
          data: reqBody
        });
        s3Url = res.data.signed_url;
      } catch (err) {}

      if (s3Url) {
        try {
          await axios({
            url: s3Url,
            method: 'PUT',
            data: files[0]
          });
        } catch (err) {}
      }

      setFilename(files[0].name);
      setIsFileUploaded(true);
    } else if (files.length === 0) {
      setIsFileSelected(false);
      setFilename('');
      setIsFileUploaded(false);
    }
  };

  const onSubmitHandler = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if (!isFileUploaded) {
      setFileErr('Please upload your CV');
    } else {
      handleSubmit(e);
    }
  };

  React.useEffect(() => {
    if (
      values.workExperience.trim() &&
      values.linkedinProfile.trim() &&
      values.hearAboutIndyWise.trim() &&
      isFileUploaded
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [values, isFileUploaded]);

  return (
    <div>
      <Text type="h3" size="2rem">
        About Yourself (Step 2/3)
      </Text>
      <Form noValidate onSubmit={onSubmitHandler}>
        <FileUploadContainer>
          <input
            id="file"
            type="file"
            name="file"
            accept="application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => handleFileUploadOnChange(e)}
            className="inputfile"
          />
          {/* This label is designed to look like a button */}
          <label htmlFor="file">Upload CV</label>
          {!isFileSelected && (
            <Text size="1rem" type="body">
              No file selected{' '}
            </Text>
          )}
          {isFileSelected && filename && (
            <Text size="1rem" type="body">
              {filename}
            </Text>
          )}
          {fileErr && <FormFieldErrorMsg text={fileErr} />}
        </FileUploadContainer>

        <Select
          name="workExperience"
          onChange={handleChange}
          value={values.workExperience}
        >
          <option value="" disabled selected>
            Work Experience *
          </option>
          {workExpMap.map((exp) => (
            <option value={exp} key={exp}>
              {exp}
            </option>
          ))}
        </Select>
        {errors.workExperience && (
          <FormFieldErrorMsg text={errors.workExperience} />
        )}

        <Input
          type="text"
          name="linkedinProfile"
          placeholder="LinkedIn Profile Link *"
          onChange={handleChange}
          value={values.linkedinProfile}
        />
        {errors.linkedinProfile && (
          <FormFieldErrorMsg text={errors.linkedinProfile} />
        )}

        <Input
          type="text"
          name="otherLinks"
          placeholder="Other Links (If any)"
          onChange={handleChange}
          value={values.otherLinks}
        />
        {errors.otherLinks && <FormFieldErrorMsg text={errors.otherLinks} />}

        <Select
          name="hearAboutIndyWise"
          onChange={handleChange}
          value={values.hearAboutIndyWise}
        >
          <option value="" disabled selected>
            Where did you hear about IndyWise? *
          </option>
          {hearAboutIndyWiseMap.map((val) => (
            <option value={val} key={val}>
              {val}
            </option>
          ))}
        </Select>
        {errors.hearAboutIndyWise && (
          <FormFieldErrorMsg text={errors.hearAboutIndyWise} />
        )}

        <Button
          isDisabled={isButtonDisabled}
          text="Go to Step 3/3"
          onClick={onSubmitHandler}
        />
      </Form>
    </div>
  );
};

export default AboutYourself;

const Form = styled.form`
  /* "Input" also has 2.25em and this was supposed to be 3em */
  margin-top: 0.75em;

  /* Submit button (To validate the form and if valid show next screen) */
  button {
    width: 100%;
    margin-top: 1.25em;
    height: fit-content;
    padding: 0.5em 0;
    border-radius: 0.5em;

    p {
      font-size: 1.25rem;
    }
  }
`;

const Select = styled.select`
  width: 100%;
  margin-top: 2.25em;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5em;
  height: 2.5em;
  outline: none;
  border: none;
  background: #ffffff;
  border-bottom: 1px solid #727272;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`;

// TODO: Have a drop area for desktop screens, i.e > 1200px
const FileUploadContainer = styled.div`
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    margin: 1.2em 0 0.8em 0;
    display: inline-block;
    width: 100%;
    padding: 0.5em 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    text-align: center;
    background: #ffffff;
    border-radius: 0.4em;
    filter: drop-shadow(0px 6px 18px rgba(164, 164, 164, 0.35));
  }

  .inputfile:hover + label {
    cursor: pointer;
    background: #f2f2f2;
    filter: drop-shadow(0px 6px 18px rgba(164, 164, 164, 0.35));
  }

  .inputfile:active + label {
    filter: drop-shadow(0px 3px 6px rgba(164, 164, 164, 0.35));
  }

  .inputfile:focus + label {
    outline: none;
  }
`;
