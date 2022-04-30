import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

import { PageView, initGA } from '../../pages/Tracking';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';
import {
  Bio,
  KPIScores,
  KPIMetrics,
  WorkExperienceCard
} from '../MenteeCard/parts';
import { MenteesListContext } from '../../contexts/MenteesListContext';
import menteeD from '../../data/mentees-data.json';

const MenteeCardPDF: React.FC<RouteComponentProps<{ username: string }>> = ({
  match,
  history
}) => {
  const [menteeData, setMenteeData] = React.useState<any>({} as any);
  const [loading, setLoading] = React.useState(true);
  const mentee = menteeD.data[0];
  const { employment } = mentee;

  const { getMentee, fetchingList } = React.useContext(MenteesListContext);
  const username = match.params.username;

  useEffect(() => {
    initGA();
    PageView('Mentee Card');
  }, []);

  useEffect(() => {
    setLoading(true);

    if (!fetchingList) {
      const data: any = getMentee(username);
      if (!data) {
        // TODO: When we have a 404 page, we can show that instead of redirecting
        history.push('/mentees');
      }
      setMenteeData(data);
      setLoading(false);
    }
  }, [getMentee, username, history, fetchingList]);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Mentee - IndyWise</title>
        </Helmet>
        <LoadingScreen />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${menteeData.fullName} - IndyWise`}</title>
        <meta name="description" content={menteeData.objective} />
      </Helmet>
      <Header />
      <Root>
        <Text type="h3" color="#0C3559">
          Mentee Profile
        </Text>
        <Container>
          <Wrapper>
            <Bio mentee={menteeData} type="pdf" />
          </Wrapper>
          <Card>
            <Text type="h4" color="#262626">
              KPI Aggregate Scores
            </Text>
            <WrapperScores>
              <KPIScores />
            </WrapperScores>
          </Card>
        </Container>
        <Contain>
          <Text type="h4" style={{ marginBottom: '4vh' }} color="#262626">
            All KPI Metrics
          </Text>
          <Grid>
            <KPIMetrics />
          </Grid>
        </Contain>
        <Contain>
          <Text type="h4" style={{ marginBottom: '4vh' }} color="#262626">
            Work Experience
          </Text>
          <>
            {employment?.length ? (
              employment.map((m: any) => (
                <WorkExperienceCard m={m} type="pdf" />
              ))
            ) : (
              <Text type="subtitle" color="#4B4B4B">
                No Information regarding Employment
              </Text>
            )}
          </>
        </Contain>
        <Contain>
          <Text type="h4" style={{ marginBottom: '4vh' }} color="#262626">
            Studies
          </Text>
          <>
            {employment?.length ? (
              employment.map((m: any) => (
                <WorkExperienceCard m={m} type="pdf" />
              ))
            ) : (
              <Text type="subtitle" color="#4B4B4B">
                No Information regarding Employment
              </Text>
            )}
          </>
        </Contain>
      </Root>
      <Footer />
    </>
  );
};

export default MenteeCardPDF;

const Root = styled.div`
  margin: 20vh auto;

  h3 {
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92vw;
  margin: 5vh auto auto auto;

  @media (max-width: 530px) {
    display: block;
  }
`;

const Contain = styled.div`
  width: 92vw;
  margin: 5vh auto auto auto;
`;

const Grid = styled.div`
  display: grid;
  column-gap: 5%;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 64vw;

  @media (max-width: 530px) {
    width: 90vw;
  }
`;

const WrapperScores = styled.div`
  margin: 3vh 0vw;
  overflow-y: auto;
  height: auto;

  @media (max-width: 530px) {
    display: block;
    max-height: 50vh;
  }
`;

const Card = styled.div`
  height: fit-content;
  width: 21vw;
  padding: 2vw 2vw 0vw 2vw;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 20px;

  @media (max-width: 530px) {
    height: auto;
    width: auto;
    margin-top: 5vh;
    padding: 2vh 5vw 4vh 5vw;
  }
`;
