import React from 'react';
import styled from 'styled-components';

import { IMentorUpdated } from '../../../interfaces/IMentor';

const About: React.FC<{ mentor: IMentorUpdated }> = (props) => {
  const mentor = props.mentor;
  const { about } = mentor;

  return (
    <Main>
      <HeadText>About</HeadText>
      <AboutSubtitle>
        {about &&
          about.split('\n')?.length &&
          about.split('\n').map((value, index) => {
            return (
              <React.Fragment key={index}>
                {value}
                <br />
              </React.Fragment>
            );
          })}
      </AboutSubtitle>
    </Main>
  );
};

const Main = styled.div`
  margin-right: 40px;
  margin-left: 64px;

  @media (max-width: 415px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`;

const AboutSubtitle = styled.p`
  // margin-right: 3rem;
  font-size: 16px;
  font-family: Roboto;
  line-height: 28px;
  color: #4b4b4b;
  @media (max-width: 767px) {
    margin-right: 0;
  }
`;

const HeadText = styled.p`
  font-size: 24px;
  line-height: 32px;
  font-family: Mulish;
  font-weight: 700;
  color: #262626;
  @media (max-width: 415px) {
    margin-top: 40px;
    margin-bottom: 0;
  }
`;

export default About;
