import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import './LinkBar.css';
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'

const LinkBar = () =>{
    return(

        <ul >
            <li >
               <a href = "https://github.com/stevenbai0724"> <img src = {github}></img></a>
            </li>
            <li >
                <a href = "https://www.linkedin.com/in/steven-bai-787515210/" > <img src = {linkedin}></img> </a>
            </li>
            <li>
                <a href = "mailto:stevenbai0724@gmail.com"> <img src = {gmail}></img></a>
            </li>

        </ul>
    )
}



export default LinkBar;