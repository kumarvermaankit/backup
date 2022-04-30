import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Animations/LoadingSpinner/LoadingSpinner';
import { useAuth } from './contexts/AuthContext';
import SignIn from './containers/SignIn/SignIn';
import MentorList from './containers/MentorListing/MentorList';
import MentorListingPage from './containers/MentorListing/MentorListingPage';
import CreateMentor from './containers/MentorListing/CreateMentor';
import EditMentor from './containers/MentorListing/EditMentor';
import CSVUploadMentor from './containers/MentorListing/CSVUpload';
import MentorFormsList from './containers/MentorListing/MentorFormsList';
import MentorFormPage from './containers/MentorListing/MentorFormPage';
import CSVMigrateMentor from './containers/MentorListing/CSVMigrate';
import MenteeList from './containers/Mentees/MenteeList';
import UpdatedMenteeList from './containers/Mentees/UpdatedMenteeList';
import MenteeListingPage from './containers/Mentees/MenteeListingPage';
import UpdatedMenteePage from './containers/Mentees/UpdatedMenteePage';
import UpdatedEditMentee from './containers/Mentees/UpdatedEditMentee';
import UpdatedMentorList from './containers/MentorListing/UpdatedMentorList';
import UpdatedMentorPage from './containers/MentorListing/UpdatedMentorPage';
import UpdatedEditMentor from './containers/MentorListing/UpdatedEditMentor';
import CreateUpdatedMentor from './containers/MentorListing/CreateUpdatedMentor';
import CreateMentee from './containers/Mentees/CreateMentee';
import CSVUpload from './containers/Mentees/CSVUpload';
import CSVMigrate from './containers/Mentees/CSVMigrate';
import EditMentee from './containers/Mentees/EditMentee';
import AdminList from './containers/Admins/AdminList';
import AdminListingPage from './containers/Admins/AdminListingPage';
import CreateAdmin from './containers/Admins/CreateAdmin';
import UserList from './containers/Users/UserList';
import UserListPage from './containers/Users/UserListPage';
import UpdatePassword from './containers/SignIn/UpdatePassword';
import CreateBusinessAccount from './containers/BusinessAccounts/CreateBusinessAccount';
import BusinessAccounts from './containers/BusinessAccounts/BusinessAccounts';
import BusinessAccountsPage from './containers/BusinessAccounts/BusinessAccountsPage';
import CreateCourse from './containers/Courses/CreateCourse';
import EditCourses from './containers/Courses/EditCourse';
import CoursesList from './containers/Courses/CourseList';
import CoursesListing from './containers/Courses/CourseListingPage';
import CSVUploadCourses from './containers/Courses/CSVUpload';
import CSVUploadSkills from './containers/Skills/CSVUpload';
import CreateSkill from './containers/Skills/CreateSkill';
import EditSkill from './containers/Skills/EditSkill';
import SkillsList from './containers/Skills/Skills';
import SkillsListing from './containers/Skills/SkillPage';
import CreateCategory from './containers/Skills/CreateCategory';
import Categories from './containers/Skills/Categories';
import Home from './containers/Home';
import EditPortfolio from './containers/Users/EditPortfolio';

const App: React.FC = () => {
  const { user, isAuthenticating } = useAuth();

  if (isAuthenticating) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <>
      {user && !isAuthenticating ? (
        <>
          <Route path="/" exact component={Home} />
          <Route path="/mentor/create" component={CreateMentor} />
          <Route
            path="/updated/mentor/create"
            component={CreateUpdatedMentor}
          />
          <Route path="/mentor/csv" component={CSVUploadMentor} />
          <Route path="/mentor/edit/:id" component={EditMentor} />
          <Route path="/list-mentor" component={MentorList} />
          <Route path="/mentor-list/:id" component={MentorListingPage} />
          <Route path="/mentor-forms" component={MentorFormsList} />
          <Route path="/mentor-form/:id" component={MentorFormPage} />
          <Route path="/mentor/migrate" component={CSVMigrateMentor} />
          <Route path="/mentee/create" component={CreateMentee} />
          <Route path="/mentee/csv" component={CSVUpload} />
          <Route path="/mentee/migrate" component={CSVMigrate} />
          <Route path="/mentee/edit/:id" component={EditMentee} />
          <Route path="/list-mentee" component={MenteeList} />
          <Route path="/mentee-list/:id" component={MenteeListingPage} />
          <Route path="/mentee/create" component={CreateMentee} />
          <Route path="/mentee/csv" component={CSVUpload} />
          <Route path="/mentee/edit/:id" component={EditMentee} />
          <Route path="/updated/list-mentee" component={UpdatedMenteeList} />
          <Route path="/mentee-list/:id" component={MenteeListingPage} />
          <Route
            path="/updated/mentee-list/:id"
            component={UpdatedMenteePage}
          />
          <Route path="/updated/list-mentor" component={UpdatedMentorList} />
          <Route
            path="/updated/mentor-list/:id"
            component={UpdatedMentorPage}
          />
          <Route
            path="/updated/mentor/edit/:id"
            component={UpdatedEditMentor}
          />
          <Route
            path="/updated/mentee/edit/:id"
            component={UpdatedEditMentee}
          />
          <Route path="/skill/csv" component={CSVUploadSkills} />
          <Route path="/skill/create" component={CreateSkill} />
          <Route path="/category/create" component={CreateCategory} />
          <Route path="/skill/edit/:id" component={EditSkill} />
          <Route path="/list-skill" component={SkillsList} />
          <Route path="/list-categories" component={Categories} />
          <Route path="/skill-list/:id" component={SkillsListing} />
          <Route path="/admin/create" component={CreateAdmin} />
          <Route path="/list-admin" component={AdminList} />
          <Route path="/admin-list/:username" component={AdminListingPage} />
          <Route path="/course/create" component={CreateCourse} />
          <Route path="/course/edit/:ID" component={EditCourses} />
          <Route path="/list-course" component={CoursesList} />
          <Route path="/course-list/:ID" component={CoursesListing} />
          <Route path="/course/csv" component={CSVUploadCourses} />
          <Route
            path="/business-account/create"
            component={CreateBusinessAccount}
          />
          <Route path="/list-business-accounts" component={BusinessAccounts} />
          <Route
            path="/business-account-list/:username"
            component={BusinessAccountsPage}
          />
          <Route path="/user/create" component={CreateMentor} />
          <Route path="/list-user" component={UserList} />
          <Route path="/user-list/:id" component={UserListPage} />
          <Route path="/password/update" component={UpdatePassword} />
          <Route path="/portfolio/edit/:id" component={EditPortfolio} />
        </>
      ) : (
        <>
          <Route path="/" exact component={MentorList} />
          <Route path="/sign-in" component={SignIn} />
        </>
      )}
    </>
  );
};

export default App;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
