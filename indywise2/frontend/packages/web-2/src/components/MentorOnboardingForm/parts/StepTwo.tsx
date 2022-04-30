import React from 'react';
import { Icon, Pill } from '@indywise/uikit';
import { Input } from '../MentorOnboardForm';
import { Title, SubTitle } from './StepOne';
import styled from 'styled-components';
import { Step, Button } from './StepOne';
import { FieldControl } from './StepThree';
import FormFieldErrorMsg from './../../FormErrorMsg';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { PresignMentorInterestFormImage } from './../../../api/mentor';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export interface IFormStepTwo {
  fullName: string;
  avatar?: string;
  expertiseSkills: string[];
  additionalSkills: string[];
  introduction: string;
  profileDescription: string;
  linkedin: string;
  website?: string;
  yearsOfWorkExperience: string;
  mentorshipAudience: string[];
}

export interface ISkill {
  name: string;
}

interface IFormError {
  introduction: string;
  profileDescription: string;
  linkedin: string;
}

const StepTwo: React.FC<{
  skills: ISkill[];
  inputs: IFormStepTwo;
  handleMentorShipAudienceSelect: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  explicitUpdate: (key: string, value: any) => void;
  handleNextStep: () => void;
  handleUpdate: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  goBackHandler: () => void;
  errors: IFormError;
}> = ({
  handleNextStep,
  goBackHandler,
  inputs,
  handleUpdate,
  errors,
  skills,
  explicitUpdate,
  handleMentorShipAudienceSelect
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);

  const [previewImage, setPreviewImage] = React.useState<
    string | ArrayBuffer | null
  >(null);

  const [isFileUploading, setIsFileUploading] = React.useState(false);
  const [fileUploadError, setFileUploadError] = React.useState('');

  const [
    showExpertiesSkillsDropdown,
    setShowExpertiesSkillsDropDown
  ] = React.useState(false);

  const [
    showAdditionalSkillsDropdown,
    setShowAdditionalSkillsDropdown
  ] = React.useState(false);

  React.useEffect(() => {
    if (
      inputs.introduction.trim() &&
      inputs.profileDescription.trim() &&
      inputs.linkedin.trim() &&
      inputs.expertiseSkills.length > 0 &&
      inputs.yearsOfWorkExperience.toString().trim() &&
      inputs.mentorshipAudience.length > 0
      // inputs.avatar.trim()
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [inputs]);

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];

    try {
      if (!file) {
        throw new Error('0 files selected');
      }

      setIsFileUploading(true);

      const presignPayload = {
        contentType: file.type,
        format: file.type.split('/')[1]
      };

      const ID = inputs.fullName + uuid();

      const res = await PresignMentorInterestFormImage(presignPayload, ID);

      if (res.status === 200) {
        //@ts-ignore
        const S3Response = await axios(res.data.signed_url, {
          method: 'PUT',
          data: file
        });

        if (S3Response.status === 200) {
          explicitUpdate('avatar', res.data.photo_url);
          const reader = new FileReader();

          reader.readAsDataURL(file);

          reader.onloadend = () => {
            setPreviewImage(reader.result);
          };
        }
      }

      // if (!(+(file.size / (1024 * 1024)).toFixed(2) < 5)) {
      //   //TODO handle error for file size
      //   throw new Error('file is too large,maximum 5kb');
      // }
    } catch (error) {
      console.log(error);

      setFileUploadError(error);
    } finally {
      setIsFileUploading(false);
    }

    //check file size
  };

  const handleRemoveSelectedExpertieseSkills = (
    selectedSkillToRemove: string
  ) => {
    const findInd = inputs?.expertiseSkills?.indexOf(selectedSkillToRemove);
    inputs?.expertiseSkills?.splice(findInd, 1);
    explicitUpdate('expertiseSkills', inputs?.expertiseSkills);
  };
  const handleRemoveSelectedAdditionalSkills = (
    selectedSkillToRemove: string
  ) => {
    const findInd = inputs?.additionalSkills?.indexOf(selectedSkillToRemove);
    inputs?.additionalSkills?.splice(findInd, 1);
    explicitUpdate('additionalSkills', inputs?.additionalSkills);
  };

  return (
    <>
      <CustomStep>
        <Title>About Yourself (Step 2/3)</Title>
        <SubTitle>
          Help us create a staller mentor profile for you. Information provided
          on this section will be visible on the IndyWise Platform for browsing
          by potential mentees.
        </SubTitle>
        <Input
          type="text"
          name="introduction"
          onChange={handleUpdate}
          value={inputs.introduction}
          autoComplete="off"
          placeholder="Short introduction of yourself (upto 140 characters) *"
        />
        {errors.introduction && (
          <FormFieldErrorMsg text={errors.introduction} />
        )}

        <Input
          type="text"
          name="linkedin"
          onChange={handleUpdate}
          value={inputs.linkedin}
          placeholder="LinkedIn link *"
          autoComplete="off"
        />
        {errors.linkedin && <FormFieldErrorMsg text={errors.linkedin} />}

        <Input
          type="text"
          name="website"
          onChange={handleUpdate}
          value={inputs.website}
          placeholder="Your website or any other profile link"
          autoComplete="off"
        />
        <Input
          type="number"
          min={0}
          name="yearsOfWorkExperience"
          onChange={handleUpdate}
          value={inputs.yearsOfWorkExperience}
          placeholder="Total years of working experience*"
          autoComplete="off"
        />

        <fieldset
          style={{ border: 'none', padding: '0', marginTop: '12px' }}
          disabled={isFileUploading}
        >
          <Label>Profile Picture</Label>
          <FileUploadContainer>
            {!previewImage ? (
              <>
                <input
                  id="file"
                  type="file"
                  name="profilePicture"
                  onChange={handleFileChange}
                  className="inputfile"
                />
                <label htmlFor="file">
                  <Icon icon="uploadicon" />
                  <span>Upload Photo</span>
                </label>
              </>
            ) : (
              //@ts-ignore
              <ProfileImageStyles src={previewImage} alt="preview image" />
            )}
          </FileUploadContainer>
        </fieldset>
        {fileUploadError && <FormFieldErrorMsg text={fileUploadError} />}

        <Input
          type="text"
          name="profileDescription"
          onChange={handleUpdate}
          value={inputs.profileDescription}
          placeholder="Description of your profile (max. 250 words) *"
          autoComplete="off"
        />
        {errors.profileDescription && (
          <FormFieldErrorMsg text={errors.profileDescription} />
        )}

        <div style={{ position: 'relative' }}>
          <DropDownContainer
            onClick={() =>
              setShowExpertiesSkillsDropDown((prevState) => !prevState)
            }
          >
            <h1>
              {inputs.expertiseSkills?.length > 0
                ? inputs.expertiseSkills.map((skill, i) => (
                    <Pill
                      rightIcon="redexit"
                      text={skill}
                      style={{ marginRight: '10px', marginBottom: '10px' }}
                      onClick={() => {
                        handleRemoveSelectedExpertieseSkills(skill);
                      }}
                    />
                  ))
                : 'Please write your key expertise/skills  you want to mentor on (at most 3)*'}
            </h1>
            <Icon
              icon={!showExpertiesSkillsDropdown ? 'darkdownarrow' : 'uparrow'}
              color="black"
              size="15px"
            />
          </DropDownContainer>

          {showExpertiesSkillsDropdown && (
            <DropDown>
              {skills.map((s: any) => {
                return (
                  <DropdownBtn
                    key={s.ID}
                    disabled={
                      inputs.expertiseSkills.includes(s.name) ||
                      inputs.expertiseSkills.length === 3
                    }
                    onClick={(e) => {
                      explicitUpdate('expertiseSkills', [
                        ...inputs.expertiseSkills,
                        s.name
                      ]);
                    }}
                  >
                    {s.name}
                  </DropdownBtn>
                );
              })}
            </DropDown>
          )}
        </div>
        <div style={{ position: 'relative' }}>
          <DropDownContainer
            onClick={() =>
              setShowAdditionalSkillsDropdown((prevState) => !prevState)
            }
          >
            <h1>
              {inputs?.additionalSkills?.length > 0
                ? inputs?.additionalSkills.map((skill, i) => (
                    <Pill
                      rightIcon="redexit"
                      text={skill}
                      style={{ marginRight: '10px', marginBottom: '10px' }}
                      onClick={() => {
                        handleRemoveSelectedAdditionalSkills(skill);
                      }}
                    />
                  ))
                : 'Please write any additional areas/skills you feel conformable in mentoring '}
            </h1>
            <Icon
              icon={!showAdditionalSkillsDropdown ? 'darkdownarrow' : 'uparrow'}
              color="black"
              size="15px"
            />
          </DropDownContainer>

          {showAdditionalSkillsDropdown && (
            <DropDown>
              {skills.map((s: any) => {
                return (
                  <DropdownBtn
                    key={s.ID}
                    disabled={
                      inputs?.additionalSkills.includes(s.name) ||
                      inputs?.additionalSkills.length === 3
                    }
                    onClick={() => {
                      explicitUpdate('additionalSkills', [
                        ...inputs?.additionalSkills,
                        s.name
                      ]);
                    }}
                  >
                    {s.name}
                  </DropdownBtn>
                );
              })}
            </DropDown>
          )}
        </div>

        <FieldControl>
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{ color: '#4b4b4b' }}>
              Which group interests you more in offering your mentoring support?
            </FormLabel>

            <FormGroup style={{ marginTop: '8px' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: '#000' }}
                    disableRipple
                    checked={inputs.mentorshipAudience.includes('Students')}
                    onChange={handleMentorShipAudienceSelect}
                    name="Students"
                    value="Students"
                  />
                }
                label="Students"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: '#000' }}
                    disableRipple
                    checked={inputs.mentorshipAudience.includes(
                      'Fresh Graduates'
                    )}
                    onChange={handleMentorShipAudienceSelect}
                    name="Fresh Graduates"
                    value="Fresh Graduates"
                  />
                }
                label="Fresh Graduates"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: '#000' }}
                    disableRipple
                    checked={inputs.mentorshipAudience.includes(
                      'Working Professionals'
                    )}
                    onChange={handleMentorShipAudienceSelect}
                    name="Working Professionals"
                    value="Working Professionals"
                  />
                }
                label="Working Professionals"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: '#000' }}
                    disableRipple
                    checked={inputs.mentorshipAudience.includes(
                      'C-level Suite'
                    )}
                    onChange={handleMentorShipAudienceSelect}
                    name="C-level Suite"
                    value="C-level Suite"
                  />
                }
                label="C-level Suite"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: '#000' }}
                    disableRipple
                    checked={inputs.mentorshipAudience.includes(
                      'Startup founders'
                    )}
                    onChange={handleMentorShipAudienceSelect}
                    name="Startup founders"
                    value="Startup founders"
                  />
                }
                label="Startup founders"
              />
            </FormGroup>
          </FormControl>
        </FieldControl>

        <FormBtnContainer>
          <Button
            type="button"
            onClick={() => {
              handleNextStep();
            }}
            disabled={isButtonDisabled}
          >
            Go to Step 3/3
          </Button>
          <GoBackBtn
            type="button"
            onClick={() => {
              goBackHandler();
            }}
          >
            Go Back
          </GoBackBtn>
        </FormBtnContainer>
      </CustomStep>
    </>
  );
};

