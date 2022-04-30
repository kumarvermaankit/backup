import * as React from 'react';
import styled from 'styled-components';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import MenuItem from './MenuItem';
import { Logo, Icon } from '@indywise/uikit';
import {
  forIndividuals,
  forBusiness,
  moreMenu,
  demoMenu,
  userMenu,
  businessMenu,
  mentorMenu
} from './MenuLinks';
import DropDownMenu, { IDropDownMenuItem } from './DropDownMenu';
import HeaderBtn from './HeaderBtn';
import MobileDrawerMenu from './MobileDrawerMenu';
import UserMenuBtn from './UserMenuBtn';
import { useAuth } from '../../contexts/AuthContext';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useDesktop } from '../../hooks/useDesktop';

interface IHeaderProps {
  // Initial color of the header. Will update to `#ffffff` when user scrolls.
  headerColor?: string;

  // Initial background color of the `Start For Free` button.
  buttonColor?: string;

  // Initial text color of the `Start For Free` button.
  buttonTextColor?: string;

  // Initial color of the text on the header. Will update to `#0c3559` when
  // user scrolls and the header color changes to `#ffffff`.
  textColor?: string;

  hideStartForFree?: boolean;
}

const isHeaderWhite = (color: string): boolean => {
  if (color === '#fff' || color === '#ffffff' || color === 'white') {
    return true;
  } else return false;
};

const checkMenuActive = (
  currPath: string,
  list: IDropDownMenuItem[]
): boolean => {
  let isActive = false;

  for (let i = 0; i < list.length; i++) {
    if (list[i].path === currPath) {
      isActive = true;
    }
  }

  return isActive;
};

