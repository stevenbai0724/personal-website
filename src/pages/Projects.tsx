import React from 'react';

const Projects = () =>{ 
    return(
        <div>
            <h1 style = {h1Style}>More projects coming soon! </h1>
            <a href = "https://devpost.com/stevenbai0724"><h2 style = {h2Style}>Devpost</h2></a>
            <a href = "https://dmoj.ca/user/stevenbai0724"><h2 style = {h2Style}>DMOJ</h2></a>
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
    marginLeft: '28%',
    marginRight: '27%',
}
const imgStyle: React.CSSProperties = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
   
}

export default Projects;