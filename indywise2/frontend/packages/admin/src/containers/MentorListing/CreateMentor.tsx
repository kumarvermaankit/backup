import React from 'react';
import Header from '../CommonFiles/Header';
import MentorForm from '../CommonFiles/MentorForm';

const CreateMentor: React.FC = () => {
  return (
    <>
      <Header />
      <MentorForm type="create" />
    </>
  );
};

export default CreateMentor;
