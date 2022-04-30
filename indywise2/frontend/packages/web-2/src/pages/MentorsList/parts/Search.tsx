import * as React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';

const Search: React.FC = () => {
  const { searchMentors } = React.useContext(NewMentorsListContext);

  const [query, setQuery] = React.useState<string | null>(null);

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGSVGElement>
  ) => {
    e.preventDefault();

    searchMentors(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Form onSubmit={(e) => submitHandler(e)}>
      <TextBox
        type="text"
        placeholder="Search mentors by name..."
        onChange={(e) => handleChange(e)}
      />
      <IconWrapper>
        <Icon
          icon="search"
          size="16px"
          color="#317EC2"
          onClick={(e) => submitHandler(e)}
        />
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
  @media (max-width: 950px) {
    width: 150px;
  }

  @media (max-width: 760px) {
    width: 100%;
  }

  @media (max-width: 530px) {
    width: 90%;
  }
`;

const Form = styled.form`
  border-bottom: 1px solid #317ec2;
  display: flex;
  align-items: center;
  margin: 1rem 0;

  @media (max-width: 760px) {
    width: 100%;
  }

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
