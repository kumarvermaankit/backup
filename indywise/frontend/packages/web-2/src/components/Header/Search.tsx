import * as React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { MenteesListContext } from '../../contexts/MenteesListContext';
import { CoursesListContext } from '../../contexts/CoursesListContext';

const Search: React.FC = () => {
  const { searchMentees } = React.useContext(MenteesListContext);
  const { searchCourses } = React.useContext(CoursesListContext);

  const [query, setQuery] = React.useState('');

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGSVGElement>
  ) => {
    e.preventDefault();
    searchMentees(query);
    searchCourses(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Form onSubmit={(e) => submitHandler(e)}>
      <TextBox
        type="text"
        placeholder="Search Mentors, Courses"
        onChange={(e) => handleChange(e)}
      />
      <IconWrapper>
        <Icon
          icon="search"
          color="#317EC2"
          size="24px"
          onClick={(e) => submitHandler(e)}
        />
      </IconWrapper>
    </Form>
  );
};

export default Search;

const TextBox = styled.input`
  width: 252px;
  background-color: #eaf3fa;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #727272;
  font-family: Roboto;
  border: solid 0px;
  border-radius: 20px;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 580px) and (max-width: 660px) {
    width: 185px;
  }
  @media screen and (min-width: 414px) and (max-width: 580px) {
    width: 53px;
  }
  @media screen and (max-width: 414px) {
    display: none;
  }
`;

const Form = styled.form`
  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: #eaf3fa;
  padding: 6px 16px 6px 24px;

  @media screen and (max-width: 414px) {
    padding: 0;
    border: none;
    background: none;
  }
`;

const IconWrapper = styled.div`
  /* margin-left: 0.5rem; */
  &:hover {
    cursor: pointer;
  }
`;
