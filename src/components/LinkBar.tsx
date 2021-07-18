import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import './LinkBar.css';
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope} from 'react-icons/fa'


const LinkBar = () =>{
    return(

        <div className = "LinkBar">
        <ul >
            <li >
               <a target="_blank" href = "https://github.com/stevenbai0724"> <FaGithub/> </a>
            </li>
            <li >
                <a target="_blank" href = "https://www.linkedin.com/in/steven-bai-787515210/" > <FaLinkedin/> </a>
            </li>
            <li>
                <a target="_blank" href = "mailto:stevenbai0724@gmail.com"> <FaEnvelope></FaEnvelope></a>
            </li>
           
        </ul>

        </div>
   
    )
}



export default LinkBar;