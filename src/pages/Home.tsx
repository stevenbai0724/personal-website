import line from '../images/line.png'
import { makeStyles, ButtonBase, Button} from "@material-ui/core";
import steven from '../images/steven.png'
import React, {useState, useEffect, useRef} from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import axios from 'axios'
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles((theme) =>  ({

    img: {
        width: "100%",
        display: "flex",
        borderRadius: "50%",
    },
    h1: {
        textAlign: 'left',
        fontSize: "30pt",
    },
    h2: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '15pt',
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        lineHeight: '1.75',
        fontSize: '12pt',
        
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
        flexDirection: "row",
        marginTop: "30px",
        
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
            height: '170px',
            width: "170px",
            display: "block",
            margin: "auto",
            borderRadius: "50%",
            
        },
    }
    

}));

const Home = () =>{
    const classes = useStyles();

    return(
        <div style = {{minHeight: "100vh", width: "100%"}}>
            
            <div className = {classes.divFlex}>
            
                <div>
         
                    <h1 className = {classes.h1}>Steven Bai</h1>

                    <h2 className = {classes.h2}>Intern @ Rich Media | UWaterloo CS '27</h2>

                </div>
                    <ButtonBase className = {classes.btn}><img className = {classes.img} src = {steven}></img></ButtonBase>
            </div>
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <h3 className = {classes.h3}>Hello! My name is Steven. I am currently in my 1B term studying Computer Science at the University of Waterloo and an incoming Web Development Intern at <a href = "https://www.richmedia.com/" target = "_blank" style = {{textDecoration:"none", color:"#38fc94"}}>Rich Media</a>. </h3>
                <h3 className = {classes.h3}>I love networking and collaborating working with teammates to deliver complex and high quality software. In particular, I enjoy working with the MERN stack to build web applications. Some of my best work can be found under the <Link style = {{textDecoration:"none", color:"#38fc94"}} to ="/Projects#top">Projects</Link> tab!</h3>
            </AnimationOnScroll> 
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <h3 className = {classes.h3}>In high school, I did competitve programming as a hobby and also to sharpen my critical thinking and problem solving skills with coding challenges. Ever since the start of the pandemic, I competed in online programming contests and solved DSA problems using C++ on platforms such as CodeForces, AtCoder, CSES, dmoj and LeetCode. I mainly used <a href = "https://dmoj.ca/user/stevenbai0724" target = "_blank" style = {{textDecoration:"none", color:"#38fc94"}}>dmoj.ca</a> for contests.</h3>

                <h3 className = {classes.h3}>Some hobbies I recently started include powerlifting and bodybuildling, current SBD split is 315/255/405 (975lb) @ 170lb bodyweight. I also used to be a competitive swimmer in high school! In the upcoming summer, I plan to start training in either MMA or a striking martial art.</h3>
                <h3 className = {classes.h3}>Here on my personal website you can find my resume and some of my best coding projects as well as blogs which I sometimes write for fun.</h3>
            </AnimationOnScroll>

            
        </div>
    )
}



export default Home;