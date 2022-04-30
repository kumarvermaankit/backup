import React, { useContext } from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer } from 'react-toastify';
import { BusinessAccountContext } from '../../contexts/BusinessAccountsContext';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';

const BusinessAccountForm: React.FC = () => {
  const {
    variables,
    handleChange,
    createBusinessAccount,
    isCreatingBusinessAccount,
    isFetchingBusinessAccount
  } = useContext(BusinessAccountContext);

  const { organization_name, username, email } = variables;

  if (isFetchingBusinessAccount) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <>
      <Container>
        <Text size="1.5vw">Create Business Account</Text>
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          onChange={handleChange}
          value={username || ''}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          value={email || ''}
        />
        <TextField
          label="Organization Name"
          variant="outlined"
          name="organization_name"
          onChange={handleChange}
          value={organization_name || ''}
        />
        <Button
          onClick={createBusinessAccount}
          variant="contained"
          color="secondary"
          disabled={isCreatingBusinessAccount}
        >
          Create
        </Button>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default BusinessAccountForm;

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

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
