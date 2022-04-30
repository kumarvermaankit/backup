import React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { CoursesListContext } from '../../../contexts/CoursesListContext';

const Search: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  const { searchCourses } = React.useContext(CoursesListContext);

  const [query, setQuery] = React.useState('');

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGSVGElement>
  ) => {
    e.preventDefault();
    searchCourses(query);
  };

  const handleToggleSearchBox = () => {
    if (query) {
      setQuery('');
    }

    toggleForm();

    searchCourses('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Form onSubmit={(e) => submitHandler(e)}>
        <TextBox
          type="text"
          placeholder="Search courses by name..."
          onChange={(e) => handleChange(e)}
        />
        <IconWrapper>
          <Icon icon="search" size="16px" onClick={(e) => submitHandler(e)} />
        </IconWrapper>
      </Form>
      <Icon
        icon="close"
        size="16px"
        style={{ cursor: 'pointer', marginLeft: '8px', fill: '#262626' }}
        onClick={handleToggleSearchBox}
      />
    </>
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

  @media (max-width: 760px) {
    width: 100%;
  }

  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  border-bottom: 1px solid #0c3559;
  display: flex;
  align-items: center;
  margin: 1rem 0;

  @media (max-width: 760px) {
    width: 95%;
  }
  /* @media (max-width: 530px) {
    margin: 1rem;
    width: 95%;
  } */
`;

const IconWrapper = styled.div`
  margin-left: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;
