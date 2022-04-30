import React, { useEffect, useContext } from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { ToastContainer } from 'react-toastify';
import { Skills, KPI } from '../../interfaces/IMentee';
import SkilledInForm from '../Mentees/SkilledInForm';
import WantsInternshipInForm from '../Mentees/WantsInternshipInForm';
import KPIForm from '../Mentees/KPIForm';
import { MenteeContext } from '../../contexts/MenteeContext';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';
import { MentorContext } from '../../contexts/MentorContext';

interface IMenteeFormProps {
  type: string;
  id?: string | undefined;
}

const MenteeForm: React.FC<IMenteeFormProps> = ({ type, id }) => {
  const {
    addSkilledIn,
    addWantsInternshipIn,
    addKPI,
    variables,
    handleChange,
    createMentee,
    isCreatingMentee,
    isFetchingMentee,
    getMentee,
    setMenteeForEdit,
    clearVariables,
    updateMentee
  } = useContext(MenteeContext);

  const { mentorList, getMentorsList } = useContext(MentorContext);

  const {
    fullName,
    username,
    locationCountry,
    locationCity,
    avatar,
    experience,
    certified,
    collegeName,
    collegeLocation,
    objective,
    rating,
    recommendedMentor,
    skilledIn,
    wantsInternshipIn,
    KPIs
  } = variables;

  useEffect(() => {
    getMentorsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id) getMentee(id);

    setMenteeForEdit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (type === 'create') clearVariables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  if (isFetchingMentee) {
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
          {type === 'create' ? 'Create Mentee' : 'Edit Mentee'}
        </Text>
        <TextField
          label="Name"
          variant="outlined"
          name="fullName"
          onChange={handleChange}
          value={fullName || ''}
        />
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          onChange={handleChange}
          value={username || ''}
        />
        <TextField
          label="Location Country"
          variant="outlined"
          name="locationCountry"
          onChange={handleChange}
          value={locationCountry || ''}
        />
        <TextField
          label="Location City"
          variant="outlined"
          name="locationCity"
          onChange={handleChange}
          value={locationCity || ''}
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
          label="College Name"
          variant="outlined"
          name="collegeName"
          onChange={handleChange}
          value={collegeName || ''}
        />
        <TextField
          label="College Location"
          variant="outlined"
          name="collegeLocation"
          onChange={handleChange}
          value={collegeLocation || ''}
        />
        <TextField
          label="Recommended Mentor"
          variant="outlined"
          name="recommendedMentor"
          onChange={handleChange}
          value={recommendedMentor || ''}
          // style={{ width: '50%' }}
          select
          SelectProps={{
            native: true
          }}
        >
          {[''].concat(mentorList).map((mentor: any) => (
            <option key={mentor.username} value={mentor.username}>
              {mentor.username}
            </option>
          ))}
        </TextField>
        <TextField
          label="Objective"
          variant="outlined"
          name="objective"
          onChange={handleChange}
          value={objective || ''}
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
              name="certified"
              color="primary"
              checked={certified || false}
              value={certified || false}
            />
          }
          label="Certified"
        />
        <div>
          <br />
          <Button onClick={addSkilledIn} variant="contained" color="primary">
            Add Skilled In
          </Button>
          <>
            {skilledIn?.length > 0 &&
              skilledIn.map((s: Skills, i: number) => (
                <SkilledInForm index={i} key={i} />
              ))}
          </>
          <br />
          <Button
            onClick={addWantsInternshipIn}
            variant="contained"
            color="primary"
          >
            Add Wants Internship In
          </Button>
          <>
            {wantsInternshipIn?.length > 0 &&
              wantsInternshipIn.map((s: Skills, i: number) => (
                <WantsInternshipInForm index={i} key={i} />
              ))}
          </>
          <br />
          <Button onClick={addKPI} variant="contained" color="primary">
            Add KPI
          </Button>
          <>
            {KPIs?.length > 0 &&
              KPIs.map((k: KPI, i: number) => <KPIForm index={i} key={i} />)}
          </>
          <br />
        </div>
        <Button
          onClick={() =>
            type === 'create' ? createMentee() : updateMentee(id || '')
          }
          variant="contained"
          color="secondary"
          disabled={isCreatingMentee}
        >
          {type === 'create' ? 'Create' : 'Edit'}
        </Button>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default MenteeForm;

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
