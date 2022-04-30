import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import MenteeForm from '../CommonFiles/MenteeForm';

const EditMentee: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const id = match.params.id;

  return (
    <>
      <Header />
      <MenteeForm type="edit" id={id} />
    </>
  );
};

export default EditMentee;
