import React from 'react';
import Header from '../CommonFiles/Header';
import UpdatedMentorFrom from '../CommonFiles/UpdatedMentorForm';

const CreateUpdatedMentor: React.FC = () => {
  return (
    <>
      <Header />
      <UpdatedMentorFrom type="create" />
    </>
  );
};

export default CreateUpdatedMentor;
