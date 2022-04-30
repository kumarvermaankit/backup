import * as React from 'react';
import { Text } from '@indywise/uikit';
import HeadingContentSplit from './HeadingContentSplit';
import styled from 'styled-components';

const Intro: React.FC = () => {
  return (
    <Wrapper>
      <Text type="hl" bold size="5vw">
        Mentored Internships
      </Text>
      <OverviewSection>
        <HeadingContentSplit heading="Overview">
          <Text type="paragraph">
            IndyWise Mentored Internship is a unique reskilling and upskilling
            program. We help you secure a remote internship with companies
            worldwide, working on real enterprise projects, and we assign you a
            mentor who will ensure you get the most out of it.
          </Text>
          <Text type="paragraph" bold>
            Everybody deserves success.
          </Text>
        </HeadingContentSplit>
      </OverviewSection>
      <OtherSections>
        <HeadingContentSplit
          heading="30-120 Days"
          circleHeading
          circleColor="#DFF6F5"
        >
          <Text type="paragraph">
            Program duration for IMIP is 30-120 days.
          </Text>
        </HeadingContentSplit>
      </OtherSections>
      <OtherSections>
        <HeadingContentSplit
          heading="Stipend"
          circleHeading
          circleColor="#FBFCE4"
        >
          <Text type="paragraph">
            Earn a Stipend based on your weekly performance and KPI achievement.
          </Text>
        </HeadingContentSplit>
      </OtherSections>
      <OtherSections>
        <HeadingContentSplit heading="Time" circleHeading circleColor="#F5E4E6">
          <Text type="paragraph">20 - 25 hr/week</Text>
        </HeadingContentSplit>
      </OtherSections>
      <HeadingContentSplit
        heading="Mentoring"
        circleHeading
        circleColor="#E0F7EB"
      >
        <Text type="paragraph">
          1 mentoring session/week. Total 16 mentoring sessions.
        </Text>
      </HeadingContentSplit>
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 16vh;
  }

  @media (max-width: 530px) {
    h1 {
      margin-bottom: 10vh;
      font-size: 8vw;
      line-height: 8vh;
    }
  }
`;

const OverviewSection = styled.div`
  margin-bottom: 5vh;

  @media (max-width: 530px) {
    margin-bottom: 0;
    p {
      line-height: 5vh;
    }
  }
`;

const OtherSections = styled.div`
  margin-bottom: 7.5vh;

  @media (max-width: 530px) {
    margin: 0;
  }
`;
