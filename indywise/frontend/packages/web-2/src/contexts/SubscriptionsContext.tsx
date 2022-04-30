import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Subscriptions from '../data/subscriptions.json';
import { ISubscription } from '../interfaces/ISubscription';

interface IState {
  // Returns the Subscriptions list with or without filters applied
  getSubscriptions: () => any;

  // Returns the data of a given Subscription
  getSubscription: (id: string) => any;

  // Returns the list of Subscriptions based on the search query text
  searchSubscriptions: (query: string) => any;

  // Returns the list of Subscriptions other than the selected one
  getOtherPackages: (query: string) => any;
}

const defaultState: IState = {
  getSubscriptions: () => {},
  getSubscription: (id: string) => {},
  searchSubscriptions: () => {},
  getOtherPackages: (id: string) => {}
};

const SubscriptionsContext = React.createContext(defaultState);

const SubscriptionsProviderWithoutRouter: React.FC<RouteComponentProps> = (
  props
) => {
  const [subscriptions, setSubscriptionsList] = React.useState<ISubscription[]>(
    []
  );
  const [query, setQuery] = React.useState('');
  const location = props.history.location.pathname;

  React.useEffect(() => {
    setSubscriptionsList(Subscriptions.data);
  }, []);

  React.useEffect(() => {
    setSubscriptionsList(Subscriptions.data);
    setQuery('');
  }, [location]);

  const getSubscriptions = () => {
    return subscriptions;
  };

  const getOtherPackages = (id: string) => {
    const otherPackages = subscriptions
      .filter((subscription) => subscription.id !== id)
      .map((f) => ({ title: f.title, id: f.id, slug: f.slug }));
    return otherPackages;
  };

  const getSubscription = (id: string): ISubscription => {
    const filteredArray = subscriptions.filter(
      (subscription) => subscription.id === id || subscription.slug === id
    );
    const subscription = filteredArray[0];
    return subscription;
  };

  const filterSubscriptionsBySearchQuery = (_query?: string) => {
    let subscriptions;

    // If the `_query` is not empty/blank we filter the subscriptions list
    if (_query) {
      subscriptions = Subscriptions.data.filter((subscription) => {
        return subscription.title.toLowerCase().includes(_query.toLowerCase());
      });
    } else if (_query === '') {
      // If the `_query` is blank/empty we reset the subscriptions list
      subscriptions = Subscriptions.data;
    } else {
      subscriptions = Subscriptions.data.filter((subscription) => {
        return subscription.title.toLowerCase().includes(query.toLowerCase());
      });
    }

    return subscriptions;
  };

  const searchSubscriptions = (query: string) => {
    setQuery(query);

    const filteredList = filterSubscriptionsBySearchQuery(query);

    setSubscriptionsList(filteredList);
  };

  return (
    <SubscriptionsContext.Provider
      value={{
        getSubscriptions,
        getSubscription,
        searchSubscriptions,
        getOtherPackages
      }}
    >
      {props.children}
    </SubscriptionsContext.Provider>
  );
};

const SubscriptionsProvider = withRouter(SubscriptionsProviderWithoutRouter);

export { SubscriptionsContext, SubscriptionsProvider };
