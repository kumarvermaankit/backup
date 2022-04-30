import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import Map from './components/map.js'
import Signup from './components/signup';
import Signin from "./components/signin"
import Form from "./components/form.js"

function App() {
  return (
    <div>

      <Router >
        <Route exact path="/map/:id">
          <Map />
        </Route>
        <Route exact path="/">
          <Header />
          <div className='app_body'>
            <Feed />
          </div>
        </Route>
        <Route exact path="/signin" >
          <Signin />
        </Route>
        <Route exact path="/signup" >
          <Signup />
        </Route>
        <Route exact path="/form" >
          <Form />
        </Route>
      </Router>
    </div>
  );
}

export default App;