export default StepTwo;

export const GoBackBtn = styled(Button)`
  cursor: pointer;
  color: #0c3559;
  background-color: #ffffff;
  filter: drop-shadow(0px 8px 16px rgba(17, 17, 17, 0.16));

  &:hover {
    background-color: #ffffff;
  }
  :disabled {
    background-color: #faefd9;
    color: #a3a3a3;
  }
`;

const CustomStep = styled(Step)`
  box-sizing: border-box;
  //? This CSS changes multiselect(3rd party package)
  .multiselect-container {
    font-family: Roboto;

    .search-wrapper {
      border: none;
      /* border-bottom: 1px solid #a3a3a3; */

      & > input {
        width: 100%;
        overflow-wrap: break-word;
        border-bottom: 1px solid #a3a3a3;
        padding-bottom: 0.5em;
      }

      & > .chip {
        background-color: #ffffff;
        color: #4b4b4b;
        border: 1px solid #4b4b4b;
        border-radius: 30px;
        display: inline-flex;
        align-items: center;

        .custom-close {
          margin-left: 4px;
        }
      }
    }

    .highlightOption {
      background-color: #f3f2f2;
      color: #000;
    }
  }
  .multiSelectContainer li:hover {
    background-color: #f3f2f2;
    color: #000;
  }
`;

