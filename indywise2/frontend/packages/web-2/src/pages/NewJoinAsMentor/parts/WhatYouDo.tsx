import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import WhatYouDoMentor from '../../../assets/WhatYouDoMentor.svg';
import AOS from 'aos';

const contentData = [
  {
    head: '1:1 Mentoring Sessions',
    body:
      'Mentees can discover and book 1-1 sessions with you to obtain desired skills / expertise / goals'
  },
  {
    head: 'WiseUp Upskilling ',
    body:
      'We pair you with a mentee (student/professional) to upskill, offer a friendly hand to help him in the program journey with live, unlimited mentoring, course recommendations, and much more'
  },
  {
    head: 'Coaching',
    body:
      'Mentees can buy a long term outcome based personalized mentoring program'
  },
  {
    head: 'Mentored Internships',
    body:
      'You will be assigned to every intern to upskill, advise and guide the intern for the work delivery, professional development and efficient working'
  }
];

const WhatYouDo: React.FC<{ showModal: () => void }> = ({ showModal }) => {
  const [curState, setCurState] = React.useState(0);

  const setActive = (id: number) => {
    setCurState(id);
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Wrapper>
        <Container>
          <Head data-aos="fade" data-aos-delay="100">
            <Text type="h1">What will you do as a Mentor?</Text>
            <Text type="h2">
              Primarily there are four levels of engagements for mentors at
              IndyWise platform
            </Text>
          </Head>
          <Menu data-aos="fade" data-aos-delay="200">
            <Link
              className={curState === 0 ? 'active' : ''}
              onClick={() => setActive(0)}
            >
              1:1 Mentoring Sessions
            </Link>
            <Link
              className={curState === 1 ? 'active' : ''}
              onClick={() => setActive(1)}
            >
              WiseUp Upskilling
            </Link>
            <Link
              className={curState === 2 ? 'active' : ''}
              onClick={() => setActive(2)}
            >
              Coaching
            </Link>
            {/* <Link
              className={curState === 3 ? 'active' : ''}
              onClick={() => setActive(3)}
            >
              Mentored Internships
            </Link> */}
          </Menu>
          <Content data-aos="fade-up" data-aos-delay="300">
            <Data>
              <Text type="h1">{contentData[curState].head}</Text>
              <Text type="h2">{contentData[curState].body}</Text>
              <Button color="primary" onClick={showModal}>
                Join as a Mentor
              </Button>
            </Data>
            <ImageContainer>
              <img src={WhatYouDoMentor} alt="WhatYouDoMentor" />
            </ImageContainer>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default WhatYouDo;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #eaf3fa;
  @media (max-width: 320px) {
    height: auto;
    padding: 40px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Head = styled.div`
  padding: 0 0 40px 0;
  h1 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #074e4d;
    padding: 0 0 16px 0;
  }

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #727272;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }
    h2 {
      font-size: 14px;
      line-height: 24px;
    }
  }
  @media (max-width: 540px) {
    h1 {
      font-size: 24px;
      line-height: 32px;
    }
    h2 {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  width: 800px;
  justify-content: space-between;
  background: #fff;
  border-radius: 32px;
  padding: 8px;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 320px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 320px) {
    width: 280px;
  }
`;

const Link = styled.div`
  color: #0c3559;
  width: 200px;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 8px;

  &.active {
    color: #fff;
    background: #0c3559;
    border-radius: 32px;
  }

  @media (max-width: 1024px) {
    width: 95%;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 540px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Content = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0 0 0;

  @media (max-width: 1024px) {
    width: 80%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const Data = styled.div`
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #074e4d;
    padding: 0 0 16px 0;
  }
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #4b4b4b;
    padding: 0 0 24px 0;
  }
  button {
    width: max-content;
    padding: 8px 16px;
    color: #042039;
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    padding-right: 0px;

    h1 {
      font-size: 24px;
      line-height: 32px;
    }
    h2 {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 16px;
      line-height: 24px;
    }
    h2 {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
