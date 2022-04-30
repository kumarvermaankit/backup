import React, { useEffect } from 'react';
import { PageView, initGA } from '../Tracking';
import SubscriptionItem from './SubscriptionItem';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { SubscriptionsContext } from '../../contexts/SubscriptionsContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';
import Search from './parts/Search';
import Ribbon from '../../components/Ribbon';

import { ISubscription } from '../../interfaces/ISubscription';
import { Helmet } from 'react-helmet';

const SubscriptionsList: React.FC = () => {
  const { getSubscriptions } = React.useContext(SubscriptionsContext);
  const [subscriptionsList, setSubscriptionsList] = React.useState(
    [] as Array<any>
  );
  const [loading, setLoading] = React.useState(true);
  const subscriptions = getSubscriptions();

  useEffect(() => {
    initGA();
    PageView('Subscriptions');
  }, []);

  useEffect(() => {
    setLoading(true);
    setSubscriptionsList(subscriptions);
    setLoading(false);
  }, [subscriptions]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>Buy Subscription Package - IndyWise</title>
      </Helmet>
      <Ribbon text="Subscription Packages" />
      <Header />
      <Wrapper>
        <HeadingContainer>
          <Text type="hl"></Text>
        </HeadingContainer>
        <SearchFlex>
          <Search />
        </SearchFlex>
        <ListWrapper>
          {subscriptionsList?.length && subscriptionsList.length > 0
            ? subscriptionsList.map((subscription: ISubscription) => {
                return (
                  <SubscriptionItem
                    subscription={subscription}
                    key={subscription.id}
                  />
                );
              })
            : null}
        </ListWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default SubscriptionsList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  margin: 0 auto;
  user-select: none;

  @media (max-width: 530px) {
    width: 100vw;
  }
`;

const SearchFlex = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 530px) {
    display: inherit;
    justify-content: unset;
  }
`;

const HeadingContainer = styled.div`
  h1 {
    text-align: center;
    font-size: 5rem;
    line-height: 7.5rem;
    margin: 12.5rem 0 2.5rem 0;
  }

  @media (max-width: 530px) {
    h1 {
      margin: 6rem 0 2.5rem 0;
    }
  }
`;

const ListWrapper = styled.div`
  margin: 1.5rem 0 5rem 0;
`;
