import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Header from '../CommonFiles/Header';
import { AdminContext } from '../../contexts/AdminContext';
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';
import AdminLogs from './AdminLogs';

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

const AdminPage: React.FC<RouteComponentProps<{ username: string }>> = ({
  match,
  history
}) => {
  const { user } = useAuth();
  const classes = useStyles();
  const username = match.params.username;
  const {
    getAdmin,
    enableAdmin,
    isCreatingAdmin,
    disableAdmin,
    deleteAdmin,
    isFetchingAdmin,
    selectedAdmin,
    fetchAdminActivity
  } = useContext(AdminContext);

  useEffect(() => {
    getAdmin(username);

    if (!selectedAdmin) {
      history.push('/list-admin');
    }

    if (user && !user.roles?.includes('super_admin')) {
      history.push('/');
    }

    fetchAdminActivity(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, history, user]);

  const { name = '' } = selectedAdmin || {};

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
      <Grid container className={classes.container}>
        <Wrapper>
          <Key>Name</Key>
          <Value>{name}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Username</Key>
          <Value>{username}</Value>
        </Wrapper>
      </Grid>
      <Grid container className={classes.root}>
        <Button
          onClick={() => enableAdmin(username)}
          disabled={isCreatingAdmin}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Enable
        </Button>
        <Button
          onClick={() => disableAdmin(username)}
          disabled={isCreatingAdmin}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Disable
        </Button>
        <Button
          onClick={() => deleteAdmin(username)}
          disabled={isCreatingAdmin}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Delete
        </Button>
      </Grid>
      <AdminLogs />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default AdminPage;

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
