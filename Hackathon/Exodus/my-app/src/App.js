import React from 'react';
import Navbar from './components/navbar.component';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/home"
import Field from "./components/Field"
import AddnewTender from './components/NewTender';



function App() {


return(

<Router>
  <Navbar />
<Switch>
<Route path="/" component={Home}/>
<Route path={"/field"} component={Field} />
</Switch>
</Router>
)

}

export default App;
