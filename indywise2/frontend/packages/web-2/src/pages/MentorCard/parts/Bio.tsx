import React from 'react';
import { Text, Icon, Avatar, SkillTag } from '@indywise/uikit';
import styled from 'styled-components';
import { IMentorUpdated } from '../../../interfaces/IMentor';
import goldBadge from '../../../assets/GoldBadge.svg';
import platinumBadge from '../../../assets/PlatinumBadge.svg';
import diamondBadge from '../../../assets/DiamondBadge.svg';
import indyfluencerBadge from '../../../assets/IndyfluencerBadge.svg';

const Bio: React.FC<{ mentor: IMentorUpdated }> = ({ mentor }) => {
  const totalSkills: number = mentor.skills.length;

  const skillRendered = mentor.skills
    .slice(0, totalSkills)
    .map((skill, index) => {
      return (
        <>
          <SkillTag skill={skill} key={index} style={{ margin: '2px' }} />
        </>
      );
    });

  const tierNames: any = {
    'Tier 1': 'Gold',
    'Tier 2': 'Diamond',
    'Tier 3': 'Platinum',
    'Tier X': 'Indyfluencer'
  };

  const badgeNames: any = {
    'Tier 1': 'goldBadge',
    'Tier 2': 'diamondBadge',
    'Tier 3': 'platinumBadge',
    'Tier X': 'indyfluencer'
  };

  let source;
  if (badgeNames[mentor?.tier && mentor?.tier[0]] === 'goldBadge') {
    source = goldBadge;
  } else if (badgeNames[mentor?.tier && mentor?.tier[0]] === 'platinumBadge') {
    source = platinumBadge;
  } else if (badgeNames[mentor?.tier && mentor?.tier[0]] === 'diamondBadge') {
    source = diamondBadge;
  } else {
    source = indyfluencerBadge;
  }

  return (
    <Main>
      <Row>
        <Col8>
          <Avatar
            src={mentor.avatar}
            size="120px"
            type="mentor"
            style={{
              margin: '0 24px 0 0'
            }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Name>{mentor.name}</Name>
              {mentor?.tier?.length > 0 ? (
                <>
                  {/* <Icon
                    icon={badgeNames[mentor?.tier[0]]}
                    style={{ marginLeft: '16px' }}
                  /> */}
                  <img
                    src={source}
                    alt="Badge name"
                    style={{ marginLeft: '16px' }}
                  />
                  <Text
                    color="#4B4B4B"
                    size="16px"
                    style={{ marginLeft: '8px' }}
                  >
                    {tierNames[mentor?.tier[0]]}
                  </Text>
                </>
              ) : null}
            </div>
            <Text type="body" color="#4B4B4B">
              {`${mentor?.portfolio?.location?.city} ${mentor?.portfolio?.location?.country}`}
            </Text>
            <Designation>
              {mentor?.portfolio?.currentEmployment?.designation}
              {mentor?.portfolio?.currentEmployment?.designation &&
                mentor?.portfolio?.currentEmployment?.companyName &&
                `,`}{' '}
              {mentor?.portfolio?.currentEmployment?.companyName}
            </Designation>
            <RateExp>
              <Icon icon="star" size="16px" />
              <Text type="paragraph">
                {mentor?.overAllRating}{' '}
                {mentor?.reviews && `(${mentor?.reviews?.length})`}
              </Text>
              <Icon icon="dot" size="0.25em" style={{ marginBottom: '1rem' }} />
              <Text type="paragraph">
                {mentor?.portfolio?.currentEmployment?.experience}y
              </Text>
            </RateExp>
            <MentorSkills>{skillRendered}</MentorSkills>
          </div>
        </Col8>
      </Row>
    </Main>
  );
};

export default Bio;

// Styles start

const Main = styled.div`
  margin-right: 64px;
  margin-left: 64px;

  @media (max-width: 415px) {
    margin-top: -100px;
    margin-right: 16px;
    margin-left: 16px;
  }
`;

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const Col8 = styled.div`
  display: flex;
  position: relative;
  min-height: 1px;

  @media (max-width: 1263px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 415px) {
    div {
      margin: 0px !important;
      img {
        margin: 0px !important;
      }
    }
  }
`;
const Name = styled.h2`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  margin: 0 0 4px 0;
`;

const Designation = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0 4px 0;
`;

const RateExp = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b4b;
    margin: 0 8px;
  }
  @media (max-width: 720px) {
    justify-content: center;
    align-items: center;
  }
`;

const MentorSkills = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    margin-top: 0.2rem;
  }
  @media (max-width: 720px) {
    margin-top: 0.2rem;
    justify-content: center;
    align-items: center;
  }
`;
