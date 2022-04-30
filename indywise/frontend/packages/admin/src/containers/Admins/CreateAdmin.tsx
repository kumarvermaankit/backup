import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import AdminForm from '../CommonFiles/AdminForm';
import { useAuth } from '../../contexts/AuthContext';

const CreateAdmin: React.FC<RouteComponentProps> = ({ match, history }) => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      history.push('/sign-in');
    }

    if (user && !user.roles?.includes('super_admin')) {
      history.push('/');
    }
  }, [history, user]);

  return (
    <>
      <Header />
      <AdminForm type="create" />
    </>
  );
};

export default CreateAdmin;
