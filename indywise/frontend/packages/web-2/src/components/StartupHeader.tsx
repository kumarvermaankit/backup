import React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';
import WNew from '../assets/WStartups.svg';

const StartupHeader: React.FC<{ type: string }> = ({ type }) => {
  return (
    <Container>
      <MainLogo>
        {/* <Icon icon="w" size="44px" /> */}
        <Link to="/">
          <img src={WNew} alt="IndyWise" />
        </Link>
      </MainLogo>
      <Nav>
        <>
          <NavLink active={type === 'dashboard' ? true : false}>
            <Link to="/startup/dashboard">
              <Icon icon="home" size="24px" color="#3C54AF" />
            </Link>
          </NavLink>
          <NavLink active={type === 'resources' ? true : false}>
            <Link to="/startup/resources">
              <Div>
                <Icon icon="resources" size="24px" color="#3C54AF" />
              </Div>
            </Link>
          </NavLink>
          {/* <NavLink active={type === 'getresources' ? true : false}>
            <Link to="/startup/ourresources">
              <Icon icon="courses" size="24px" color="#317EC2" />
            </Link>
          </NavLink> */}
        </>
      </Nav>
    </Container>
  );
};

export default StartupHeader;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 72px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(17, 17, 17, 0.08);
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1001;

  @media (max-width: 1263px) {
    bottom: 0;
    top: unset;
    height: max-content;
    width: 100%;
    flex-direction: row;
    padding: 14px 0;
    box-shadow: 0px -1px 12px rgba(12, 53, 89, 0.08);
    border-radius: 24px 24px 0px 0px;
  }
`;

const MainLogo = styled.div`
  margin-top: 32px;
  cursor: pointer;

  @media (max-width: 1263px) {
    display: none;
  }
`;

const Div = styled.div`
  span {
    svg {
      path {
        stroke: unset;
      }
    }
  }
`;

const Nav = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1263px) {
    flex-direction: row;
    width: 100%;
  }
`;

const NavLink = styled.div<{ active: boolean }>`
  cursor: pointer;
  span {
    svg {
      background: ${(props) => (props.active ? '#EAF3FA' : 'none')};
      border: ${(props) => (props.active ? '2px solid #F2A922' : 'none')};
      border-radius: 50%;
      padding: 8px;
    }
  }
`;
