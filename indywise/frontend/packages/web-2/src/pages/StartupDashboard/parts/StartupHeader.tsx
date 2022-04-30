import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import { Icon, Avatar } from '@indywise/uikit';

const StartupHeader: React.FC = () => {
  return (
    <Container>
      <Topic>
        Dashboard
        <Left>
          <Search />
          <IconWrapper>
            <Icon icon="notification" size="24px" />
          </IconWrapper>
          <MenuIconWrapper>
            <Avatar type="mentee" size="32px" />

            <MenuIcon>
              <Icon icon="menu" size="24px" color="#0c3559" />
            </MenuIcon>
          </MenuIconWrapper>

          {/* <Xyz color="#317EC2">
            <span style={{ objectFit: 'cover' }}>
              <Avatar type="mentee" size="32px" />
            </span>
            <Icon icon="menu" size="24px" />
          </Xyz> */}
        </Left>
      </Topic>
    </Container>
  );
};

export default StartupHeader;

/* const Xyz = styled.button<{ fontSize?: string; color?: string }>`
  background: transparent;
  border: 1px solid '#317EC2';
  box-sizing: border-box;
  border-radius: 1.375em;
  display: flex;
  padding: 0 0 0 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${(props) => props.fontSize || '1rem'};
    color: ${(props) => props.color || '#0c3559'};
    padding: 0;
    margin-left: 0.5em;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  span {
    svg {
      stroke: '#317EC2';
    }
  }
`;
 */

const Container = styled.div`
  width: 100%;
  font-family: Roboto;
`;

const Topic = styled.div`
  font-size: 1.5rem;
  color: #262626;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  color: #0c3559;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 1.5rem;
  cursor: pointer;
`;

const MenuIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #0c3559;
  border-radius: 1.375em;
  color: #0c3559;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  margin: 0;
  padding: 0.25rem 0.75rem 0.25rem 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
`;

/* const Avatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  box-sizing: border-box;
  object-fit: cover;

  border: 1px solid '#0c3559';
`; */
