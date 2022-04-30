import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageView, initGA } from '../Tracking';
import styled from 'styled-components';
import { Text, Icon, Button } from '@indywise/uikit';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';
import { SubscriptionsContext } from '../../contexts/SubscriptionsContext';
import { ISubscription } from '../../interfaces/ISubscription';
import Accordion from './parts/Accordion';
import EngineeringImage from '../../assets/EngineeringImage.png';
import CaseImage from '../../assets/CaseImage.png';
import MbaImage from '../../assets/MbaImage.png';
import OtherPackages from './parts/OtherPackages';
import { Helmet } from 'react-helmet';
import { useBookingModal } from '../../contexts/BookingModalContext';
import { stopBubbling } from '../../utils/helpers';
import Ribbon from '../../components/Ribbon';

const SubscriptionPage: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const { openBookingModal } = useBookingModal();
  const [subscription, setSubscription] = React.useState<ISubscription>(
    {} as ISubscription
  );
  const [loading, setLoading] = React.useState(true);

  const { getSubscription } = React.useContext(SubscriptionsContext);
  const id = match.params.id;

  const showSubscriptionModal = (e: any) => {
    stopBubbling(e);
    openBookingModal(subscription.service, '', 3);
  };

  useEffect(() => {
    initGA();
    PageView('Subscriptions');
  }, []);

  useEffect(() => {
    setLoading(true);
    const data: ISubscription = getSubscription(id);

    if (!data) {
      // TODO: When we have a 404 page, we can show that instead of redirecting
      history.push('/subscriptions');
    } else if (data) {
      setSubscription(data);
    }

    setLoading(false);
  }, [getSubscription, id, history]);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Subscription Page - IndyWise</title>
        </Helmet>
        <LoadingScreen />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${subscription.title} - IndyWise`}</title>
        <meta name="description" content={subscription.description} />
      </Helmet>
      <Ribbon text="Subscription Package Description" />
      <Header headerColor="#ffffff" />
      <Wrapper>
        <LeftSide>
          <HeadingContainer>
            <Text type="h2" size="3vw">
              {subscription.title}
            </Text>
            <Text type="body" size="1.1vw">
              {subscription.description}
            </Text>
            <Flex>
              <Text type="body" size="1.5vw">
                Special Price -
              </Text>
              <Icon icon="rupee" size="2.5vw" />
              <Text type="subtitle" size="3vw" style={{ margin: '0 6px' }}>
                {subscription.specialPrice}
              </Text>
              <Text type="body" size="1.5vw">
                +GST
              </Text>
            </Flex>
            <DiscountFlex>
              <Icon icon="rupee" size="1vw" />
              <Text
                type="body"
                size="1.2vw"
                style={{ textDecoration: 'line-through' }}
              >
                {subscription.originalPrice}
              </Text>
              <Text type="body" size="1.2vw" style={{ margin: '0 6px' }}>
                {subscription.discount}
              </Text>
            </DiscountFlex>
            <BookNowButtonContainer>
              <Button
                text="Book Subscription"
                onClick={showSubscriptionModal}
              />
            </BookNowButtonContainer>
            <AccordionWrapper>
              <Accordion subscription={subscription} />
            </AccordionWrapper>
          </HeadingContainer>
          <MobileOtherPackagesWrapper>
            <OtherPackages subscription={subscription} />
          </MobileOtherPackagesWrapper>
        </LeftSide>
        <RightSide>
          <BgDiv background={subscription.background}>
            <Icon icon="subscriptionBg" size="45vw" />
          </BgDiv>
          <>
            {subscription.image === 'engineering' ? (
              <CourseImg src={EngineeringImage} alt="background" />
            ) : subscription.image === 'mba' ? (
              <CourseImg src={MbaImage} alt="background" />
            ) : (
              <CourseImg src={CaseImage} alt="background" />
            )}
          </>
          <OtherPackagesWrapper>
            <OtherPackages subscription={subscription} />
          </OtherPackagesWrapper>
        </RightSide>
      </Wrapper>
      <Footer />
    </>
  );
};

export default SubscriptionPage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  user-select: none;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const LeftSide = styled.div`
  width: 55%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightSide = styled.div`
  width: 45%;
  height: auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeadingContainer = styled.div`
  margin: 16vh 3vw 10vh 4vw;

  h2 {
    line-height: 4vw;
  }

  p {
    line-height: 2vw;
    margin-top: 1vh;
  }

  @media (max-width: 768px) {
    margin: 16vh 5vw 10vh 5vw;

    h2 {
      font-size: 6.5vw;
      line-height: 7vw;
    }

    p {
      line-height: 3vw;
      margin-top: 2vh;
      font-size: 2vw;
    }
  }

  @media (max-width: 530px) {
    margin: 10vh 5vw;

    h2 {
      font-size: 6.5vw;
      line-height: 7vw;
    }

    p,
    li {
      font-size: 4vw;
      line-height: 6vw;
      margin-top: 2vh;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  margin-top: 2vh;
  align-items: center;

  i {
    margin-top: -6px;
  }

  @media (max-width: 768px) {
    float: none;

    p {
      font-size: 2.5vw;
      margin-top: 0;
    }

    h2 {
      font-size: 4vw;
      margin-top: 0;
    }

    i {
      svg {
        width: 3vw;
        height: 3vw;
      }
    }
  }

  @media (max-width: 530px) {
    p {
      font-size: 4vw;
      line-height: 6vw;
    }

    h2 {
      font-size: 6vw;
      margin-top: 0;
    }

    i {
      margin-top: 2px;
      svg {
        width: 4vw;
        height: 4vw;
      }
    }
  }
`;

const DiscountFlex = styled.div`
  display: flex;
  margin-bottom: 2vh;
  align-items: center;
  margin-left: 10vw;

  p {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    p {
      font-size: 2.5vw;
      margin-top: 0;
    }

    span {
      svg {
        width: 2vw;
        height: 2vw;
      }
    }
  }

  @media (max-width: 530px) {
    p {
      font-size: 4vw;
      line-height: 6vw;
    }

    span {
      margin-top: 2px;
      svg {
        width: 3vw;
        height: 3vw;
      }
    }
  }
`;

const BookNowButtonContainer = styled.div`
  display: flex;
  button {
    padding: 1.5vh 4vw;
    height: auto;
    p {
      margin-top: 0;
      font-size: 1.5vw;
      color: #0c3559;
    }
  }

  @media (max-width: 768px) {
    button {
      p {
        font-size: 2.5vw;
      }
    }
  }

  @media (max-width: 530px) {
    button {
      width: 100%;
      p {
        font-size: 4vw;
      }
    }
  }
`;

const OtherPackagesWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileOtherPackagesWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 5vh 5vw;
  }
`;

const CourseImg = styled.img`
  width: 70%;
  margin: 16vh auto 0vh auto;

  @media (max-width: 768px) {
    width: 60%;
    margin: 20vh auto 0vh auto;
  }
`;

const BgDiv = styled.div<{ background?: string }>`
  position: fixed;
  z-index: -1;
  right: 0;
  bottom: 0;
  height: 100vh;

  i,
  span {
    svg {
      width: 45vw;
      height: 100%;

      path {
        fill: ${(props) => props.background};
      }
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 93%;
    transform: rotate(-90deg);
    height: auto;
    top: 0;
    bottom: unset;
    left: 0;

    i,
    span {
      svg {
        width: 100%;
        height: 100%;

        path {
          fill: ${(props) => props.background};
        }
      }
    }
  }
`;

const AccordionWrapper = styled.div`
  margin-top: 4vh;
`;
