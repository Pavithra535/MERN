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
                <li><Link to='/UseMemo'>useMemo</Link></li>
                <li><Link to= '/UseMemoize'>usememoize</Link></li>
                <li><Link to='/LazyLoading'>LazyLoading</Link></li>
                <li><Link to='/StudentResults'>Results</Link></li>
                <li><Link to='/Login'>Login</Link></li>
            </nav>
        </header>
    )
}
export default Navbar;