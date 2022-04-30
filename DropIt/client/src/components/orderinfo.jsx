import React, { useEffect, useState } from "react";
import axios from "axios"
import "./orderinfo.css"
import Map from "./map"
function OrderInfo(){
    const [pickup,setpickup]=useState(false)
    const [orderdetails,setorderdetails]=useState({

    })

    const [accesslocation,setaccesslocation]=useState(false);
    
 
function getPickUp(event){

event.preventDefault();
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}

// useEffect(()=>{
// axios.get("")
// },[])


function showPosition(position){
    console.log(position)
if(position){
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${position.coords.longitude},${position.coords.latitude}.json?types=poi&access_token=pk.eyJ1IjoiZGFya3NpZGVyNTEiLCJhIjoiY2twaWEybjRrMno1aDMxbnhzMW43MGMwYSJ9.pw1XvoiWZakR-yTN27Hdvg`)
    .then((res)=>{
        console.log(res)
    })
}
    
}

    
    
    return(
<div className="orderbox">
    <h1>Pick n Drop</h1>
    <button onClick={()=>setaccesslocation(accesslocation?false:true)} className="delivery">Pickup Address</button>
    {accesslocation?
        <Map />
   :false}
    {/* <button className="mapPickup" onClick={(event)=>getPickUp(event)}>Pick Up Delivery</button>
    <button className="manualPickup" onClick={()=>pickup?setpickup(false):setpickup(true)}>Enter Manually</button> */}
    <div>
    <div>
        {pickup?<textarea />:null}
    </div>
        <input className="mobile" placeholder="Mobile number"/>
        <input className="landmark" placeholder="Landmark"/>
    </div>
    <div>
    <button className="delivery">Delivery Address</button>
    </div>
    <div>
        <input className="mobile" placeholder="Mobile number" />
        <input className="landmark" placeholder="Landmark" />
    </div>
    <select className="sending">
        <option>What are you sending</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <div>
        <select className="left">
            <option>Weight Category</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <select className="right">
        <option>Size Category</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>
    <div>
        <select className="left">
        <option>Payment Method</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <select className="right">
        <option>Opt Bidding</option>
            <option>Yes</option>
            <option>No</option>
        </select>
    </div>
    <div>
        <button className="placeOrder">Place Order</button>
    </div>
</div>
    )
}
export default OrderInfo