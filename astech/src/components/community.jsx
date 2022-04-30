import React, { useEffect, useState,useContext, useCallback } from "react"
import axios from "axios";
import "./community.css";
import {Card,Button, Dropdown}from 'react-bootstrap'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import jwt_decode from "jwt-decode";
import None from "./images/None.PNG"
import AddIcon from '@material-ui/icons/Add';
import CodeM from "./cm"
import one from "./images/one.jpg" ;
import five from "./images/five.jpg" ;
import MultiSelect from "react-multi-select-component";
import Pagination from "react-js-pagination";
import  { useHistory } from 'react-router-dom'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';


import SearchIcon from '@material-ui/icons/Search';





function Community(props){
  

   
    const [files,setFile]=useState([]);
    const [noi,setnoi]=useState([])
    var [i,seti]=useState(false)
    const [bstate,setbstate]=useState(false);
let history=useHistory();
  



    const [teditor,setteditor]=useState("");

    const [activepage,setactivepage]=useState(1)

     const[no_of_questions,setno_of_questions]=useState(0);

    const[decoded,setdecoded]=useState(null);
   
    var tkn=localStorage.getItem('usertoken');

    var inputid=0;
    
    
const [upvote,setupvote]=useState(0)
    const [selected, setSelected] = useState({
        languages:[],
        fields:[],
        frameworks:[],
        string:""

    });
    const [passvalue,setpassvalue]=useState({
        larr:[],
        farr:[],
        frarr:[],
        s:""
    })

const [rp,setrp]=useState(0)
const [tempcmnt,settempcmnt]=useState({
    comment:"",
    username:"",
})

const [uvclick,setuvclick]=useState()


var [divstate,setdivstate]=useState([]);


const [comments,setcomments]=useState(false);

const [statearr,setstatearr]=useState({}); 

const [imagestate,setimagestate]=useState([]);

const [info,setinfo]=useState({
  username:"",
   })

const [arr,setarr]=useState([]);

var str="";

const [cmnt,setcmntstate]=useState([]);
const [temporarycomments,settemporarycomments]=useState({
    _id:"",
    comment:"",
    username:"",
})
const [answer,setanswer]=useState(false)
const[question,setquestion]=useState({
    id:"",
    title:"",
    content:"",
    username:"",
    i:"",
    ansuser:""
  })

const [codestate,setcodestate]=useState([]);

//   const [each_ans,seteachans]=useState({
//       id:"",
//       description:"none",
//       ans:"none",
      
      
//   })

  const [vote,setvote]=useState({
   
  })

// const [votestate,setvotestate]=useState(false);



useEffect(()=>{

 
    
    


  if((window.location)=="http://localhost:3000/community"){
    var val=document.getElementsByTagName("span")
    
    val[0].innerHTML="languages"
    val[1].innerHTML="fields"
    val[2].innerHTML="frameworks"
  } 

    if(tkn!==null){
        const token = localStorage.usertoken
        setdecoded(jwt_decode(token))
        
    }
  
    

 
setarr([])
  

  async function Helper(){
    const result=await axios.get(`${props.url1}`)

  
    for(var i=0;i<result.data.questions.length;i++){
        if(i===(result.data.questions.length-1)){
            str=str+`${result.data.questions[i].index_no}`+`docname${result.data.questions[i].docname}`
        
        }
        else{
        str=str+`${result.data.questions[i].index_no}`+`docname${result.data.questions[i].docname}`+","
        

    } 
      }
    

 
 const res= await axios.get(`${props.url}${str}`);
 if(res.data.arr.length===0){
     window.location.reload()
 }
    setarr(res.data.arr)
    setactivepage(res.data.pagenumber)
    setno_of_questions(res.data.no_of_questions)

}


async function NonHelper(){
    const res= await axios.get(`${props.url}`);
    setarr(res.data.arr)
     setactivepage(res.data.pagenumber)
     setno_of_questions(res.data.no_of_questions)
}
  
if((window.location)=="http://localhost:3000/myq"){
Helper()
}
else{
    
NonHelper()
}






},[rp])


async function Support(){
     
setarr([])
  

async function Helper(){
  const result=await axios.get(`${props.url1}`)


  for(var i=0;i<result.data.questions.length;i++){
      if(i===(result.data.questions.length-1)){
          str=str+`${result.data.questions[i].index_no}`+`docname${result.data.questions[i].docname}`
      
      }
      else{
      str=str+`${result.data.questions[i].index_no}`+`docname${result.data.questions[i].docname}`+","
      

  } 
    }
  

const res= await axios.get(`${props.url}${str}`);
if(res.data.arr.length===0){
   window.location.reload()
}
  setarr(res.data.arr)
  setactivepage(res.data.pagenumber)
  setno_of_questions(res.data.no_of_questions)

}


async function NonHelper(){
  const res= await axios.get(`${props.url}`);
  setarr(res.data.arr)
   setactivepage(res.data.pagenumber)
   setno_of_questions(res.data.no_of_questions)
}

if((window.location)=="http://localhost:3000/myq"){
Helper()
}
else{
  
NonHelper()
}
}     

function Search(){
    var str1=""
    var str2=""
    var str3=""
    
    for(var i=0;i<passvalue.larr.length;i++){
        if(i===(passvalue.larr.length-1)){
            str1=str1+`${passvalue.larr[i]}`
        }
        else{
        str1=str1+`${passvalue.larr[i]}`+","
        }
    }
    for(var i=0;i<passvalue.farr.length;i++){
        if(i===(passvalue.farr.length-1)){
            str2=str2+`${passvalue.farr[i]}`
        }
        else{
        str2=str2+`${passvalue.farr[i]}`+","
        }
    }
    for(var i=0;i<passvalue.frarr.length;i++){
        if(i===(passvalue.frarr.length-1)){
            str3=str3+`${passvalue.frarr[i]}`
        }
        else{
        str3=str3+`${passvalue.frarr[i]}`+","
        }
    }
if(passvalue.larr.length===0){
    str1=null
}
if(passvalue.farr.length===0){
    str2=null
}
if(passvalue.frarr.length===0){
    str3=null
}
if(passvalue.s===""){
    passvalue.s=null
}
    
    history.push(`search/${str1}/${str2}/${str3}/${passvalue.s}`)
   
}



function AddAnswers(id,username){
    console.log(decoded)

    
    answer?setanswer(false):setanswer(true);
    // setquestion({
    //     id:id,
    //     username:username,
    //     i:i,
    //     ansuser:decoded.data.username,
    //     
    // });
   
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
    
           
 
//     if(info.username==username){
//          sete(true)
//       }
// else{
//     sete(false)
// }

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

function showcomments(comment,id){
    if(tkn!==null){
        comments[id]?setcomments((prevvalue)=>{
            return{
                ...prevvalue,
                [id]:false
            }
        })
        :
        setcomments((prevvalue)=>{
            return{
                ...prevvalue,
                [id]:true
            }
        })
    }
    

    comment.map((comment)=>{
    cmnt[comment._id]?
setcmntstate((prevvalue)=>{
    return{
        ...prevvalue,
        [comment._id]:false
    }
})  
:setcmntstate((prevvalue)=>{
    return{
        ...prevvalue,
        [comment._id]:true
    }
})
    })
   
}

function Showcode(divid){
    codestate[divid]?
setcodestate((prevvalue)=>{
    return{
        ...prevvalue,
        [divid]:false
    }
})  
:setcodestate((prevvalue)=>{
    return{
        ...prevvalue,
        [divid]:true
    }
}) 
}

function Showimage(divid){
    imagestate[divid]?
    setimagestate((prevvalue)=>{
        return{
            ...prevvalue,
            [divid]:false
        }
    })  
    :setimagestate((prevvalue)=>{
        return{
            ...prevvalue,
            [divid]:true
        }
    })
}



async function SendAnswer(id,doc_name,index){
    var titleeditor = document.getElementById("title"+id).children[0].value
    var contenteditor = document.getElementById("content"+id).children[0].value
    setteditor(titleeditor)


    const data=new FormData()
    for(const file of files){
        data.append("file",file)
    }
    
       



  const result= await axios.post("http://localhost:5000/upload/addanswer",{title:titleeditor,content:contenteditor,id:id,document:doc_name,index:index,ansuser:decoded.data.username})
  

if(result){
    console.log(result.data.data)
    axios.post("http://localhost:5000/answer",data)
    axios.post("http://localhost:5000/answer/upload",{id:id,document:doc_name,index:index,ansindex:Number(result.data.data)})
}


    
    
}


// function CommentChange(event,inputid){

   
// event.preventDefault()   
// const value=event.target.value
//     setcomments((prevvalue)=>{
//         return{
//             ...prevvalue,
//             [inputid]:value
//         }
//     })  
//          }
 


  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context("../backend/uploads", true, /\.(png|jpe?g|svg|PNG)$/));
  

 


 function Votes(vote_id,document,index,ansvote,ansindex,event){
    
 event.preventDefault();

 

axios.post("http://localhost:5000/upload/vote",{index:index,document:document,ansindex:ansindex})
.then(res=>console.log(res))
.catch(err=>console.log(err));


(vote[vote_id]===undefined && ansvote===true || vote[vote_id]===true)?
setvote((prevvalue)=>{
    return{
        ...prevvalue,
        [vote_id]:false
    }
})
:
setvote((prevvalue)=>{
    return{
        ...prevvalue,
        [vote_id]:true

    }
})
}




function handlePageChange(pageNumber) {
    setactivepage(pageNumber)
    
    axios.post("http://localhost:5000/upload/activepage",{pageNumber:pageNumber})
    window.location.reload();
   }

function imagecheck(s){

    var count=0

return(
    <div style={{display:"flex"}}>
  { s.map((each)=>{
     
        for(var h=0;h<images.length;h++){
              
        
        //   console.log(each.path.replace('uploads',"").replace('\\',"")==images[h].default.replace('/static/media/','').replace(/\.[^.]*(\.(jpg|jpeg|tiff|png|PNG|JPEG))/g, "$1"))
            if(each.path.replace('uploads',"").replace('\\',"")==images[h].default.replace('/static/media/','').replace(/\.[^.]*(\.(jpg|jpeg|tiff|png|PNG|JPEG))/g, "$1")){
              count++
                return(
                    <div >
                    <Card.Img className="cardimg"  variant="top" src={images[h].default}/>
                    <p style={{margin:"10px",marginLeft:"130px"}}>{`Fig${count}`}</p>
                    </div>
                ) 
                
              

               }
        
          
        }
                
        })}
    </div>
)
  

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






 function saveinput(iid,doc_name,event,index,q_id){
     
    
event.preventDefault();
    var val=document.getElementById(iid).value

   


    axios.post("http://localhost:5000/upload/comment",{comment:val,useronline:decoded.data.username,index:index,document:doc_name})
  
    settempcmnt((prevvalue)=>{
        return{
            ...prevvalue,
            [q_id]:{
                comment:val,
                username:decoded.data.username
            }
        }
    })
   
setcomments(false)
   
   
}



 function Delete(event,document,index,id){

   event.preventDefault()
     axios.post(`http://localhost:5000/upload/delete/${decoded.data.username}/${id}`,{index:index,document:document})
     .then(()=>{
        window.location.reload()
     })
    
}



function Countdown(props){


const [checker,setchecker]=useState(false)  
var time=Date.parse(props.time)
var currenttime=Date.parse(new Date())

const [secondspassed,setsp]=useState((currenttime-time)/(1000))


useEffect(()=>{
    if((Math.floor(secondspassed/(60*60)) % 24)>20){
        setchecker(true)
    }
else{
    setTimeout(()=>{
        setsp(secondspassed+1)
        },1000)
    }
     
},[secondspassed])


    
   
    return (
        <div>
          
{checker?<p>TimeUp!</p>:<ul>
            <li className="timer">{(Math.floor(secondspassed/(60*60*24)))<10?"0"+Math.floor(secondspassed/(60*60*24)):Math.floor(secondspassed/(60*60*24))}</li>
            <li className="timer">{(Math.floor(secondspassed/(60*60)) % 24)<10?"0"+(Math.floor(secondspassed/(60*60)) % 24):(Math.floor(secondspassed/(60*60)) % 24)}</li>
            <li className="timer">{(Math.floor(secondspassed/60) % 60)<10?"0"+(Math.floor(secondspassed/60) % 60):(Math.floor(secondspassed/60) % 60)}</li>
            <li className="timer">{(secondspassed % 60)<10?"0"+(secondspassed % 60):(secondspassed % 60)}</li>
            </ul>}
        </div>
    ) 
   



}



function Upvote(document,index,ansindex,state,upvotevalue,id,event){
    
    event.preventDefault();
   
  
   
   
   axios.post(`http://localhost:5000/upload/upvote/${state}`,{index:index,document:document,ansindex:ansindex})
   .then(res=>console.log(res))
   .catch(err=>console.log(err));
   

   if(state===true){
       setupvote((prevvalue)=>{
           return {
            ...prevvalue,
            [id]:upvotevalue+1
           }
           

       })
   }
   else if(state===false){
    setupvote((prevvalue)=>{
        return {
         ...prevvalue,
         [id]:upvotevalue-1
        }
        

    })
   }



   
   }




   const onFileSelected=useCallback((event,i)=>{


    // if(i<noi){


        event.preventDefault()
    
      if(noi.length===0){
        
        setFile([...files,0])
      }
      else{
       setFile([...files,noi[noi.length-1]+1])
     }
    
    

      
        
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
    
    
      })
    

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
  
  
console.log(noi)
console.log(files)

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
  

  
  function CreateImage(){
  
    
  
  
  // console.log(arr)
    return(
    <div> 
      
  { noi.map((each)=>{
  
    
  
      return(
        <div className="create" key={each}>
      
        <SelectFile i={each}/>
      
      
    <button className="close_btn" style={{background:"none"}} onClick={(event)=>close(event,each)}><HighlightOffIcon /></button>
        <img style={{color:"white"}} id={`myimage${each}`} alt="no-image"/>
       
      
        </div>
       )
    
     
     })}
  </div> 
   
    )  
     
        
       
    
  }


 console.log(teditor)


function Quesdiv(props){

    

return(

    
    <div id={props.i} className="main" key={props.i}   >
    {/* {Countdown(props.time)} */}
  <Card className="importcard" >
       
  <Card.Header className="c_header tab4" onClick={()=>Showall(props.i)}><h3><b>{props.t}</b></h3>{(props.paymentvalue)/100===0?<Card.Img  class="card_img"  src={one}/>:(props.paymentvalue)/100===5?<Card.Img class="card_img" src={five}/>:(props.paymentvalue)/100===10?<Card.Img  class="card_img" src={five}/>:(props.paymentvalue)/100===100?<Card.Img  class="card_img"  src={null}/>:null}</Card.Header>
  <Card.Body>

 
    {
        divstate[props.i]?    
        <div key={props.i+"childdiv"} id={props.i+"childdiv"}>
    
 {/* <div id="clockdiv">
    Days: <p id="days">""</p><br/>
    Hours: <p id="hours">""</p><br/>
    Minutes: <p id="minutes">""</p><br/>
    Seconds: <p id="seconds">""</p><br/>
    end:<p id="end">""</p><br/>
</div> */}

    <Countdown time={props.time}/>
    <Card.Text onClick={()=>Showcode(props.i)} >
     Code
    </Card.Text>
    {codestate[props.i]?
    <CodeM val={props.c} hght="500px" wdt="1200px" read={true} />
    :null
    }
    <Button id="cardbtn"  variant="primary" onClick={()=>Ansstate(props.a,props.u)}><svg className="bts">
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>See Answers</Button>
    {tkn!==null?<div className="afterloginbuttons">
   <Button  id="cardbtn" variant="primary"   onClick={()=>AddAnswers(props.i,props.u,props.doc_name)}><svg className="bts">
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>Add Answer</Button>

    </div>:null}
    
    <Button  id="cardbtn" variant="primary" style={{marginLeft:"100px"}}  onClick={()=>Showimage(props.i)}><svg className="bts">
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>Image</Button>
    <Button  id="cardbtn" variant="primary"   onClick={()=>showcomments(props.comments,props.i)}><svg className="bts">
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>Comments</Button>
    <Button  id="cardbtn" variant="primary" style={{marginLeft:"100px"}}  onClick={(event)=>Delete(event,props.doc_name,props.index,props.i)}><svg className="bts">
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>Delete</Button>
   { comments[props.i]?<form onSubmit={(event)=>saveinput(inputid,props.doc_name,event,props.index,props.i)}>
    <input  type="text" id={inputid} />
    <button id="cardbtn" type="submit" ><AddIcon /></button>
    </form>:null}
    <Card.Text>
     {props.u}
    </Card.Text>
    
     
    
   
    {imagestate[props.i]?imagecheck(props.s):null}
     {imagestate[props.i]?(!(imagecheck(props.s))?<Card.Img variant="top" src={None}/>:null):null}

     

{/* <input  id={"title"+props.i}/> */}
{answer?<div>
    <CodeM    name={"title"+props.i}  val={teditor} plh="Enter Question"  hght="60px" wdt="1200" read={false} />
<CodeM      name={"content"+props.i}   plh="Enter or Copy Code" hght="400px" wdt="1200" read={false}/> 
             <button onClick={()=>SendAnswer(props.i,props.doc_name,props.index)}>Submit</button>

             <div style={{display:"flex",marginTop:"200px"}}>
     <p style={{color:"white",marginTop:"12px"}}>Add Image</p>
     <button className="AC" onClick={(event)=>AddImage(event)}><AddIcon style={{width:"35px",height:"35px",border:"none"}} /></button>
     </div>
               
     {CreateImage()}          
</div>
:null
}
 
     
     {/* {answer?<Code Change={OnChange} title={question.title} content={question.content} />:null}
    {answer?<button className="answerbtn"  id="cardbtn"  onClick={Add}>Add</button>:null} */}
</div>

:null
}

     </Card.Body>
  

<div className="displayComments"> 
{props.comments.map(comment=>{
    return(
        divstate[props.i]?
        cmnt[comment._id]?
        <div>
        <Card.Text  className="commentsection">
        {comment.comment}
        </Card.Text>
        <div className="userimageprofile">
        <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img>
        <p className="userprofile" style={{fontWeight:"2000px"}} >{comment.username}</p>
            
        </div>
        </div>
        :null
        :null
    )
})}
</div>




{props.a.map(ans=>{

    
 
return (
        divstate[props.i]?
        statearr[ans._id]?
        <div key={ans._id} id={ans._id}>
        <Card.Link className="C-L" href={`/answer/${ans.description}/${ans.ans}/${true}`} >
     {ans.description}
     </Card.Link>

     {tkn!==null?decoded.data.username===props.u?
         <div id={ans._id} onClick={(event)=>Votes(ans._id,props.doc_name,props.index,ans.vote,ans.index,event)} >
        
         {vote[ans._id]===undefined?ans.vote?<FavoriteIcon />:<FavoriteBorderIcon />:vote[ans._id]?<FavoriteIcon />:<FavoriteBorderIcon />}
         {/* {vote[ans._id]?<FavoriteIcon />:vote[ans._id]===false?<FavoriteBorderIcon />:vote[ans._id]===undefined?ans.vote===true?<FavoriteIcon />:<FavoriteBorderIcon />:<FavoriteBorderIcon />} */}
    
          </div>:null:null}

        <button id={ans._id} onClick={(event)=>Upvote(props.doc_name,props.index,ans.index,true,ans.upvote,ans._id,event)}>Up</button>
        <button id={ans._id} onClick={(event)=>Upvote(props.doc_name,props.index,ans.index,false,ans.upvote,ans._id,event)}>Down</button>
         {upvote[ans._id]===undefined? <p>{ans.upvote}</p>:<p>{upvote[ans._id]}</p>}
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





function dropValueGetter(value,a){
   
    if(a===1){
        var arr1=[]
        setSelected((prevvalue)=>{
            return{
                ...prevvalue,
                languages:value
            }
        })

        value.map((each)=>{
        arr1.push(each.value)
        })
     setpassvalue((prevvalue)=>{
         return{
             ...prevvalue,
             larr:arr1
         }
     })
   
    }
    else if(a===2){
        var arr1=[]
    
        setSelected((prevvalue)=>{
            return{
                ...prevvalue,
                fields:value
            }
        })
        value.map((each)=>{

arr1.push(each.value)
})
        setpassvalue((prevvalue)=>{
            return{
                ...prevvalue,
                farr:arr1
            }
        })
        
    }
    else if(a===3){
        var arr1=[]
        setSelected((prevvalue)=>{
            return{
                ...prevvalue,
                frameworks:value
            }
        })
        value.map((each)=>{
       arr1.push(each.value)
        })
        setpassvalue((prevvalue)=>{
            return{
                ...prevvalue,
                frarr:arr1
            }
        })
   
    }
    else if(a===4){
        var val=document.getElementById("search").value
        setSelected((prevvalue)=>{
            return{
                ...prevvalue,
                string:val
            }
        })
        console.log(val)
      
        setpassvalue((prevvalue)=>{
            return{
                ...prevvalue,
                s:val
            }
        })
 

    }

    
if(passvalue.s===""){
    setpassvalue((prevvalue)=>{
        return{
            ...prevvalue,
            s:null
        }
    })
}
 
   
}



  
const Items=()=>{
 
    return(
    <div> 
   
 
    {arr.map((each)=>{
        
      
     if(each===null){
         return <h1>NO Searches Found</h1>
     }
    
  
     return <Quesdiv key={each.id} t={each.question_title} c={each.question_content} v={each.votes} a={each.answer} i={each.id} u={each.username} s={each.imginfo} paymentvalue={each.value.amount} comments={each.comments} doc_name={each.documentname} index={each.index_no} time={each.time}/>
     
    
        
    })}
    
 
    </div>
    )
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



return(
  
    <div>
   
    <div className="contain">

{
(window.location)=="http://localhost:3000/community"?    
<form className="frm">
        <input id="search" className="searchInput" placeholder="Search" onChange={(value)=>dropValueGetter(value,4)}/>
        <button className="searchButton" onClick={Search}><SearchIcon /></button>
<MultiSelect
        className="drop_down"
        options={languages}
        value={selected.languages}
        onChange={(value)=>dropValueGetter(value,1)}
        labelledBy={"Select"}
      />
<MultiSelect
        className="drop_down"
        options={fields}
        value={selected.fields}
        onChange={(value)=>dropValueGetter(value,2)}
        labelledBy={"Select"}
      />
      <MultiSelect
        className="drop_down"
        options={languages}
        value={selected.frameworks}
        onChange={(value)=>dropValueGetter(value,3)}
        labelledBy={"Select"}
      />
        </form>
      
      :null}
  

<Items />
{/* {count?<Items />:null} */}

<Pagination
className="pages"
          activePage={activepage}
          itemsCountPerPage={2}
          totalItemsCount={5*(no_of_questions)}
          pageRangeDisplayed={5}
          onChange={(pagenumber)=>handlePageChange(pagenumber)}
        />
  t
    </div>


</div>
)

}

export default Community;