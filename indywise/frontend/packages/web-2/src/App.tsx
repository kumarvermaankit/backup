import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Mixpanel from 'mixpanel-browser';
import UpdateBusinessPasswordWithToken from './pages/SignIn/UpdateBusinessPasswordWithToken';
import SignIn from './pages/SignIn/SignIn';
import ResetPassword from './pages/SignIn/ResetPassword';
import RecoverPassword from './pages/SignIn/RecoverPassword';
import SignUp from './pages/SignUp/SignUp';
import MentorsListPage from './pages/MentorsList/MentorsListPage';
import MenteesListPage from './pages/MenteeList/MenteesListPage';
import MentorCardPage from './pages/MentorCard/MentorCardPage';
import MenteeCardPage from './pages/MenteeCard/MenteeCardPage';
import MenteeCardPDF from './pages/MenteeCard/MenteeCardPDF';
import MenteePortfolio from './pages/MenteePortfolio/MenteePortfolio';
import MentorPortfolio from './pages/MentorPortfolio/MentorPortfolio';
// import MentoredInternshipPage from './pages/MentoredInternship/MentoredInternshipPage';
import Support from './pages/Support/SupportPage';
import { PageView, initGA } from './pages/Tracking';
import SubscriptionsList from './pages/Subscriptions/SubscriptionsList';
import SubscriptionPage from './pages/Subscriptions/SubscriptionPage';
import { useAuth } from './contexts/AuthContext';
import MyProfilePage from './pages/MyProfile/MyProfilePage';
import LoadingScreen from './components/LoadingScreen';
import BookingModal from './components/BookingModal';
import OAuthVerify from './pages/SignIn/OAuthVerify';
import InternshipApply from './pages/Internships/InternshipApply';
import Wiseup from './pages/Wiseup/Wiseup';
import NewhomePage from './pages/Newhome/NewhomePage';
// import NewStartups from './pages/NewHireMentoredInterns/NewStartUps';
import WiseUpFoundation from './pages/WiseUpFoundation/WiseUpFoundation';
import WiseUpX from './pages/WiseUpX/WiseUpX';
import NewAbout from './pages/NewAbout/NewAboutUs';
// import * as WiseUpXInternship from './pages/WiseUpXInternship/WiseUpXInternship';
import WiseUpScorecard from './pages/Scorecard/WiseUpScorecard';
import JoinAsAMentor from './pages/NewJoinAsMentor/NewJoinAsAMentorPage';
import ErrorPage from './pages/Error/Error';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
import CoursesListPage from './pages/CourseList/CoursesListPage';
import Foundation from './pages/Foundation/NewFoundation';
import ChooseTier from './pages/Foundation/ChooseTier';
import Articles from './pages/Foundation/Foundation';
import TalentPool from './pages/TalentPool/TalentPool';
import StartupResources from './pages/StartupResources/StartupResources';
// Startup Dashboard import
import StartupDashboard from './pages/StartupDashboard/StartupDashboard';
import MenteeDashBoard from './pages/MenteeDashboard/MenteeDashboard';
import OurResources from './pages/OurResources/OurResources';
import WiseUpBusiness from './pages/WiseUpBusiness/WiseUpBusiness';
import './index.css';

