import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Axios, { baseURL } from '../../../utils/Axios';
import { LocalStorage, SessionStorage } from '../../../utils/storage';

const Resources: React.FC = () => {
  const [mentees, setMentees] = React.useState<any[]>([]);
  const [photos, setPhotos] = React.useState<string[]>([]);
  // const [timeline, setTimeline] = React.useState<any[]>([]);

  const business = LocalStorage.getBusiness() || SessionStorage.getBusiness();
  const username = business?.username;

  const fetchMentees = async () => {
    if (business) {
      const res = await Axios.post(
        `${baseURL}/business/business/account/mentees/${username}`
      );
      const menteeIds = res?.data?.mentees?.map((mentee: any) => mentee.ID);
      setMentees(res?.data?.mentees);

      const profilePromises = menteeIds.map(async (mentee: number) =>
        Axios.get(`${baseURL}/profile/user-info?ID=${mentee}`)
      );

      // const timelinePromises = menteeIds.map(async (mentee: number) =>
      //   Axios.get(
      //     `https://dev-api.indywise.com/profile/assessment/assessment/business/all/${mentee}`
      //   )
      // );

      const res1 = await Promise.all(profilePromises);
      // const res2 = await Promise.all(timelinePromises);

      const photosRecieved = res1.map((item: any) => item.data.avatar.large);
      setPhotos(photosRecieved);

      // const timelineRecieved = res2.map((item: any) => 213);
      // setTimeline(timelineRecieved);
    }
  };

  React.useEffect(() => {
    fetchMentees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <GridContainer>
        {mentees.map((mentee: any, index: number) => (
          <Card mentee={mentee} source={photos[index]} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default Resources;

const Container = styled.div`
  /* margin-top: '2rem'; */
  padding: 2rem 0;

  @media (max-width: 820px) {
    padding-bottom: 3rem;
  }
`;

const GridContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 12px;
  justify-content: center;

  @media (max-width: 1160px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 675px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
