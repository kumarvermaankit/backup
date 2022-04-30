import React from "react"

import { BrowserRouter as Router,Route } from "react-router-dom";
import SignIn from "./styles/SignIn";
import SignUp from "./SignUp";
import Home from "./home";


import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./Unauthenticatedroute";
import StartingPage from "./StartingPage";




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



</Router>
)



}

export default Routes