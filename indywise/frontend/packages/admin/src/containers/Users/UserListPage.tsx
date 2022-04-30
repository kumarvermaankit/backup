import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Header from '../CommonFiles/Header';
import { UserContext } from '../../contexts/UserContext';
import { IUser } from '../../interfaces/IUser';

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

const UserPage: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const classes = useStyles();
  const id = match.params.id;
  const {
    getUser,
    enableUser,
    loading,
    disableUser,
    portfolioData,
    updateUserType,
    clearVariables
  } = useContext(UserContext);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    clearVariables();
    const data: IUser = getUser(id);
    if (!data) {
      history.push('/list-user');
    } else if (data) {
      setUser(data);
    }
    // eslint-disable-next-line
  }, []);

  const editPortfolio = (id: string) => {
    history.push(`/portfolio/edit/${id}`);
  };

  console.log(portfolioData);

  const {
    username = '',
    email = '',
    mobile_number = '',
    first_name = '',
    last_name = ''
  } = user || {};

  return (
    <>
      <Header />
      <Grid container className={classes.container}>
        <Wrapper>
          <Key>Username</Key>
          <Value>{username}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Email</Key>
          <Value>{email}</Value>
        </Wrapper>
        <Wrapper>
          <Key>First Name</Key>
          <Value>{first_name}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Last Name</Key>
          <Value>{last_name}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Mobile Number</Key>
          <Value>{mobile_number}</Value>
        </Wrapper>
      </Grid>
      {portfolioData ? (
        <Grid container className={classes.container}>
          <Wrapper>
            <Key>Location</Key>
            <Value>{`${portfolioData?.basicDetails?.location?.country || ''} ${
              portfolioData?.basicDetails?.location?.city || ''
            }`}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Skills</Key>
            <Value>{portfolioData?.basicDetails?.skills?.toString()}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Date of birth</Key>
            <Value>
              {`${portfolioData?.signUpData?.dateOfBirth?.day || ''}-${
                portfolioData?.signUpData?.dateOfBirth?.month || ''
              }-${portfolioData?.signUpData?.dateOfBirth?.year || ''}`}
            </Value>
          </Wrapper>
          <Wrapper>
            <Key>Nationality</Key>
            <Value>{portfolioData?.signUpData?.nationality}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Occupation</Key>
            <Value>{portfolioData?.signUpData?.occupation}</Value>
          </Wrapper>
          <Wrapper>
            <Key>Skills of Interest</Key>
            <Value>
              {portfolioData?.signUpData?.skillsOfInterest?.toString()}
            </Value>
          </Wrapper>
          <Wrapper>
            <Key>Categories of Interest</Key>
            <Value>
              {portfolioData?.signUpData?.categoriesOfInterest?.toString()}
            </Value>
          </Wrapper>
          <Wrapper>
            <Key>Experience</Key>
            <Value>{portfolioData?.workExperience?.experience}</Value>
          </Wrapper>
        </Grid>
      ) : null}
      <Grid container className={classes.root}>
        <br />
        <Button
          className={classes.button}
          onClick={() => updateUserType(id, ['mentee'])}
          variant="contained"
          color="primary"
        >
          User Type: Mentee
        </Button>
        <Button
          className={classes.button}
          onClick={() => updateUserType(id, ['mentor'])}
          variant="contained"
          color="primary"
        >
          User Type: Mentor
        </Button>
        <Button
          className={classes.button}
          onClick={() => updateUserType(id, ['mentee', 'mentor'])}
          variant="contained"
          color="primary"
        >
          User Type: Mentee & Mentor
        </Button>
        <br />
        <br />
      </Grid>
      <Grid container className={classes.root}>
        <Button
          onClick={() => editPortfolio(id)}
          disabled={loading}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Edit Portfolio
        </Button>
        <Button
          onClick={() => enableUser(id)}
          disabled={loading}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Enable
        </Button>
        <Button
          onClick={() => disableUser(id)}
          disabled={loading}
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

export default UserPage;

const Wrapper = styled.div``;

const Key = styled.h3`
  font-family: 'Mulish';
`;

const Value = styled.h4`
  font-family: 'Mulish';
`;
