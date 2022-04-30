import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, HashRouter, Switch } from 'react-router-dom';
import * as FullStory from '@fullstory/browser';
import AppProviders from './AppProviders';
import { Helmet } from 'react-helmet';

FullStory.init({
  orgId: '13X8D3',
  devMode: process.env.REACT_APP_HOST_ENV === 'dev',
  recordCrossDomainIFrames: true
});

const Router: any =
  process.env.REACT_APP_HOST_ENV === 'production' ? BrowserRouter : HashRouter;

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>IndyWise - Next-gen Mentoring Driven Upskilling Platform</title>
      <meta
        name="description"
        content="IndyWise is a Mentoring driven and AI Powered Upskilling Platform which enables students, job seekers and young professionals to get personalized mentoring and upskilling.  We help students secure Mentored Internships with Global Startups. We help startups and enterprises to upskill their junior employees with our unique competency frameworks and mentoring ecosystem."
      />
      <meta
        name="description"
        content="IndyWise is a next-gen mentoring driven online platform for reskilling and upskilling.
      IndyWise offers 1:1 mentoring sessions from quality mentors, mentoring subscription packages, and Mentored Internships to students and job seekers with global startups.
      We enable startups to source Mentored Interns."
      />
      <meta
        name="keywords"
        content="Mentoring,Learn digital marketing,Mentoring Platform,Live courses,Upskilling Platform,Learn software engineering,Skilling,Jobless,Career Advice,Can't find a job,Mentorship,Graduate Internship,Career Mentorship,Graduate Scheme,Professional Mentorship,How to get an internship,High education mentorship,How to get a job,Advice,Which career should I do,Career Advisory,How to succeed in interviews,Internships,Skills verification,Mentored Internships,Interview tips,Mentored Internship,Hire intern,Coaching,Summer internship,Executive Coaching,Winter internship,Career coaching,Job,opentowork"
      />
    </Helmet>
    <Router>
      <ScrollToTop />
      <Switch>
        <AppProviders>
          <App />
        </AppProviders>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
