import * as React from 'react';
import styled from 'styled-components';
import { IconTypes } from '@indywise/uikit';
import Card from '../../../components/CallToActionCard';
import browseMentors from '../../../assets/browseMentors.png';

const CallToActions: React.FC = (props) => {
  const cardBgColor = '#ffffff';
  const iconBgColor = '#FAEFD9';
  const textColor = '#0C3559';

  const joinMentorIcon = ((
    <img src={browseMentors} alt="browse mentors" />
  ) as unknown) as IconTypes;

  return (
    <Wrapper>
      <CardWrapper>
        <Card
          icon="isaTailored"
          title="Earn Stipend"
          cardBgColor={cardBgColor}
          iconBgColor={iconBgColor}
          textColor={textColor}
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          icon="rupeeCrossed"
          title="Zero Fees"
          cardBgColor={cardBgColor}
          iconBgColor={iconBgColor}
          textColor={textColor}
        />
      </CardWrapper>
      <Card
        icon={joinMentorIcon}
        title="Global Internships"
        cardBgColor={cardBgColor}
        iconBgColor={iconBgColor}
        textColor={textColor}
      />
    </Wrapper>
  );
};

export default CallToActions;

const Wrapper = styled.div`
  z-index: 1;
  max-width: 100%;
  height: fit-content;
  display: flex;
  margin: -50vh auto 20vh auto;

  a {
    text-decoration: none;
  }

  @media (max-width: 530px) {
    flex-direction: column;
    margin: -30rem auto 20px auto;
    position: inherit;
  }
`;

const CardWrapper = styled.div`
  margin-right: 2vw;

  @media (max-width: 530px) {
    margin: 0 auto 2rem auto;
  }
`;
