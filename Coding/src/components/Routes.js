import React from "react"

import { BrowserRouter as Router,Route } from "react-router-dom";
import SignIn from "./styles/SignIn";
import SignUp from "./SignUp";
import Home from "./home";


import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./Unauthenticatedroute";
import StartingPage from "./StartingPage";
import Community from "./community";
import File from "./addfile";
import Code from "./Code";
import Answer from "./answer";
import Profile from "./Profile";
import Change from "./changepsw";

function Routes(){

return(
  
  <Router>



<UnauthenticatedRoute exact path="/signin">
  <SignIn />
</UnauthenticatedRoute>
<UnauthenticatedRoute exact path="/signup">
  <SignUp />
</UnauthenticatedRoute>
<UnauthenticatedRoute exact path="/">
  <StartingPage/>
</UnauthenticatedRoute>
<AuthenticatedRoute exact path="/home">
  <Home/>
</AuthenticatedRoute>
<Route exact path="/community">
  <Community />
</Route>
<AuthenticatedRoute exact path="/file">
  <File />
  </AuthenticatedRoute>
  <UnauthenticatedRoute exact path="/code">
  <Code />
</UnauthenticatedRoute>
<AuthenticatedRoute exact path="/answer/:des/:ans/:state">
  <Answer />
  </AuthenticatedRoute>
  <AuthenticatedRoute exact path="/profile">
  <Profile />
  </AuthenticatedRoute>
  <AuthenticatedRoute exact path="/changepassword">
  <Change />
  </AuthenticatedRoute>
</Router>
)



}

export default Routes