import React, { useEffect,useState } from "react"
import "./cardstyle.css"

import SmallCard from "./smallcard"
function Page2(){

    const [main,setmain]=useState("Income Tax Calculator")
    const [findex,setfindex]=useState(3)
    const [sindex,setsindex]=useState(0)
    const [tindex,settindex]=useState(1)
    const [frindex,setfrindex]=useState(2)
    
    const [arr,setarr]=useState(["EMI Calculator","News","Stock Prediction"])
    
    const [i,seti]=useState(0)
    function Change(event,val){
        var i=arr.indexOf(val)
        arr[i]=main
        if(main==="Income Tax Calculator"){
            setfindex(i)
        }
        else if(main==="EMI Calculator"){
            setsindex(i)
        }
        else if(main==="News"){
            settindex(i)
        }
        else if(main==="Stock Prediction"){
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
                  {/* {  each==="Income Tax Calculator"?t=findex:each==="EMI Calculator"?t=sindex:each==="News"?t=tindex:each==="Stock Prediction"?t=frindex:null} */}
                 
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
        {main==="Income Tax Calculator"?<div className="maincard a">
        <div >
        <iframe  name="right_side" src="https://savinesttaxcalculator.netlify.app/" width="100%"  
        height="500px" frameBorder="0"></iframe>

        
            </div>
        </div>:null}
        {main==="EMI Calculator"?<div className="maincard a">
   
            <iframe  name="right_side" src="https://getemi.herokuapp.com/" width="100%"  
        height="500px" frameBorder="0"></iframe>
        </div>:null}
        {main==="News"?<div className="maincard a">
        {/* <a className="frame" style={{width:"50px",height:'50px'}} name="right_side" href="http://dakshdudeja.pythonanywhere.com/" target="_blank"
         frameBorder="0">News(Click Here)</a> */}
          <iframe  name="right_side" src="https://getnewss.herokuapp.com/" width="100%"  
        height="500px" frameBorder="0"></iframe>
        </div>:null}
      {main==="Stock Prediction"?<div className="maincard a">
      <iframe  name="right_side" src="https://livestockprediction.herokuapp.com/project/stock/" width="100%"  
        height="500px" frameBorder="0"></iframe>
        </div>:null}
        {/* {main!=="Income Tax Calculator"?<SmallCard main={main}  Change={(event)=>Change(event,"Income Tax Calculator",findex)}  val="Income Tax Calculator"/>:null}
        {main!=="EMI Calculator"?<SmallCard main={main} Change={(event)=>Change(event,"EMI Calculator",sindex)} val="EMI Calculator"/>:null}
        {main!=="News"?<SmallCard main={main} Change={(event)=>Change(event,"News",tindex)} val="News"/>:null}
        {main!=="Stock Prediction"?<SmallCard main={main} Change={(event)=>Change(event,"Stock Prediction",frindex)} val="Stock Prediction"/>:null} */}
      {cards()}
        </div>
    )
    
}

export default Page2