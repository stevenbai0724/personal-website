import React from 'react'
import line from '../images/line.png'

const Home = () =>{
    return(
        <div>
            <h1 style = {h1Style}>Steven Bai</h1>

            <h2 style = {h2Style}>High School Student | Developer | Competitive Programmer </h2>
            
            <img style = {imgStyle} src={line} alt="line"></img>

            <h3 style = {h3Style}>Hello! My name is Steven and I am going into Grade 12. I am currently a frontend web development intern for a start up company called iContribute. I enjoy problem solving and I compete in math and competitive programming contests. </h3>
            
            <h3 style = {h3Style}>Outside of work and studying, I play the piano and I do competitive swimming. I play video games too but I'm terrible. </h3>
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


export default Home;