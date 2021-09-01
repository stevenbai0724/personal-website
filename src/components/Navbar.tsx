import { HashLink as Link } from 'react-router-hash-link';
import PDF from '../pdf/stevenbairesume.pdf'
import './Bar.css';
import React from 'react';

const Navbar = () =>{
    return(

        
        <ul className = "nav">
        
            <li >
                <Link to="/#top">Home</Link>
            </li>
            <li >
                <Link to="/Projects#top">Projects</Link>
            </li>
            <li >
                <Link to="/Blogs#top">Blogs</Link>
            </li>
            <li>
                <a href = {PDF} target = "_blank">Resume</a>
            </li>

        </ul>
    )
}





export default Navbar;