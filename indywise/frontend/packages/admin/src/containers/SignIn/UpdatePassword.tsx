import React from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';
import Header from '../CommonFiles/Header';

const MentorForm: React.FC = () => {
  const { variables, handleChange, updatePassword, loading } = React.useContext(
    AuthContext
  );

  const { passwordOld, passwordNew, passwordConfirm } = variables;

  return (
    <>
      <Header />
      <Container>
        <Text size="1.5vw">Update Password</Text>
        <TextField
          label="Old Password"
          variant="outlined"
          type="password"
          name="passwordOld"
          onChange={handleChange}
          value={passwordOld || ''}
        />
        <TextField
          label="Confirm Old Password"
          variant="outlined"
          name="passwordConfirm"
          type="password"
          onChange={handleChange}
          value={passwordConfirm || ''}
        />
        <TextField
          label="New Password"
          variant="outlined"
          name="passwordNew"
          type="password"
          onChange={handleChange}
          value={passwordNew || ''}
        />
        <Button
          onClick={updatePassword}
          variant="contained"
          color="secondary"
          disabled={loading}
        >
          Submit
        </Button>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default MentorForm;

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
