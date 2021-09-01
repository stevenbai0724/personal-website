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
        lineHeight: '1.5',
        
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


            <h2 className = {classes.h2}>High School Student | Developer | Competitive Programmer </h2>


            </div>

            <ButtonBase className = {classes.btn}><img className = {classes.img} src = {steven}></img></ButtonBase>
            </div>

            
            
            
            <h3 className = {classes.h3}>Hello! My name is Steven and I am going into Grade 12. I am currently open to internship opportunities for the 2021 fall and winter terms. I am highly motivated and interested in working on full stack development. I enjoy problem solving and I compete in math and programming contests. </h3>
            
            <h3 className = {classes.h3}>Some of my interests include poker and competitive swimming. I play video games too but I'm terrible. </h3>

            <h3 className = {classes.h3}>I created this website to organize my projects and work experiences, especially in the programming field. This site is still under early stages of development and I am constantly making updates to it.</h3>
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



export default Home;