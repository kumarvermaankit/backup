import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Header from '../CommonFiles/Header';
import { UpdatedMenteeContext } from '../../contexts/UpdatedMenteeContext';
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
    isFetchingMentee
  } = useContext(UpdatedMenteeContext);
  const [selectedMentee, setSelectedMentee] = useState<any>(null);

  const editMentee = (id: string) => {
    history.push(`/updated/mentee/edit/${id}`);
  };

  useEffect(() => {
    const mdata: any = getMentee(id);

    if (!mdata) {
      history.push('/updated/list-mentee');
    } else if (mdata) {
      setSelectedMentee(mdata);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, history]);

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
          <Key>Email</Key>
          <Value>{selectedMentee?.email}</Value>
        </Wrapper>
        <Wrapper>
          <Key>ID</Key>
          <Value>{selectedMentee?.ID}</Value>
        </Wrapper>
      </Grid>
      <Grid container className={classes.root}>
        <Wrapper>
          <Key>Objective</Key>
          <Value>
            {selectedMentee?.menteePortfolio?.career?.careerObjective}
          </Value>
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
          Certify
        </Button>
        <Button
          onClick={() => disableMentee(id)}
          disabled={isCreatingMentee}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Uncertify
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
