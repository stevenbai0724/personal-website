import React, {useEffect, useState} from 'react';
import { makeStyles} from "@material-ui/core";
import CP from '../images/CP.png';
import DMOJ from '../images/DMOJ.png'
import CF from '../images/CF.png'
import easyPeacy from '../images/easyPeacy.png'
import devpost from '../images/devpost.png'
import figma from '../images/figma.png'
import IC from '../images/IC.png'
import exLink from '../images/exLink.png'
import reactLogo from '../images/reactLogo.png'
import YT from '../images/YT.png'
import Troki from '../images/troki.png'
import DMOJSTATS from '../images/dmojstats.png'
import Unlock from '../images/unlockhacks.png'
import ProjectCard from "../components/ProjectCard"
import githubIcon from "../images/github.png"
import trokidemo from "../images/trokidemo.png"
import uhdemo from "../images/uhdemo.gif"
import dsdemo from "../images/dsdemo.gif"
import icdemo from "../images/icdemo.png"
import sbdemo from "../images/sbdemo.png"
import epdemo from "../images/twitch.png"
import cpdemo from "../images/cpdemo.png"
//style
const useStyles = makeStyles((theme) =>  ({

    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: "30pt",
    },
    subTitle: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: '15pt',
        color: 'white',
    },
    cardContainer: {    
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridGap: "10px",
        justifyContent: "center",

    },
    card: {
        width: "325px",
        height: "325px",
        backgroundColor: "#394680",
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

    const cp = { 
        links: [
            {
                key: 1,
                icon: DMOJ,
                url: "https://dmoj.ca/user/stevenbai0724",
            },
            {
                key: 2,
                icon: CF,
                url: "https://codeforces.com/profile/stevenbai0724",
            },
            {
                key: 3,
                icon: githubIcon,
                url: "https://github.com/stevenbai0724/competitive-programming",
            }
        ],
        tech: ["C++", "Java"],
        description: "I learn data structures and algorithms in C++. I participate in many programming contests on online platforms such as Atcoder, DMOJ and CodeForces as well as open national contests such as the CCC, USACO and COCI. I accumulated a GitHub repository for my competitive programming solutions to over 1000 algorithmic problems.",
        demo: cpdemo
    }
    const uh = {
        links: [
            {
                key: 1,
                icon: devpost,
                url: "https://unlock-hacks.devpost.com/",
            },
            {
                key: 2,
                icon: githubIcon,
                url: "https://unlockhacks.github.io/UnlockHacksSite",
    
            },
            {
                key: 3,
                icon: exLink,
                url: "https://unlockhacks.carrd.co/",
            }
        ],
        tech: ["Java", "HTML", "CSS"],
        description: "Unlock Hacks was a virtual hackathon from Jan 7 - Jan 9 2022. My team organized this beginner event for 173 participants over 48 hours, with over $800 in sponsored prizes from 5 companies. I was one of the lead organizers, judges and workshop lecturers for workshops in Java and competitive programming.",
        demo: uhdemo
    }
    const ds = {
        links: [
            {
                key: 1,
                icon: DMOJSTATS,
                url: "https://dmojstats.herokuapp.com/",
            },
            {
                key: 2,
                icon: githubIcon,
                url: "https://github.com/stevenbai0724/dmojstats",
            },
            {
                key: 3,
                icon: DMOJ,
                url: "https://docs.dmoj.ca/#/site/api",
            }
        ],
        tech: ["ExpressJS", "NodeJS", "ReactJS", "DMOJ API"],
        description: "dmojstats is a user profile search engine built on a full stack ExpressJS, NodeJS and ReactJS application. By entering a username and hitting enter, dmojstats displays basic user info as well a list of rated contest participations with percentile and performance data. dmojstats currently does not support mobile devices. My username can be used for testing, 'stevenbai0724'.",
        demo: dsdemo
    }
    const tr = {
        links: [
            {
                key: 1,
                icon: YT,
                url: "https://www.youtube.com/watch?v=U8OCiQpYKeM",
            },
            {
                key: 2,
                icon: devpost,
                url: "https://devpost.com/software/troki",
            },
            {
                key: 3,
                icon: githubIcon,
                url: "https://github.com/stevenbai0724/Troki-App",
            }
    
        ],
        tech:  ["MongoDB", "ExpressJS", "React Native", "Google Maps API"],
        description: "Troki is my project for Hack the North 2021. Built on a MERN stack, Troki is a mobile app which allows seniors to post requests for yard work. Teens who are looking for quick cash can accept the job listings. We used the Google Maps API to calculate distance for workers to travel.",
        demo: trokidemo
    }
    const ic = {
        links: [
            {
                key: 1,
                icon: IC,
                url: "https://icontribute-dev.web.app/",
            },
            {
                key: 2,
                icon: githubIcon,
                url: "https://github.com/icontribute-founder/icontribute-webapp",
            },
        ],
        tech: ["Typescript React", "CSS", "Figma"],
        description: "I converted figma mockups of a volunteering web application into components and pages in Typescript React. The iContribute Web Application is a platform for 58 partnered organizations to post volunteer opportunities for 796 active users to participate in their local and virtual communities.",
        demo: icdemo
    }
    const sb = {
        links: [
            {
                key: 1,
                icon: exLink,
                url: "https://stevenbai.ca",
            },
            {
                key: 2,
                icon: githubIcon,
                url: "https://github.com/stevenbai0724/personal-website",
            }
        ],
        tech: ["Typescript React", "CSS"],
        description: "My personal portfolio website features projects, blogs and my resume. I built this website in July 2021 when I first started web development and it is constantly updating. Currently hosted with GitHub Pages on a custom domain.",
        demo: sbdemo
    }
    const ep = {
        links: [
            {
                key: 1,
                icon: githubIcon,
                url: "https://github.com/stevenbai0724/mental_health_hacks",
            },
            {
                key: 2,
                icon: devpost,
                url: "https://devpost.com/software/easy-peacy",
            },
            {
                key: 3,
                icon: figma,
                url: "https://www.figma.com/proto/eHzgNia0aeGLfMtP8Zgd08/Mental-Health-Hacks-Project?node-id=14%3A14&scaling=scale-down&page-id=0%3A1",
            }
        ],
        tech: ["Java", "Figma"],
        description: "At my first hackathon, we made a mobile app which had a dashboard with features to monitor mental health. I created a PC compatible version with Java GUI. The app can be demoed with the Figma link.",
        demo: epdemo
    }

    return(
        <div style = {{width: "100%", display: "flex", alignItems: "center", flexDirection: "column"}}>
           
            <h1 className = {classes.title}>Projects</h1>

            <h2 className = {classes.subTitle}>Click/tap for more info</h2>

            
            <div className = {classes.cardContainer}>
                <ProjectCard thumbnail = {CP} demo = {cp.demo} tech = {cp.tech} links = {cp.links} title = "Competitive Programming" description= {cp.description}></ProjectCard>
                <ProjectCard thumbnail = {Unlock} demo = {uh.demo} tech = {uh.tech} links = {uh.links} title = "Unlock Hacks" description= {uh.description}></ProjectCard>
                <ProjectCard thumbnail = {DMOJSTATS} demo = {ds.demo} tech = {ds.tech} links = {ds.links} title = "dmojstats" description= {ds.description}></ProjectCard>
                <ProjectCard thumbnail = {Troki} demo = {tr.demo} tech = {tr.tech} links = {tr.links} title = "Troki" description= {tr.description}></ProjectCard>
                <ProjectCard thumbnail = {IC} demo = {ic.demo} tech = {ic.tech} links = {ic.links} title = "iContribute Webapp" description= {ic.description}></ProjectCard>
                <ProjectCard thumbnail = {reactLogo} demo = {sb.demo} tech = {sb.tech} links = {sb.links} title = "Personal Website" description= {sb.description}></ProjectCard>
                <ProjectCard thumbnail = {easyPeacy} demo = {ep.demo} tech = {ep.tech} links = {ep.links} title = "Easy Peacy" description= {ep.description}></ProjectCard>
            </div>

        </div>
    )

}

export default Projects;