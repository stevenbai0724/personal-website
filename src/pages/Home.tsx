import React from 'react'
import line from '../images/line.png'
import { makeStyles, ButtonBase, Button} from "@material-ui/core";
import steven from '../images/steven.png'

const useStyles = makeStyles((theme) =>  ({

    img: {
        width: "100%",
        display: "flex",
        borderRadius: "50%",
    },
    h1: {
        textAlign: 'left',
    },
    h2: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '25px',
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '1.75',
        
    },
    a: {

    },
    btn: {
        height: '200px',
        width: '200px',
        borderRadius: "50%",
       
    },
    divFlex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    divFill: {
        height: 'calc(100vh - 500px)',
        
    },


    '@media only screen and (max-width: 500px)': {
        h1: {
            textAlign: 'center',
        },
        h2: {
            textAlign: 'center'
        },
        h3: {
            textAlign: 'left'
            
        },
        img: {
            width: "100%",
        },
        divFlex: {
            display: "block",
        },
        btn: {
            height: '150px',
            width: '150px',
            display: "block",
            margin: "auto",
            borderRadius: "50%",
            
        },
    }
    

}));

const Home = () =>{
    const classes = useStyles();
    return(
        <div >
            
            <div className = {classes.divFlex}>
            
            <div>
            <h1 className = {classes.h1}>Steven Bai</h1>


            <h2 className = {classes.h2}>Developer | Competitive Programmer </h2>


            </div>

            <ButtonBase className = {classes.btn}><img className = {classes.img} src = {steven}></img></ButtonBase>
            </div>

            
            
            
            <h3 className = {classes.h3}>Hello! My name is Steven and I am a grade 12 student. I am currently open to internship opportunities for web developement. I am highly motivated and I'm currently working on full stack web app projects. I love problem solving and I compete in math and programming contests. </h3>
            
            <h3 className = {classes.h3}>Some of my hobbies include swimming, online poker and playing the piano. I'm also the worst at every video game that I play. </h3>

            <h3 className = {classes.h3}>I created this website to organize my projects and experiences. This site is still under early stages of development and I am constantly making updates to it.</h3>
            <br></br>
            
            <div className = {classes.divFill}>
            <br></br>

            </div>

        
            <br></br>

        </div>
    )
}



export default Home;