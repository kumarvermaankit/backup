import React, { useEffect,useState } from "react"
import "./cardstyle.css"
// import small from "./smallcard"
import SmallCard from "./smallcard"
function Page5(props){

    const [main,setmain]=useState("Set Expense Limits")
    const [limits,setlimits]=useState({
        food:0,
        travel:0,
        health:0,
        education:0,
        loan:0,
        others:0
    })
    
    const [arr,setarr]=useState(["Delete","Coming Soon","Coming soon"])
    


 useEffect(()=>{
     console.log("h")
     setlimits((prev)=>{
         return{
             
             food:props.users[0].info.expenses.food.limit,
             travel:props.users[0].info.expenses.travel.limit,
             health:props.users[0].info.expenses.health.limit,
             education:props.users[0].info.expenses.education.limit,
             loan:props.users[0].info.expenses.loan.limit,
             others:props.users[0].info.expenses.others.limit
         }
     })
 },[])


    const [i,seti]=useState(0)
    function Change(event,val){
        var i=arr.indexOf(val)
        arr[i]=main
       
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
                  {/* {  each==="Delete"?t=findex:each==="Set Expense Limits"?t=sindex:each==="Coming Soon"?t=tindex:each==="Coming Soon"?t=frindex:null} */}
                 
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
    
    function OnDelete(event){
        event.preventDefault()
        
        props.socket.emit("remove")
        window.open("about:blank", "_self");
        window.close();
        }
    
    
        function Addlimit(event){
            event.preventDefault()
            setlimits((prev)=>{
                return{
                    ...prev,
                    [event.target.name]:event.target.value
                }
            })
        }


        console.log(limits)


        function SaveLimit(){
            props.socket.emit("savelimit",limits)
        }

    return(
        <div className="container">
        {main==="Delete"?<div className="maincard a">
        <div >
        <button className="delete_btn" onClick={(event)=>{OnDelete(event)}}>Delete</button>
            </div>
        </div>:null}
        {main==="Set Expense Limits"?<div className="maincard a">
        <h1>Set Limits</h1>
        <div className="limit_div">
        <div style={{display:"flex"}}>
            <label for="food">Set Food limit</label>
            
            <input type="number" name="food"  className="ilimit" value={(limits.food)}  placeholder="in Rs" onChange={(event)=>Addlimit(event)}/>
        </div>
        <div style={{display:"flex"}}>
            <label for="travel">Set travel limit</label>
            <input type="number" name="travel"  className="ilimit" value={(limits.travel)} placeholder="in Rs" onChange={(event)=>Addlimit(event)}/>
        </div>
        <div style={{display:"flex"}}>
            <label for="health">Set health limit</label>
            <input type="number" name="health"  className="ilimit" value={(limits.health)} placeholder="in Rs" onChange={(event)=>Addlimit(event)}/>
        </div>
        <div style={{display:"flex"}}>
            <label for="education">Set education limit</label>
            <input type="number" name="education" className="ilimit" value={(limits.education)} placeholder="in Rs" onChange={(event)=>Addlimit(event)}/>
        </div>
        <div style={{display:"flex"}}>
            <label for="loan">Set loan limit</label>
            <input type="number" name="loan"  className="ilimit" value={(limits.loan)} placeholder="in Rs" onChange={(event)=>Addlimit(event)}/>
        </div>
        <div style={{display:"flex"}}>
            <label for="others">Set Others limit</label>
            <input type="number" name="others"  className="ilimit" value={(limits.others)} placeholder="in Rs" onChange={(event)=>Addlimit(event)}/>
        </div>
        </div>
        <button onClick={SaveLimit}>Save</button>
        </div>:null}
        {main==="Coming Soon"?<div className="maincard a">
            Coming Soon
        </div>:null}
      {main==="Coming soon"?<div className="maincard a">
            Coming Soon
        </div>:null}
        {/* {main!=="Delete"?<SmallCard main={main}  Change={(event)=>Change(event,"Delete",findex)}  val="Delete"/>:null}
        {main!=="Set Expense Limits"?<SmallCard main={main} Change={(event)=>Change(event,"Set Expense Limits",sindex)} val="Set Expense Limits"/>:null}
        {main!=="Coming Soon"?<SmallCard main={main} Change={(event)=>Change(event,"Coming Soon",tindex)} val="Coming Soon"/>:null}
        {main!=="Coming Soon"?<SmallCard main={main} Change={(event)=>Change(event,"Coming Soon",frindex)} val="Coming Soon"/>:null} */}
      {cards()}
        </div>
    )
    
}

export default Page5