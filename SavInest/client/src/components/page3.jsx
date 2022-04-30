import React, { useEffect,useState } from "react"
import "./cardstyle.css"
// import small from "./smallcard"
import SmallCard from "./smallcard"
import Typewriter from 'typewriter-effect';
import i1 from "./consultation(2).png"
import i2 from "./consultation(3).png"
import i3 from "./consultation(4).png"
import Axios from "axios"


function Page3(){


    function Razorpay(){

        // const token = localStorage.usertoken
        // const decoded=jwt_decode(token)
      
      
      
      
        const[two,settwo]=useState(false)
        
      
      
      
      async function razorPayPaymentHandler(money) {
      
       var url="https://savinestpayment.herokuapp.com"
    
      
          const API_URL = `${url}/payment/`
          const orderUrl = `${API_URL}order/${money}`;
          const response = await Axios.get(orderUrl);
          const { data } = response;
          
          
          const options = {
            key: '',
            name: "Example",
            description: "This is a description",
            order_id: data.id,
            handler: async (response) => {
              try {
               const paymentId = response.razorpay_payment_id;
               const url = `${API_URL}capture/${paymentId}/${money}`;
               const captureResponse = await Axios.post(url, {})
               const successObj = JSON.parse(captureResponse.data)
               const captured = successObj.captured;
               
               
               if(captured){
                   console.log(successObj)
                //    setquestion((prevvalue)=>{
                //      return{
                //        ...prevvalue,
                //        paymentinfo:successObj
                //      }
                //    })
                  
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
      
      
      
      
      
      function Card(props){
        return(
      <div className="carddiv"  >
            <button 
            onClick={()=>razorPayPaymentHandler(props.amount)}
            className="btn2"
            
            >
               {props.amount} 
              
            </button>
            
            </div>
        )
      }
      
      return (
          <div className="Pdiv">
          
        <Card  amount="100"/>
        
      
      
        
          </div>
        )
      }    


    
    const [main,setmain]=useState("Financial Planner")
    const [findex,setfindex]=useState(3)
    const [sindex,setsindex]=useState(0)
    const [tindex,settindex]=useState(1)
    const [frindex,setfrindex]=useState(2)
    
    const [arr,setarr]=useState(["Asset Allocation","Payment ","Chat with Expert"])
    
    const [i,seti]=useState(0)
    function Change(event,val){
        var i=arr.indexOf(val)
        arr[i]=main
        if(main==="Financial Planner"){
            setfindex(i)
        }
        else if(main==="Asset Allocation"){
            setsindex(i)
        }
        else if(main==="Payment "){
            settindex(i)
        }
        else if(main==="Chat with Expert"){
            setfrindex(i)
        }
        event.preventDefault()
        
    setmain(val)
    
    }
    
    
    
    function cards(){
    
    var t=0;
        return(
            <div>
                {arr.map((each)=>{
             
                    return(
                  <div>      
                  {/* {  each==="Financial Planner"?t=findex:each==="Asset Allocation"?t=sindex:each==="Payment "?t=tindex:each==="Chat with Expert"?t=frindex:null} */}
                 
                <SmallCard main={main} i={each} Change={(event)=>Change(event,each)} val={each}/>
                    </div>
                    )
                })}
                </div>
        )
    }
    
    useEffect(()=>{
        if(i>0){
            
            document.querySelector(".a").classList.remove("maincard")
            document.querySelector(".a").classList.add("maincard2")
        }
    seti(i+1)
    },[main])    
    
    
    
    return(
        <div className="container">
        {main==="Financial Planner"?<div className="maincard a">
        <div >
  {/* <img className="consult_img" src={i1}/> */}
  <iframe  name="right_side" src="https://forms.gle/7HJwzwBiRMG9cX9j7" width="100%"  
        height="500px" frameBorder="0"></iframe>
            </div>
        </div>:null}
        {main==="Asset Allocation"?<div className="maincard a">
        {/* <img className="consult_img" src={i2}/> */}
        <iframe  name="right_side" src="https://forms.gle/T1ub782hCNKzKUuP9" width="100%"  
        height="500px" frameBorder="0"></iframe>
        </div>:null}
        {main==="Payment "?<div className="maincard a">
        <h3 style={{color:"white"}}>Remember to first book appointment before payment,also add your appointment name in description </h3>
       <Razorpay />
        </div>:null}
      {main==="Chat with Expert"?<div className="maincard a">
      <iframe  name="right_side" src="https://cyduckchat.netlify.app/" width="100%"  
        height="500px" frameBorder="0"></iframe>
        </div>:null}
        {/* {main!=="Financial Planner"?<SmallCard main={main}  Change={(event)=>Change(event,"Financial Planner",findex)}  val="Financial Planner"/>:null}
        {main!=="Asset Allocation"?<SmallCard main={main} Change={(event)=>Change(event,"Asset Allocation",sindex)} val="Second"/>:null}
        {main!=="Payment "?<SmallCard main={main} Change={(event)=>Change(event,"Payment ",tindex)} val="Payment "/>:null}
        {main!=="Chat with Expert"?<SmallCard main={main} Change={(event)=>Change(event,"Chat with Expert",frindex)} val="Chat with Expert"/>:null} */}
      {cards()}
        </div>
    )
    
}

export default Page3