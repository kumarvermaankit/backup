import * as React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { MentorProvider } from './contexts/MentorContext';
import { UserProvider } from './contexts/UserContext';
import { BusinessAccountProvider } from './contexts/BusinessAccountsContext';
import { AdminProvider } from './contexts/AdminContext';
import { MenteeProvider } from './contexts/MenteeContext';
import { UpdatedMenteeProvider } from './contexts/UpdatedMenteeContext';
import { UpdatedMentorProvider } from './contexts/UpdatedMentorContext';
import { CourseProvider } from './contexts/CourseContext';
import { SkillProvider } from './contexts/SkillsContext';

const AppProviders: React.FC = (props) => {
  return (
    <>
      <MentorProvider>
        <CourseProvider>
          <BusinessAccountProvider>
            <UserProvider>
              <MenteeProvider>
                <UpdatedMenteeProvider>
                  <UpdatedMentorProvider>
                    <AdminProvider>
                      <SkillProvider>
                        <AuthProvider>{props.children}</AuthProvider>
                      </SkillProvider>
                    </AdminProvider>
                  </UpdatedMentorProvider>
                </UpdatedMenteeProvider>
              </MenteeProvider>
            </UserProvider>
          </BusinessAccountProvider>
        </CourseProvider>
      </MentorProvider>
    </>
  );
};

export default AppProviders;
