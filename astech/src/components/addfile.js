import React, { useState,useEffect,useRef} from "react"
import axios from "axios";
import "./addfile.css";
import jwt_decode from "jwt-decode";
import Axios from "axios"
import "./payment.css" 
import MultiSelect from "react-multi-select-component";
import {useHistory} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import CodeM from "./cm"

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';



function File(){
  let history=useHistory();
  var [i,seti]=useState(false)
    const [files,setFile]=useState([]);
    const [bstate,setbstate]=useState(false);
  
    const [noi,setnoi]=useState([])


    const [istate,setistate]=useState(false)
    const [cstate,setcstate]=useState(false);
    const[question,setquestion]=useState({

      title:"",
      content:"",
      paymentinfo:{}
    })

    const [selected, setSelected] = useState({
      languages:null,
      fields:null,
      frameworks:null,
      });

    const [info,setinfo]=useState({
      id:"",
      email:"",
      username:"",
     })


    
    useEffect(()=>{


 
      try{
      const token = localStorage.usertoken
      const decoded=jwt_decode(token)
      
      
      setinfo({
         id:decoded.data._id,
         email:decoded.data.email,
         username:decoded.data.username,
     });
        
         }
         catch(err){
            console.log(err);
         }

var val=document.getElementsByTagName("span")
if(cstate===true){
  val[1].innerHTML="languages"
  val[2].innerHTML="fields"
  val[3].innerHTML="frameworks"
}



       },[])



  function OnChangetitle(newvalue){
 
    setquestion((prevvalue)=>{
    return{
      ...prevvalue,
      title:newvalue
    }
    })
    console.log(question)
  }
    function OnChangecontent(newvalue){
 
      setquestion((prevvalue)=>{
      return{
        ...prevvalue,
        content:newvalue
      }
      })
      console.log(question)
    }
   



  
function no_of_images(event){
  
  

if(isNaN(Number(event.target.value))===false){
  setnoi(event.target.value)
  if(event.target.value===""){
    setistate(false)
  }
  else{
    setistate(true)
  }
}

 
 


}



 
  function onFileSelected(event,i) {


// if(i<noi){

  if(noi.length===0){
    
    setFile([...files,0])
  }
  else{
   setFile([...files,noi[noi.length-1]+1])
 }


event.preventDefault()
  
    
      setFile( [...files,event.target.files[0]]);
    
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
  
    var imgtag = document.getElementById(`myimage${i}`);
    
    
    imgtag.title = selectedFile.name; 
 
    reader.onload = function(event) {
      imgtag.src = event.target.result;
      
    };
  
    reader.readAsDataURL(selectedFile);

   
    setbstate(true);
seti(false)

// }

// else{

//    setistate(true)
 
// }


  }

  

  


    const send=event=>{
      const data= new FormData();
    for(const file of files){
      data.append("file",file);
    }
     
  
      // axios.post("http://localhost:5000/upload/id",info)
      // .then(res=> console.log(res))
      // .catch(err=>console.log(err));

      axios.post("http://localhost:5000/upload",data)
    .then(res=> console.log(res))
    .catch(err=>console.log(err));
    
    // axios.post("http://localhost:5000/upload/add",question)
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err));

    axios.post("http://localhost:5000/upload/question",{question:question,info:info,keywords:selected})
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    
    history.push("/community")
    
    
    }

    const languages=[
      {label:"javascript",value:"javascript"},
      {label:"java",value:"java"},
      {label:"python",value:"python"},
      {label:"C++",value:"C++"},
      {label:"C",value:"C"},
      {label:"ruby",value:"ruby"},
      ]
      
      const fields=[
      {label:"Web-Development",value:"WebD"},
      {label:"Android-Development",value:"Android"},
      {label:"UI-UX",value:"uix"},
      {label:"Data-Structures and Algorithms",value:"DSA"},
      {label:"Competitive-Codeing",value:"CC"},
      {label:"AI and ML",value:"AM"},
      ]

      const frameworks=[
        {label:"Django",value:"Django"}
      ]

 const GoToCode=event=>{
   event.preventDefault();
   cstate?setcstate(false): setcstate(true);
   setbstate(true);
 }
 function dropValueGetter(value,a){
  if(a===1){
      setSelected((prevvalue)=>{
          return{
              ...prevvalue,
              languages:value
          }
      })
  }
  else if(a===2){
      setSelected((prevvalue)=>{
          return{
              ...prevvalue,
              fields:value
          }
      })
  }
  else if(a===3){
      setSelected((prevvalue)=>{
          return{
              ...prevvalue,
              frameworks:value
          }
      })
  }

 

 
}





function SelectFile(props){

  
  
  

  return(
  <div className="input-file-container"> 


      <label  htmlFor={props.i} className="custom-file-upload"><AddAPhotoIcon style={{width:"40px",height:"70px",color:"white"}}/></label>
      <input  // {...rest}
        type="file"
        id={props.i}
        className="form-control"
        
    onChange={(event)=>onFileSelected(event,props.i)}
      />
     
       </div>
       )

}


