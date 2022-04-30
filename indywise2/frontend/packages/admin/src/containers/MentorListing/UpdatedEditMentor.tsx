import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../CommonFiles/Header';
// import UpdatedMenteeForm from '../CommonFiles/UpdatedMenteeForm';
import UpdatedMentorFrom from '../CommonFiles/UpdatedMentorForm';

const UpdatedEditMentor: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const id = match.params.id;

  return (
    <>
      <Header />
      <UpdatedMentorFrom type="edit" id={id} />
    </>
  );
};

export default UpdatedEditMentor;
