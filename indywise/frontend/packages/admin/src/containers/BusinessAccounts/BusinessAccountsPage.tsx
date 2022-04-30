import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Header from '../CommonFiles/Header';
import { BusinessAccountContext } from '../../contexts/BusinessAccountsContext';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';

const useStyles = makeStyles(() => ({
  container: {
    padding: '3em',
    justifyContent: 'space-between'
  },
  button: {
    marginRight: '2vw'
  }
}));

const BusinessAccountPage: React.FC<RouteComponentProps<{
  username: string;
}>> = ({ match, history }) => {
  const classes = useStyles();
  const username = match.params.username;

  const {
    getBusinessAccount,
    isFetchingBusinessAccount,
    selectedBusinessAccount
  } = useContext(BusinessAccountContext);

  useEffect(() => {
    getBusinessAccount(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, history]);

  const { email = '', organization_name = '' } = selectedBusinessAccount || {};

  if (isFetchingBusinessAccount) {
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
          <Value>{email}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Username</Key>
          <Value>{username}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Organization Name</Key>
          <Value>{organization_name}</Value>
        </Wrapper>
      </Grid>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default BusinessAccountPage;

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
