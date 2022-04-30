import React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { useMediaQuery } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation: React.FC<{}> = () => {
  const matches = useMediaQuery('(min-width:770px)');

  const [activeTab, setActiveTab] = React.useState('');

  const NavigateTo = (e: any) => {
    const tabValue = e.target.closest('li').getAttribute('data-value');

    if (activeTab === tabValue) return;

    setActiveTab(tabValue);

    document.getElementById(tabValue)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!matches) {
    return (
      <FooterNavigationContainer>
        <Link to="/">
          <Icon icon="w" size="30px" />
        </Link>
        <NavigationContainer>
          {/*  add on active style */}
          <NavList
            isActive={activeTab === 'bio'}
            data-value="bio"
            onClick={NavigateTo}
          >
            <Icon icon="w" />
          </NavList>
          <NavList
            isActive={activeTab === 'skill-evaluation'}
            data-value="skill-evaluation"
            onClick={NavigateTo}
          >
            <Icon icon="jobTitle" />
          </NavList>
          <NavList
            isActive={activeTab === 'pain-points'}
            data-value="pain-points"
            onClick={NavigateTo}
          >
            <Icon icon="mentees" />
          </NavList>
          <NavList
            isActive={activeTab === 'comments'}
            data-value="comments"
            onClick={NavigateTo}
          >
            <Icon icon="w" />
          </NavList>
        </NavigationContainer>
      </FooterNavigationContainer>
    );
  }

  return (
    <Wrapper>
      <Link to="/">
        <Icon icon="w" size="30px" />
      </Link>
      <NavigationContainer>
        {/*  add on active style */}
        <NavList
          isActive={activeTab === 'bio'}
          data-value="bio"
          onClick={NavigateTo}
        >
          <Icon icon="portfolio" />
        </NavList>
        <NavList
          isActive={activeTab === 'skill-evaluation'}
          data-value="skill-evaluation"
          onClick={NavigateTo}
        >
          <Icon icon="jobTitle" />
        </NavList>
        <NavList
          isActive={activeTab === 'pain-points'}
          data-value="pain-points"
          onClick={NavigateTo}
        >
          <Icon icon="mentees" />
        </NavList>
        <NavList
          isActive={activeTab === 'comments'}
          data-value="comments"
          onClick={NavigateTo}
        >
          <Icon icon="schedule" />
        </NavList>
      </NavigationContainer>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* width: 72px; */
  height: 100%;
  padding: 32px 12px 0;
  background-color: #fff;
  box-shadow: 0px 8px 24px rgba(60, 84, 175, 0.16);
  border-radius: 0px 20px 20px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterNavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: auto;
  width: 100%;
  background-color: #fff;
  left: 0;
  z-index: 30;
  width: 100%;
  flex-direction: row;
  border-radius: 0;
  box-shadow: 0px -8px 24px rgba(60, 84, 175, 0.16);
  & > * {
    display: none;
  }
`;

const NavigationContainer = styled.ul`
  margin-top: 4rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 770px) {
    padding: 0.5rem 0;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0;
    margin-bottom: 0;
  }
  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
    @media (max-width: 770px) {
      margin-bottom: 0 !important;
    }
  }
`;

const NavList = styled.li<{ isActive: boolean }>`
  list-style-type: none;
  padding: 10px;
  border-radius: 50%;
  border: ${(props) =>
    props.isActive ? '2px solid #F2A922 ' : '2px solid transparent'};
  background-color: ${(props) => (props.isActive ? '#FAEFD9 ' : '#fff')};
  & > span > svg {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 770px) {
    & > span > svg {
      width: 20px;
      height: 20px;
      fill: ${(props) => (props.isActive ? '#F2A922 ' : null)};
    }
  }
`;
