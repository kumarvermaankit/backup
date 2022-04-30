import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import CourseForm from '../CommonFiles/CourseForm';

const EditCourse: React.FC<RouteComponentProps<{ ID: string }>> = ({
  match,
  history
}) => {
  const ID = match.params.ID;

  return (
    <>
      <Header />
      <CourseForm type="edit" ID={ID} />
    </>
  );
};

export default EditCourse;
