import React from 'react';
import styled from 'styled-components';
import MentorsListItem from '../../MentorsList/parts/MentorsListItem';
import CustomCarousel from './CustomCarousel';
import { IMentorUpdated } from '../../../interfaces/IMentor';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';

const RelatedMentors: React.FC<{ mentor: IMentorUpdated }> = (props) => {
  const { getCurrency, getRelatedMentors } = React.useContext(
    NewMentorsListContext
  );

  const currency = getCurrency();

  // Get mentors which have same skills.
  let relatedMentors = getRelatedMentors(props.mentor.username);

  return (
    <Main>
      <HeadText>Related Mentors</HeadText>
      <div>
        <CustomCarousel section="NEW">
          {relatedMentors.map((mentor: IMentorUpdated) => {
            return (
              <MentorListItemDiv>
                <MentorsListItem
                  mentor={mentor}
                  key={mentor.ID}
                  page="card"
                  currency={currency}
                />
              </MentorListItemDiv>
            );
          })}
        </CustomCarousel>
      </div>
    </Main>
  );
};

export default RelatedMentors;

const Main = styled.div`
  margin-right: 40px;
  margin-left: 64px;

  @media (max-width: 415px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`;

const HeadText = styled.p`
  font-size: 24px;
  line-height: 32px;
  font-family: Mulish;
  font-weight: 700;
  color: #262626;
  margin-top: 40px;
  margin-bottom: 24px;
`;

const MentorListItemDiv = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media (max-width: 415px) {
    margin: 0 auto;
    width: 320px;
  }
`;
