import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
// import { BrowserRouter as Router, Route } from "react-router-dom/"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import Map from './components/map.js'

function App() {
  return (
    <div className='app'>

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
      </Router>
    </div>
  );
}

export default App;
