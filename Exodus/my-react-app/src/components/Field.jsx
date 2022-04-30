import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import axios from "axios";

const Field = props=>{

const [fieldval,setfieldval]=useState({
subject:"",
description:"",
address:"",
pricerange:"",
collabarationState:""



})

const [btnstate,setbtnstate]=useState(false);

function ONCLICK(){

    setbtnstate(true);

}

function Bidding(){

const [bid,setbid]=useState("");

function bidsubmit(event){
    return(
        setbid(event.target.value)
    )
}

   return(
<div>

<label>MyBid:</label>
<input type="text" name="bidamount" value={bid} onChange={bidsubmit}/>

</div>

   ) 

}


useEffect(()=>{

axios.get("http://localhost:5000/tender/")
.then(res=>{
    setfieldval(res.data);
})
.catch(err=>{console.log(err)});

},[])


return(
<div >
<h1>{fieldval.field}</h1>

<div>

<h2>{fieldval.subject}</h2>
<p>{fieldval.description}</p>
<p>{fieldval.address}</p>
<p>{fieldval.pricerange}</p>
<p>{fieldval.collabarationState}</p>
<button onClick={ONCLICK}>Interested</button>
{btnstate?<Bidding/>:null}

</div>

</div>

)

}

export default Field;