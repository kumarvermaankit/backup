import * as React from 'react';
import styled from 'styled-components';
import { Text, Icon, Button } from '@indywise/uikit';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ISubscription } from '../../interfaces/ISubscription';
import { useBookingModal } from '../../contexts/BookingModalContext';
import { stopBubbling } from '../../utils/helpers';

export interface ISubscriptionListItemProps extends RouteComponentProps {
  subscription: ISubscription;
}

const SubscriptionListItem: React.FC<ISubscriptionListItemProps> = (props) => {
  const { subscription } = props;
  const { openBookingModal } = useBookingModal();

  const showSubscriptionModal = (e: any) => {
    stopBubbling(e);
    openBookingModal(subscription.service, '', 3);
  };

  const gotoSubscriptionCardPage = (e: any) => {
    props.history.push(`/subscription/${subscription.slug || subscription.id}`);
  };

  return (
    <Card onClick={(e: any) => gotoSubscriptionCardPage(e)}>
      <LeftPart
        background={subscription.background}
        outline={subscription.outline}
      >
        <Icon icon="degree" size="8vw" />
      </LeftPart>
      <RightPart>
        <Text type="title" bold size="24px">
          {subscription.title}
        </Text>
        <Description>
          <Icon icon="institute" size="24px" />
          <Text type="body">
            {`${subscription.noOfSessions} Sessions (1 Hour each)`}
          </Text>
        </Description>
        <Description>
          <Icon icon="info" size="24px" />
          <Text type="paragraph">{subscription.description}</Text>
        </Description>
      </RightPart>
      <SessionPrice>
        <Flex>
          <Text type="body" size="16px">
            Special Price -
          </Text>
          <Icon icon="rupee" size="32px" />
          <Text type="body" size="36px" style={{ margin: '0 6px' }}>
            {subscription.specialPrice}
          </Text>
          <Text type="body" size="16px">
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
            text="Book Subscription Package"
            onClick={showSubscriptionModal}
          />
        </BookNowButtonContainer>
      </SessionPrice>
    </Card>
  );
};

export default withRouter(SubscriptionListItem);

const Card = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.349);
  border-radius: 10px;
  display: flex;
  margin: 0 0 2rem 0;
  position: relative;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    width: 90%;
    height: auto;
    margin: auto auto 4vh auto;
    display: grid;
  }
`;

const LeftPart = styled.div<{ background?: string; outline?: string }>`
  padding: 24px 0 0 0;
  width: 15vw;
  text-align: center;

  i,
  span {
    svg {
      rect {
        fill: ${(props) => props.background};
      }
      g {
        path {
          fill: ${(props) => props.outline};
        }
      }
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const RightPart = styled.div`
  width: 55vw;
  margin: 4vh 0vw;

  @media (max-width: 700px) {
    width: 90%;
    margin: 4vh 0vw 0vh 6vw;

    h1 {
      margin: 0vh 0 4vh 0;
    }
  }
`;

const SessionPrice = styled.div`
  width: 30vw;
  margin: 4vh 2vw 4vh 0vw;

  @media (max-width: 700px) {
    width: 100%;
    margin: 4vh auto 4vh 6vw;
  }
`;

const Flex = styled.div`
  display: flex;
  float: right;

  span {
    margin-top: -6px;
  }

  @media (max-width: 700px) {
    float: none;
  }
`;

const DiscountFlex = styled.div`
  display: flex;
  margin-bottom: 2vw;
  margin-top: 2vw;
  align-items: center;
  margin-left: 11vw;
  width: fit-content;

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
  margin-top: 2vh;
  float: right;

  i,
  span {
    margin-top: -6px;
  }

  @media (max-width: 700px) {
    float: none;
  }
`;

const Description = styled.div`
  display: flex;
  margin-top: 18px;
  p {
    margin: 0px 16px;
    line-height: 24px;
  }

  @media (max-width: 700px) {
    margin: 2vh auto;

    p {
      margin: 0px 4vw;
    }
  }
`;
