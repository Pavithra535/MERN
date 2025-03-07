import { useState, useEffect, useRef } from "react";

var UseRef = () =>{
    var[text,setText] = useState("");
    var previousRender = useRef("");
    useEffect(()=>{
      previousRender.current=text;
    },[text]);
      return(
        <div>
            <h1>This is useRef example.</h1>
            Type your text:{" "}
            <input type = "text" value={text} onChange={(e)=>setText(e.target.value)}></input>
            <h2>The text typed is {text}</h2>
            <h3>The previous render is {previousRender.current}</h3>
        </div>
      )
}
export default UseRef;