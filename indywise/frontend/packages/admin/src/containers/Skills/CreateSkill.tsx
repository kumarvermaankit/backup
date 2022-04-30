import React from 'react';
import Header from '../CommonFiles/Header';
import SkillForm from '../CommonFiles/SkillForm';

const CreateSkill: React.FC = () => {
  return (
    <>
      <Header />
      <SkillForm type="create" />
    </>
  );
};

export default CreateSkill;
