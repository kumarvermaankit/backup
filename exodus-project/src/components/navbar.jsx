import React,{Component, useEffect, useState} from "react";
import {Link,useHistory} from "react-router-dom";
import { useAppContext } from "./lib/contextlib";
import {Navbar,NavDropdown,Nav} from "react-bootstrap"
import profileimg from "./images/Profile.jpg"
import { Avatar } from '@material-ui/core';

function NavigationBar(props){

  let history=useHistory();
const{isAuthenticated,userHasAuthenticated}=useAppContext();


  async function Logout(event){

event.preventDefault();

await localStorage.removeItem('usertoken')
userHasAuthenticated(false);
 
history.push("/signin");
}


function SigninBtn(event){

 
     event.preventDefault();
 
 history.push("/signin");
 
 }


 function SignupBtn(event){

 
     event.preventDefault();
 
 history.push("/signup");
 
 }

  
  function AfterLoginNav(){


    return(
<div >
<Navbar  expand="lg" id="navbarclass">
  <Navbar.Brand href="#home"><h3><b>Exodus</b></h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
   
      <NavDropdown title={<Avatar alt="Profile" src={profileimg} />} id="Navdrop">
      <div className="navdrop">

        <NavDropdown.Item className="NDI" href="#action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Item className="NDI" href="#action/3.2">Watch & Earn</NavDropdown.Item>
        <NavDropdown.Item className="NDI" href="#action/3.3">Account</NavDropdown.Item>
        <NavDropdown.Item className="NDI" href="#action/3.4">About</NavDropdown.Item>
      
        </div>
      </NavDropdown>
      
      <Nav.Link href="#link" onClick={Logout} className="navlog" ><h3><b>Logout</b></h3></Nav.Link>
      <Nav.Link href="#" className="Rcoins" ><h3><b>RealCoins</b></h3><p class="tooltiptext"><h3><b>50</b></h3></p></Nav.Link>
     
      <Nav.Link href="#" className="Bcoins"><h3><b>BonusCoins</b></h3><p class="tooltiptext"><h3><b>50</b></h3></p></Nav.Link>
   
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div>
)
    
  }



/* <nav className="navbar navbar-expand-lg navbar-dark rounded">
  <Link className="navbar-brand" to="/">Exodus</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/games">Games</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
       <a href="#" onClick={Logout} className="nav-link">Logout</a>
      </li>
    </ul>
  </div>
</nav> */



//   function BeforeLoginNav(){
// return(
//   <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
//   <Link className="navbar-brand" to="/">Exodus</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item ">
//       <Link className="nav-link" to="/">Home</Link>
//       </li>
    
//       <li className="nav-item">
//       <Link className="nav-link" to="/about">About</Link>
//       </li>
//       <li className="nav-item">
//       <a href="#" onClick={SigninBtn} className="nav-link">SignIn</a>
//       </li>
//       <li className="nav-item">
//       <a href="#" onClick={SignupBtn} className="nav-link">SignUp</a>
//       </li>
//     </ul>
//   </div>
// </nav>

// )

//   }

return(

  <div>
    {isAuthenticated ? <AfterLoginNav /> : null}
  </div>
)

}

export default NavigationBar