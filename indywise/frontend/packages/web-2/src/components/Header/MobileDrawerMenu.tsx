import * as React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { HashLink as Link } from 'react-router-hash-link';
import {
  forIndividuals,
  forBusiness,
  moreMenu,
  allLinksBusiness
} from './MenuLinks';
import HeaderBtn from './HeaderBtn';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
// import { Icon } from '@indywise/uikit';
//import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

export interface IMobileDrawerMenu {
  onClick: () => any;
  headerColor: string | undefined;
}

const MobileDrawerMenu: React.FC<IMobileDrawerMenu> = ({
  onClick,
  headerColor
}) => {
  const [isBusinessMenuVisibile, setBusinessMenu] = React.useState(false);
  const [isIndividualsMenuVisibile, setIndividualsMenu] = React.useState(false);
  const [isMoreMenuVisible, setMoreMenu] = React.useState(false);
  const { authType, user } = useAuth();
  const history = useHistory();
  const menuLinks = authType === 'business' ? allLinksBusiness : [];

  const showFreeSessionModal = () => {
    if (!user) {
      history.push('/sign-in');
      return;
    }
    onClick(); // Close the mobile drawer menu first then show modal
    history.push('/foundation');
  };

  const toggleIndividualsMenu = () => {
    setIndividualsMenu(!isIndividualsMenuVisibile);
  };

  const toggleBusinessMenu = () => {
    setBusinessMenu(!isBusinessMenuVisibile);
  };

  const toggleMoreMenu = () => {
    setMoreMenu(!isMoreMenuVisible);
  };

  return (
    <MobileDrawerMenuContainer style={{ color: '#262626' }}>
      <>
        <MobileDropDownMenu>
          {menuLinks.map((item, index) =>
            item.isExternal ? (
              <li key={index}>
                <a
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <MenuItem
                    text={item.title}
                    style={{
                      marginTop: '1em',
                      marginLeft: '1.5rem',
                      paddingBottom: '1rem'
                    }}
                    headerColor={headerColor}
                  />
                </a>
              </li>
            ) : (
              <li key={index}>
                <Link to={item.path} onClick={onClick}>
                  <MenuItem
                    text={item.title}
                    style={{
                      marginTop: '1em',
                      marginLeft: '1.5rem',
                      paddingBottom: '1rem'
                    }}
                    headerColor={headerColor}
                  />
                </Link>
              </li>
            )
          )}
        </MobileDropDownMenu>
      </>
      {authType !== 'business' ? (
        <MobileDropDown2>
          <MobileDropDownMenu>
            <li>
              <Link to="/mentors" onClick={onClick}>
                <MenuItem
                  text="Find a Mentor"
                  style={{
                    marginTop: '1em',
                    marginLeft: '1.5rem',
                    paddingBottom: '1rem'
                  }}
                  headerColor={headerColor}
                />
              </Link>
            </li>
            <li
              id="textInput" // => this.indielement = textInput}
              onClick={toggleIndividualsMenu}
              style={{
                backgroundColor: isIndividualsMenuVisibile ? '#EAF3FA' : 'white'
              }}
            >
              <MenuItem
                text="For Individuals"
                isDropDown
                headerColor={headerColor}
                style={{
                  marginTop: '1em',
                  marginLeft: '1.5rem',
                  paddingBottom: '1rem',
                  fontWeight: isIndividualsMenuVisibile ? 'bold' : '400'
                }}
              />
              {isIndividualsMenuVisibile
                ? forIndividuals.map((item, index) => {
                    return (
                      <span>
                        <li key={index}>
                          <Link to={item.path} onClick={onClick}>
                            <MenuItem
                              text={item.title}
                              style={{
                                marginTop: '1em',
                                marginLeft: '2.5rem',
                                paddingBottom: '1rem'
                              }}
                              headerColor={headerColor}
                            />
                          </Link>
                        </li>
                      </span>
                    );
                  })
                : null}
            </li>
            <li
              onClick={toggleBusinessMenu}
              style={{
                backgroundColor: isBusinessMenuVisibile ? '#EAF3FA' : 'white'
              }}
            >
              <MenuItem
                text="For Business"
                isDropDown
                headerColor={headerColor}
                style={{
                  marginTop: '1em',
                  marginLeft: '1.5rem',
                  paddingBottom: '1rem',
                  fontWeight: isBusinessMenuVisibile ? 'bold' : '400'
                }}
              />

              {isBusinessMenuVisibile
                ? forBusiness.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to={item.path} onClick={onClick}>
                          <MenuItem
                            text={item.title}
                            style={{
                              marginTop: '1em',
                              marginLeft: '2.5rem',
                              paddingBottom: '1rem'
                            }}
                            headerColor={headerColor}
                          />
                        </Link>
                      </li>
                    );
                  })
                : null}
            </li>
            <li>
              <Link to="/join-as-a-mentor" onClick={onClick}>
                <MenuItem
                  text="Join as a Mentor"
                  style={{
                    marginTop: '1em',
                    marginLeft: '1.5rem',
                    paddingBottom: '1rem'
                  }}
                  headerColor={headerColor}
                />
              </Link>
            </li>
            <li
              onClick={toggleMoreMenu}
              style={{
                backgroundColor: isMoreMenuVisible ? '#EAF3FA' : 'white'
              }}
            >
              <MenuItem
                text="More"
                isDropDown
                style={{
                  marginTop: '1em',
                  marginLeft: '1.5rem',
                  paddingBottom: '1rem',
                  fontWeight: isMoreMenuVisible ? 'bold' : '400'
                }}
              />

              {isMoreMenuVisible
                ? moreMenu.map((item, index) => {
                    return (
                      <li key={index}>
                        {item.isExternal ? (
                          <a href={item.path} target="_blank" rel="noreferrer">
                            <MenuItem
                              text={item.title}
                              style={{
                                marginTop: '1em',
                                marginLeft: '2.5rem',
                                paddingBottom: '1rem'
                              }}
                            />
                          </a>
                        ) : (
                          <Link to={item.path} onClick={onClick}>
                            <MenuItem
                              text={item.title}
                              style={{
                                marginTop: '1em',
                                marginLeft: '2.5rem',
                                paddingBottom: '1rem'
                              }}
                            />
                          </Link>
                        )}
                      </li>
                    );
                  })
                : null}
            </li>
            <HeaderBtn
              fontSize="1.5rem"
              text="Start For Free"
              style={{
                marginTop: '1.5em',
                width: 'fit-content',
                marginLeft: '1.5rem',
                borderRadius: '2.25rem'
              }}
              onClick={showFreeSessionModal}
            />
          </MobileDropDownMenu>
        </MobileDropDown2>
      ) : null}
    </MobileDrawerMenuContainer>
  );
};

