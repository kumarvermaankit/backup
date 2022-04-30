import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { Button } from './StepOne';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const OnFormComplete: React.FC<{ closeAction: () => void }> = (props) => {
  return (
    <CenterGrid>
      <Title>You’re done !</Title>
      <Text>
        Thanks for filling out this form. We really appreciate your efforts. Our
        Mentor Experience Team will get back to you after your application is
        reviewed. You would be assigned a tier and a pay band for your hourly
        sessions.
      </Text>
      <Link to="/support/terms" style={{ textDecoration: 'none' }}>
        <LinkUI>Know more</LinkUI>
        <ArrowForwardIosIcon
          fontSize="small"
          style={{ transform: 'translateY(5px)', color: '#a16a06' }}
        />
      </Link>
      <Button onClick={props.closeAction}>Close</Button>
    </CenterGrid>
  );
};

export default OnFormComplete;

const CenterGrid = styled.div`
  box-sizing: border-box;
  max-width: 400px;
  align-self: center;
  justify-self: center;

  @media (max-width: 465px) {
    width: 100%;
    padding: 0 10px;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 0 15px;
  }
`;

const Title = styled.h1`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  color: #262626;
`;

const Text = styled.p`
  color: #4b4b4b;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
`;

const LinkUI = styled.a`
  text-decoration: underline;
  margin-top: 8px;
  color: #a16a06;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
