import React from 'react';
import Header from '../CommonFiles/Header';
import CourseForm from '../CommonFiles/CourseForm';

const CreateCourse: React.FC = () => {
  return (
    <>
      <Header />
      <CourseForm type="create" />
    </>
  );
};

export default CreateCourse;
