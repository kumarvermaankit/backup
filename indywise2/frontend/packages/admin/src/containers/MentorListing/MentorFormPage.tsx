import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Header from '../CommonFiles/Header';
import { UpdatedMentorContext } from '../../contexts/UpdatedMentorContext';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';

const useStyles = makeStyles(() => ({
  container: {
    padding: '3em',
    justifyContent: 'space-between'
  },
  root: {
    padding: '0em 3em',
    justifyContent: 'space-between',
    display: 'block'
  },
  button: {
    marginRight: '2vw'
  }
}));

const MentorPage: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const classes = useStyles();
  const id = match.params.id;
  const { getMentorForm, isFetchingMentor, selectedMentor } = useContext(
    UpdatedMentorContext
  );

  useEffect(() => {
    getMentorForm(id);

    if (!selectedMentor) {
      history.push('/mentor-forms');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, history]);

  const {
    fullName = '',
    email = '',
    country = '',
    avatar = '',
    linkedin = '',
    currency = '',
    commentsAndSuggestions = '',
    mentorshipAudience = [],
    mobileNumber = '',
    hearAboutUs = '',
    dateOfBirth = {
      month: '',
      day: 0,
      year: ''
    },
    hourlySessionPrice = { currency: '', value: 0 },
    createdAt = '',
    countryCode = '',
    mentorshipMotivation = '',
    pastMentoringExperience = '',
    profileDescription = '',
    website = '',
    numberOfPastMentees = 0,
    yearsOfWorkExperience = 0,
    consent = '',
    agreeToTermsAndConditions = '',
    additionalSkills = [],
    expertiseSkills = [],
    introduction = ''
  } = selectedMentor || {};

  console.log(selectedMentor);

  if (isFetchingMentor) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <>
      <Header />
      <Grid container className={classes.container}>
        <Wrapper>
          <Key>Name</Key>
          <Value>{fullName}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Mobile</Key>
          <Value>{`${countryCode}${mobileNumber}`}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Country</Key>
          <Value>{country}</Value>
        </Wrapper>
        <Grid container className={classes.root}>
          <Wrapper>
            <Key>Avatar</Key>
            <Value>{avatar}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Linkedin</Key>
            <Value>{linkedin}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Date Of Birth</Key>
            <Value>{`${dateOfBirth?.day}-${dateOfBirth?.month}-${dateOfBirth?.year}`}</Value>
          </Wrapper>
        </Grid>
        <Grid container className={classes.root}>
          <Wrapper>
            <Key>Mentorship Audience</Key>
            <Value>{mentorshipAudience?.join()}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Additional Skills</Key>
            <Value>{additionalSkills?.join()}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Expertise Skills</Key>
            <Value>{expertiseSkills?.join()}</Value>
          </Wrapper>
        </Grid>
        <Grid container className={classes.root}>
          <Wrapper>
            <Key>Created At</Key>
            <Value>{createdAt}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Currency</Key>
            <Value>{currency}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Number Of Past Mentees</Key>
            <Value>{numberOfPastMentees}</Value>
          </Wrapper>
        </Grid>
        <Grid container className={classes.root}>
          <Wrapper>
            <Key>Years Of Work Experience</Key>
            <Value>{yearsOfWorkExperience}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Agree To Terms And Conditions</Key>
            <Value>{agreeToTermsAndConditions}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Consent</Key>
            <Value>{consent}</Value>
          </Wrapper>
        </Grid>
        <Wrapper>
          <Key>Email</Key>
          <Value>{email}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Hourly Session Price</Key>
          <Value>{`${hourlySessionPrice?.currency} ${hourlySessionPrice?.value}`}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Website</Key>
          <Value>{website}</Value>
        </Wrapper>
      </Grid>
      <Grid container className={classes.root}>
        <Wrapper>
          <Key>Comments And Suggestions</Key>
          <Value>{commentsAndSuggestions}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Hear About Us</Key>
          <Value>{hearAboutUs}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Introduction</Key>
          <Value>{introduction}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Mentorship Motivation</Key>
          <Value>{mentorshipMotivation}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Past Mentoring Experience</Key>
          <Value>{pastMentoringExperience}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Profile Description</Key>
          <Value>{profileDescription}</Value>
        </Wrapper>
      </Grid>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default MentorPage;

const Wrapper = styled.div``;

const Key = styled.h3`
  font-family: 'Mulish';
`;

const Value = styled.h4`
  font-family: 'Mulish';
`;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
