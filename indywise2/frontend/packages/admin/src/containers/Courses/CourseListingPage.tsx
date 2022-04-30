import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Header from '../CommonFiles/Header';
import { CourseContext } from '../../contexts/CourseContext';
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

const CoursePage: React.FC<RouteComponentProps<{ ID: string }>> = ({
  match,
  history
}) => {
  const classes = useStyles();
  const ID = match.params.ID;
  const {
    getCourse,
    enableCourse,
    isCreatingCourse,
    disableCourse,
    isFetchingCourse,
    selectedCourse,
    clearVariables
  } = useContext(CourseContext);

  const editCourse = (ID: string) => {
    history.push(`/course/edit/${ID}`);
  };

  useEffect(() => {
    clearVariables();
    getCourse(ID);

    if (!selectedCourse) {
      history.push('/list-course');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ID, history]);

  const {
    title = '',
    creator = '',
    price = '',
    duration = '',
    service = '',
    description = '',
    courseLink = '',
    category = '',
    type = ''
  } = selectedCourse || {};

  if (isFetchingCourse) {
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
          <Key>Title</Key>
          <Value>{title}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Description</Key>
          <Value>{description}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Price</Key>
          <Value>{price}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Duration</Key>
          <Value>{duration}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Creator</Key>
          <Value>{creator}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Category</Key>
          <Value>{category}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Course Link</Key>
          <Value>{courseLink}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Service</Key>
          <Value>{service}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Type</Key>
          <Value>{type}</Value>
        </Wrapper>
      </Grid>
      <Grid container className={classes.root}>
        <Button
          onClick={() => editCourse(ID)}
          disabled={isCreatingCourse}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Edit
        </Button>
        <Button
          onClick={() => enableCourse(ID)}
          disabled={isCreatingCourse}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Enable
        </Button>
        <Button
          onClick={() => disableCourse(ID)}
          disabled={isCreatingCourse}
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

export default CoursePage;

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
