
import React,{Component} from "react";
import {Link} from "react-router-dom";



function Navbar(props){

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link className="nav-link" to="/">Education</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/create">Technology</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user">HouseHold</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user">Construction</Link>
      </li>
     
    </ul>
  </div>
</nav>

)

}

export default Navbar