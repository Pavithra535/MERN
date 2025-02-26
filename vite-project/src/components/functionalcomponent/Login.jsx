import {Link} from 'react-router-dom';
function Login(){
    return(
        <div>
            <h1>Login Page</h1>
            <form>
                <label id="mail">Email: </label>
                <input type="email" placeholder="Enter your email"></input><br></br>
                <label id="pass">Password: </label>
                <input type="password" placeholder="Enter your password"></input><br></br>
                <button>Login</button><br></br>
                <h3 style={{display:"inline"}}>New user?</h3>
                <Link to='/Signup'>Signup</Link>
            </form>
        </div>
    )
}
export default Login