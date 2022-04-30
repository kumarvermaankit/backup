import * as React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { MenteesListContext } from '../../../contexts/MenteesListContext';

const Search: React.FC = () => {
  const { searchMentees } = React.useContext(MenteesListContext);

  const [query, setQuery] = React.useState('');

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGSVGElement>
  ) => {
    e.preventDefault();
    searchMentees(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Form onSubmit={(e) => submitHandler(e)}>
      <TextBox
        type="text"
        placeholder="Search mentees by name..."
        onChange={(e) => handleChange(e)}
      />
      <IconWrapper>
        <Icon icon="search" size="16px" onClick={(e) => submitHandler(e)} />
      </IconWrapper>
    </Form>
  );
};

export default Search;

const TextBox = styled.input`
  width: 300px;
  background-color: #ffffff;
  border: none;
  font-size: 1.25rem;
  color: #0c3559;
  font-family: Roboto, sans-serif;

  &:focus {
    outline: none;
  }

  @media (max-width: 530px) {
    width: 90%;
  }
`;

const Form = styled.form`
  border-bottom: 1px solid #0c3559;
  display: flex;
  align-items: center;
  margin: 1rem 0;

  @media (max-width: 530px) {
    margin: 1rem;
    width: 95%;
  }
`;

const IconWrapper = styled.div`
  margin-left: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;
