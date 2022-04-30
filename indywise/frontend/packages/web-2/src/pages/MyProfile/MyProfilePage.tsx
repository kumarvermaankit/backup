import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
// import Ribbon from '../../components/Ribbon';
// import Header from '../../components/Header/Header';
import ProfileDetails from './parts/ProfileDetails';
import AvatarDetails from './parts/AvatarDetails';
import Bg from '../../assets/MyProfileBg.svg';
import { useAuth } from '../../contexts/AuthContext';
import { useDesktop } from '../../hooks/useDesktop';
// import { Text } from '@indywise/uikit';
import { useHistory } from 'react-router-dom';
import PortfolioHeader from '../../components/PortfolioHeader';
import PortfolioMainHeader from '../../components/Header/PortfolioMainHeader';

const MyProfilePage: React.FC = () => {
  const { user } = useAuth();
  const isDesktop = useDesktop(1200);
  const history = useHistory();

  if (!user) {
    history.push('/sign-in');
    return null;
  }

  return (
    <>
      <BgImage bgImage={isDesktop && Bg} />
      <Helmet>
        <title>My Profile - IndyWise</title>
      </Helmet>
      <PortfolioHeader type="My Profile" />
      {/* {isDesktop ? (
        <Ribbon text="My Profile" />
      ) : (
        <Text
          type="h1"
          size="1.5em"
          color="#262626"
          style={{ marginTop: '3.5em', paddingLeft: '1em' }}
        >
          My Profile
        </Text>
      )} */}
      <PortfolioMainHeader name="My Profile" />
      <Container>
        <Card>
          <AvatarDetails user={user} />
          {isDesktop && <Line />}
          <ProfileDetails user={user} />
        </Card>
      </Container>
    </>
  );
};

export default MyProfilePage;

const BgImage = styled.div<{ bgImage: any }>`
  @media screen and (min-width: 1100px) {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: -10;
    background-image: url(${(props) => props.bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    -o-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;
    justify-content: space-between;
  }
`;

// To center align the `Card`
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Line = styled.div`
  border-left: 1px solid #cbcbcb;
`;

const Card = styled.div`
  /* header height: 4.5em and margin from header to container 4em */
  margin: 8.5em 20px 0 92px;
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(12, 53, 89, 0.2);
  border-radius: 20px;
  padding: 2.5em 5em;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1238px;

  @media screen and (max-width: 1263px) {
    flex-direction: column;
    align-items: center;
    box-shadow: none;
    border-radius: 0;
    margin: 16vh auto 12vh auto;
    padding: 0 1.5em 2.5em 1.5em;
  }
`;
