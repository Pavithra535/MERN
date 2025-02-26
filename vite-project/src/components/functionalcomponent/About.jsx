import {useState} from "react";
function About(){
    var initialVal = 0;
    var[num,SetNum] = useState(initialVal);
    function handleDecrement(){
        SetNum(num-1)
    }

    return(
        <div>
            <h1>About Page</h1>
            <h2>State initial value is {initialVal}</h2>
            <button onClick={handleDecrement}>-</button>
            <h2>Updating States : {num}</h2>
            <button onClick={() => SetNum(num+1000)}>+</button>
        </div>
    )
}
export default About;