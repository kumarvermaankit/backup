import React, { Component,useState } from "react";
import Field from "./Field"
import {Link} from "react-router-dom";
import axios from "axios"


function AddnewTender(props){
   



    const [tender,settender]=useState({
    
    subject:"",
    description:"",
    address:"",
    pricerange:"",
    collabarationState:"",
    field:"",
    
    
    });
    
    
    

    function OnChange(event){

        const {name,value}=event.target;
         return(
    settender(prevValue=>{
    return{
        ...prevValue,
        [name]:value
    }
    })
    )
    }
    
    function onSubmit(event){
        event.preventDefault();
    console.log(tender);

   
    axios.post("http://localhost:5000/tender/add",tender)
    .then(res=>console.log(res.data))
 .catch(err=>console.log(err));

    // this.props.history.push({
    //     pathname: '/field',
    //     tender
    //   });


    }

// function onradiochange(event){

//    settender({collabarationState:event.target.value});
// }


return (
<div>
<form  onSubmit={onSubmit} >

    <label><h3>Subject:</h3></label>

    <input type="text" onChange={OnChange} name="subject" value={tender.subject} />


<div className="form-group">
    <label><h3>Description:</h3></label>
    <input type="text" name="description" value={tender.description} onChange={OnChange}/>
</div>
<div className="form-group">
    <label><h3>Address:</h3></label>
    <input type="text" name="address" value={tender.address} onChange={OnChange} />
</div>

<div className="form-group">
    <label><h3>Price-range:</h3></label>
    <input type="text" name="pricerange" value={tender.priceRange} onChange={OnChange}/>
</div>

<div className="form-group">
<h3>Select Collab State</h3>

<input type="radio" id="Collabarative" name="collabarationState" value="Collabarative" onChange={OnChange}/>
  <label >Collabarative</label><br />
  <input type="radio" id="Non-Collabarative" name="collabarationState" value="Non-Collabarative"  onChange={OnChange}/>
  <label >Non-Collabarative</label><br/>

</div>

<div className="form-group"> 
<h3>Select Field</h3>

<input type="radio" id="Education" name="field" value="Education" onChange={OnChange}/>
  <label >Education</label><br />
  <input type="radio" id="Technology" name="field" value="Technology" onChange={OnChange} />
  <label>Technology</label><br/>
  <input type="radio" id="HouseHold" name="field" value="Household" onChange={OnChange}/>
  <label >Household</label><br />
  <input type="radio" id="Construction" name="field" value="Construction" onChange={OnChange}/>
  <label >Construction</label><br/>
 
</div>

<div className="form-group">
<button type="submit" className="btn btn-primary">Post</button>

 
</div>

</form>
<Link to={{
    pathname:"/field",
    data:tender
}} />
</div>
)
}



export default AddnewTender;
  