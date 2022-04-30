import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export type WiseupXType = 'student' | 'professional';

interface IState {
  getWiseupXType: () => any;
  toggleToStudent: () => void;
  toggleToProfessional: () => void;
}

const defaultState: IState = {
  getWiseupXType: () => {},
  toggleToStudent: () => {},
  toggleToProfessional: () => {}
};

const WiseUpXPageContext = React.createContext(defaultState);

const WiseUpXPageProviderWithoutRouter: React.FC<RouteComponentProps> = (
  props
) => {
  const [wiseupXType, setWiseupXType] = React.useState<WiseupXType>('student');

  React.useEffect(() => {
    const unlisten = props.history.listen(() => {
      setWiseupXType('student');
    });

    return () => {
      unlisten();
    };
  }, [props.history]);

  const toggleToProfessional = () => {
    if (wiseupXType === 'student') {
      setWiseupXType('professional');
    }
  };

  const toggleToStudent = () => {
    if (wiseupXType === 'professional') {
      setWiseupXType('student');
    }
  };

  const getWiseupXType = (): string => {
    return wiseupXType;
  };

  return (
    <WiseUpXPageContext.Provider
      value={{
        getWiseupXType,
        toggleToStudent,
        toggleToProfessional
      }}
    >
      {props.children}
    </WiseUpXPageContext.Provider>
  );
};

const WiseUpXPageProvider = withRouter(WiseUpXPageProviderWithoutRouter);

export { WiseUpXPageContext, WiseUpXPageProvider };
