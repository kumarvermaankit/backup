import React, { useEffect, useContext } from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer } from 'react-toastify';
import { AdminContext } from '../../contexts/AdminContext';

interface IAdminFormProps {
  type: string;
}

const AdminForm: React.FC<IAdminFormProps> = ({ type }) => {
  const {
    variables,
    handleChange,
    createAdmin,
    isCreatingAdmin,
    clearVariables
  } = useContext(AdminContext);

  const { name, password, username } = variables;

  useEffect(() => {
    if (type === 'create') clearVariables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <>
      <Container>
        <Text size="1.5vw">Create Admin</Text>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          value={name || ''}
        />
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          onChange={handleChange}
          value={username || ''}
        />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          onChange={handleChange}
          value={password || ''}
        />
        <Button
          onClick={createAdmin}
          variant="contained"
          color="secondary"
          disabled={isCreatingAdmin}
        >
          Create
        </Button>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default AdminForm;

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
