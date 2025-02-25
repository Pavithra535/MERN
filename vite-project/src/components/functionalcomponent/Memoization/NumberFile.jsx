import { useState } from "react"
const NumberFile = () =>{
    var[number,setNumber] = useState(0)
    return(
        <div>
            <h2>This is a number box</h2>
            <input type="number" value={number} onChange={(e)=>}
            <h3>The number is {text}</h3>
        </div>
    )
}