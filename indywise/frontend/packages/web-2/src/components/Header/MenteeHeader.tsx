import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import MenteeUserMenuBtn from './MenteeUserMenuBtn';
import { useAuth } from '../../contexts/AuthContext';
import { Icon } from '@indywise/uikit';

const MenteeHeader: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Topic>
        <span
          style={{
            fontSize: '1.5rem',
            lineHeight: '2.25rem',
            fontFamily: 'Mulish'
          }}
        >
          Dashboard
        </span>
        <Menu>
          <Search />
          <IconWrapper>
            <Icon icon="notification" size="24px" color="#317EC2" />
          </IconWrapper>
          <MenteeUserMenuBtn color="#317EC2" avatar={user?.avatar?.small} />
        </Menu>
      </Topic>
    </Container>
  );
};

export default MenteeHeader;

const Container = styled.div`
  background-color: #ffffff;
  position: fixed;
  left: 0rem;
  right: 0px;
  top: 0px;
  z-index: 1;
  width: 100%;
  @media screen and (max-width: 782px) {
    box-shadow: 0px 1px 12px rgba(7, 78, 77, 0.16);
  }
`;

const Topic = styled.div`
  color: #262626;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem 1.5rem 6.75rem;

  @media screen and (max-width: 782px) {
    padding: 0.75rem 2rem 0.75rem 2.5rem;
  }
  @media screen and (max-width: 375px) {
    padding: 0.75rem 1rem 0.75rem 1.5rem;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const IconWrapper = styled.div`
  margin: 0 1.5rem;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    margin: 0 10px;
  }
`;
