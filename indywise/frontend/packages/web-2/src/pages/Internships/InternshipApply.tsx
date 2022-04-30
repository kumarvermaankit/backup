import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const InternshipApply: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      window.location.assign(
        `https://docs.google.com/forms/d/e/1FAIpQLSdctCZD1xpyT9gEtckOMwSpmj8zira4IGgdCXIO6CLlCc5C7Q/viewform?entry.2092718750=${user.firstName} ${user.lastName}&entry.231423199=${user.username}`
      );
    } else {
      window.localStorage.setItem('from', 'InternshipApply');
      history.push('/sign-in');
    }
  });

  return <></>;
};

export default InternshipApply;
