import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import MentorForm from '../CommonFiles/MentorForm';

const EditMentor: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const id = match.params.id;

  return (
    <>
      <Header />
      <MentorForm type="edit" id={id} />
    </>
  );
};

export default EditMentor;
