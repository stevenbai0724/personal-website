import React from 'react'
import line from '../images/line.png'
import { makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) =>  ({

    img: {
        width: "100%",
        display: "flex",
    },
    h1: {

    },
    h2: {

    },
    h3: {

    },
    a: {

    },

    '@media only screen and (max-width: 900px)': {
    
        img: {
            width: "100%",
        },
    }
    

}));

const Home = () =>{
    const classes = useStyles();
    return(
        <div>
            <h1 style = {h1Style}>Steven Bai</h1>

            <h2 style = {h2Style}>High School Student | Developer | Competitive Programmer </h2>
            
            <img className = {classes.img} src={line} ></img>
            
            <h3 style = {h3Style}>Hello! My name is Steven and I am going into Grade 12. I am currently a frontend web development intern for a start up company called <a target="_blank" style = {aStyle}href = "https://icontribute.community/#/" >iContribute</a>. I enjoy problem solving and I compete in math and programming contests. </h3>
            
            <h3 style = {h3Style}>Some of my hobbies include playing poker with friends and competitive swimming. I play video games too but I'm terrible. </h3>

            <h3 style = {h3Style}>I created this website to organize my projects and work experiences, especially in the programming field. This site is still under early stages of development and it especially won't look too great on mobile devices.</h3>
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
const h3Style: React.CSSProperties = {
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '1.5',
    
}
const aStyle: React.CSSProperties = {
    color: 'white',
}


export default Home;