const PublicRoutes = (
  <>
    <Switch>
      <Route path="/" exact component={NewhomePage} />
      <Route path="/join-as-a-mentor" component={JoinAsAMentor} />
      <Route path="/about" component={NewAbout} />
      <Route path="/wiseup" exact component={Wiseup} />
      <Route path="/wiseup/foundation" exact component={WiseUpFoundation} />
      <Route path="/wiseupx" exact component={WiseUpX} />
      <Route path="/talent/pool" exact component={TalentPool} />
      <Route path="/verify-email/:token" component={VerifyEmail} />
      {/* <Route path="/wiseupx" exact component={WiseUpXInternship.default} /> */}
      {/* <Route
        path="/wiseupx-upskilling"
        exact
        component={WiseUpXInternship.default}
      /> */}
      {/* <Route path="/wiseup/scorecard" exact component={WiseUpScorecard} /> */}
      {/* <Route exact path={['/startup', '/startups']} component={NewStartups} /> */}
      <Route
        exact
        path={['/startup/apply', '/startups/apply']}
        component={() => {
          window.location.assign('https://forms.gle/Nv2ZUbkBiZHgPqpC8');
          return null;
        }}
      />
      <Route path="/support/:type" component={Support} />
      <Route
        exact
        path={['/subscriptions', '/subscription']}
        component={SubscriptionsList}
      />
      <Route
        path={['/subscriptions/:id', '/subscription/:id']}
        component={SubscriptionPage}
      />
      <Route
        exact
        path={['/internship/apply', '/internships/apply']}
        component={InternshipApply}
      />
      <Route exact path={['/mentors', '/mentor']} component={MentorsListPage} />
      {/* <Route exact path="/mentors/curated" component={CuratedMentors} /> */}
      <Route
        path={['/mentors/:username', '/mentor/:username']}
        component={MentorCardPage}
      />
      {/* <Route
        exact
        path={['/internship', '/internships']}
        component={MentoredInternshipPage}
      /> */}
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/recover-password" component={RecoverPassword} />
      <Route path="/user/reset-password/:token" component={ResetPassword} />
      <Route
        path="/business/update-password/:token"
        component={UpdateBusinessPasswordWithToken}
      />
      <Route path="/portfolio/mentee/" component={MenteePortfolio} />
      <Route path="/portfolio/mentor" component={MentorPortfolio} />
      <Route exact path="/foundation" component={Foundation} />
      <Route exact path="/tier/choose" component={ChooseTier} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/my-profile" component={MyProfilePage} />
      <Route exact path="/oauth" component={OAuthVerify} />
      <Route
        exact
        path={['/mentor-telegram', '/mentor/telegram']}
        component={() => {
          window.location.assign('https://t.me/joinchat/ZEff642V18g4NTk8');
          return null;
        }}
      />
      <Route
        path="/wiseup/scorecard/:ID/:sessionNumber"
        exact
        component={WiseUpScorecard}
      />
      <Route
        exact
        path={['/careers', '/career']}
        component={() => {
          window.location.assign('https://angel.co/company/indywise/jobs');
          return null;
        }}
      />
      <Route exact path={['/courses', '/course']} component={CoursesListPage} />
      <Route path="/dashboard/mentee" component={MenteeDashBoard} />

      {/* catch 404 */}
      <Route path="*" component={ErrorPage} />
    </Switch>
  </>
);

const BusinessRoutes = (
  <>
    <Switch>
      <Route path="/" exact component={NewhomePage} />
      <Route path="/about" component={NewAbout} />
      <Route path="/wiseup" exact component={Wiseup} />
      <Route path="/verify-email/:token" component={VerifyEmail} />
      <Route path="/wiseup/foundation" exact component={WiseUpFoundation} />
      <Route path="/wiseupx" exact component={WiseUpX} />
      <Route path="/talent/pool" exact component={TalentPool} />
      <Route
        path="/wiseup/scorecard/:ID/:sessionNumber"
        exact
        component={WiseUpScorecard}
      />
      <Route
        exact
        path={['/startup/apply', '/startups/apply']}
        component={() => {
          window.location.assign('https://forms.gle/Nv2ZUbkBiZHgPqpC8');
          return null;
        }}
      />
      <Route exact path="/startup/dashboard" component={StartupDashboard} />
      <Route exact path="/startup/resources" component={StartupResources} />
      <Route exact path="/startup/ourresources" component={OurResources} />
      <Route exact path="/startup/wiseup-business" component={WiseUpBusiness} />
      <Route path="/support/:type" component={Support} />
      <Route
        exact
        path={['/internship/apply', '/internships/apply']}
        component={InternshipApply}
      />
      <Route exact path={['/mentors', '/mentor']} component={MentorsListPage} />
      <Route
        path={['/mentors/:username', '/mentor/:username']}
        component={MentorCardPage}
      />
      {/* <Route
        exact
        path={['/internship', '/internships']}
        component={MentoredInternshipPage}
      /> */}
      <Route exact path={['/mentees', '/mentee']} component={MenteesListPage} />
      <Route
        path={['/mentees/:username', '/mentee/:username']}
        component={MenteeCardPage}
      />
      <Route
        path={['/pdf/:username', '/pdf/:username']}
        component={MenteeCardPDF}
      />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/recover-password" component={RecoverPassword} />
      <Route path="/reset-password/:token" component={ResetPassword} />
      <Route
        path="/business/update-password/:token"
        component={UpdateBusinessPasswordWithToken}
      />
      {/* catch 404 */}
      <Route path="*" component={ErrorPage} />
    </Switch>
  </>
);

const App: React.FC = () => {
  const { isAuthenticating, authType, user } = useAuth();
  Mixpanel.init('443966eb9316ce0c87909b540848ebb5');

  React.useEffect(() => {
    initGA();
    PageView('App');
  }, []);

  React.useEffect(() => {
    if (user && user.username) {
      Mixpanel.identify(user.username);
      Mixpanel.people.set({
        $email: user.email,
        USER_ID: user.username
      });
    }
  }, [user]);

  if (isAuthenticating) {
    return <LoadingScreen />;
  }

  return (
    <>
      <BookingModal />
      {!isAuthenticating && authType === 'business'
        ? BusinessRoutes
        : PublicRoutes}
    </>
  );
};

export default App;
