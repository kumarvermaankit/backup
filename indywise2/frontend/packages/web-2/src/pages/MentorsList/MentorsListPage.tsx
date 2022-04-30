import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Text } from '@indywise/uikit';
import { PageView, initGA } from '../../pages/Tracking';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';
import Heading from '../../assets/MentorListHeading2.png';
import { IMentorUpdated } from '../../interfaces/IMentor';
import { NewMentorsListContext } from '../../contexts/NewMentorsListContext';
import Mixpanel from 'mixpanel-browser';
import PortfolioHeader from '../../components/PortfolioHeader';
import { useAuth } from '../../contexts/AuthContext';
import Axios, { baseURL } from '../../utils/Axios';
import PortfolioMainHeader from '../../components/Header/PortfolioMainHeader';
import CuratedMentors from './CuratedMentors';
import NewMentorsListItem from './parts/NewMentorsListItem';

Mixpanel.init('443966eb9316ce0c87909b540848ebb5');

const MentorsList: React.FC = () => {
  const { user, business } = useAuth();
  const { getMentors, getCurrency } = React.useContext(NewMentorsListContext);

  const [ready, setReady] = React.useState(false);
  const [mentorsList, setMentorsList] = React.useState([] as Array<any>);
  const [randomList, setRandomList] = React.useState([] as Array<any>);
  const [currency, setCurrency] = React.useState<string>('inr');
  const [exchangeRate] = React.useState<number>(0.014);

  const mentors = React.useMemo(() => {
    setCurrency(getCurrency());
    return getMentors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMentors]);

  useEffect(() => {
    initGA();
    PageView('Mentor List');
    document.title = 'Browse Mentors - IndyWise';
    // const exchangeUpdate = async () => {
    //   await axios
    //     .get(
    //       'https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=f7c04dfa3db28727e37e'
    //     )
    //     .then((res) => setExchangeRate(1 / res.data.USD_INR));
    // };
    // exchangeUpdate();
    fetchRandom();
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user || business) {
      try {
        // console.log(mentors.length);
        // mentors.forEach((mentor: any) => (mentor.rating = 0));
        setMentorsList(
          mentors.sort((a: any, b: any) => b.experience - a.experience)
        );
      } catch (err) {
        console.log(err);
        setMentorsList(mentors);
      }
    }
    //eslint-disable-next-line
  }, [mentors]);

  useEffect(() => {
    Mixpanel.track('Links', {
      url: window.location.href
    });
  });

  const fetchRandom = async () => {
    // const res = await Axios.get(`${baseURL}/mentor/mentors-random`);
    const res = await Axios.get(
      `${baseURL}/mentors/mentor-user/random-mentors`
    );
    setRandomList(res.data.mentors);
  };

  if (!ready) {
    return (
      <>
        <Helmet>
          <title>Browse Mentors - IndyWise</title>
        </Helmet>
        <LoadingScreen />
      </>
    );
  }

  return (
    <>
      {ready ? (
        !user && !business ? (
          <CuratedMentors mentorsList={randomList} />
        ) : (
          <>
            {business ? (
              <Header
              // headerColor="#042039"
              // textColor="white"
              // buttonTextColor="#042039"
              // buttonColor="#E9E9E9"
              />
            ) : !user ? (
              <Header
                headerColor="#042039"
                textColor="white"
                buttonTextColor="#042039"
                buttonColor="#E9E9E9"
              />
            ) : null}
            {user && (
              <>
                <PortfolioHeader type="mentor" />
                <PortfolioMainHeader name="Find a Mentor" back filters />
              </>
            )}
            {!user && !business && (
              <HeadingContainer userV={user ? true : false}>
                <Text type="h1">IndyWise Curated Mentors</Text>
              </HeadingContainer>
            )}
            {/* <Wrapper> */}
            <Helmet>
              <title>Browse Mentors - IndyWise</title>
            </Helmet>
            {/* <Root userV={user ? true : false}> */}
            <InRoot userV={user ? true : false}>
              {(user || business) && (
                <HeadingContainer userV={user || business ? true : false}>
                  <Text type="h1">IndyWise Curated Mentors</Text>
                </HeadingContainer>
              )}
              <ListWrapper>
                {mentorsList.map((mentor: IMentorUpdated) => {
                  return (
                    <NewMentorsListItem
                      mentor={mentor}
                      key={mentor.ID}
                      currency={currency}
                      exchangeRate={exchangeRate}
                    />
                  );
                })}
              </ListWrapper>
            </InRoot>
            {/* </Root> */}
            {/* </Wrapper> */}
            {!user && !business && <Footer color="#042039" />}
          </>
        )
      ) : null}
    </>
  );
};

export default MentorsList;

const InRoot = styled.div<{
  userV: boolean | undefined;
}>`
  padding-left: ${(props) => (props.userV ? '112px' : '40px')};
  // padding-left: 112px;
  padding-right: 40px;
  @media (max-width: 1263px) {
    padding-left: 40px;
  }
  @media (max-width: 501px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  // margin: auto;
  // width: 90%;
  // @media (max-width: 1024px) {
  //   width: 95%;
  // }
`;

const HeadingContainer = styled.div<{
  userV: boolean | undefined;
}>`
  position: relative;
  width: 100%;
  border-radius: ${(props) => (props.userV ? '20px' : '0')};
  margin-top: ${(props) => (props.userV ? '130px' : '54px')};
  // margin-top: 104px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background-image: url(${Heading});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  @media (max-width: 530px) {
    margin-bottom: 20px;
  }
  h1 {
    background: #042039;
    color: #f2a922;
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    padding-bottom: 24px;
  }
  button {
    position: relative;
    background: white;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16) !important;
    filter: none;
    :focus,
    :hover {
      box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
      background-color: white;
    }
  }
  @media (max-width: 1025px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
    button {
      position: relative;
      bottom: -3rem;
    }
  }
  @media (max-width: 540px) {
    height: 300px;
    h1 {
      font-size: 24px;
      line-height: 32px;
    }
  }
  @media (width: 768px) {
    img {
      height: 20rem;
      width: 102vw;
    }
    div {
      width: 40rem !important;
      text-align: center;
      position: absolute;
      top: 7.5rem;
      left: 6rem !important;
    }
  }
  @media (max-width: 540px) {
    img {
      width: 46rem;
      height: 20rem;
    }
    div {
      width: 35rem;
      text-align: center;
      position: absolute;
      top: 7.5rem;
      left: 6rem !important;
    }
  }
  @media (width: 414px) {
    img {
      width: 29rem;
      height: 20rem;
    }
    div {
      width: 25rem;
      text-align: center;
      position: absolute;
      top: 7.5rem;
      left: 2rem !important;
    }
  }
  @media (max-width: 411px) {
    img {
      width: 29rem;
      height: 22rem !important;
    }
    div {
      width: 25rem;
      text-align: center;
      position: absolute;
      top: 7.5rem;
      left: 2rem !important;
    }
  }
  @media (max-width: 380px) {
    img {
      width: 29rem;
      height: 20rem;
    }
    div {
      width: 25rem;
      text-align: center;
      position: absolute;
      top: 7.5rem;
      left: 3rem !important;
    }
  }
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  padding-bottom: 12vh;
  margin-top: 40px;
  @media (max-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 769px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 730px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;
