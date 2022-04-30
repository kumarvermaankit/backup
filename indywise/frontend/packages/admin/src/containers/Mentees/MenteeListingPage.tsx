import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Header from '../CommonFiles/Header';
import { MenteeContext } from '../../contexts/MenteeContext';
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

const MenteePage: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const classes = useStyles();
  const id = match.params.id;
  const {
    getMentee,
    enableMentee,
    isCreatingMentee,
    disableMentee,
    isFetchingMentee,
    selectedMentee
  } = useContext(MenteeContext);

  const editMentee = (id: string) => {
    history.push(`/mentee/edit/${id}`);
  };

  useEffect(() => {
    getMentee(id);

    if (!selectedMentee) {
      history.push('/list-mentee');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, history]);

  const {
    fullName = '',
    username = '',
    certified = false,
    collegeLocation = '',
    collegeName = '',
    objective = '',
    locationCity = '',
    locationCountry = '',
    experience = '',
    recommendedMentor = ''
  } = selectedMentee || {};

  if (isFetchingMentee) {
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
          <Key>Username</Key>
          <Value>{username}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Certified</Key>
          <Value>{`${certified}`}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Location</Key>
          <Value>{`${locationCity}, ${locationCountry}`}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Experience</Key>
          <Value>{experience}</Value>
        </Wrapper>
        <Wrapper>
          <Key>College</Key>
          <Value>{`${collegeName}, ${collegeLocation}`}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Recommended Mentor</Key>
          <Value>{recommendedMentor || '-'}</Value>
        </Wrapper>
      </Grid>
      <Grid container className={classes.root}>
        <Wrapper>
          <Key>Objective</Key>
          <Value>{objective}</Value>
        </Wrapper>
        <Button
          onClick={() => editMentee(id)}
          disabled={isCreatingMentee}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Edit
        </Button>
        <Button
          onClick={() => enableMentee(id)}
          disabled={isCreatingMentee}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Enable
        </Button>
        <Button
          onClick={() => disableMentee(id)}
          disabled={isCreatingMentee}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Disable
        </Button>
      </Grid>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default MenteePage;

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
