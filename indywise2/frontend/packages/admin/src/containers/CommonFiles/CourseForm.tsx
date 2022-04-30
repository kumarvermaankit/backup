import React, { useEffect, useContext } from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import ReviewForm from '../Courses/ReviewForm';
import { ToastContainer } from 'react-toastify';
import { CourseContext } from '../../contexts/CourseContext';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';
import { IReview } from '../../interfaces/ICourse';
interface ICourseFormProps {
  type: string;
  ID?: string | undefined;
}
const CourseForm: React.FC<ICourseFormProps> = ({ type, ID }) => {
  const {
    variables,
    handleChange,
    createCourse,
    isCreatingCourse,
    isFetchingCourse,
    getCourse,
    setCourseForEdit,
    clearVariables,
    updateCourse,
    addRow,
    handleValueChange,
    removeRow,
    addReview
  } = useContext(CourseContext);

  const {
    title,
    creator,
    skills,
    price,
    duration,
    reviews,
    service,
    service_avatar,
    description,
    courseLink,
    thumbnail,
    category
  } = variables;

  useEffect(() => {
    if (ID) getCourse(ID);

    setCourseForEdit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ID]);

  useEffect(() => {
    if (type === 'create') clearVariables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  if (isFetchingCourse) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <>
      <Container>
        <Text size="1.5vw">
          {type === 'create' ? 'Create Course' : 'Edit Course'}
        </Text>
        <TextField
          label="Title"
          variant="outlined"
          name="title"
          onChange={handleChange}
          value={title || ''}
        />
        <TextField
          label="Creator"
          variant="outlined"
          name="creator"
          onChange={handleChange}
          value={creator || ''}
        />
        <TextField
          label="Price"
          variant="outlined"
          name="price"
          onChange={handleChange}
          value={price || ''}
          type="number"
        />
        <TextField
          label="Duration"
          variant="outlined"
          name="duration"
          onChange={handleChange}
          value={duration || ''}
        />
        <TextField
          label="Service"
          variant="outlined"
          name="service"
          onChange={handleChange}
          value={service || ''}
        />
        <TextField
          label="CourseLink"
          variant="outlined"
          name="courseLink"
          onChange={handleChange}
          value={courseLink || ''}
        />
        <TextField
          label="Service Avatar"
          variant="outlined"
          name="service_avatar"
          onChange={handleChange}
          value={service_avatar || ''}
        />
        <TextField
          label="Thumbnail"
          variant="outlined"
          name="thumbnail"
          onChange={handleChange}
          value={thumbnail || ''}
        />
        <TextField
          label="Description"
          variant="outlined"
          name="description"
          onChange={handleChange}
          value={description || ''}
          multiline
        />
        <TextField
          label="Category"
          variant="outlined"
          name="category"
          onChange={handleChange}
          value={category || ''}
        />
        <TextField
          label="Type"
          variant="outlined"
          name="type"
          onChange={handleChange}
          value={variables.type || ''}
        />

        <div>
          <br />
          <Button
            onClick={(e) => addRow(e, 'skills')}
            variant="contained"
            color="primary"
          >
            Add Skills
          </Button>
          <br />
          <>
            {skills?.length > 0 &&
              skills.map((point: string, index: number) => (
                <>
                  <Flex>
                    <Index>
                      <span>{index + 1}</span>
                    </Index>
                    <Tooltip title="Remove row">
                      <Remove onClick={(e) => removeRow(e, index, 'skills')} />
                    </Tooltip>
                  </Flex>
                  <TextField
                    label="Point"
                    variant="outlined"
                    name="point"
                    onChange={(e) => handleValueChange(e, index, 'skills')}
                    value={point || ''}
                  />
                </>
              ))}
          </>
          <br />
          <Button onClick={addReview} variant="contained" color="primary">
            Add Review
          </Button>
          <>
            {reviews?.length > 0 &&
              reviews.map((s: IReview, i: number) => (
                <ReviewForm index={i} key={i} />
              ))}
          </>
          <br />
        </div>
        <Button
          onClick={() =>
            type === 'create' ? createCourse() : updateCourse(ID || '')
          }
          variant="contained"
          color="secondary"
          disabled={isCreatingCourse}
        >
          {type === 'create' ? 'Create' : 'Edit'}
        </Button>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default CourseForm;

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

const Flex = styled.div`
  display: flex !important;
  margin-top: 2vh;

  svg {
    margin-left: 1vw;
  }
`;

const Index = styled.div`
  width: 2vw;
  text-align: center;
  align-self: center;
  background: #0c3559;

  span {
    color: white;
    font-family: Mulish;
  }
`;
