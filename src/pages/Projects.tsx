import React, {useEffect, useState} from 'react';
import { makeStyles} from "@material-ui/core";
import ExperiencePoint from '../components/ExperiencePoint';
import IC from '../images/IC.png'
import productify from "../images/productify.png"
import richmedia from "../images/richmedia.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

//style
const useStyles = makeStyles((theme) =>  ({

    title: {
        textAlign: 'left',
        color: 'white',
        fontSize: "30pt",
        marginTop: "80px",
    },
    subTitle: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '15pt',
        color: 'white',
        marginBottom: "30px",
    },
    subTitleLeft: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '18pt',
        color: 'white',
        textDecoration: 'underline',
        marginBottom: '20px'
    },
    projectName: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '15pt',
        color: 'white',
        backgroundColor: '#2E8B57',
        display: "inline",
        marginRight: "5px",
    },
    experienceName: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '15pt',
        color: 'white',
        backgroundColor: '#9966CC',
        display: "inline",
    },
    projectDescription: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '12pt',
        color: 'white',
        display: "inline",  
    },
    cardContainer: {    
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridGap: "10px",
        justifyContent: "center",

    },
    icon: {
        height: "30px",
        width: "30px",
        display: "inline",
        verticalAlign: "middle",
        marginLeft: "5px",
        marginRight: "5px",
        borderRadius: "50%"
    },
    card: {
        width: "325px",
        height: "325px",
        backgroundColor: "#394680",
    },
    mainContainer: {
        minHeight: "100vh", 
        width: "calc(100% - 50px)"
    },

    '@media only screen and (max-width: 1080px)': {
        cardContainer:{
            gridTemplateColumns: "auto auto",
        },
    },
    '@media only screen and (max-width: 700px)': {
        cardContainer:{
            gridTemplateColumns: "auto",
            gridGap: "50px",
        },
        card :{
            width: "80vw",
            height: "80vw",
        }
    },
}));
const Projects = () =>{ 
    const classes = useStyles();

    return(
        <div className={classes.mainContainer}>
            
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <h1 className = {classes.title}>Projects</h1>

                <h2 className = {classes.subTitle}>Summary of work experience and personal projects</h2>
            </AnimationOnScroll>
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">

                <h2 className = {classes.subTitleLeft}>Experience</h2>

                <ExperiencePoint 
                    title="Rich Media"
                    hasImg={true}
                    img={richmedia}
                    imgAlt="richmedia"
                    description="Digital agency for banking and insurance. Developed software for clients such as TD and Scotiabank using Angular. Built internal tools with TS to scrape web frames and assets."
                    link="https://www.richmedia.com/"
                />

            </AnimationOnScroll>

            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <ExperiencePoint 
                    title="iContribute"
                    hasImg={true}
                    img={IC}
                    imgAlt="iContribute"
                    description="Volunteering platform for organizations and students. Developed a React web portal for visibility into remote and in-person opportunities."
                    link="https://icontribute.community"
                />
            </AnimationOnScroll>
            
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <ExperiencePoint 
                    title="Productify"
                    hasImg={true}
                    img={productify}
                    imgAlt="productify"
                    description="Freelance software development for Discord bot features in an active public study space server."
                    link="https://github.com/LemonFace0309/productify-beta"
                />
            </AnimationOnScroll>


            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <h2 className = {classes.subTitleLeft}>Projects</h2>
                <ExperiencePoint 
                    title="CVScrape"
                    hasImg={false}
                    description="Cover letter & email generating tool. Utilizes the openai API and webscraping with Puppeteer to assist with writing tailored cover letters, resumes and cold emails."
                    link="https://github.com/stevenbai0724/cvscrape"
                />
            </AnimationOnScroll>

            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <ExperiencePoint 
                    title="dmojstats"
                    hasImg={false}
                    description="Web app built with React & Express. Serves performance data on dmoj.ca, a well-known competitive programming platform for Canadian high school students. Database of contest result lists and problems under progress."
                    link="https://github.com/stevenbai0724/dmojstats"
                />
            </AnimationOnScroll>

            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <ExperiencePoint 
                    title="Competitive Programming"
                    hasImg={false}
                    description="Self-learned data structures and algorithms in C++ and Java. Accumulated 1000+ solutions, competed in public online contests and open national Olympiads."
                    link="https://github.com/stevenbai0724/competitive-programming"
                />
            </AnimationOnScroll>
            
            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <ExperiencePoint 
                    title="Unlock Hacks"
                    hasImg={false}
                    description="Organized, hosted and lectured at an online hackathon targeted towards beginners. Coordinated with organizations for sponsorship opportunities."
                    link="https://unlock-hacks.devpost.com/"
                />
            </AnimationOnScroll>

            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <ExperiencePoint 
                    title="troki"
                    hasImg={false}
                    description="MERN based app linking teens with neighbors for quick yard jobs. Developed user-friendly mobile interface for effortless job listings with React Native and Figma."
                    link="https://devpost.com/software/troki"
                />
            </AnimationOnScroll>


            

            

        </div>
    )

}

export default Projects;