import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../CommonFiles/Header';
import { SkillContext } from '../../contexts/SkillsContext';
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
const SkillList: React.FC<RouteComponentProps> = ({ match, history }) => {
  const { user } = useAuth();
  const classes = useStyles();
  const { getSkillsList, isFetchingSkill } = useContext(SkillContext);

  useEffect(() => {
    if (!user) {
      history.push('/sign-in');
    }
    getSkillsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  if (isFetchingSkill) {
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
        <Span>Click on the row to see skill details</Span>
        <br />
        <Grid container className={classes.container}>
          <VirtualizedTable />
        </Grid>
      </div>
    </>
  );
};

export default SkillList;

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