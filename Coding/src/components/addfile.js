import React, { useState,useEffect,useRef} from "react"
import axios from "axios";
import "./addfile.css";
import jwt_decode from "jwt-decode";
import Code from "./Code"
import Razorpay from "./razorpay-payment"
function File(){
 
 
    const [file,setFile]=useState(null);
    const [bstate,setbstate]=useState(false);
  
    const [cstate,setcstate]=useState(false);
    const[question,setquestion]=useState({

      title:"",
      content:""
    })

    const [info,setinfo]=useState({
      id:"",
      email:"",
      username:"",
     })
    
    useEffect(()=>{


 
      try{
      const token = localStorage.usertoken
      const decoded=jwt_decode(token)
      console.log(decoded)
      
      setinfo({
         id:decoded.data._id,
         email:decoded.data.email,
         username:decoded.data.username,
     });
        
         }
         catch(err){
            console.log(err);
         }
       },[])
        // const inputRef = useRef();
        
        // useEffect(() => {
        //   if (value === "") {
        //     inputRef.current.value = "";
        //   } else {
        //     inputRef.current.files = value;
        //   }
        // }, [value]);
       


    // const [fileurl,setFileurl]=useState("");
    // const[istate,setistate]=useState(false)
  
  //   const imgHandler=(event)=>{
  //     const reader= new FileReader();
  //     reader.onload=()=>{
        
          
  //       }
  //     }
  // reader.readAsDataURL(event.target.files[0])  
  
  //   }
  function OnChange(event){
    const{name,value}=(event.target);
setquestion((prevvalue)=>{
   return{
       ...prevvalue,
       [name]:value
   }
  
})

  }
 
  function onFileSelected(event) {
    
      setFile( event.target.files[0]);
      
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
  
    var imgtag = document.getElementById("myimage");
    imgtag.title = selectedFile.name;
  
    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };
  
    reader.readAsDataURL(selectedFile);

   
    setbstate(true);
  }
  
    const send=event=>{
      const data= new FormData();
    
      data.append("file",file);
  
      axios.post("http://localhost:5000/upload/id",info)
      .then(res=> console.log(res))
      .catch(err=>console.log(err));

      axios.post("http://localhost:5000/upload",data)
    .then(res=> console.log(res))
    .catch(err=>console.log(err));
    
    // axios.post("http://localhost:5000/upload/add",question)
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err));

    axios.post("http://localhost:5000/upload/question",question)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));


    
    }

    


 const GoToCode=event=>{
   event.preventDefault();
   cstate?setcstate(false): setcstate(true);

 }

    return (

      <div className="App">
        <header className="App-header">
        <div className="inputdiv">
    <form action="#">
    <div className="input-file-container">
      <label  htmlFor="file" className="custom-file-upload">Select a file...</label>
      <input  // {...rest}
        type="file"
        id="file"
        
        className="form-control"
        
    onChange={ onFileSelected
    //   event=>{
    //  
    // setFileurl( URL.createObjectURL(event.target.files[0]));
    }
      />
       </div>
      
     <img  alt="no-img" id="myimage"/>
<button onClick={GoToCode}>Add Code</button>
{cstate?<Code   onChange={OnChange}  title={question.title} content={question.content}/>:null}  

     
 
     {/* <button onClick={getinfo}>Get Info</button> */}
   
            </form>
           {bstate? <button onClick={send}>Send</button>:null}
            </div>
         
      
          
        </header>
        <Razorpay />
      </div>
    );


}

export default File;