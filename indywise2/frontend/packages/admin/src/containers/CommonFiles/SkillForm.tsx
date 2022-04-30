import React, { useEffect, useContext } from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer } from 'react-toastify';
import { SkillContext } from '../../contexts/SkillsContext';

interface ISkillFormProps {
  type: string;
  id?: string | undefined;
}

const SkillForm: React.FC<ISkillFormProps> = ({ id, type }) => {
  const {
    variables,
    handleChange,
    createSkill,
    isCreatingSkill,
    updateSkill,
    clearVariables,
    getCategories,
    categories,
    getSkill,
    setSkillForEdit
  } = useContext(SkillContext);

  const { name, category } = variables;

  useEffect(() => {
    if (!categories || categories?.length === 0) getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id) getSkill(id);

    setSkillForEdit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (type === 'create') clearVariables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <>
      <Container>
        <Text size="1.5vw">
          {type === 'create' ? 'Create Skill' : 'Edit Skill'}
        </Text>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          value={name || ''}
        />
        <TextField
          label="Category"
          variant="outlined"
          name="category"
          onChange={handleChange}
          value={category || ''}
          select
          SelectProps={{
            native: true
          }}
        >
          {[''].concat(categories).map((k: string) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </TextField>
        <Button
          onClick={() =>
            type === 'create' ? createSkill() : updateSkill(id || '')
          }
          variant="contained"
          color="secondary"
          disabled={isCreatingSkill}
        >
          {type === 'create' ? 'Create' : 'Edit'}
        </Button>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default SkillForm;

const Container = styled.div`
  margin: 5vh;

  p {
    margin-bottom: 2vh;
  }

  button {
    margin-top: 2vh;
    margin-right: 2vw;
  }

  div {
    margin-bottom: 2vh;
    display: block;
  }
`;
