import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import './Navbar.css';

const Navbar = () =>{
    return(

        <ul >

            <li >
                <Link to="/">Home</Link>
            </li>
            <li >
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
                <Link to="Blogs">Blogs</Link>
            </li>

        </ul>
    )
}



export default Navbar;