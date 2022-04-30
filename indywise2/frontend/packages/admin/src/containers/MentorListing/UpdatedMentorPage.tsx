import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
  const {
    getMentor,
    enableMentor,
    isCreatingMentor,
    disableMentor,
    isFetchingMentor,
    selectedMentor
  } = useContext(UpdatedMentorContext);

  const editMentor = (id: string) => {
    history.push(`/updated/mentor/edit/${id}`);
  };

  useEffect(() => {
    getMentor(id);
    if (!selectedMentor) {
      history.push('/updated/list-mentor');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, history]);

  const {
    name = '',
    username = '',
    sessions = {},
    email = '',
    valueProposition = '-',
    about = '-'
    // shortDescription = '-'
  } = selectedMentor || {};

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
          <Value>{name}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Username</Key>
          <Value>{username}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Email</Key>
          <Value>{email}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Session Price</Key>
          <Value>{sessions.sessionPrice}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Sessions Service</Key>
          <Value>{sessions.service}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Value Proposition</Key>
          <Value>{valueProposition}</Value>
        </Wrapper>
      </Grid>
      <Grid container className={classes.root}>
        <Wrapper>
          <Key>About</Key>
          <Value>{about}</Value>
        </Wrapper>
        {/* <Wrapper>
          <Key>Short Description</Key>
          <Value>{shortDescription}</Value>
        </Wrapper> */}
        <Button
          onClick={() => editMentor(id)}
          disabled={isCreatingMentor}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Edit
        </Button>
        <Button
          onClick={() => enableMentor(id)}
          disabled={isCreatingMentor}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Enable
        </Button>
        <Button
          onClick={() => disableMentor(id)}
          disabled={isCreatingMentor}
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
