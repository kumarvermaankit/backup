import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import SkillForm from '../CommonFiles/SkillForm';

const EditSkill: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const id = match.params.id;

  return (
    <>
      <Header />
      <SkillForm type="edit" id={id} />
    </>
  );
};

export default EditSkill;
