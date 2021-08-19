
import './Bar.css';

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope} from 'react-icons/fa'


const LinkBar = () =>{
    return(

        
        <ul className = "link">
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

        
   
    )
}



export default LinkBar;