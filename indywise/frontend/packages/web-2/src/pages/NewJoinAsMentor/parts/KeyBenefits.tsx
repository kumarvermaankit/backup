import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text, Icon, IconTypes } from '@indywise/uikit';
import { KeyBenefitsA } from '../constants/data';
import AOS from 'aos';

let i = 0;
const KeyBenefits: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Container>
        <Wrap>
          <div>
            <div data-aos="fade" data-aos-delay="100">
              <Text type="hl" color="#074E4D" size="48px">
                Key Benefits
              </Text>
            </div>
            <Wrap data-aos="fade-up" data-aos-delay="100">
              <Contain>
                {KeyBenefitsA.map((data) => {
                  i++;
                  return (
                    <Each
                      ownColor={
                        data.icon === 'fulfilment' || data.icon === 'badge'
                      }
                      data-aos="fade-up"
                      data-aos-delay={i > 3 ? '200' : '100'}
                    >
                      <Icon icon={data.icon as IconTypes} size="80px" />
                      <Text type="h3" color="#262626" size="24px">
                        {data.title}
                      </Text>
                      <Text type="subtitle" color="#727272" size="14px">
                        {data.subtitle}
                      </Text>
                    </Each>
                  );
                })}
              </Contain>
            </Wrap>
          </div>
        </Wrap>
      </Container>
    </>
  );
};

export default KeyBenefits;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;

  h1 {
    margin: 64px auto;
    text-align: center;
    line-height: 56px;
  }

  @media (max-width: 1264px) {
    h1 {
      margin: 64px auto 24px auto;
    }
  }

  @media (max-width: 1024px) {
    min-height: auto;
    h1 {
      margin: 64px auto;
      font-size: 40px;
      line-height: 48px;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  div {
    h1 {
      font-weight: bold;
    }
  }

  @media (max-width: 1024px) {
    height: 100%;
    width: auto;
  }

  @media (max-width: 530px) {
    div {
      div {
        h1 {
          font-size: 32px;
          line-height: 40px;
        }
      }
    }
  }
`;

const Contain = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;

  @media (max-width: 530px) {
    width: 100%;
  }
`;

const Each = styled.div<{
  ownColor: boolean;
}>`
  width: 28vw;
  text-align: center;

  span {
    svg {
      width: auto;
      margin-bottom: 24px;
      path {
        fill: ${({ ownColor }) => (ownColor ? 'null' : '#127776')};
      }
      circle {
        stroke: ${({ ownColor }) => (ownColor ? 'null' : '#127776')};
      }
    }
  }

  h2 {
    margin: 8px auto 64px auto;
    font-weight: normal;
    line-height: 20px;
    width: 80%;
  }

  h3 {
    line-height: 32px;
  }

  @media (max-width: 1264px) {
    span {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 40vw;

    h3 {
      font-size: 20px;
      line-height: 28px;
    }

    h2 {
      margin: 8px auto 40px auto;
    }
  }

  @media (max-width: 530px) {
    h3 {
      font-size: 16px;
      line-height: 24px;
    }

    h2 {
      width: auto;
    }

    span {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
