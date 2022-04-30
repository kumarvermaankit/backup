import React, { useEffect,useState } from "react"
import "./cardstyle.css"
// import small from "./smallcard"
import SmallCard from "./smallcard"
import Typewriter from 'typewriter-effect';
import i1 from "./consultation(2).png"
import i2 from "./consultation(3).png"
import i3 from "./consultation(4).png"



function Page3(){

    const [main,setmain]=useState("Financial Planner")
    const [findex,setfindex]=useState(3)
    const [sindex,setsindex]=useState(0)
    const [tindex,settindex]=useState(1)
    const [frindex,setfrindex]=useState(2)
    
    const [arr,setarr]=useState(["Asset Allocation","Loan Consultation","Advice"])
    
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
        else if(main==="Loan Consultation"){
            settindex(i)
        }
        else if(main==="Advice"){
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
                  {/* {  each==="Financial Planner"?t=findex:each==="Asset Allocation"?t=sindex:each==="Loan Consultation"?t=tindex:each==="Advice"?t=frindex:null} */}
                 
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
  <img className="consult_img" src={i1}/>
            </div>
        </div>:null}
        {main==="Asset Allocation"?<div className="maincard a">
        <img className="consult_img" src={i2}/>
        </div>:null}
        {main==="Loan Consultation"?<div className="maincard a">
        <img className="consult_img" src={i3}/>
        </div>:null}
      {main==="Advice"?<div className="maincard a">
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('<h1 class="autowrite" >Are you spending too much?!</h1><br/>')
    
      .pauseFor(100)
      typewriter.typeString('<h1 class="autowrite" >How to do savings!</h1><br/>')  
      .pauseFor(100)
      typewriter.typeString('<h1 class="autowrite" >How to invest and which investment will be most profitable for you!</h1><br/>')
      .pauseFor(100)  
      typewriter.typeString('<h1 class="autowrite" >Best possible investment paths!</h1><br/>')
      .pauseFor(100) 
      typewriter.typeString('<h1 class="autowrite" >Analysis of your data by Experts!</h1>')
      .start();
  }}
/>
        </div>:null}
        {/* {main!=="Financial Planner"?<SmallCard main={main}  Change={(event)=>Change(event,"Financial Planner",findex)}  val="Financial Planner"/>:null}
        {main!=="Asset Allocation"?<SmallCard main={main} Change={(event)=>Change(event,"Asset Allocation",sindex)} val="Second"/>:null}
        {main!=="Loan Consultation"?<SmallCard main={main} Change={(event)=>Change(event,"Loan Consultation",tindex)} val="Loan Consultation"/>:null}
        {main!=="Advice"?<SmallCard main={main} Change={(event)=>Change(event,"Advice",frindex)} val="Advice"/>:null} */}
      {cards()}
        </div>
    )
    
}

export default Page3