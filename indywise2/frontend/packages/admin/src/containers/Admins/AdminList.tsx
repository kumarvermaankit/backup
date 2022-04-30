import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../CommonFiles/Header';
import { AdminContext } from '../../contexts/AdminContext';
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
const AdminList: React.FC<RouteComponentProps> = ({ match, history }) => {
  const { user } = useAuth();
  const classes = useStyles();
  const { getAdminsList, isFetchingAdmin } = useContext(AdminContext);

  useEffect(() => {
    if (!user) {
      history.push('/sign-in');
    }

    if (user && !user.roles?.includes('super_admin')) {
      history.push('/');
    }

    getAdminsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, user]);

  if (isFetchingAdmin) {
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
        <Span>Click on the Username to see admin details</Span>
        <br />
        <Grid container className={classes.container}>
          <VirtualizedTable />
        </Grid>
      </div>
    </>
  );
};

export default AdminList;

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
