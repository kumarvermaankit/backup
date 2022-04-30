import React, { useState,useEffect }  from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createBrowserHistory } from "history";
import Routes from "./components/Routes"

import { AppContext } from "./components/lib/contextlib";
import Navbar from "./components/navbar";
import SignUp from "./components/SignUp";
import SignIn from './components/styles/SignIn';
import StartingPage from "./components/StartingPage";
// import Home from './home';

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/Unauthenticatedroute";
import NavigationBar from './components/navbar';













function App() {

  const [isloading, setisloading] = useState(false);
const [isAuthenticated, userHasAuthenticated] = useState(false);






//   useEffect(() => {
//     onLoad();
//   }, []);
  
//   async function onLoad() {
    
//     try {
//        userHasAuthenticated(true);
//     }
//     catch(e) {
//       if (e !== 'No current user') {
//         alert(e);
//       }
//     }
  
// }


useEffect(()=>{

  onLoad();
},[])


async function onLoad(){

  try{
    var access=localStorage.getItem("usertoken");
    if(access){
      userHasAuthenticated(true)

    }
  }
  catch(event){
    if (event !== 'No current user') {
      console.log(event)
    }
  }

}

//   // setIsAuthenticating(false);
// }

  // const customHistory = createBrowserHistory();
  return (
   
    

<AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
<NavigationBar />
  <Routes/>
</AppContext.Provider>








//    <Router  >
//  <Navbar />
//  {/* <Route path="/home" component={Home} /> */}
//    </Router>    


  )
}
// history={customHistory}
export default App;
