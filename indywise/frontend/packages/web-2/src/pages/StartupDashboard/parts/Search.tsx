import React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';

const First: React.FC = () => {
  return (
    <Container>
      <Flex>
        <Form>
          <TextBox type="text" placeholder="Search Mentors, Courses" />
          <IconWrapper>
            <Icon icon="search" size="24px" color="#0c3559" />
          </IconWrapper>
        </Form>
      </Flex>
    </Container>
  );
};

export default First;

const Container = styled.div`
  font-family: Mulish;
`;

const Flex = styled.span``;

const TextBox = styled.input`
  width: 300px;
  background-color: white;
  font-size: 1rem;
  webkit-input-placeholder {
    color: #727272;
    font-size: 1rem;
    font-family: Mulish;
  }
  font-family: Roboto, sans-serif;
  border: solid 0px;
  border-radius: 20px;
  &:focus {
    outline: none;
  }

  @media (max-width: 530px) {
    width: 90%;
  }
`;

const Form = styled.form`
  /*border-bottom: 1px solid #0c3559;*/
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: 2rem 0;
  background-color: white;
  padding: 8px 16px 8px 24px;

  @media (max-width: 530px) {
    margin: 1rem;
    width: 95%;
  }
`;

const IconWrapper = styled.div`
  margin-left: 0.5rem;
  color: #0c3559;
  &:hover {
    cursor: pointer;
  }
`;
