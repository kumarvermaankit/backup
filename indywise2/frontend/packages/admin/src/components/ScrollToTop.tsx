import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

// This component will make sure when we use `Link` from `react-router-dom`
// we make sure the scroll is at the top of the page instead of staying at
// the same position as it was on the previous page.
const ScrollToTop: React.FC<RouteComponentProps> = ({ history }) => {
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default withRouter(ScrollToTop);
