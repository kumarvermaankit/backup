import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import { useAppContext } from "./lib/contextlib";
import {Navbar,Nav} from "react-bootstrap"
import "./navbar.css"
import jwt_decode from "jwt-decode";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from "axios";

function NavigationBar(props){

  // const token = localStorage.usertoken
  // const decoded=jwt_decode(token)

  let history=useHistory();
const{isAuthenticated,userHasAuthenticated}=useAppContext();

const [file,setfile]=useState(null)
const [pstate,setpstate]=useState(false)

const [profile,setprofile]=useState(null)

const [myw,setmyw]=useState(false)

const [psrc,setpsrc]=useState()
  async function Logout(event){

event.preventDefault();

await localStorage.removeItem('usertoken')
userHasAuthenticated(false);
 
history.push("/signin");
}



function imagecheck(s){
 for(var h=0;h<images.length;h++){
        if(s.data.path.replace('profileimages',"").replace('\\',"")==images[h].default.replace('/static/media/','').replace(/\.[^.]*(\.(jpg|jpeg|tiff|png|PNG|JPEG))/g, "$1")){
       setpsrc(images[h].default)
       return
          }
   }
          }


function Setprofile(event){

  setfile(event.target.files[0])
   
}


useEffect(()=>{

  const token = localStorage.usertoken
  var decoded=jwt_decode(token)

 

axios.get(`http://localhost:5000/profile/${decoded.data.email}`)
.then((result)=>{
  imagecheck(result)
})
.catch((err)=>{
  console.log(err)
})


},[])


// useEffect(()=>{
// imagecheck(profile)
// },[])



function openwindow(){
myw?setmyw(false):setmyw(true)
}

 function sendimage(){

  const token = localStorage.usertoken
  var decoded=jwt_decode(token)
  

var data=new FormData();
data.append("file",file)

 axios.post("http://localhost:5000/profile",data)
 axios.post("http://localhost:5000/profile/upload",{email:decoded.data.email})




}

function Imagewindow(){

return(
  <div>
  <label  htmlFor="pro" className="custom-file-upload">Select</label>
    <input type="file" id="pro" onChange={(event)=>Setprofile(event)}/>
    {pstate?<p>{`One file Selected`}</p>:null}
    <button onClick={()=>sendimage()}>Upload</button>
  </div>
)

}

function importAll(r) {
  return r.keys().map(r);
}
  
const images = importAll(require.context("../backend/profileimages", true, /\.(png|jpe?g|svg|PNG)$/));






  function AfterLoginNav(){


    return(
<div >
<Navbar  expand="lg" id="nav_bar" >

  <img src={psrc} className="profile"  alt="no-image"  onClick={openwindow}/>
{myw?<Imagewindow />:null}
  <Navbar.Brand href="#home" ><h3><b>Cyduck</b></h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
   
     
      {/* <Nav.Link href="#" className="Rcoins" ><h3><b>{decoded.data.username}</b></h3></Nav.Link> */}
      <Nav.Link href="#link" onClick={Logout} className="navlog logout" ><h3><b><ExitToAppIcon style={{height:"50px",width:"50px",marginLeft:"100px"}} /></b></h3></Nav.Link>
      {/* <Nav.Link href="#"  ><h3><b>RealCoins</b></h3><p class="tooltiptext"><h3><b>50</b></h3></p></Nav.Link>
     
      <Nav.Link href="#" className="Bcoins"><h3><b>BonusCoins</b></h3><p class="tooltiptext"><h3><b>50</b></h3></p></Nav.Link> */}
   
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div>
)
    
  }




return(

  <div>
    {isAuthenticated ? <AfterLoginNav /> : null}
  </div>
)

}

export default NavigationBar