import React, { useEffect, useContext } from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer } from 'react-toastify';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
// import { MentorContext } from '../../contexts/MentorContext';
import { UpdatedMentorContext } from '../../contexts/UpdatedMentorContext';
import { SkillContext } from '../../contexts/SkillsContext';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';
import SessonDetails from '../MentorListing/SessionForm';
import UpdatedReviewForm from '../MentorListing/UpdatedReviewForm';
import { Review } from '../../interfaces/IMentor';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Chip } from '@material-ui/core';

interface IMentorFormProps {
  type: string;
  id?: string | undefined;
}

const MentorForm: React.FC<IMentorFormProps> = ({ type, id }) => {
  const {
    variables,
    handleChange,
    handleValueChange,
    isCreatingMentor,
    isFetchingMentor,
    getMentor,
    setMentorForEdit,
    updateMentor,
    selectedMentor,
    createMentor,
    addReview,
    clearVariables
  } = useContext(UpdatedMentorContext);

  const { getSkillsList, skillList, categories, getCategories } = useContext(
    SkillContext
  );

  const {
    name,
    username,
    userID,
    email,
    about,
    wiseup_consent,
    valueProposition,
    avatar,
    reviews,
    overAllRating = 0,
    portfolio = {}
  } = variables;

  const [arraySkill, setArraySkill] = React.useState<string[]>(
    selectedMentor?.skills || []
  );
  const [arrayCategory, setArrayCategory] = React.useState<string[]>(
    selectedMentor?.category || []
  );
  const [arrayTier, setArrayTier] = React.useState<string[]>(
    selectedMentor?.tier || []
  );

  const handleSkills = (event: React.ChangeEvent<{ value: unknown }>) => {
    setArraySkill(event.target.value as string[]);
  };
  const handleCategories = (event: React.ChangeEvent<{ value: unknown }>) => {
    setArrayCategory(event.target.value as string[]);
  };
  const handleTiers = (event: React.ChangeEvent<{ value: unknown }>) => {
    setArrayTier(event.target.value as string[]);
  };

  useEffect(() => {
    if (!skillList || skillList?.length === 0) getSkillsList();
    if (!categories || categories?.length === 0) getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (type === 'create') clearVariables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    if (id) getMentor(id);

    setMentorForEdit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isFetchingMentor) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <>
      <Container>
        <Text size="1.5vw">
          {type === 'create' ? 'Create Mentor' : 'Edit Mentor'}
        </Text>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          value={name || ''}
        />
        <TextField
          label="User ID"
          variant="outlined"
          name="userID"
          onChange={handleChange}
          value={userID || ''}
        />
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          onChange={handleChange}
          value={username || ''}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          value={email || ''}
        />
        <TextField
          label="About"
          variant="outlined"
          name="about"
          onChange={handleChange}
          value={about || ''}
          multiline
        />
        <TextField
          label="Value Proposition"
          variant="outlined"
          name="valueProposition"
          onChange={handleChange}
          value={valueProposition || ''}
          multiline
        />
        <TextField
          label="Avatar"
          variant="outlined"
          name="avatar"
          onChange={handleChange}
          value={avatar || ''}
          multiline
        />
        <TextField
          label="Overall Rating"
          variant="outlined"
          name="overAllRating"
          onChange={handleChange}
          type="number"
          value={overAllRating || 0}
        />
        <TextField
          label="Country"
          variant="outlined"
          name="country"
          onChange={(e) => handleValueChange(e, 'location')}
          value={portfolio?.location?.country || ''}
          multiline
        />
        <TextField
          label="City"
          variant="outlined"
          name="city"
          onChange={(e) => handleValueChange(e, 'location')}
          value={portfolio?.location?.city || ''}
          multiline
        />
        <TextField
          label="Company Name"
          variant="outlined"
          name="companyName"
          onChange={(e) => handleValueChange(e, 'currentEmployment')}
          value={portfolio?.currentEmployment?.companyName || ''}
          multiline
        />
        <TextField
          label="Job Status"
          variant="outlined"
          name="job_status"
          onChange={(e) => handleValueChange(e, 'currentEmployment')}
          value={portfolio?.currentEmployment?.job_status || ''}
          select
          SelectProps={{
            native: true
          }}
        >
          {['Full Time', 'Part Time', 'Internship', 'Freelancer', ''].map(
            (k: string) => (
              <option key={k} value={k}>
                {k}
              </option>
            )
          )}
        </TextField>
        <TextField
          label="Designation"
          variant="outlined"
          name="designation"
          onChange={(e) => handleValueChange(e, 'currentEmployment')}
          value={portfolio?.currentEmployment?.designation || ''}
          multiline
        />
        <TextField
          label="Company Avatar"
          variant="outlined"
          name="avatar"
          onChange={(e) => handleValueChange(e, 'currentEmployment')}
          value={portfolio?.currentEmployment?.avatar || ''}
          multiline
        />
        <TextField
          label="Experience"
          variant="outlined"
          name="experience"
          onChange={(e) => handleValueChange(e, 'currentEmployment')}
          value={portfolio?.currentEmployment?.experience || 0}
          type="number"
        />
        <div>
          <SessonDetails />
        </div>

        <Text size="1.2vw">Skills</Text>
        <Select
          multiple
          className="pillInSkills"
          value={arraySkill}
          onChange={handleSkills}
          placeholder="Select Skills"
          variant="outlined"
          style={{
            width: '100%',
            margin: '2.25em 0 0 0',
            fontSize: '16px',
            lineHeight: '24px'
          }}
          renderValue={(selected) => (
            <div
              style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '0' }}
            >
              {(selected as string[]).map((value) => (
                <Chip
                  key={value}
                  label={value}
                  style={{
                    marginBottom: '0',
                    margin: '0px 2px',
                    display: 'flex'
                  }}
                />
              ))}
            </div>
          )}
        >
          {skillList.map((skill: any) => {
            return <MenuItem value={skill.name}>{skill.name}</MenuItem>;
          })}
        </Select>

        <Text size="1.2vw">Categories</Text>
        <Select
          multiple
          className="pillInSkills"
          value={arrayCategory}
          onChange={handleCategories}
          placeholder="Select Categories"
          variant="outlined"
          style={{
            width: '100%',
            margin: '2.25em 0 0 0',
            fontSize: '16px',
            lineHeight: '24px'
          }}
          renderValue={(selected) => (
            <div
              style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '0' }}
            >
              {(selected as string[]).map((value) => (
                <Chip
                  key={value}
                  label={value}
                  style={{
                    marginBottom: '0',
                    margin: '0px 2px',
                    display: 'flex'
                  }}
                />
              ))}
            </div>
          )}
        >
          {categories.map((cat: any) => {
            return <MenuItem value={cat}>{cat}</MenuItem>;
          })}
        </Select>

        <Text size="1.2vw">Tier</Text>
        <Select
          multiple
          className="pillInSkills"
          variant="outlined"
          value={arrayTier}
          onChange={handleTiers}
          placeholder="Select Tier"
          style={{
            width: '100%',
            margin: '2.25em 0 0 0',
            fontSize: '16px',
            lineHeight: '24px'
          }}
          renderValue={(selected) => (
            <div
              style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '0' }}
            >
              {(selected as string[]).map((value) => (
                <Chip
                  key={value}
                  label={value}
                  style={{
                    marginBottom: '0',
                    margin: '0px 2px',
                    display: 'flex'
                  }}
                />
              ))}
            </div>
          )}
        >
          {['Tier 1', 'Tier 2', 'Tier 3', 'Tier X'].map((cat: any) => {
            return <MenuItem value={cat}>{cat}</MenuItem>;
          })}
        </Select>

        <FormControlLabel
          control={
            <Switch
              onChange={handleChange}
              name="wiseup_consent"
              color="primary"
              checked={wiseup_consent || false}
              value={wiseup_consent || false}
            />
          }
          label="Wiseup Consent"
        />
        <Button onClick={addReview} variant="contained" color="primary">
          Add Review
        </Button>
        <>
          {reviews?.length > 0 &&
            reviews.map((s: Review, i: number) => (
              <UpdatedReviewForm index={i} key={i} />
            ))}
        </>
        <Button
          onClick={() =>
            type === 'create'
              ? createMentor(arraySkill, arrayCategory, arrayTier)
              : updateMentor(id || '', arraySkill, arrayCategory, arrayTier)
          }
          variant="contained"
          color="secondary"
          disabled={isCreatingMentor}
        >
          {type === 'create' ? 'Create' : 'Edit'}
        </Button>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default MentorForm;

const Container = styled.div`
  margin: 5vh;

  p {
    margin-bottom: 2vh;
  }

  button {
    margin-top: 2vh;
    margin-right: 2vw;
  }

  div {
    margin-bottom: 2vh;
    display: block;
  }

  .pillInSkill {
    div {
      margin-bottom: 0;
    }
  }
`;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