const Header: React.FC<IHeaderProps> = (props) => {
  const { user, business, authType } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [headerColor, setHeaderColor] = React.useState('#ffffff');
  const [isBusinessMenuVisibile, setBusinessMenu] = React.useState(false);
  const [isIndividualsMenuVisibile, setIndividualsMenu] = React.useState(false);
  const [isMoreMenuVisible, setMoreMenu] = React.useState(false);
  // const [isDemoMenuVisible, setDemoMenu] = React.useState(false);
  const isDesktop = useDesktop(1200);
  const [isMobileDrawerOpen, setMobileDrawer] = React.useState(false);
  const [isUserMenuVisible, setUserMenu] = React.useState(false);

  const isIndividualsMenuActive = checkMenuActive(
    location.pathname,
    forIndividuals
  );
  const isBusinessMenuActive = checkMenuActive(location.pathname, forBusiness);
  const isMoreMenuActive = checkMenuActive(location.pathname, moreMenu);
  // const isDemoMenuActive = checkMenuActive(location.pathname, demoMenu);

  const textColor = isHeaderWhite(headerColor) ? '#0c3559' : props.textColor;
  const btnBg = isHeaderWhite(headerColor) ? '#0C3559' : props.buttonColor;
  const btnFg = isHeaderWhite(headerColor) ? '#ffffff' : props.buttonTextColor;

  const showUserMenu = () => {
    setUserMenu(true);
  };

  const hideUserMenu = () => {
    setUserMenu(false);
  };

  const userMenuBtnRef = React.useRef(null);
  useClickOutside(userMenuBtnRef, hideUserMenu);

  const showIndividualsMenu = () => {
    setIndividualsMenu(true);
  };

  const hideIndividualsMenu = () => {
    setIndividualsMenu(false);
  };

  const hideBusinessMenu = () => {
    setBusinessMenu(false);
  };

  const showBusinessMenu = () => {
    setBusinessMenu(true);
  };

  const showMoreMenu = () => {
    setMoreMenu(true);
  };

  const hideMoreMenu = () => {
    setMoreMenu(false);
  };

  // const showDemoMenu = () => {
  //   setDemoMenu(true);
  // };

  // const hideDemoMenu = () => {
  //   setDemoMenu(false);
  // };

  const toggleMobileDrawerMenu = () => {
    setMobileDrawer(!isMobileDrawerOpen);
  };

  const closeMobileDrawerMenu = () => {
    setMobileDrawer(false);
  };

  const showFreeSessionModal = () => {
    if (!user) {
      history.push('/sign-in');
      return;
    }
    history.push('/foundation');
  };

  const handleScroll = React.useCallback(() => {
    if (props.headerColor) {
      if (window.scrollY > 30) setHeaderColor('#ffffff');
      if (window.scrollY < 30) setHeaderColor(props.headerColor);
    }
  }, [props.headerColor]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (props.headerColor) {
      if (window.scrollY > 30) setHeaderColor('#ffffff');
      if (window.scrollY < 30) setHeaderColor(props.headerColor);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, props.headerColor]);

  React.useEffect(() => {
    const handleResize = () => {
      // Automatically close the mobile menu drawer if the user changes the
      // viewport width while its open.
      if (isDesktop) {
        setMobileDrawer(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop]);

  return (
    <div style={{ overflow: 'scroll' }}>
      {isMobileDrawerOpen ? (
        <MobileDrawerMenu
          onClick={closeMobileDrawerMenu}
          headerColor={props.headerColor}
        />
      ) : null}

      <HeaderWrapper
        bgColor={headerColor}
        fgColor={textColor}
        isDrawerOpen={isMobileDrawerOpen}
      >
        <Left>
          <Link to="/" onClick={closeMobileDrawerMenu}>
            <Logo
              type={
                isMobileDrawerOpen
                  ? 'primary'
                  : headerColor === '#ffffff' ||
                    headerColor === '#F8FBFD' ||
                    headerColor === '#FAEFD9' ||
                    headerColor ===
                      'linear-gradient(72.46deg, #EAF3FA 0%, #FFFFFF 100%)'
                  ? 'primary'
                  : 'white'
              }
              width="108px"
              height="36px"
            />
          </Link>

          {/* Don't want to show these options on header to business account */}
          {authType !== 'business' ? (
            <>
              <li>
                <NavLink to="/mentors" activeClassName="is-active">
                  <MenuItem
                    text="Find a Mentor"
                    color={textColor}
                    headerColor={headerColor}
                  />
                </NavLink>
              </li>
              <li
                onMouseEnter={showIndividualsMenu}
                onMouseLeave={hideIndividualsMenu}
                className={isIndividualsMenuActive ? 'bold' : ''}
              >
                <MenuItem
                  text="For Individuals"
                  isDropDown
                  color={textColor}
                  headerColor={headerColor}
                />
                {isIndividualsMenuVisibile && (
                  <DropDownMenu Items={forIndividuals} width="14em" />
                )}
              </li>
              <li
                onMouseEnter={showBusinessMenu}
                onMouseLeave={hideBusinessMenu}
                className={isBusinessMenuActive ? 'bold' : ''}
              >
                <MenuItem
                  text="For Business"
                  isDropDown
                  color={textColor}
                  headerColor={headerColor}
                />
                {isBusinessMenuVisibile && (
                  <DropDownMenu Items={forBusiness} width="14em" />
                )}
              </li>
              <li>
                <NavLink to="/join-as-a-mentor" activeClassName="is-active">
                  <MenuItem
                    text="Join as a Mentor"
                    color={textColor}
                    headerColor={headerColor}
                  />
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/mentees" activeClassName="is-active">
                  <MenuItem
                    text="Browse Mentees"
                    color={textColor}
                    headerColor={headerColor}
                  />
                </NavLink>
              </li>

              <li>
                <NavLink to="/mentors" activeClassName="is-active">
                  <MenuItem
                    text="Get Mentoring"
                    color={textColor}
                    headerColor={headerColor}
                  />
                </NavLink>
              </li>
            </>
          )}
          {/* {business?.username === 'indytest' ||
          business?.username === 'indywise' ? (
            <li
              onMouseOver={showDemoMenu}
              onMouseLeave={hideDemoMenu}
              className={isDemoMenuActive ? 'bold' : ''}
            >
              <MenuItem
                text="Startups"
                isDropDown
                color={textColor}
                headerColor={headerColor}
              />
              {isDemoMenuVisible && (
                <DropDownMenu Items={demoMenu} width="9em" />
              )}
            </li>
          ) : null} */}

          <li
            onMouseOver={showMoreMenu}
            onMouseLeave={hideMoreMenu}
            className={isMoreMenuActive ? 'bold' : ''}
          >
            <MenuItem
              text="More"
              isDropDown
              color={textColor}
              headerColor={headerColor}
            />
            {isMoreMenuVisible && <DropDownMenu Items={moreMenu} width="9em" />}
          </li>
        </Left>

        <Right svgColor={btnBg}>
          {authType !== 'business' && !props.hideStartForFree && (
            <li>
              <HeaderBtn
                bgColor={btnBg}
                fgColor={btnFg}
                text="Start For Free"
                onClick={showFreeSessionModal}
              />
            </li>
          )}

          {authType ? (
            <i
              onMouseEnter={showUserMenu}
              onTouchStart={showUserMenu}
              onMouseLeave={hideUserMenu}
              ref={userMenuBtnRef}
              className={isDesktop ? 'no-right-margin' : ''}
            >
              <UserMenuBtn
                color={isMobileDrawerOpen ? '#000' : btnBg}
                name={
                  authType === 'user'
                    ? user?.firstName
                    : business?.organization_name
                }
                avatar={
                  authType === 'user'
                    ? user?.avatar?.small
                    : business?.avatar ||
                      'https://public-assets-indywise.s3.ap-south-1.amazonaws.com/TechESpace.png'
                }
              />
              {isUserMenuVisible && (
                <DropDownMenu
                  Items={
                    authType === 'user'
                      ? user?.userType?.length &&
                        user?.userType?.length > 0 &&
                        user?.userType?.includes('mentor')
                        ? mentorMenu
                        : userMenu
                      : business?.username === 'indytest' ||
                        business?.username === 'indywise'
                      ? demoMenu
                      : businessMenu
                  }
                  width="9em"
                  alignRight
                />
              )}
            </i>
          ) : (
            <i className="">
              <NavLink to="/sign-in">
                <HeaderBtn
                  bgColor={isMobileDrawerOpen ? '#0c3559' : btnBg}
                  fgColor={isMobileDrawerOpen ? '#0c3559' : btnBg}
                  text="Login"
                  noBg
                />
              </NavLink>
            </i>
          )}

          <Icon
            icon={isMobileDrawerOpen ? 'close' : 'menu'}
            size="24px"
            onClick={toggleMobileDrawerMenu}
          />
        </Right>
      </HeaderWrapper>
    </div>
  );
};

export default Header;

const HeaderWrapper = styled.nav<{
  bgColor: string;
  fgColor?: string;
  isDrawerOpen: boolean;
}>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 4.5em;
  z-index: 1000;
  display: flex;
  transition: all 0.3s ease;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.isDrawerOpen ? '#ffffff' : props.bgColor)};
  box-shadow: ${(props) =>
    props.isDrawerOpen
      ? ''
      : props.bgColor === '#ffffff'
      ? '0px 8px 16px rgba(12, 53, 89, 0.2)'
      : ''};

  .is-active {
    border-bottom: 2px solid ${(props) => props.fgColor || '#0c3559'};

    p {
      font-weight: 700;
    }
  }

  .bold {
    p {
      font-weight: 700;
    }
  }

  ul {
    display: flex;
    align-items: center;
    padding: 0;

    i {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;

      &:hover {
        cursor: pointer;
      }
    }

    li {
      list-style: none;
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;

      &:hover {
        cursor: pointer;
      }

      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 100%;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;

        &:hover {
          cursor: pointer;
          border-bottom: 2px solid ${(props) => props.fgColor || '#0c3559'};
        }
      }

      /* Hide everyhing except Logo on screens with width < 1200px (tablets/mobile) */
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
`;

const Left = styled.ul`
  margin-left: 4em;
  height: 100%;

  li {
    margin-left: 2em;
  }

  @media screen and (max-width: 560px) {
    margin-left: 1em;
  }
`;

const Right = styled.ul<{ svgColor?: string }>`
  margin-right: 4em;
  height: 100%;

  li,
  i {
    margin-right: 2em;

    a {
      border-bottom: none !important;
    }
  }

  .no-right-margin {
    margin-right: 0;
  }

  svg {
    display: none;

    @media screen and (max-width: 1200px) {
      display: inline-block;
      stroke: ${(props) => props.svgColor || '#0C3559'};
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 560px) {
    margin-right: 1em;
  }
`;
