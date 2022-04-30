import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Heading from '../../assets/MentorListHeading2.png';
import { Button, Text } from '@indywise/uikit';
import Footer from '../../components/Footer';
import { IMentorUpdated } from '../../interfaces/IMentor';
// import { NewMentorsListContext } from '../../contexts/NewMentorsListContext';
import NewMentorsListItem from './parts/NewMentorsListItem';
import { HashLink as Link } from 'react-router-hash-link';

// Mixpanel.init('443966eb9316ce0c87909b540848ebb5');

const CuratedMentors: React.FC<any> = ({ mentorsList }) => {
  // const { getMentors, getCurrency } = React.useContext(NewMentorsListContext);
  // const [mentorsList, setMentorsList] = React.useState([] as Array<any>);
  //eslint-disable-next-line
  const [currency, setCurrency] = React.useState<string>('inr');
  const [exchangeRate] = React.useState<number>(0.014);

  // const mentors = React.useMemo(() => {
  //   setCurrency(getCurrency());
  //   return getMentors();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [getMentors]);

  useEffect(() => {
    document.title = 'Browse Mentors - IndyWise';
    // const exchangeUpdate = async () => {
    //   await axios
    //     .get(
    //       'https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=f7c04dfa3db28727e37e'
    //     )
    //     .then((res) => setExchangeRate(1 / res.data.USD_INR));
    // };
    // exchangeUpdate();
  }, []);

  // useEffect(() => {
  //   Mixpanel.track('Links', {
  //     url: window.location.href
  //   });
  // });

  return (
    <>
      <Header
        headerColor="#042039"
        textColor="white"
        buttonTextColor="#042039"
        buttonColor="#E9E9E9"
      />
      <HeadingContainer>
        <Text type="h1">IndyWise Curated Mentors</Text>
        {/* <Button
          color="secondary"
          // style={{ width: "126px" }}
        >
          Start For Free
        </Button> */}
      </HeadingContainer>
      <ListDiv>
        <ListWrapper>
          {mentorsList?.slice(0, 10).map((mentor: IMentorUpdated) => {
            return (
              <NewMentorsListItem
                mentor={mentor}
                key={mentor.ID}
                currency={currency}
                exchangeRate={exchangeRate}
              />
            );
          })}
          <div
            style={{
              width: '90%',
              background: '#EAF3FA',
              borderRadius: '12px'
            }}
          >
            <div
              style={{
                paddingTop: '13%',
                paddingBottom: '13%'
              }}
            >
              <p
                style={{
                  fontFamily: 'Roboto',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '28px',
                  letterSpacing: '0em',
                  textAlign: 'center'
                }}
              >
                See all 350+ Mentors by logging in
              </p>
              <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                <Button
                  color="tertiary"
                  style={{
                    textAlign: 'center',
                    display: 'block',
                    margin: 'auto',
                    width: '200px'
                  }}
                  // onClick={() => {
                  //   window.location.href = "/#/sign-in"
                  // }}
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </ListWrapper>
      </ListDiv>
      <Footer color="#042039" />
    </>
  );
};

export default CuratedMentors;

const HeadingContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0;
  margin-top: 54px;
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
  margin-bottom: 40px;
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

const ListDiv = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  margin-top: 40px;
  @media (max-width: 1001px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 505px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
