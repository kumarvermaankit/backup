import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import { HashLink } from 'react-router-hash-link';
import { SubscriptionsContext } from '../../../contexts/SubscriptionsContext';
import { ISubscription } from '../../../interfaces/ISubscription';
import CustomCarousel from './CustomCarousel';

const OtherPackages: React.FC<{ subscription: ISubscription }> = (props) => {
  const subscription = props.subscription;
  const { getOtherPackages } = React.useContext(SubscriptionsContext);
  const otherPackages = getOtherPackages(subscription.id);

  return (
    <>
      <Wrapper>
        <Text type="h2" size="1.5vw">
          Other Packages
        </Text>
        <Show>
          <HashLink to="/subscriptions" style={{ textDecoration: 'none' }}>
            <Text type="h2" size="1.5vw">
              Show all
            </Text>
            <Icon size="3vw" icon="arrowAmber" />
          </HashLink>
        </Show>
      </Wrapper>
      <CardWrapper>
        <CustomCarousel>
          {otherPackages?.length > 0
            ? otherPackages.map((op: any) => (
                <Card key={op.id}>
                  <Line />
                  <HashLink
                    to={`/subscription/${op.slug || op.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Text type="body" size="1.2vw">
                      {op.title}
                    </Text>
                  </HashLink>
                </Card>
              ))
            : null}
        </CustomCarousel>
      </CardWrapper>
    </>
  );
};

export default OtherPackages;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  float: right;
  margin-right: 2vw;

  @media (max-width: 768px) {
    float: unset;
    width: 100%;

    h2 {
      font-size: 2.5vw;
    }
  }

  @media (max-width: 530px) {
    h2 {
      font-size: 4vw;
    }
  }
`;

const Show = styled.div`
  a {
    display: flex;
    align-items: center;
  }

  h2 {
    color: #a16a06;
    margin-right: 1vw;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CardWrapper = styled.div`
  width: 85%;
  float: right;

  @media (max-width: 768px) {
    float: unset;
    width: 100%;
  }
`;

const Line = styled.div`
  width: 5vw;
  height: 0px;
  background: #f2a922;
  border: 3px solid #f2a922;
  margin-bottom: 1vh;

  @media (max-width: 768px) {
    border: 2px solid #f2a922;
    width: 8vw;
  }
`;

const Card = styled.div`
  width: 12vw;
  height: 12vh;
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(12, 53, 89, 0.2);
  border-radius: 20px;
  margin: 2vh 1vw 5vh 1vw;
  padding: 2vw;
  // border: 4px solid;
  // border-image-source: linear-gradient(225deg, #C396E9 -0.01%, rgba(240, 230, 249, 0) 99.99%);

  p {
    line-height: 3vh;
    text-align: left;
  }

  @media (max-width: 768px) {
    margin: 2vh auto 5vh auto;
    width: 20vw;
    height: 15vh;
    padding: 3vw;

    p {
      font-size: 2vw;
    }
  }

  @media (max-width: 530px) {
    width: 30vw;
    padding: 4vw;

    p {
      font-size: 3vw;
    }
  }
`;
