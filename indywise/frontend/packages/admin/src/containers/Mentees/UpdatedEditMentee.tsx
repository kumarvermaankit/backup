import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import UpdatedMenteeForm from '../CommonFiles/UpdatedMenteeForm';

const UpdatedEditMentee: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const id = match.params.id;

  return (
    <>
      <Header />
      <UpdatedMenteeForm type="edit" id={id} />
    </>
  );
};

export default UpdatedEditMentee;
