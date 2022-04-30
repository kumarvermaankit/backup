import React, { useEffect, useContext } from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer } from 'react-toastify';
import {
  IMentorForMentee,
  IMenteeCourse,
  IReview
} from '../../interfaces/IUpdatedMentee';
import MentorsForm from '../Mentees/MentorsForm';
import ReviewsForm from '../Mentees/ReviewsForm';
import CoursesForm from '../Mentees/CoursesForm';
import { UpdatedMenteeContext } from '../../contexts/UpdatedMenteeContext';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';

interface IMenteeFormProps {
  type: string;
  id?: string | undefined;
}

const MenteeForm: React.FC<IMenteeFormProps> = ({ type, id }) => {
  const {
    addReviews,
    addCourses,
    addMentors,
    variables,
    isCreatingMentee,
    isFetchingMentee,
    getMentee,
    setMenteeForEdit,
    updateMentorsMentee,
    updateReviews,
    updateCourses
  } = useContext(UpdatedMenteeContext);

  const { mentors, menteeCourses, reviews } = variables;

  useEffect(() => {
    if (id) getMentee(id);

    setMenteeForEdit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isFetchingMentee) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <>
      <Container>
        <Text size="1.5vw">Edit Mentee</Text>
        <div>
          <br />
          <Button onClick={addMentors} variant="contained" color="primary">
            Add Mentors
          </Button>
          <>
            {mentors?.length > 0 &&
              mentors.map((s: IMentorForMentee, i: number) => (
                <MentorsForm index={i} key={i} />
              ))}
          </>
          <br />
          <Button onClick={addCourses} variant="contained" color="primary">
            Add Courses
          </Button>
          <>
            {menteeCourses?.length > 0 &&
              menteeCourses.map((s: IMenteeCourse, i: number) => (
                <CoursesForm index={i} key={i} />
              ))}
          </>
          <br />
          <Button onClick={addReviews} variant="contained" color="primary">
            Add Reviews
          </Button>
          <>
            {reviews?.length > 0 &&
              reviews.map((s: IReview, i: number) => (
                <ReviewsForm index={i} key={i} />
              ))}
          </>
          <br />
        </div>
        <Button
          onClick={() => updateMentorsMentee(id || '')}
          variant="contained"
          color="secondary"
          disabled={isCreatingMentee}
        >
          Submit Mentors
        </Button>
        <Button
          onClick={() => updateCourses(id || '')}
          variant="contained"
          color="secondary"
          disabled={isCreatingMentee}
        >
          Submit Courses
        </Button>
        <Button
          onClick={() => updateReviews(id || '')}
          variant="contained"
          color="secondary"
          disabled={isCreatingMentee}
        >
          Submit Reviews
        </Button>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default MenteeForm;

const Container = styled.div`
  margin: 5vh;

  p {
    margin-bottom: 2vh;
  }

  button {
    margin-top: 2vh;
    margin-right: 2vw;
  }

  div {
    margin-bottom: 2vh;
    display: block;
  }
`;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
