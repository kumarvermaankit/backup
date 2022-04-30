import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { CSVDownloader } from 'react-papaparse';
import Header from '../CommonFiles/Header';
import { UserContext } from '../../contexts/UserContext';
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
const UserList: React.FC<RouteComponentProps> = ({ match, history }) => {
  const { user } = useAuth();
  const classes = useStyles();
  const [csvJson, setCsvJson] = useState([]);
  const { getUsersList, isFetchingUser, userList } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      history.push('/sign-in');
    }
    getUsersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  useEffect(() => {
    if (userList?.length && userList.length > 0) {
      // Filtering users which have wiseup foundation true
      const trueWF = userList.filter((u: any) => u.wiseup_foundation === true);
      // Mapping the emails only of those filtered users
      const emailList = trueWF.map((t: any) => ({ email: t.email }));

      // Saving the list of emails in state to be downloaded as CSV
      setCsvJson(emailList);
    }
  }, [userList]);

  if (isFetchingUser) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Container>
      <Header />
      <div className={classes.root}>
        <Span>Click on the ID to see user details</Span>
        <Grid container className={classes.container}>
          <VirtualizedTable />
        </Grid>
      </div>
      {csvJson?.length && csvJson.length > 0 && (
        <CSVDownloader
          data={csvJson}
          filename={'emails'}
          type={'link'}
          style={Button}
        >
          Download Wiseup Foundation Users CSV
        </CSVDownloader>
      )}
    </Container>
  );
};

export default UserList;

const Button = {
  background: '#0C3559',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  margin: '3em',
  fontFamily: 'Roboto'
};

const Container = styled.div`
  margin: auto auto 3em auto;
`;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  font-family: Roboto;
`;
