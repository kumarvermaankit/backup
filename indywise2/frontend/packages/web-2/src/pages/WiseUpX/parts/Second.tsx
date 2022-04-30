import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Women from '../../../assets/Women.svg';
import { WiseUpXPageContext } from '../../../contexts/WiseUpXPageContext';
import AOSWrapper from '../../../components/AOSWrapper';

const Second: React.FC = () => {
  const { getWiseupXType } = React.useContext(WiseUpXPageContext);
  const wiseupXType = getWiseupXType();

  return (
    <>
      <Container>
        <Contain>
          <AOSWrapper styleValue="skew-anim">
            <Img>
              <img src={Women} alt="wise up we help you" />
            </Img>
          </AOSWrapper>
          {wiseupXType === 'student' ? (
            <TextBody>
              <Text type="h3" color="#262626">
                Hyper-personalised, Customised and Live.
              </Text>
              <Line />
              <Text type="body" color="#4B4B4B">
                A dedicated mentor with a friendly approach will help and guide
                you through your journey with live unlimited mentoring, course
                recommendations, CV building, interview preparedness, job search
                strategy and much more.
              </Text>
              <Text type="h3" color="#262626">
                We help you grow faster, stronger.
              </Text>
              <Line />
              <Text type="body" color="#4B4B4B">
                You don’t have to wait longer for that breakthrough success, we
                ensure you get the best results in the shortest amount of time.
              </Text>
            </TextBody>
          ) : (
            <TextBody>
              <Text type="h3" color="#262626">
                We help you grow faster, quicker.
              </Text>
              <Line />
              <Text type="body" color="#4B4B4B">
                We ensure you do what you love. Get the best in your
                professional career in the shortest amount of time. Get weekly
                reports based on their assessments and identify the pain points
                that are holding your performance back
              </Text>
              <Text type="h3" color="#262626">
                100% personalized, customized, live and mentoring driven.
              </Text>
              <Line />
              <Text type="body" color="#4B4B4B">
                We pair you with a dedicated mentor. Get a friendly hand to help
                you through your journey with live, unlimited mentoring, course
                recommendations, and much more
              </Text>
            </TextBody>
          )}
        </Contain>
      </Container>
    </>
  );
};

export default Second;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Line = styled.div`
  // border: 4px solid #f2a922;
  width: 64px;
  height: 4px;
  background: #f2a922;
  margin: 16px 0px;
  border-radius: 5px;
`;

const Contain = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;

  @media (max-width: 1300px) {
    width: 80%;
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 770px) {
    flex-direction: column-reverse;
  }
`;

const Img = styled.div`
  margin-right: 80px;

  @media (max-width: 1400px) {
    img {
      width: 300px;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const TextBody = styled.div`
  h1,
  h3 {
    margin-top: 3vh;
    font-weight: normal;
    margin-bottom: 4vh;
  }

  h3 {
    margin-bottom: 3vh;
  }

  p {
    line-height: 28px;
    margin: 3vh 0vw 6vh 2vw;
  }

  @media (max-width: 1024px) {
    width: 100%;

    h3 {
      font-size: 32px;
      line-height: 40px;
    }
    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (max-width: 530px) {
    h3 {
      font-size: 20px;
      line-height: 28px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
