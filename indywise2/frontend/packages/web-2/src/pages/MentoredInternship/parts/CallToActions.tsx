import * as React from 'react';
import styled from 'styled-components';
import Card from '../../../components/CallToActionCard';

const CallToActions: React.FC = (props) => {
  const cardBgColor = '#ffffff';
  const iconBgColor = '#FAEFD9';
  const textColor = '#0C3559';

  return (
    <Wrapper>
      <CardWrapper>
        <Card
          icon="earnStipend"
          title="Earn Stipend"
          cardBgColor={cardBgColor}
          iconBgColor={iconBgColor}
          textColor={textColor}
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          icon="zeroFees"
          title="Zero Fees"
          cardBgColor={cardBgColor}
          iconBgColor={iconBgColor}
          textColor={textColor}
        />
      </CardWrapper>
      <Card
        icon="globalInternships"
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

  div {
    span {
      svg {
        height: 7vw;
        width: 7vw;
      }
    }
  }

  @media (max-width: 530px) {
    flex-direction: column;
    margin: -30rem auto 80px auto;
    position: inherit;

    div {
      span {
        svg {
          height: 20vw;
          width: 20vw;
        }
      }
    }
  }
`;

const CardWrapper = styled.div`
  margin-right: 2vw;

  @media (max-width: 530px) {
    margin: 0 auto 2rem auto;
  }
`;
