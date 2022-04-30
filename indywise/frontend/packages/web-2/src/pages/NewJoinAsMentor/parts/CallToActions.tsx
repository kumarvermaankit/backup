import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text, Icon, IconTypes } from '@indywise/uikit';
import { CallToAction } from '../constants/data';
import AOS from 'aos';

let i = 0;
const CallToActions: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Container>
        <Wrap>
          <Contain>
            {CallToAction.map((data) => {
              i = i + 150;
              return (
                <Each data-aos="fade-up" data-aos-delay={i}>
                  <Icon icon={data.icon as IconTypes} size="160px" />
                  <Text type="h3" color="#074E4D" size="32px">
                    {data.title}
                  </Text>
                  <Text type="subtitle" color="#074E4D" size="16px">
                    {data.subtitle}
                  </Text>
                </Each>
              );
            })}
          </Contain>
        </Wrap>
      </Container>
    </>
  );
};

export default CallToActions;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #eaf3fa;

  h2 {
    margin: 15vh auto 10vh auto;
    text-align: center;
  }

  @media (max-width: 770px) {
    h2 {
      margin: 10vh auto;
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem 0;
  }
`;

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;

  @media (max-width: 1024px) {
    height: auto;
    display: block;
    width: auto;
  }
`;

const Contain = styled.div`
  display: flex;
  margin: auto 8vw;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: block;
    margin: 10vh auto;
  }
`;

const Each = styled.div`
  width: 28vw;
  text-align: center;

  span {
    svg {
      margin-bottom: 24px;
    }
  }

  h2 {
    margin: 16px auto;
    font-weight: normal;
    line-height: 28px;
  }
  a {
    color: rgb(161, 106, 6);
    p {
      margin-top: -2vh;
    }
  }

  @media (max-width: 1024px) {
    width: auto;

    span {
      svg {
        width: 120px;
        height: 120px;
      }
    }

    h2 {
      margin: 16px auto 40px auto;
    }
  }

  @media (max-width: 530px) {
    width: auto;
    margin: auto 24px;

    span {
      svg {
        width: 80px;
        height: 80px;
      }
    }

    h3 {
      font-size: 20px;
      line-height: 28px;
    }

    h2 {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
