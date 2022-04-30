import React, { useState } from 'react'

import {Istate as Props} from "../App"

interface Iprops{
    people:Props["person"]
    setPeople:React.Dispatch<React.SetStateAction<Props["person"]>>
}

const AddToList:React.FC<Iprops>=({people,setPeople})=>{

const [input,setinput]=useState({
name:"",
age:"",
url:"",
notes:""
})

const handlechange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
setinput({
    ...input,
    [e.target.name]:e.target.value
})
}

const handleClick=()=>{
    if(!input.name||!input.age||!input.url){
        return
    }

    setPeople([...people,{
        
        name:input.name,
        age:parseInt(input.age),
        url:input.url,
        note:input.notes


    }])
}


    return (
        <div className="AddToList">
            <input 
            type="text"
            placeholder="Name"
            className="AddToList-input"
            value={input.name}
            name="name"
            onChange={handlechange}
            />
            <input 
            type="number"
            placeholder="Age"
            className="AddToList-input"
            value={input.age}
            name="age"
            onChange={handlechange}
            />
            <input 
            type="text"
            placeholder="Image Url"
            className="AddToList-input"
            value={input.url}
            onChange={handlechange}
            name="url"
            />
            <textarea
            
            placeholder="Notes"
            className="AddToList-input"
            value={input.notes}
            name="notes"
            onChange={handlechange}
            />

            <button onClick={handleClick}>Add</button>
        </div>
    )
}


export default AddToList