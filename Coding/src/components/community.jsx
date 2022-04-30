import React, { useEffect, useState } from "react"
import axios from "axios";
import "./community.css";
import {Card,Button}from 'react-bootstrap'
import Code from "./Code";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import jwt_decode from "jwt-decode";
import None from "./images/None.PNG"
import Input from "./input";

function Community(){
  

    const token = localStorage.usertoken
    const decoded=jwt_decode(token)

    


    
var t=useState("");    
var i;
var [rp,setrp]=useState(0);
var [e,sete]=useState(false);
// let textInput = React.createRef();

var [divstate,setdivstate]=useState([]);



const [statearr,setstatearr]=useState({}); 


const [info,setinfo]=useState({
  username:"",
   })

const [arr,setarr]=useState([]);
const [count, setCount] = useState(false);

const [vclick,setvclick]=useState(false);
const [answer,setanswer]=useState(false)
const[question,setquestion]=useState({
    id:"",
    title:"",
    content:"",
    username:"",
    i:"",
    ansuser:""
  })

//   const [each_ans,seteachans]=useState({
//       id:"",
//       description:"none",
//       ans:"none",
      
      
//   })

  const [voteid,setvoteid]=useState({
      id:"",
      username:""
  })

// const [votestate,setvotestate]=useState(false);


useEffect(()=>{
    
  setarr([]);

  axios.get("http://localhost:5000/upload");

    axios.get("http://localhost:5000/upload/r")
    .then(res=>{setarr(res.data)
    })
    .catch(err=>console.log(err));

    setCount(true);

//    if(e===true){
//        window.location.reload();
//    }
// sete(false);
    },[rp])








function AddAnswers(id,username){
    

    var i=Math.random();
    answer?setanswer(false):setanswer(true);
    setquestion({
        id:id,
        username:username,
        i:i,
        ansuser:decoded.data.username
    });
   
}

function Ansstate(ans,username){
   
    try{
       setinfo({
          username:decoded.data.username,
       })
          
           }
           catch(err){
              console.log(err);
           }
    
 
    if(info.username==username){
         sete(true)
      }
else{
    sete(false)
}

ans.map((ans)=>{
    statearr[ans._id]?
    setstatearr((prevvalue)=>{
        return{
            ...prevvalue,
            [ans._id]:false
        }
       
    })  
    : setstatearr((prevvalue)=>{
        return{
            ...prevvalue,
            [ans._id]:true
        }
    })
    
})
 
}


function Showall(divid){

divstate[divid]?
setdivstate((prevvalue)=>{
    return{
        ...prevvalue,
        [divid]:false
    }
})  
:setdivstate((prevvalue)=>{
    return{
        ...prevvalue,
        [divid]:true
    }
})  
}




function Add(){
    axios.post("http://localhost:5000/upload/addanswer",question)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));

    setTimeout(() => {
        U();
        window.location.reload();
        window.location.reload();
    
    }, 1000);

    
    
}

function OnChange(event){
    const{name,value}=(event.target);
setquestion((prevvalue)=>{
   return{
       ...prevvalue,
       [name]:value
   }
  
})
}

function CommentChange(){

   
// event.preventDefault()   
// const value=event.target.value
//     setcomments((prevvalue)=>{
//         return{
//             ...prevvalue,
//             [inputid]:value
//         }
//     })  
//     console.log(comments)
         }
    

  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context("../backend/uploads", false, /\.(png|jpe?g|svg|PNG)$/));
  

 function Votes(vote_id,username){

  
    setvoteid({
    id:vote_id,       
    username:username
})
setvclick(true);


    
}

function U(){
    setrp(rp=rp+1);
        }

function voteupload(event
    
    ){
    event.preventDefault();

    axios.post("http://localhost:5000/upload/vote",voteid)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    
 
    U();
    
    
    
}

function imagecheck(s){
    
for(var h=0;h<images.length;h++){
    if(s.replace('uploads',"").replace('\\',"")==images[h].replace('/static/media/','').replace(/\.[^.]*(\.(jpg|jpeg|tiff|png|PNG|JPEG))/g, "$1")){
     return <Card.Img variant="top" src={images[h]}/>
    }
}
         }

//  function Change(event){
//      event.preventDefault();
//     const value=event.target.value
//      setcomments((prevvalue)=>{
//          return{
//              ...prevvalue,
//           comment:value
//          }
         
//      })
//      console.log(comments)
//  }        



// function AddComment(){
// cmntstate?setcmnt(false):
// setcmnt(true)
// }


function Quesdiv(props){


  

return(
    <div id={props.i} >


   
        <Card className="importcard">
  <Card.Header className="c_header" onClick={()=>Showall(props.i)}><h3><b>{props.t}</b></h3></Card.Header>
  <Card.Body>

 
    {
        divstate[props.i]?    
        <div id={props.i}>
       
    <Card.Text>
     {props.c}
    </Card.Text>
    
    <Button variant="primary">Go somewhere</Button>
    <Button variant="primary" onClick={()=>Ansstate(props.a,props.u)}>See Answers</Button>

    <Button variant="primary"   onClick={()=>AddAnswers(props.i,props.u)}>Add Answer</Button>
    {/* <Button variant="primary"   onClick={()=>AddComment()}>Add Comment</Button> */}

    <Card.Text>
     {props.u}
    </Card.Text>
    
    
  
   
    {imagecheck(props.s)}
     {!(imagecheck(props.s))?<Card.Img variant="top" src={None}/>:null}

    

</div>
:null
}

     </Card.Body>
  



{props.a.map(ans=>{
 
return (
        divstate[props.i]?
        statearr[ans._id]?
        <div id={ans._id}>
        <Card.Link className="C-L" href={`/answer/${ans.description}/${ans.ans}/${true}`} >
     {ans.description}
     </Card.Link>
    
     
        {e? <div onClick={()=>Votes(ans.id,props.u)}>
         <button onClick={voteupload}>dd</button>
          <FavoriteBorderIcon />
          </div>:null}
        
          </div> 
    :null
     :null

    )
   
 })}


 {/* <input  type="text" ref={textInput} id={props.i}/>
 <button onClick={CommentChange}>Comment</button> */}
</Card>
 </div> 
)
}









  
const Items=()=>{
 
    return(
    <div> 
   
 
    {arr.map((ques)=>{
        
        return(
        ques.questions.map((each)=>{

  
  
     return <Quesdiv key={each._id} t={each.question_title} c={each.question_content} v={each.votes} a={each.answer} i={each._id} u={ques.username} s={each.imgData.data}/>
     
        })
        )
    })}
    
 
    </div>
    )
    }






return(

    
    <div className="contain">
    
  
  

{count?<Items />:null}

{answer?<Code className="Ccard" onChange={OnChange} title={question.title} content={question.content}/>:null}
    {answer?<button onClick={Add}>Add</button>:null}
  
    </div>

)

}


export default Community;