import React, { useEffect, useContext } from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer } from 'react-toastify';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {
  Skills,
  Education,
  Review,
  Employment
} from '../../interfaces/IMentor';
import SkillsForm from '../MentorListing/SkillsForm';
import EducationForm from '../MentorListing/EducationForm';
import ReviewForm from '../MentorListing/ReviewForm';
import EmploymentForm from '../MentorListing/EmploymentForm';
import { MentorContext } from '../../contexts/MentorContext';
import { SkillContext } from '../../contexts/SkillsContext';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';

interface IMentorFormProps {
  type: string;
  id?: string | undefined;
}

const MentorForm: React.FC<IMentorFormProps> = ({ type, id }) => {
  const {
    addSkill,
    addEducation,
    addEmployment,
    addReview,
    variables,
    handleChange,
    createMentor,
    isCreatingMentor,
    isFetchingMentor,
    getMentor,
    setMentorForEdit,
    clearVariables,
    updateMentor,
    removeRow,
    // handleValueChange,
    handleValueChangeA,
    addRow
  } = useContext(MentorContext);

  const { getCategories, categories } = useContext(SkillContext);

  const {
    name,
    username,
    sessionPrice,
    sessionBookingLink,
    service,
    avatar,
    experience,
    company,
    location,
    about,
    shortDescription,
    rating,
    skills,
    education,
    reviews,
    wiseup_consent,
    employment,
    tier,
    category
  } = variables;

  useEffect(() => {
    if (!categories || categories?.length === 0) getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id) getMentor(id);

    setMentorForEdit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (type === 'create') clearVariables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

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
          label="Username"
          variant="outlined"
          name="username"
          onChange={handleChange}
          value={username || ''}
        />
        <TextField
          label="Session Price"
          variant="outlined"
          name="sessionPrice"
          type="number"
          onChange={handleChange}
          value={sessionPrice || ''}
        />
        <TextField
          label="Session Booking Link"
          variant="outlined"
          name="sessionBookingLink"
          onChange={handleChange}
          value={sessionBookingLink || ''}
        />
        <TextField
          label="SimplyBook Service Number"
          variant="outlined"
          name="service"
          type="number"
          onChange={handleChange}
          value={service || ''}
        />
        <TextField
          label="Avatar"
          variant="outlined"
          name="avatar"
          onChange={handleChange}
          value={avatar || ''}
        />
        <TextField
          label="Experience"
          variant="outlined"
          name="experience"
          onChange={handleChange}
          value={experience || ''}
          type="number"
        />
        <TextField
          label="Company"
          variant="outlined"
          name="company"
          onChange={handleChange}
          value={company || ''}
        />
        <TextField
          label="Location"
          variant="outlined"
          name="location"
          onChange={handleChange}
          value={location || ''}
        />
        <TextField
          label="Short Description"
          variant="outlined"
          name="shortDescription"
          onChange={handleChange}
          value={shortDescription || ''}
          multiline
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
          label="Rating"
          variant="outlined"
          name="rating"
          onChange={handleChange}
          value={rating || ''}
          type="number"
        />
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
        <div>
          <br />
          <Button onClick={addSkill} variant="contained" color="primary">
            Add Skill
          </Button>
          <>
            {skills?.length > 0 &&
              skills.map((s: Skills, i: number) => (
                <SkillsForm index={i} key={i} />
              ))}
          </>
          <br />
          <Button
            onClick={(e) => addRow(e, 'category')}
            variant="contained"
            color="primary"
          >
            Add Category
          </Button>
          <>
            {category?.length > 0 &&
              category.map((point: string, i: number) => (
                <>
                  <Flex>
                    <Index>
                      <span>{i + 1}</span>
                    </Index>
                    <Tooltip title="Remove row">
                      <Remove onClick={(e) => removeRow(e, i, 'category')} />
                    </Tooltip>
                  </Flex>
                  <TextField
                    label="Point"
                    variant="outlined"
                    name="point"
                    onChange={(e) => handleValueChangeA(e, i, 'category')}
                    value={point || ''}
                    select
                    SelectProps={{
                      native: true
                    }}
                  >
                    {[''].concat(categories).map((k: string) => (
                      <option key={k} value={k}>
                        {k}
                      </option>
                    ))}
                  </TextField>
                </>
              ))}
          </>
          <br />
          <Button
            onClick={(e) => addRow(e, 'tier')}
            variant="contained"
            color="primary"
          >
            Add Tier
          </Button>
          <>
            {tier?.length > 0 &&
              tier.map((point: string, i: number) => (
                <>
                  <Flex>
                    <Index>
                      <span>{i + 1}</span>
                    </Index>
                    <Tooltip title="Remove row">
                      <Remove onClick={(e) => removeRow(e, i, 'tier')} />
                    </Tooltip>
                  </Flex>
                  <TextField
                    label="Point"
                    variant="outlined"
                    name="point"
                    onChange={(e) => handleValueChangeA(e, i, 'tier')}
                    value={point || ''}
                    select
                    SelectProps={{
                      native: true
                    }}
                  >
                    {['', 'Tier 1', 'Tier 2', 'Tier 3', 'Tier X'].map(
                      (k: string) => (
                        <option key={k} value={k}>
                          {k}
                        </option>
                      )
                    )}
                  </TextField>
                </>
              ))}
          </>
          <br />
          <Button onClick={addEducation} variant="contained" color="primary">
            Add Education
          </Button>
          <>
            {education?.length > 0 &&
              education.map((s: Education, i: number) => (
                <EducationForm index={i} key={i} />
              ))}
          </>
          <br />
          <Button onClick={addReview} variant="contained" color="primary">
            Add Review
          </Button>
          <>
            {reviews?.length > 0 &&
              reviews.map((s: Review, i: number) => (
                <ReviewForm index={i} key={i} />
              ))}
          </>
          <br />
          <Button onClick={addEmployment} variant="contained" color="primary">
            Add Employment
          </Button>
          <>
            {employment?.length > 0 &&
              employment.map((s: Employment, i: number) => (
                <EmploymentForm index={i} key={i} />
              ))}
          </>
        </div>
        <Button
          onClick={() =>
            type === 'create' ? createMentor() : updateMentor(id || '')
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
`;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex !important;
  margin-top: 2vh;

  svg {
    margin-left: 1vw;
  }
`;

const Index = styled.div`
  width: 2vw;
  text-align: center;
  align-self: center;
  background: #0c3559;

  span {
    color: white;
    font-family: Mulish;
  }
`;
