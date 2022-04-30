import React, { useState } from 'react';
import styled from 'styled-components';
// import Search from './Search';
// import MenteeUserMenuBtn from './MenteeUserMenuBtn';
import { useAuth } from '../../contexts/AuthContext';
import {
  Button,
  Icon
  // Pill
} from '@indywise/uikit';
import Search from '../../pages/MentorsList/parts/Search';
import Filters from '../../pages/MentorsList/parts/Filters';
import PortfolioUserBtn from './PortfolioUserBtn';
import { HashLink as Link } from 'react-router-hash-link';
import { NewMentorsListContext } from '../../contexts/NewMentorsListContext';
// import ArrowBack from '../../assets/Arrow Left 24px.svg';

const PortfolioMainHeader: React.FC<any> = (props) => {
  const { user } = useAuth();
  const [searchBox, setSearchBox] = useState(false);

  const searchHandler = () => {
    setSearchBox(!searchBox);
  };

  const resetSearchHandler = () => {
    setSearchBox(!searchBox);
    clearAllFilters('search');
    searchMentors(null);
  };
  // const [mentorsList, setMentorsList] = React.useState([] as Array<any>);
  //eslint-disable-next-line
  const [currency, setCurrency] = React.useState<string>('inr');
  // const [exchangeRate, setExchangeRate] = React.useState<number>(0.019);

  const {
    // getMentors,
    // fetchingList,
    searchMentors,
    clearAllFilters,
    fluidMentorsList
    // getCurrency
  } = React.useContext(NewMentorsListContext);

  return (
    <Container>
      <Topic>
        <NameSpan name={props?.name}>
          <Link
            to={props?.name === 'Find a Mentor' ? '/mentors' : '/'}
            style={{ textDecoration: 'none' }}
          >
            {props?.back && window.innerWidth > 530 ? (
              <Icon
                icon="arrow"
                rotate={90}
                style={{
                  marginRight: '8px',
                  cursor: 'pointer'
                }}
              />
            ) : null}
            <ResSpan>
              {props?.name === 'Find a Mentor'
                ? `Find a Mentor  (${fluidMentorsList?.length || 0})`
                : props?.name}
            </ResSpan>
          </Link>
        </NameSpan>
        <Menu>
          {/* <Search />
          <IconWrapper>
            <Icon icon="notification" size="24px" color="#317EC2" />
          </IconWrapper> */}
          {/* <MenteeUserMenuBtn color="#317EC2" avatar={user?.avatar?.small} /> */}
          {props?.name === 'Portfolio' && window.innerWidth > 768 && (
            <Button
              color="secondary"
              onClick={() => props?.setPendingModalShow()}
            >
              See Pending Actions
            </Button>
          )}
          {user?.userType === undefined ? (
            props?.type === 'startup' ? null : props?.name !==
              'Find a Mentor' ? (
              <>
                <Button color="tertiary">
                  <Link
                    to="/tier/choose"
                    target="_blank"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Upgrade Your Plan
                  </Link>
                  {/* <a
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      href="
                      mailto:sales@indywise.com?
                      &subject=Upgrading%20my%20plan
                      &body=I%20am%20sending%20this%20email%20to%20ask%20about%20plan%20upgrades
                      "
                    >
                      {window.innerWidth > 500 ? 'Upgrade your plan' : 'Upgrade'}
                    </a> */}
                </Button>
              </>
            ) : null
          ) : null}
          {props?.name === 'Find a Mentor' && props?.filters ? (
            <>
              {/* <Pill text="Gold Tier" textColor="white" leftIcon="filter" style={{
                backgroundColor: "#19588F",
              }} /> */}
              <Flex>
                <SearchFlex>
                  <IconWrapper>
                    {searchBox && window.innerWidth > 540 ? (
                      <SearchWrapper
                        style={
                          window.innerWidth > 760
                            ? {
                                display: 'flex',
                                height: '4rem !important'
                              }
                            : {
                                display: 'none',
                                left: '30vw',
                                width: '90vw'
                              }
                        }
                      >
                        <Search />
                        <Icon
                          icon="close"
                          size="16px"
                          onClick={() => resetSearchHandler()}
                          style={{
                            position: 'relative',
                            top: '21px',
                            left: '7px'
                          }}
                        />
                      </SearchWrapper>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: '1px solid #90C0EA',
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px'
                        }}
                      >
                        <Icon
                          icon="search"
                          size="16px"
                          color="#317EC2"
                          onClick={() => searchHandler()}
                        />
                      </div>
                    )}
                  </IconWrapper>
                  <SubHeadingFlex>
                    <Filters currency={currency} />
                  </SubHeadingFlex>
                </SearchFlex>
              </Flex>
            </>
          ) : null}
          <PortfolioUserBtn
            name={`${user?.firstName} ${user?.lastName}`}
            color="#317EC2"
            avatar={user?.avatar?.small}
            type={props?.type}
          />
        </Menu>
      </Topic>
      {searchBox ? (
        <SearchWrapper
          style={
            window.innerWidth > 760
              ? {
                  display: 'none'
                }
              : {
                  display: 'flex',
                  width: '80%',
                  margin: '-20px auto 20px auto'
                }
          }
        >
          <Search />
          <Icon
            icon="close"
            size="16px"
            onClick={() => resetSearchHandler()}
            style={{ position: 'relative', top: '21px', left: '7px' }}
          />
        </SearchWrapper>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default PortfolioMainHeader;

const NameSpan = styled.span<{ name: string }>`
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-family: Mulish;
  padding-left: 112px;
  @media (max-width: 1263px) {
    padding-left: 40px;
  }
  @media (max-width: 501px) {
    // padding-left: 24px;
    padding-left: ${(props) =>
      props.name === 'Portfolio' || props.name === 'Find a Mentor'
        ? '24px'
        : '8px'};
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    // margin-bottom: 20px;
  }
`;

const SearchWrapper = styled.div``;

const ResSpan = styled.span`
  color: #262626;
  @media (max-width: 1370px) {
    display: none;
  }
`;

const SearchFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: nowrap;
  align-items: center;
  @media (max-width: 539px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: nowrap;
  }
`;

const SubHeadingFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    margin-right: 2.5rem;
  }
  @media (max-width: 530px) {
    /* flex-wrap: nowrap; */
    width: 100%;
    h2 {
      display: none;
    }
  }
`;

const IconWrapper = styled.div`
  margin-right: 1rem;
  // div {
  //   span {
  //     svg {
  //       path {
  //         fill: #317EC2;
  //       }
  //     }
  //   }
  // }
  @media (max-width: 540px) {
    /* position: absolute;
    left: 37vw !important;
    display: flex;
    flex-direction: column !important; */
  }
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  background-color: #ffffff;
  position: fixed;
  left: 0rem;
  right: 0px;
  top: 0px;
  z-index: 1;
  width: 100%;
  height: 96px;
  // @media screen and (max-width: 782px) {
  //   // padding-top: 8px;
  //   box-shadow: 0px 1px 12px rgba(7, 78, 77, 0.16);
  // }
  // @media (max-width: 500px) {
  //   display: flex;
  //   align-items: center;
  // }
`;

const Topic = styled.div`
  color: #262626;
  display: flex;
  flex-direction: row;
  height: 96px;
  justify-content: space-between;
  align-items: center;
  // padding: 2rem 2.5rem 1.5rem 9rem;
  // @media screen and (max-width: 1025px) {
  //   padding: 0.75rem 2rem 0.75rem 120px;
  // }
  // @media screen and (max-width: 1024px) {
  //   padding: 0.75rem 2rem 0.75rem 2.5rem;
  // }
  // @media screen and (max-width: 375px) {
  //   padding: 0.75rem 1rem 0.75rem 1.5rem;
  // }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  button {
    margin-right: 12px;
  }

  @media (max-width: 501px) {
    padding-right: 20px;
    button {
      margin-right: 8px;
      span {
        p {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }

  @media (max-width: 350px) {
    button {
      margin-right: 2px;
    }
  }
`;

// const IconWrapper = styled.div`
//   margin: 0 1.5rem;
//   cursor: pointer;
//   @media screen and (max-width: 375px) {
//     margin: 0 10px;
//   }
// `;
