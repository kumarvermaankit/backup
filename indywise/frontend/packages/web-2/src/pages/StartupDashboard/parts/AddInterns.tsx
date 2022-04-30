import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
// import { scorecards } from "./ViewScorecard";

const AddInterns: React.FC = () => {
  return (
    <Div>
      <RegularText>
        Add more of your Interns to
        <small
          style={{
            fontWeight: 700,
            fontFamily: 'Roboto',
            fontSize: '14px',
            lineHeight: '20px',
            color: 'black'
          }}
        >
          {' '}
          WiseUp
        </small>{' '}
        program
      </RegularText>
      <Link to="/startup/ourresources" style={{ textDecoration: 'none' }}>
        <ViewScorecardButton>Add Now</ViewScorecardButton>
      </Link>
      <RegularText style={{ marginTop: '12px' }}>OR</RegularText>
      <RegularText style={{ marginTop: '12px' }}>
        Find more Interns from our
        <small
          style={{
            fontWeight: 700,
            fontFamily: 'Roboto',
            fontSize: '14px',
            lineHeight: '20px',
            color: 'black'
          }}
        >
          {' '}
          Talent Pool
        </small>
      </RegularText>
      <Link
        to="/mentees"
        style={{ textDecoration: 'none', textAlign: 'center' }}
      >
        <ViewScorecardButton>Find Interns</ViewScorecardButton>
      </Link>
    </Div>
  );
};

export default AddInterns;

const Div = styled.div`
  background: linear-gradient(
    167.66deg,
    rgba(133, 151, 221, 0.43) -19.56%,
    rgba(229, 233, 246, 0.27) 121.35%
  );
  height: auto;
  border-radius: 12px;
  padding-top: 44px;
  padding-bottom: 44px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 40px;

  @media (max-width: 555px) {
    //margin-left: 16px;
    margin-left: 0;
    margin-bottom: 16px;
    margin-top: 40px;
  }
`;

const RegularText = styled.p`
  margin-top: 0;
  width: 100%;
  text-align: center;
  display: inline-block;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  color: #4b4b4b;
`;

const ViewScorecardButton = styled.button`
  background: #ffffff;
  color: #3c54af;
  display: block;
  //margin: 24px auto;
  margin: auto;
  height: 36px;
  width: 113px;
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  box-shadow: 0px 8px 16px 0px #11111129;
  border: none;
  cursor: pointer;
`;
