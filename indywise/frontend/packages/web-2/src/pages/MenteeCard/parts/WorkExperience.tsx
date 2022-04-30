import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';

import CustomCarousel from './CustomCarousel';
import WorkExperienceCard from './WorkExperienceCard';
import '../../../components/otherBenefits.css';
import menteeD from '../../../data/mentees-data.json';

const WorkExperience: React.FC = () => {
  const mentee = menteeD.data[0];
  const { employment } = mentee;

  return (
    <Container>
      <WorkExContainer>
        <CustomCarousel>
          {employment?.length ? (
            employment.map((m: any) => <WorkExperienceCard m={m} />)
          ) : (
            <Text type="subtitle" color="#4B4B4B">
              No Information regarding Employment
            </Text>
          )}
        </CustomCarousel>
      </WorkExContainer>
    </Container>
  );
};

export default WorkExperience;

const Container = styled.div`
  h4 {
    margin-top: 3em;
  }

  @media (max-width: 530px) {
    h4 {
      margin-top: 5vh;
    }
  }
`;

const WorkExContainer = styled.div`
  margin-top: 2.5em;

  @media (max-width: 530px) {
    margin-top: 5vh;
    div {
      ul {
        li {
          width: 90vw !important;
        }
      }
    }
  }
`;
