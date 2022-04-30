import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
// import TPVP1 from '../../../assets/TPVP1.svg';
import TPVP2 from '../../../assets/TPVP2.svg';
import TPVP3 from '../../../assets/TPVP3.svg';

const ValueProposition: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <Text type="h2" color="#262626" size="48px">
            Value Proposition
          </Text>
          <Contain>
            <Left>
              <img src={TPVP2} alt="Value Prop 2" />
              <Text type="title" bold color="#262626">
                FREE Access
              </Text>
              <Text type="body" color="#4B4B4B">
                Access to the pool is absolutely free! You can hire, negotiate,
                and become your own headhunter
              </Text>
            </Left>
            <Left>
              <img src={TPVP3} alt="Value Prop 3" />
              <Text type="title" bold color="#262626">
                Quality Skilled Interns
              </Text>
              <Text type="body" color="#4B4B4B">
                In a fund crunch? Get quality skilled Interns and if you see
                potential why not get WiseUp to turn them into highly effective,
                engaged and productive full time employees
              </Text>
            </Left>
          </Contain>
        </div>
      </Container>
    </>
  );
};

export default ValueProposition;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  div {
    h2 {
      margin: auto 10vw 5vh 10vw;
    }
  }

  @media (max-width: 768px) {
    height: 100%;

    div {
      width: 100%;
      h2 {
        margin: 5vh auto;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
      }
    }
  }
`;

const Contain = styled.div`
  display: flex;
  margin: auto 10vw;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
    width: auto !important;
    margin: 10vh 24px;
  }
`;

const Left = styled.div`
  width: 45%;
  text-align: center;

  img {
    margin-bottom: 3vh;
  }

  h1 {
    margin-bottom: 16px;
  }

  p {
    line-height: 28px;
  }

  @media (max-width: 770px) {
    p {
      margin-bottom: 5vh;
    }
  }
`;
