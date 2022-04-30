import React, { useContext } from 'react';
import Header from '../CommonFiles/Header';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer } from 'react-toastify';
import { SkillContext } from '../../contexts/SkillsContext';

const CreateCategory: React.FC = () => {
  const {
    categoryV,
    createCategory,
    isCreatingSkill,
    handleChangeCat
  } = useContext(SkillContext);

  const { category } = categoryV;

  return (
    <>
      <Header />
      <>
        <Container>
          <Text size="1.5vw">Create Category</Text>
          <TextField
            label="Category"
            variant="outlined"
            name="category"
            onChange={handleChangeCat}
            value={category || ''}
          />
          <Button
            onClick={createCategory}
            variant="contained"
            color="secondary"
            disabled={isCreatingSkill}
          >
            Create
          </Button>
        </Container>
        <ToastContainer position="bottom-right" />
      </>
    </>
  );
};

export default CreateCategory;

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
