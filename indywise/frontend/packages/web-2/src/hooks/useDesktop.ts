import * as React from 'react';

/**
 * This hook lets us know if the screen on which the app is being viewed is
 * mobile or desktop. We can use the output of this hook to display mobile
 * view or desktop view of our components or pages.
 *
 * @param width Width at which to consider the screen is mobile or desktop
 * @returns true if the current windows' inner width is greater than `width`
 * otherwise returns false
 */
export const useDesktop = (width: number) => {
  const initialState = () => {
    return window.innerWidth > width;
  };
  const [isDesktop, setIsDesktop] = React.useState(initialState());

  React.useEffect(() => {
    const handleResize = () => {
      window.innerWidth > width ? setIsDesktop(true) : setIsDesktop(false);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return isDesktop;
};
