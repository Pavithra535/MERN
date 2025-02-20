import '../css/Navbar.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';
const Navbar = () =>{
    return(
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                <li><Link to='/UseEffectAPI'>useeffectAPI</Link></li>
                <li><Link to='/UseRef'>useRef</Link></li>
            </nav>
        </header>
    )
}
export default Navbar;