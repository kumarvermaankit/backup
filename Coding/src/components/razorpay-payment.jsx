import React from "react"
import Axios from "axios"
import jwt_decode from "jwt-decode";
function Razorpay(){

  const token = localStorage.usertoken
  const decoded=jwt_decode(token)

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

const _dev_=document.domain==="localhost"




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
         const url = `${API_URL}capture/${paymentId}`;
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


return (
    <div>
      <button 
      onClick={()=>razorPayPaymentHandler(2)}
      className="btn btn-primary">
        Pay 2
      </button>
      <button 
      onClick={()=>razorPayPaymentHandler(5)}
      className="btn btn-primary">
        Pay 5
      </button>
      <button 
      onClick={()=>razorPayPaymentHandler(10)}
      className="btn btn-primary">
        Pay 10
      </button>
      <button 
      onClick={()=>razorPayPaymentHandler(100)}
      className="btn btn-primary">
        Pay 100
      </button>
    </div>
  )
}    

export default Razorpay;