const DropDownContainer = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #727272;
  margin-top: 44px;
  /* // padding-bottom: 0.4rem; */
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
  h1 {
    font-family: Roboto, sans-serif;
    margin: 0px;
    font-weight: 500;
    color: #4b4b4b;
    font-size: 16px;
  }
`;

const DropDown = styled.div`
  height: 200px;
  overflow-y: auto;
  width: 100%;
  position: absolute;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 12px;
  margin-top: 1.4rem;
  padding-top: 8px;
  h1 {
    font-size: 16px;
    font-weight: normal;
    font-family: Roboto, sans-serif;
    margin: 24px 40px 30px 25px;
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
  @media (max-width: 1001px) {
    height: 250px;
  }
`;

const DropdownBtn = styled.button`
  width: 100%;
  padding: 12px 4px;
  font-size: 14px;

  border: none;
  outline: none;
  background-color: transparent;
  display: block;
  transition: 0.2s;
  text-align: left;

  &:hover {
    background-color: #ccc;
  }
`;

export const FormBtnContainer = styled.div`
  /* width: 100%; */
  background-color: #fff;
  position: sticky;

  display: flex;
  flex-direction: column;
  bottom: 20px;
  margin-top: 30px;
`;

const Label = styled.h3`
  color: #4b4b4b;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0;
`;

const FileUploadContainer = styled.div`
  position: relative;
  padding: 12px 0;
  border: 1px dashed #4b4b4b;

  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin: 4px 0px;
    color: #4b4b4b;
  }

  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    background: #ffffff;
    border-radius: 0.4em;
    filter: drop-shadow(0px 6px 18px rgba(164, 164, 164, 0.35));

    & > span {
      margin: 0;
      margin-left: 10px;
    }
  }
`;

const ProfileImageStyles = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;
