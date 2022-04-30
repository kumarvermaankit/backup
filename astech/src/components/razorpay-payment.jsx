import React, { useState } from "react"
import Axios from "axios"
import jwt_decode from "jwt-decode";
import "./payment.css"
import {useHistory} from "react-router-dom";

function Razorpay(props){

  const token = localStorage.usertoken
  const decoded=jwt_decode(token)

  let history=useHistory();


  const[hndrd,sethndrd]=useState(false)
  const[two,settwo]=useState(false)
  const[five,setfive]=useState(false)
  const[ten,setten]=useState(false)
  const[paymentinfo,setpaymentinfo]=useState({})
// function loadscript(src){
//     return new Promise((resolve)=>{
//         const script=document.createElement('script');
//         script.src=src
        
//         script.onload=()=>{
//             resolve(true)
//         }
//         script.onerror=()=>{
//             resolve(false)
//         }

//         document.appendChild(script);
        
// })
// }



// const _dev_=document.domain==="localhost"




async function razorPayPaymentHandler(money) {

    // const res=await loadscript("https://checkout.razorpay.com/v1/checkout.js")

    // if(!res){
    //     alert("Razorpay SDK Failed to Load")
    //     return
    // }

    const API_URL = `http://localhost:5000/payment/`
    const orderUrl = `${API_URL}order/${money}`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    console.log("App -> razorPayPaymentHandler -> data", data)
    
    const options = {
      key: '',
      name: decoded.data.username,
      description: "This is a description",
      order_id: data.id,
      handler: async (response) => {
        try {
         const paymentId = response.razorpay_payment_id;
         const url = `${API_URL}capture/${paymentId}/${money}`;
         const captureResponse = await Axios.post(url, {})
         const successObj = JSON.parse(captureResponse.data)
         const captured = successObj.captured;
         
         console.log("App -> razorPayPaymentHandler -> captured", successObj)
         if(captured){
             console.log('success')
            }
         } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  function cardhover(event,amount){
//  hndrd?sethndrd(false):sethndrd(true)
switch(amount){
  case "2":settwo(true)
  break;
  case "5":setfive(true)
  break;
  case "10":setten(true)
  break;
  case "100":sethndrd(true)
}
}
  
function carddown(event,amount){
  switch(amount){
    case "2":settwo(false)
    break;
    case "5":setfive(false)
    break;
    case "10":setten(false)
    break;
    case "100":sethndrd(false)
  }
}

function Card(props){
  return(
<div className="carddiv">
      <button 
      onClick={()=>razorPayPaymentHandler(props.amount)}
      onMouseOver={(event)=>cardhover(event,props.amount)}
      onMouseOut={(event)=>carddown(event,props.amount)}
      className="btn ">
     {/* {props.amount}<br></br> <br></br> <br></br><div style={{width:"50px",height:"50px"}}><p  className="idiv"> For Rs {props.amount} your question will be answered within {props.hours} hours</p></div>  */}
        </button>
      
      </div>
  )
}

return (
    <div>
  <Card amount="2" state={two} hours="6"/>
  <Card amount="5" state={five} hours="3"/>
  <Card amount="10" state={ten} hours="1"/>
  <Card amount="100" state={hndrd} hours="0.5"/>
  
    </div>
  )
}    

export default Razorpay;