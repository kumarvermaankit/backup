import React, { useEffect,useState } from "react"

function SmallCard(props){
    const [i,seti]=useState(0)
// useEffect(()=>{
//     if(i>0){
    
//         document.querySelector(".c").classList.remove("smallcard")
//         document.querySelector(".c").classList.add("smallcard2")
//     }
// seti(i+1)
// },[props.val])

    return(
        <div className="smallcard c"  id={props.i}>
<p onClick={props.Change}>{props.val}</p>
        </div>
    )
}
export default SmallCard