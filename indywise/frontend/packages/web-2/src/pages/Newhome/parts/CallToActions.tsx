import * as React from 'react';
import styled from 'styled-components';
import { IconTypes } from '@indywise/uikit';
import browseMentors from '../../../assets/browseMentors.png';
import Card from '../../../components/CallToActionCard';
import { Link } from 'react-router-dom';

interface ICallToActionsProps {
  type?: 'dark';
}
const CallToActions: React.FC<ICallToActionsProps> = (props) => {
  const cardBgColor = props.type === 'dark' ? '#0c3559' : '#ffffff';
  const iconBgColor = props.type === 'dark' ? '#EAF3FA' : '#FAEFD9';
  const textColor = props.type === 'dark' ? '#FFFFFF' : '#0C3559';

  const joinMentorIcon = ((
    <img src={browseMentors} alt="browse mentors" />
  ) as unknown) as IconTypes;

  return (
    <Wrapper type={props.type}>
      <CardWrapper>
        <Link to="/wiseup">
          <Card
            icon="secureJob"
            title="WiseUp Upskilling"
            subTitle="Supercharge your career."
            cardBgColor={cardBgColor}
            iconBgColor={iconBgColor}
            textColor={textColor}
          />
        </Link>
      </CardWrapper>
      <CardWrapper>
        <Link to="/mentors">
          <Card
            icon="browseMentors"
            title="Get Mentoring"
            subTitle="Book 1:1 sessions. Subscriptions."
            cardBgColor={cardBgColor}
            iconBgColor={iconBgColor}
            textColor={textColor}
          />
        </Link>
      </CardWrapper>
      <Link to="/join-as-a-mentor">
        <Card
          icon={joinMentorIcon}
          title="Join as a Mentor"
          subTitle="Get paid and recognized."
          cardBgColor={cardBgColor}
          iconBgColor={iconBgColor}
          textColor={textColor}
        />
      </Link>
    </Wrapper>
  );
};

export default CallToActions;

const Wrapper = styled.div<{ type?: string }>`
  z-index: 1;
  max-width: 100%;
  height: fit-content;
  display: flex;
  margin: ${(props) =>
    props.type === 'dark' ? '0 auto 20vh auto' : '-50vh auto 20vh auto'};

  a {
    text-decoration: none;
  }

  @media (max-width: 530px) {
    flex-direction: column;
    margin: ${(props) =>
      props.type === 'dark' ? 'auto auto 8rem auto' : '-30rem auto 20px auto'};
    position: inherit;
  }
`;

const CardWrapper = styled.div`
  margin-right: 2vw;

  @media (max-width: 530px) {
    margin: 0 auto 2rem auto;
  }
`;
