import React from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { ToastContainer } from 'react-toastify';
import BasicDetailsForm from '../Users/BasicDetailsForm';
import WorkExperienceFrom from '../Users/WorkExperienceFrom';
import CertificationsForm from '../Users/CertificationsForm';
import StudiesFrom from '../Users/StudiesFrom';
import { UserContext } from '../../contexts/UserContext';

interface IPortfolioFormProps {
  type: string;
  id?: string | undefined;
}

const PortfolioForm: React.FC<IPortfolioFormProps> = ({ type, id }) => {
  const { getUser, updatePortfolio } = React.useContext(UserContext);

  React.useEffect(() => {
    if (id) getUser(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Text size="1.5vw">
          {type === 'create' ? 'Create Portfolio' : 'Edit Portfolio'}
        </Text>

        <BasicDetailsForm />
        <WorkExperienceFrom />
        <CertificationsForm />
        <StudiesFrom />

        <Button
          onClick={() => updatePortfolio(id || '')}
          variant="contained"
          color="secondary"
        >
          Update Portfolio
        </Button>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default PortfolioForm;

const Container = styled.div`
  margin: 5vh;

  p {
    margin-bottom: 2vh;
  }

  button {
    margin-top: 2vh;
    margin-right: 2vw;
  }

  /* div {
    margin-bottom: 2vh;
    display: block;
  } */
`;
