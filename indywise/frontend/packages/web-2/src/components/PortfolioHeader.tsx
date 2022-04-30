import React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../contexts/AuthContext';
// import WNew from '../assets/W_new.svg';

const PortfolioHeader: React.FC<{ type: string }> = ({ type }) => {
  const { user } = useAuth();
  // const homePath = user?.userType?.includes('mentor') ? '/' : '/foundation';

  return (
    <Container>
      {/* <MainLogo>
        <Link to={homePath}>
          <img src={WNew} alt="IndyWise" />
        </Link>
      </MainLogo> */}
      <Nav>
        {user?.userType === undefined ||
        (user?.userType?.length &&
          user?.userType?.length > 0 &&
          user?.userType?.includes('mentee')) ? (
          <>
            <NavLink active={type === 'home' ? true : false}>
              <Link to="/foundation">
                <Icon icon="home" size="24px" color="#317EC2" />
              </Link>
            </NavLink>
            <NavLink active={type === 'mentor' ? true : false}>
              <Link to="/mentors">
                <Icon icon="mentor" size="24px" color="#317EC2" />
              </Link>
            </NavLink>
          </>
        ) : null}
        {user?.userType?.length &&
        user?.userType?.length > 0 &&
        user?.userType?.includes('mentor') ? (
          <NavLink active={type === 'portfolio' ? true : false}>
            <Link to="/portfolio/mentor">
              <Icon icon="portfolio" size="24px" color="#317EC2" />
            </Link>
          </NavLink>
        ) : (
          <NavLink active={type === 'portfolio' ? true : false}>
            <Link to="/portfolio/mentee">
              <Icon icon="portfolio" size="24px" color="#317EC2" />
            </Link>
          </NavLink>
        )}

        {user?.username === 'halirashika11' ||
        user?.username === 'qureshlakdawala' ? (
          <>
            <NavLink active={type === 'dashboard' ? true : false}>
              <Link to="/dashboard/mentee">
                <Icon icon="wiseupx" size="24px" color="#317EC2" />
              </Link>
            </NavLink>
            {/* <NavLink active={type === 'courses' ? true : false}>
              <Link to="/courses">
                <Icon icon="courses" size="24px" color="#317EC2" />
              </Link>
            </NavLink> */}
          </>
        ) : null}
        {/* {user?.userType === undefined ||
          (user?.userType?.length &&
            user?.userType?.length > 0 &&
            user?.userType?.includes('mentee')) ? (
          <>
            <NavLink active={type === 'courses' ? true : false}>
              <Link to="/courses">
                <Icon icon="courses" size="24px" color="#317EC2" />
              </Link>
            </NavLink>
          </>
        ) : null} */}
        {/* {user?.userType === undefined ? (
          <>
            <NavLink active={type === 'mentor' ? true : false}>
              <Link to="/wiseupx">
                <Icon icon="wiseupx" size="24px" color="#317EC2" />
              </Link>
            </NavLink>
          </>
        ) : null} */}
      </Nav>
    </Container>
  );
};

export default PortfolioHeader;

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

// const MainLogo = styled.div`
//   margin-top: 32px;
//   cursor: pointer;

//   @media (max-width: 1263px) {
//     display: none;
//   }
// `;

const Nav = styled.div`
  display: flex;
  margin-top: 80px;
  height: 80%;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1263px) {
    flex-direction: row;
    width: 100%;
    margin-top: 0;
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
