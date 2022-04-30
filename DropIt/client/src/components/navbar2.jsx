import React, { useState } from "react"

function Navbar() {



    function Changeactive(event) {
        var a = document.querySelector(".active")
        a.classList.remove("active")
        event.target.classList.add("active")

    }


    return (

        <div className="navbar2">
            <div className="items">
                <p onClick={(event) => Changeactive(event)} id="item1" className="item active">Item 1</p>
                <p onClick={(event) => Changeactive(event)} id="item2" className="item">Item 2</p>
                <p onClick={(event) => Changeactive(event)} id="item3" className="item">Item 3</p>
                <p onClick={(event) => Changeactive(event)} id="item4" className="item">Item 4</p>

            </div>


        </div>


    )
}

export default Navbar