import {Link} from 'react-router-dom'
import PDF from '../pdf/stevenbairesume.pdf'
import './Bar.css';
import React from 'react';

const Navbar = () =>{
    return(

        
        <ul className = "nav">
        
            <li >
                <Link to="/">Home</Link>
            </li>
            <li >
                <Link to="/Projects">Projects</Link>
            </li>
            <li >
                <Link to="/Blogs">Blogs</Link>
            </li>
            <li>
                <a href = {PDF} target = "_blank">Resume</a>
            </li>

        </ul>
    )
}





export default Navbar;