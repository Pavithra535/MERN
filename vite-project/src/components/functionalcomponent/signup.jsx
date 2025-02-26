import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Login from "./Login"
import { useState } from "react"
import axios from "axios";
function Signup(){
    const [FirstName, setFN] = useState("");
    const [LastName, setLN] = useState("");
    const [Email, setmail] =useState("");
    const [Password, setpassword] = useState("");
    const [PhoneNumber, setPN] = useState(0);
    const handleSignup = async(e) =>{
        e.preventDefault();
        axios.post("http://localhost:3000/signup",{
        FirstName:FirstName,
        LastName:LastName,
        Email:Email,
        Password:Password,
        PhoneNumber:PhoneNumber
        });
    };
    return(
        <div>
            <h1>Signup Page</h1>
            <form onSubmit={handleSignup}>
                <label id="First">FirstName: </label>
                
                <input type="text" 
                 placeholder="Enter your firstname"
                 value={FirstName}
                 onChange={(e)=>setFN(e.target.value)}>
                </input><br></br>

                <label id="last">LastName: </label>

                <input type="text" 
                placeholder="Enter your lastname"
                value={LastName}
                onChange={(e)=>setLN(e.target.value)}>
                </input><br></br>

                <label id="mail">Email: </label>

                <input type="email" id="mail" 
                placeholder="Enter your email"
                value={Email}
                onChange={(e)=>setmail(e.target.value)}>
                </input><br></br>

                <label id="Pass">Password: </label>

                <input type="password" id="Pass" 
                placeholder="Enter your password"
                value={Password}
                onChange={(e)=>setpassword(e.target.value)}>
                </input><br></br>

                <label id="phone">PhoneNumber: </label>

                <input type="text" 
                placeholder="Enter your phone number"
                value={PhoneNumber}
                onChange={(e)=>setPN(e.target.value)}></input><br></br>
                <button>Signup</button><br></br>
                <h3 style={{display:"inline"}}>Already have an account? </h3>
                <Link to='/Login'>Login</Link>
            </form>
        </div>
        
    )
}

export default Signup