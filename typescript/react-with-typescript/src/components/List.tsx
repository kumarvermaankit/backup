import React from 'react'
import {Istate as Pstate} from "../App"



  


const List:React.FC<Pstate> = ({person}) => {

function renderList():JSX.Element[]{
    return person.map((person)=>{
        return(
            <li className="List" >
                <div className="List-header">
                    <img className="List-img" src={person.url} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
        )
    })
}

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List