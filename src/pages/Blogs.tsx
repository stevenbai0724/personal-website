import React from 'react';
import line from '../images/line.png'
import {Link} from 'react-router-dom'


const Blogs = () =>{ 
    return(
        <div>
            
            <h1 style = {h1Style}>Blogs</h1>
            
            <h2 style = {h2Style}>Interesting stories and experiences worth sharing </h2>
            <img style = {imgStyle} src={line} alt="line"></img>
            
            <Link to="/FirstHackathon" style = {linkStyle}>

           
            <h3 style = {h3StyleLeft}>My first hackathon experience</h3>
            <h3 style = {h3StyleRight}> July 9 2021 | 3 min </h3>
          
            
           
            
            </Link>

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
}
const h3StyleLeft: React.CSSProperties = {
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: '20px',
    float: 'left',

}
const h3StyleRight: React.CSSProperties = {
    textAlign: 'right',
    fontWeight: 'normal',
    fontSize: '20px',
    float: 'right',  

}
const imgStyle: React.CSSProperties = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
   
}
const linkStyle: React.CSSProperties = {
    color : '#38FC94',
    

}

export default Blogs;