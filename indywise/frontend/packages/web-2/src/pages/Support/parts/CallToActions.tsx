import * as React from 'react';
import styled from 'styled-components';
import Card from '../../../components/CallToActionCard';
import { Link } from 'react-router-dom';

interface ICallToActionsProps {
  type?: 'dark';
}

const subtitleStyle = {
  fontSize: '24px',
  lineHeight: '32px',
  marginTop: '1em'
};

const CallToActions: React.FC<ICallToActionsProps> = (props) => {
  const cardBgColor = props.type === 'dark' ? '#0c3559' : '#ffffff';
  const iconBgColor = props.type === 'dark' ? '#EAF3FA' : '#EAF3FA';
  const textColor = props.type === 'dark' ? '#FFFFFF' : '#0C3559';

  return (
    <Wrapper>
      <CardWrapper>
        <Link to="/support/payment-policy">
          <Card
            icon="founders"
            title="Policies and Info"
            cardBgColor={cardBgColor}
            iconBgColor={iconBgColor}
            textColor={textColor}
            subtitleStyle={subtitleStyle}
          />
        </Link>
      </CardWrapper>
      <CardWrapper>
        <a
          href="mailto:hello@indywise.com?subject=I have a doubt regarding IndyWise&body=I would want to know more about IndyWise"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            icon="advisors"
            title="Contact Us"
            cardBgColor={cardBgColor}
            iconBgColor={iconBgColor}
            textColor={textColor}
            subtitleStyle={subtitleStyle}
          />
        </a>
      </CardWrapper>
      <Link to="/support/faq">
        <Card
          icon="partners"
          title="FAQ"
          cardBgColor={cardBgColor}
          iconBgColor={iconBgColor}
          textColor={textColor}
          subtitleStyle={subtitleStyle}
        />
      </Link>
    </Wrapper>
  );
};

export default CallToActions;

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  z-index: 1;
  height: fit-content;
  margin: -50vh auto 20vh auto;

  @media (max-width: 530px) {
    flex-direction: column;
    margin: -30rem auto 20px auto;
    position: inherit;
  }

  a {
    text-decoration: none;
  }
`;

const CardWrapper = styled.div`
  margin-right: 44px;

  @media (min-width: 1366px) and (max-width: 1599px) {
    margin-right: 2rem;
  }

  @media (max-width: 530px) {
    margin: 0 auto 2rem auto;
  }
`;
