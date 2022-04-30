import React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';

const LeftNav: React.FC = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <AdminIcon>
            <Icon icon="w" size="44px" />
          </AdminIcon>
        </Link>
        <MenuIcon>
          <IconWrapper>
            <Icon icon="charts" size="24px" />
          </IconWrapper>
          <IconWrapper>
            <Icon icon="session" size="24px" />
          </IconWrapper>
          <IconWrapper>
            <Icon icon="menteePortfolio" size="24px" />
          </IconWrapper>
        </MenuIcon>
      </Container>
    </>
  );
};

export default LeftNav;

const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(17, 17, 17, 0.08);
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 0 12px;

  @media screen and (max-width: 782px) {
    display: none;
  }
`;

const AdminIcon = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
  margin: 32px 0 98px 0;
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  color: #0c3559;
  width: 24px;
  height: 24px;
  margin: 32px 0;
  cursor: pointer;
`;
