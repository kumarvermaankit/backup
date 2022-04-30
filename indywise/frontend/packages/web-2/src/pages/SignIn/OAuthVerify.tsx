import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { IOAuthData } from '../../interfaces/IOAuth';
import { decodeStrToObj } from '../../utils/helpers';
import LoadingScreen from '../../components/LoadingScreen';

const OAuthVerify: React.FC = () => {
  const [errMsg, setErrMsg] = React.useState('');
  const { signinUserWithOAuthData, user, setSigninError } = useAuth();
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    if (user) {
      history.push('/');
      return;
    }

    let OAuthData: IOAuthData | null = null;
    const params = new URLSearchParams(location.search);
    const err = params.get('err');
    const dataAsString = params.get('data');
    const dataAsObj = dataAsString && decodeStrToObj(dataAsString);

    if (!dataAsString && !err) {
      setErrMsg('Invalid URL');
    } else if (!dataAsObj && !err) {
      setErrMsg('Invalid data');
    } else {
      OAuthData = (dataAsObj as unknown) as IOAuthData;
      if (err) setErrMsg(err);
    }

    if (OAuthData !== null && !errMsg) {
      const successLogin = signinUserWithOAuthData(OAuthData as IOAuthData);

      if (!successLogin) {
        setErrMsg('Unknown error occured');
      } else {
        history.push('/foundation');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (errMsg) {
    setSigninError(errMsg);
    history.push('/sign-in');
  }

  return <LoadingScreen />;
};

export default OAuthVerify;
