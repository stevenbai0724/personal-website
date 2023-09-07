import { makeStyles, ButtonBase} from "@material-ui/core";
import steven from '../images/steven.jpg'
import React, {useState, useEffect} from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { HashLink as Link } from 'react-router-hash-link';
import { text1, text2, text3, text4} from "./text.js"

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
    mainContainer: {
        minHeight: "100vh", 
        width: "calc(100% - 50px)"
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
    const [step, setStep] = useState(1);

    useEffect(() => {
    }, [step])

    return(
        <div className={classes.mainContainer}>
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
            <div className = {classes.divFlex}>
            
                <div>
         
                    <h1 className = {classes.h1}>Steven Bai</h1>

                    <h2 className = {classes.h2}>University of Waterloo CS '27 | Seeking 2024 internships</h2>

                </div>
                    <ButtonBase onClick = {() => setStep(step + 1)} className = {classes.btn}><img className = {classes.img} src = {steven} alt="steven_profile_pic"></img></ButtonBase>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <h3 className = {classes.h3}> {text1()} <a href = "https://www.richmedia.com/" target = "_blank" style = {{textDecoration:"none", color:"#38fc94"}} rel="noreferrer">Rich Media.</a> </h3>
                <h3 className = {classes.h3}> {text2()} <Link style = {{textDecoration:"none", color:"#38fc94"}} to ="/Projects#top">Projects</Link> tab!</h3>
            </AnimationOnScroll>
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <h3 className = {classes.h3}> {text3()} In Grade 11, I learned the basics of software development during my first internship at <a href = "https://icontribute.community/#/" target = "_blank" style = {{textDecoration:"none", color:"#38fc94"}} rel="noreferrer">iContribute</a>.</h3>

                <h3 className = {classes.h3}> {text4()}</h3>
            </AnimationOnScroll>

            
        </div>
    )
}


export default Home;