import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from '@indywise/uikit';
import GoodMorning from '../../assets/Good-Morning.png';
import ViewScoreCard from './parts/ViewScorecard';
import Graph from './parts/Graph';
import CustomCarousel from './parts/CustomCarousel';
// import Intern from '../../assets/Intern.jpeg';
import { scorecards } from './parts/ViewScorecard';
import AddInterns from './parts/AddInterns';
import StartHeader from '../../components/StartupHeader';
import StartupHeader from '../../components/Header/PortfolioMainHeader';
import { HashLink as Link } from 'react-router-hash-link';
import Axios, { baseURL } from '../../utils/Axios';
import { LocalStorage, SessionStorage } from '../../utils/storage';

const StartupDashboard: React.FC = () => {
  const [mentees, setMentees] = React.useState<any[]>([]);
  const [photos, setPhotos] = React.useState<string[]>([]);
  const [timelines, setTimeline] = React.useState<any>();
  const [latestSessions, setLatestSessions] = React.useState<any[]>([]);

  const business = LocalStorage.getBusiness() || SessionStorage.getBusiness();
  const username = business?.username;

  const fetchMentees = async () => {
    const res = await Axios.post(
      `${baseURL}/business/business/account/mentees/${username}`
    );
    const menteeIds = res?.data?.mentees?.map((mentee: any) => mentee.ID);
    setMentees(res?.data?.mentees);

    const promises = menteeIds?.map(async (mentee: number) =>
      Axios.get(`${baseURL}/profile/user-info?ID=${mentee}`)
    );

    const timelinePromises = menteeIds?.map(async (mentee: number) =>
      Axios.get(`${baseURL}/assessment/assessment/business/all/${mentee}`)
    );

    const sessionPromises = menteeIds?.map(async (mentee: number) =>
      Axios.get(`${baseURL}/assessment/assessment/business/${mentee}`)
    );

    const res1 = await Promise.all(promises);
    const res2 = await Promise.all(timelinePromises);
    const res3 = await Promise.all(sessionPromises);

    setLatestSessions(res3.map((item: any) => item?.data?.data?.sessionNumber));

    const photosRecieved = res1?.map((item: any) => item?.data?.avatar?.large);
    setPhotos(photosRecieved);

    const timelineRecieved = res2?.map((item: any) => item?.data?.data?.Items);

    setTimeline(timelineRecieved);
  };

  React.useEffect(() => {
    fetchMentees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scorecard = () => {
    return (
      <Div1>
        {mentees?.length && mentees?.length > 0 ? (
          <CustomCarousel>
            {mentees?.map((item, index) => {
              const path = `/wiseup/scorecard/${item?.ID}/${latestSessions[index]}`;
              return (
                <div>
                  <InternDiv source={photos[index]}>
                    {/* <RegularText
                            style={{
                              position: 'absolute',
                              bottom: 8,
                              left: 16,
                              color: '#C6D475'
                            }}
                          >
                            +7%
                          </RegularText> */}
                  </InternDiv>
                  <div
                    style={{
                      marginTop: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '4px'
                    }}
                  >
                    <RegularText style={{ marginRight: '8px' }}>
                      {mentees[index]?.name}
                    </RegularText>
                    <Icon icon="badge" size="20px" />
                  </div>
                  <RegularText style={{ color: '#727272', fontWeight: 400 }}>
                    {mentees[index]?.position}
                  </RegularText>
                  <a
                    href="https://docs.google.com/forms/d/1ttNdPfV2aOsdH9BeGkw1Snw02Fv9co_25ychwG8zF5E"
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      color="secondary"
                      style={{
                        width: '192px',
                        marginBottom: '8px',
                        marginTop: '8px',
                        border: '1px solid white'
                      }}
                    >
                      Give Feedback
                    </Button>
                  </a>
                  <Link
                    to={path}
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                  >
                    <ViewScorecardButton>View Scorecard</ViewScorecardButton>
                  </Link>
                </div>
              );
            })}
          </CustomCarousel>
        ) : null}

        {/* <div style={{ visibility: 'hidden', width: '10%' }}>
          <InternDiv source={photos[0]} > */}
        {/* <RegularText
                          style={{
                            position: 'absolute',
                            bottom: 8,
                            left: 16,
                            color: '#C6D475'
                          }}
                        >
                          +7%
                        </RegularText> */}
        {/* </InternDiv>
          <div
            style={{
              marginTop: '24px',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '4px'
            }}
          >
            <RegularText style={{ marginRight: '8px' }}>
              {mentees[0]?.name}
            </RegularText>
            <Icon icon="badge" size="20px" />
          </div>
          <RegularText style={{ color: '#727272', fontWeight: 400 }}>
            {mentees[0]?.position}
          </RegularText>
          <a
            href="https://docs.google.com/forms/d/1ttNdPfV2aOsdH9BeGkw1Snw02Fv9co_25ychwG8zF5E"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              color="secondary"
              style={{
                width: '192px',
                marginBottom: '8px',
                marginTop: '8px',
                border: "1px solid white"
              }}
            >
              Give Feedback
            </Button>
          </a>
          <Link to="/wiseup/scorecard" style={{ textDecoration: 'none' }}>
            <ViewScorecardButton>View Scorecard</ViewScorecardButton>
          </Link>
        </div>
 */}
      </Div1>
    );
  };

  return (
    <>
      <StartHeader type="dashboard" />
      <Wrapper>
        <StartupHeader name="Dashboard" type="startup" />
        <GoodMorningDiv />
        <Row>
          {scorecards.length === 1 && (
            <>
              <Col4>
                <Div>
                  {scorecard()}
                  <AddInterns />
                </Div>
              </Col4>
              <Col8>
                {mentees && timelines ? (
                  <Graph mentees={mentees} timeline={timelines} />
                ) : null}
              </Col8>
            </>
          )}

          {scorecards.length >= 3 && (
            <>
              <Col6>
                <ViewScoreCard />
              </Col6>
              <Col6>
                {mentees && timelines ? (
                  <Graph mentees={mentees} timeline={timelines} />
                ) : null}
              </Col6>
            </>
          )}
        </Row>
      </Wrapper>
    </>
  );
};

export default StartupDashboard;

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 40px;
  @media (max-width: 1001px) {
    display: flex;
    justify-content: flex-start;
  }
  @media (max-width: 650px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Col6 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 48%;
  flex: 0 0 48%;
  max-width: 48%;
  @media (max-width: 1024px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

// const Col2 = styled.div`
//   display: none;
//   @media (max-width: 1001px) {
//     display: block;
//     -webkit-box-flex: 0;
//     -ms-flex: 0 0 192px;
//     flex: 0 0 192px;
//     max-width: 192px;
//   }
//   @media (max-width: 650px) {
//     display: none;
//   }
// `;

// const ColAuto = styled.div`
//   display: none;
//   @media (max-width: 1001px) {
//     display: block;
//     -webkit-box-flex: 0;
//     -ms-flex: 0 0 61%;
//     flex: 0 0 61%;
//     max-width: 61%;
//     margin-left: 40px;
//   }
//   @media (max-width: 650px) {
//     display: none;
//   }
// `;

const Div = styled.div`
  display: flex;
  width: 90%;
  @media (max-width: 555px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Div1 = styled.div`
  display: block;
  width: 70%;
  @media (max-width: 555px) {
    width: 98%;
  }
`;

const Col4 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 60%;
  flex: 0 0 60%;
  max-width: 60%;
  @media (max-width: 1001px) {
    //display: none;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (max-width: 650px) {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Col8 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40%;
  flex: 0 0 40%;
  max-width: 40%;
  @media (max-width: 1001px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const GoodMorningDiv = styled.div`
  width: 100%;
  height: 208px;
  // margin-top: 64px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  background-image: url(${GoodMorning});
`;

const Wrapper = styled.div`
  // padding-left: 40px;
  margin-top: 100px;
  padding-right: 40px;
  margin-left: 113px;
  @media (max-width: 1001px) {
    margin-left: 0;
    //padding-left: 40px;
  }
  .react-multi-carousel-item {
    width: 232px !important;
  }
  .react-multi-carousel-item div {
    width: 192px;
  }
  @media (max-width: 1263px) {
    margin-left: 40px !important;
    margin-bottom: 100px;
  }
`;

const InternDiv = styled.div<{
  source: string | undefined;
}>`
  background: url(${(props) => props.source});
  border-radius: 12px;
  height: 190px;
  background-repeat: no-repeat;
  position: relative;
`;

const RegularText = styled.p`
  padding: 0px 16px 0px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  margin-bottom: 0;
  margin-top: 0;
  color: #4b4b4b;
`;

const ViewScorecardButton = styled.button`
  background: #3c54af;
  color: white;
  display: block;
  height: 36px;
  width: 192px;
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  border: none;
  cursor: pointer;
`;
