import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { Skills } from '../../../interfaces/IMentor';

interface IMoreSkillsListProps {
  skills: Skills[];
}

const MoreSkillsList: React.FC<IMoreSkillsListProps> = (props) => {
  return (
    <Wrapper>
      {props.skills.map((skill, index) => {
        return (
          <Text type="body" key={index}>
            {skill.skill}
          </Text>
        );
      })}
    </Wrapper>
  );
};

export default MoreSkillsList;

const Wrapper = styled.div`
  display: block !important;
  position: absolute;
  width: 193px;
  height: 130px;
  top: 70%;

  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.25);
  border-radius: 10px;
  z-index: 1;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #a4a4a4;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  p {
    margin: 1rem 0 1rem 1.5rem;
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;
