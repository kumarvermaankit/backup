import React from 'react';
import { Button } from '@indywise/uikit';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../../../contexts/AuthContext';

const ButtonPart: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Container>
        <Link
          to={user ? '/foundation' : '/sign-in'}
          style={{ textDecoration: 'none', color: '#042039' }}
        >
          <Button>Join Now</Button>
        </Link>
      </Container>
    </>
  );
};

export default ButtonPart;

const Container = styled.div`
  button {
    width: 240px;
  }
`;
