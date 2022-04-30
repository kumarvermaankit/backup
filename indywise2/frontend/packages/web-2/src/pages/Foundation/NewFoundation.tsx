import React, { useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import { Helmet } from 'react-helmet';
import PortfolioHeader from '../../components/PortfolioHeader';
import PortfolioMainHeader from '../../components/Header/PortfolioMainHeader';
import Greeting from './parts/Greeting';
// import UpcomingIndyTalks from './parts/UpcomingIndyTalks';
import Courses from './parts/Courses';
import Articles from './parts/Articles';
import Assessments from './parts/Assessments';
import Mentors from './parts/Mentors';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { NewMentorsListContext } from '../../contexts/NewMentorsListContext';
import LoadingScreen from '../../components/LoadingScreen';
import TelegramCommunity from './parts/TelegramCommunity';
import Axios, { baseURL } from '../../utils/Axios';

function NewFoundation() {
  const { user } = useAuth();
  const [currency, setCurrency] = React.useState<string>('inr');
  const [exchangeRate] = React.useState<number>(0.014);
  const [mentorsList, setMentorsList] = React.useState([] as Array<any>);
  // const [webinars, setWebinars] = React.useState<any>([]);
  const [ready, setReady] = React.useState(false);
  const { getCurrency } = React.useContext(NewMentorsListContext);

  const history = useHistory();

  if (!user) {
    history.push('/sign-in');
    return null;
  }
  if (user?.userType?.includes('mentor')) {
    history.push('/portfolio/mentor');
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
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

  const fetchTierBasedMentors = async () => {
    const res = await Axios.get(
      `${baseURL}/mentors/mentor-user/random-mentors`
    );
    const mentorR = res.data.mentors;
    setMentorsList(mentorR);
    setCurrency(getCurrency());
    setReady(true);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchTierBasedMentors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   try {
  //     const getWebinars = async () => {
  //       try {
  //         const res = await axios({
  //           url:
  //             'https://public-assets-indywise.s3.ap-south-1.amazonaws.com/Webinars.json',
  //           method: 'GET'
  //         });
  //         setWebinars(res.data || []);
  //       } catch (e) {
  //         setWebinars([]);
  //       }
  //     };
  //     getWebinars();
  //   } catch (err) {
  //     setWebinars([]);
  //   }
  // }, []);

  if (!ready) {
    return (
      <>
        <Helmet>
          <title>Foundation</title>
        </Helmet>
        <LoadingScreen />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>WiseUp Foundation</title>
      </Helmet>
      <PortfolioMainHeader name="Foundation" />
      <PortfolioHeader type="home" />
      <Root>
        <Greeting />
        <Row>
          <Col6>
            {/* <UpcomingIndyTalks webinars={webinars} /> */}
            <Articles />
          </Col6>
          <Col6>
            <Assessments />
            <Courses />
          </Col6>

          {/* New Row Starts */}
          {/* <Col6 style={{ marginTop: '51px' }}>
            <Assessments />
          </Col6>
          <Col6 style={{ marginTop: '51px' }}>
            <Courses />
          </Col6> */}

          {/* New Row Starts */}
          <Col12>
            <Mentors
              mentor={mentorsList}
              currency={currency}
              exchangeRate={exchangeRate}
            />
          </Col12>

          {/* New Row Starts */}
          <Col12 style={{ paddingBottom: 0 }}>
            <TelegramCommunity />
          </Col12>
        </Row>
      </Root>
    </>
  );
}

export default NewFoundation;

const Root = styled.div`
  padding-left: 112px;
  padding-right: 40px;
  @media (max-width: 1263px) {
    padding-left: 40px;
  }
  @media (max-width: 501px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 32px;
`;

const Col6 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 48%;
  flex: 0 0 48%;
  max-width: 48%;
  @media (max-width: 1263px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Col12 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding-bottom: 40px;
`;
