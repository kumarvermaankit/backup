import ReactGA from 'react-ga';

// Method to initialize
export const initGA = () => {
  ReactGA.initialize('UA-177199613-1');
};

// To know where our users going
export const PageView = (page: string) => {
  ReactGA.pageview(page);
};

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const Event = (category: string, action: string, label: string) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};
