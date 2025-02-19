import '../css/Navbar.css'
import {Link} from 'react-router-dom';
const Navbar = () =>{
    return(
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                <li>Contact</li>
                <li>Login</li>
                <li>Signup</li>
            </nav>
        </header>
    )
}
export default Navbar;