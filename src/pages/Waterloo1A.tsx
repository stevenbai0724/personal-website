import React, {useEffect, useState} from 'react';
import { makeStyles} from "@material-ui/core";
import E7 from "../images/E7.jpg"
import {text5, text6, text7, text8, text9, text10, text11, text12, text13} from "./text.js"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const useStyles = makeStyles((theme) =>  ({
    h1: {
        textAlign: 'left',
        fontSize: "30pt",
        marginTop: "80px",
    },
    h2: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '15pt',
    },
    h2Title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '15pt',
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '12pt',
        lineHeight: '1.75',
        display: 'inline',
    },
    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        marginTop: "40px",
        marginBottom: "40px",
        borderRadius: "15px",
    },
    a: {
        color: '#38fc94',
        textDecoration: "none",
    },
    divFill: {
        height: 'calc(100vh)',
        
    },
    video: {
        position: "relative",
        width: "100%",
        backgroundColor: "red",
        paddingTop: "56.25%",
    },
    mainContainer: {
        minHeight: "100vh", 
        width: "calc(100% - 50px)"
    },
}));

const Waterloo1A = () => {

    const classes = useStyles();

    return(
        <div className = {classes.mainContainer}>


            <h1 className = {classes.h1}>1A at Waterloo</h1>

            <h2 className = {classes.h2}>Dec 2022 | 6 min read</h2>

            <img className={classes.img} src={E7} alt="E7"></img>

            <h3 className = {classes.h3}>Starting University was definitely the biggest change in my life. It was the first time I had to move out and start living on my own and I had no idea what to expect. Luckily, my first semester (1A) at the University of Waterloo went very well in terms of lifestyle and academics. </h3>


            <br></br>

            

            
                <h2 className={classes.h2Title}>Residence and Food</h2>

                <h3 className = {classes.h3}> {text5()} <a href="https://uwaterloo.ca/campus-housing/residences/uwp" target="_blank" className={classes.a} rel="noreferrer">UWP Eby Hall</a> which offers 3 single bedrooms, a kitchen and a bathroom.
                </h3>


            <br></br>
            
            
            <h3 className = {classes.h3}> {text6()} 
                <a href = "https://uwaterloo.ca/campus-housing/residences/claudette-millar-hall"
                    target="_blank"
                    className={classes.a}
                    rel="noreferrer"
                >CMH </a>
                {text7()}
            </h3>
    

            <br></br>

           
                <h2 className={classes.h2Title}>Lifestyle</h2>

                <h3 className = {classes.h3}> {text8()} </h3>
           

            <br></br>

            <div>
                <h3 className={classes.h3}> {text9()}</h3>
            </div>

            <br></br>

            <div>
                <h3 className={classes.h3}>{text10()}</h3>

            </div>
            <br></br>

            <div>
                <h2 className={classes.h2Title}>Math 137:  <a href="https://uwflow.com/course/math137" target="_blank" className={classes.a} rel="noreferrer">Calculus 1</a></h2>
                

            </div>

            <br></br>

            <div>
                <h3 className={classes.h3}>{text11()}</h3>
            </div>

            <br></br>

            <div>
                <h3 className={classes.h3}>{text12()}</h3>
            </div>

            <br></br>

            <div>
                <h3 className={classes.h3}>{text13()}</h3>
            </div>




            






        
        </div>
    )

}




export default Waterloo1A

