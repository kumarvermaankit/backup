import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import PortfolioForm from '../CommonFiles/PortfolioForm';

const EditPortfolio: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const id = match.params.id;

  return (
    <>
      <Header />
      <PortfolioForm type="edit" id={id} />
    </>
  );
};

export default EditPortfolio;
