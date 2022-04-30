import React from 'react';
import Header from '../CommonFiles/Header';
import MenteeForm from '../CommonFiles/MenteeForm';

const CreateMentee: React.FC = () => {
  return (
    <>
      <Header />
      <MenteeForm type="create" />
    </>
  );
};

export default CreateMentee;
