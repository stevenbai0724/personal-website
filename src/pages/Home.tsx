import line from '../images/line.png'
import { makeStyles, ButtonBase, Button} from "@material-ui/core";
import steven from '../images/steven.png'
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

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

                    <h2 className = {classes.h2}>Full Stack Developer | Waterloo CS '27</h2>

                </div>
                    <ButtonBase className = {classes.btn}><img className = {classes.img} src = {steven}></img></ButtonBase>
            </div>
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <h3 className = {classes.h3}>Hello! My name is Steven. I am studying my 1A term in Computer Science at the University of Waterloo! I am open to messages on discord at bleachuggr#0733.</h3>
                <h3 className = {classes.h3}>I love working with ReactJS, NodeJS, ExpressJS and MongoDB to make web applications. I was previously a web developer at <a href = "https://icontribute.community/#/" target = "_blank" style = {{textDecoration:"none", color:"#38fc94"}}>iContribute</a>. I am currently open to internship opportunities in software development for summer 2023. </h3>
            </AnimationOnScroll>
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <h3 className = {classes.h3}>I enjoy problem solving with math and coding. I've competed in 50+ programming contests and solved 1100+ problems using algorithms and data structures in C++. In particular, I enjoy using <a href = "https://dmoj.ca/user/stevenbai0724" target = "_blank" style = {{textDecoration:"none", color:"#38fc94"}}>dmoj.ca</a>. I also like powerlifting, playing poker and swimming.</h3>

                <h3 className = {classes.h3}>Here on my personal website you can find some of my best coding projects as well as blogs which I sometimes write for fun.</h3>
            </AnimationOnScroll>
            
        </div>
    )
}



export default Home;