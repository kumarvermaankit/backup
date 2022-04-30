import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../CommonFiles/Header';
import { MentorContext } from '../../contexts/MentorContext';
import VirtualizedTable from './VirtualizedTable';
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';

const useStyles = makeStyles(() => ({
  container: {
    border: '1px solid #f2aa41',
    padding: '3em',
    justifyContent: 'center'
  },
  root: { padding: '3em' }
}));

// Have to put filter and sort in this + pagination
const MentorList: React.FC<RouteComponentProps> = ({ match, history }) => {
  const { user } = useAuth();
  const classes = useStyles();
  const { getMentorsList, isFetchingMentor } = useContext(MentorContext);

  useEffect(() => {
    if (!user) {
      history.push('/sign-in');
    }
    getMentorsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

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
      <div className={classes.root}>
        <Span>Click on the ID to see mentor details</Span>
        <br />
        <Grid container className={classes.container}>
          <VirtualizedTable />
        </Grid>
      </div>
    </>
  );
};

export default MentorList;

const Span = styled.span`
  font-family: Roboto;
`;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
