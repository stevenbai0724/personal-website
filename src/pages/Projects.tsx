import React from 'react';
import {Link} from 'react-router-dom'


const Projects = () =>{ 
    return(
        <div>
            <h1 style = {h1Style}>Project page under construction </h1>
            <a href = "https://devpost.com/stevenbai0724"><h2 style = {h2Style}>Devpost</h2></a>
            <a href = "https://dmoj.ca/user/stevenbai0724"><h2 style = {h2Style}>DMOJ</h2></a>
            <a href = "https://github.com/stevenbai0724"><h2 style = {h2Style}> GitHub</h2></a>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    
            


        </div>
    )

}
const h1Style: React.CSSProperties = {
    textAlign: 'center',
}
const h2Style: React.CSSProperties = {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: '25px',
    color: 'white',
}
const h3Style: React.CSSProperties = {
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '2',
    
}
const imgStyle: React.CSSProperties = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
   
}

export default Projects;