export default MobileDrawerMenu;

const MobileDrawerMenuContainer = styled.div`
  color: #262626 !important;
  display: flex;
  position: fixed;
  top: 4.5em;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: white;
  z-index: 1000;
  overflow-y: auto !important;
  overflow-x: hidden;
  flex-direction: column;
  padding-bottom: 2em;

  li {
    -webkit-tap-highlight-color: transparent;
    list-style: none;
    color: #262626 !important;
    overflow-y: auto !important;
    a {
      text-decoration: none;
      p {
      }
    }
  }

  @media (max-width: 414px) {
    font-size: 1rem !important;
    line-height: 1.5rem !important;
    li {
      padding-right: 1rem !important;
    }
    p {
      font-size: 1rem !important;
      line-height: 1.5rem !important;
    }
  }

  @media (min-width: 1200px) {
    display: none;
  }

  @media (max-width: 1200px) and (min-width: 415px) {
    li {
      padding-right: 2.5rem !important;
      padding-left: 1rem !important;
    }

    p {
      font-size: 1.25rem !important;
      line-height: 1.75rem !important;
    }
  }
`;

const MobileDropDownMenu = styled.div`
  overflow-y: auto !important;
  overflow-x: hidden;
  color: #262626 !important;
  li {
    cursor: pointer;
    line-height: 1.5rem;
  }
`;

const MobileDropDown2 = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  padding-bottom: 1em;
  @media (min-height: 480px) {
    height: 84vh;
  }
  @media (max-height: 480px) and (min-height: 360px) {
    height: 80vh;
  }
  @media (max-height: 300px) {
    height: 75vh;
  }
`;