function AddImage(event){
  
  event.preventDefault()
  if(i===false){
    if(noi.length===0){
      setnoi([...noi,0])
      
    }
    else{
    setnoi([...noi,noi[noi.length-1]+1])
}
   seti(true)
  }

}


function close(event,val){
  event.preventDefault()
  seti(false)
if(noi.length===1){
  setnoi([])
  setFile([])
}
else{
  var i=noi.indexOf(val) 
  console.log(val,i)
  noi.splice(val,1)
  files.splice(val,1)
  setFile([...files])
  setnoi([...noi])
}
 
}

console.log(files)

function CreateImage(){

  


// console.log(arr)
  return(
  <div> 
    
{ noi.map((each)=>{

  

    return(
      <div className="create" key={each}>
    
      <SelectFile i={each}/>
    
    
  <button className="close_btn" style={{background:"none"}}onClick={(event)=>close(event,each)}><HighlightOffIcon /></button>
      <img style={{color:"white"}} id={`myimage${each}`} alt="no-image"/>
     
    
      </div>
     )
  
   
   })}
</div> 
 
  )  
   
      
     
  
}



 function Razorpay(props){

  const token = localStorage.usertoken
  const decoded=jwt_decode(token)




  const[hndrd,sethndrd]=useState(false)
  const[two,settwo]=useState(false)
  const[five,setfive]=useState(false)
  const[ten,setten]=useState(false)

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
             setquestion((prevvalue)=>{
               return{
                 ...prevvalue,
                 paymentinfo:successObj
               }
             })
            
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
  case "3":settwo(true)
  break;
  case "5":setfive(true)
  break;
  case "10":setten(true)
  break;
  // case "100":sethndrd(true)
}
}
  
function carddown(event,amount){
  switch(amount){
    case "3":settwo(false)
    break;
    case "5":setfive(false)
    break;
    case "10":setten(false)
    break;
    // case "100":sethndrd(false)
  }
}

function Card(props){
  return(
<div className="carddiv" style={{margin:"130px"}}>
      <button 
      onClick={()=>razorPayPaymentHandler(props.amount)}
      className="btn ">
         {props.amount} <br></br> <br></br> <br></br> <div ><p style={{width:"200px",height:"70px"}} className="idiv"> For Rs {props.amount} your question will be answered within {props.hours} hours</p></div> 
        
      </button>
      
      </div>
  )
}

return (
    <div className="PaymentDiv">
  <Card amount="3" state={two} hours="6"/>
  <Card amount="5" state={five} hours="3"/>
  <Card amount="10" state={ten} hours="1"/>
  {/* <Card amount="100" state={hndrd} hours="0.5"/> */}
  
    </div>
  )
}    




    return (

      <div className="afdiv">
      <h1 style={{color:"white",textAlign:"center",marginTop:"20px"}}>Post your Question here</h1>
        <header>
        
        <div className="inputdiv">
    <form action="#">


     
     <div style={{display:"flex"}}>
     <p style={{color:"white",marginTop:"12px"}}>Add Code</p>
     <button className="acCode" onClick={GoToCode}><AddIcon style={{width:"35px",height:"35px"}} /></button>
     </div>


     {cstate?<div><MultiSelect
        className="drop-down"
        options={languages}
        value={selected.languages}
        onChange={(value)=>dropValueGetter(value,1)}
        labelledBy={"languages"}
        required={true}
      />
<MultiSelect
        className="drop-down"
        options={fields}
        value={selected.fields}
        onChange={(value)=>dropValueGetter(value,2)}
        labelledBy={"fields"}
        required={true}
      />
      <MultiSelect
        className="drop-down"
        options={frameworks}
        value={selected.frameworks}
        onChange={(value)=>dropValueGetter(value,3)}
        labelledBy={"frameworks"}
        required={true}
      /></div>:null}
     
{cstate?<CodeM   Change={OnChangetitle}  val={question.title} name="title" plh="Enter Question"  hght="60px" wdt="1450" />:null}  
{cstate?<CodeM   Change={OnChangecontent}  val={question.content} name="content" plh="Enter or Copy Code" hght="400px" wdt="1450" />:null} 


    {/* <input type="text" className="no_of_images" onChange={(event)=>no_of_images(event)} value={noi} placeholder="No of images"/> */}
    <div style={{display:"flex",marginTop:"200px"}}>
     <p style={{color:"white",marginTop:"12px"}}>Add Image</p>
     <button className="AC" onClick={(event)=>AddImage(event)}><AddIcon style={{width:"35px",height:"35px",border:"none"}} /></button>
     </div>

   


{CreateImage()}



   
   
       
      
     {/* <img  alt="no-img" id="myimage"/> */}

     

   
            </form>
           {bstate? <button onClick={send} className="send-button" >Send</button>:null}
            </div>
         
      
          
        </header>
        <section className="mid-section">
        <h1 className="headerpayment"><b>Select Payment Option</b></h1>
        <Razorpay />
     
        </section>
        
      </div>
    );


}

export default File;