import * as React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { WiseUpXPageProvider } from './contexts/WiseUpXPageContext';
import { ISASignUpProvider } from './contexts/ISASignUpContext';
import { SubscriptionsProvider } from './contexts/SubscriptionsContext';
import { MenteesListProvider } from './contexts/MenteesListContext';
import { BookingModalProvider } from './contexts/BookingModalContext';
import { CoursesListProvider } from './contexts/CoursesListContext';
import { NewMentorsListProvider } from './contexts/NewMentorsListContext';
import SessionAssessmentProvider from './contexts/SessionAssessmentContext';

const AppProviders: React.FC = (props) => {
  return (
    <>
      <AuthProvider>
        <BookingModalProvider>
          <WiseUpXPageProvider>
            <ISASignUpProvider>
              <MenteesListProvider>
                <NewMentorsListProvider>
                  <SubscriptionsProvider>
                    <CoursesListProvider>
                      <SessionAssessmentProvider>
                        {props.children}
                      </SessionAssessmentProvider>
                    </CoursesListProvider>
                  </SubscriptionsProvider>
                </NewMentorsListProvider>
              </MenteesListProvider>
            </ISASignUpProvider>
          </WiseUpXPageProvider>
        </BookingModalProvider>
      </AuthProvider>
    </>
  );
};

export default AppProviders;
