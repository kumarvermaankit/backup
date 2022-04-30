import * as React from 'react';
import { Route } from 'react-router-dom';

export default (
  <Route>
    <Route path="/" />
    <Route path="/join-as-a-mentor" />
    <Route path="/mentor/apply" />
    <Route path="/mentors/apply" />
    <Route path="/about" />
    <Route path="/startup" />
    <Route path="/startup/apply" />
    <Route path="/startups" />
    <Route path="/startups/apply" />
    <Route path="/support/:type" />
    <Route path="/subscriptions" />
    <Route path="/subscriptions/:id" />
    <Route path="/internship/apply" />
    <Route path="/mentors" />
    <Route path="/mentors/:username" />
    {/* <Route path='/courses'  /> */}
    <Route path="/internship" />
    <Route path="/subscription" />
    <Route path="/subscription/:id" />
    <Route path="/internships/apply" />
    <Route path="/mentor" />
    <Route path="/mentor/:username" />
    <Route path="/internships" />
    <Route path="/sign-in" />
    <Route path="/sign-up" />
    <Route path="/recover-password" />
    <Route path="/reset-password" />
    <Route path="/reset-password/:token" />
  </Route>
);
