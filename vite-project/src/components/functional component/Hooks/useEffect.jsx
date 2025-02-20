import { useState,useEffect } from "react";

const useEffect = ()=>{
    var[text, setText] = useState("");
    useEffect(()=>{
        console.log(text);
    },[text]);
    return(
        <section>
            <h1>This is useEffect Example</h1>
            Type your text:{" "}
            <input
               type="text"
               value={text}
               onChange={(event) => setText(event.target.value)}
            />
        </section>
    )
}