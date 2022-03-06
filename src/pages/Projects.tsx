import React, {useEffect, useState} from 'react';
import { makeStyles} from "@material-ui/core";
import { FaGithub,FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'
import {Grid, Paper, ButtonBase} from '@material-ui/core/';
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
import IN from '../images/circlein.png'
import Troki from '../images/troki.png'
import DMOJSTATS from '../images/dmojstats.png'
import Unlock from '../images/unlockhacks.png'

//window dimensions 
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };

}
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}
//style
const useStyles = makeStyles((theme) =>  ({

    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#394680",
        padding: 12,
        margin: "auto",
        width: "350px",
        '&:hover' : {
          
            transform: "scale(1.01)",
        }

    },
    textBox: {
        display: "block",
        width: "100%",
        minHeight: 200,
    },
    hyperlink : {
        color : '#38fc94',
        fontSize: '15px',
        textDecoration: "none",

    },
    text: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '2',
        color: 'white',
    },
    tab: {
        width: "100%",
        height: "35px",
        backgroundColor: "#007bff",
        marginTop: "5px",
      

    },
    tech: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent",
        height: "40px",
        width: "100%",
 
        
    },
    gridContainer: { 
        container: true,
        spacing: 2,
    },
    btnBase: {
        height: "90%",
        borderRadius: "10px",
        fontSize: "18px",
        backgroundColor: "#007bff",
        paddingLeft: 5,
        paddingRight: 5,
        color: "white",

      
    },
    img: {
        width: "100%",
        borderRadius: "10px",
    },
    divFill: {
        height: 'calc(100vh - 500px)',
        
    },
    title: {
        textAlign: 'center',
        color: 'white',
    },
    subTitle: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: '25px',
        color: 'white',
    },
    image: {
        width: 128,
        height: 128,
        color: "white",
        display: 'block',
        margin: 'auto',
    },
    view: {
        marginRight: "auto",
        marginLeft: "auto",
        color: "white",
        display: "flex",
    },
    icon: {
        width: 25,
        height: 25,
        color: "white",
        padding: 5,
        borderRadius: 50,
    },
    link: {
        textDecoration: "none",
    },


    '@media only screen and (max-width: 900px)': {
        paper:{
            width: "85%",
        },
        textBox:{
            minHeight: "0px",
            
        }
    }
      


}));
const Projects = () =>{ 
    const classes = useStyles();
    const {height, width} = useWindowDimensions();

    return(
        <div >
           
            <h1 className = {classes.title}>Projects</h1>

            <h2 className = {classes.subTitle}>In progress and completed projects</h2>

            <br></br>
            
            <div>
            <Grid container direction = {width<=900 ? "column" : "row"} spacing={2}>
                <Grid item>
             
                    <Paper className = {classes.paper}>
                    
                        <h2 className = {classes.subTitle}>Competitive Programming</h2>
                            
                        <ButtonBase className = {classes.image}><img src = {CP} alt = "CP" className = {classes.image}></img></ButtonBase>

                        <div className = {classes.textBox}>
                            <h3 className = {classes.text}> I implement data structures and algorithms in C++ to solve problems with math and logic. I particpated in 50+ contests and solved 1100+ algorithmic problems on various platforms such as <a target="_blank" href = "https://dmoj.ca/user/stevenbai0724" className = {classes.hyperlink}>DMOJ</a> and <a target="_blank" href = "https://codeforces.com/profile/stevenbai0724" className = {classes.hyperlink}>CodeForces</a>.</h3>
                        </div>   

                        <div style = {{width: "100%"}}>  
                            <Paper className = {classes.tech}><ButtonBase className = {classes.btnBase}> C++</ButtonBase>&nbsp;<ButtonBase className = {classes.btnBase}>Java</ButtonBase></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://github.com/stevenbai0724/competitive-programming"><ButtonBase className = {classes.view} > <FaGithub className = {classes.icon} />View on GitHub</ButtonBase></a> </Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://dmoj.ca/user/stevenbai0724"><ButtonBase className = {classes.view}> <img src = {DMOJ} alt = "DMOJ" className = {classes.icon}></img>View on DMOJ</ButtonBase></a></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://codeforces.com/profile/stevenbai0724"><ButtonBase className = {classes.view}> <img src = {CF} alt = "DMOJ" className = {classes.icon}></img>View on CodeForces</ButtonBase></a></Paper>
                        </div>                     


                    </Paper>


                </Grid>   

                <Grid item >
                    <Paper className = {classes.paper}>
                        <h2 className = {classes.subTitle}>Unlock Hacks</h2>

                        <ButtonBase className = {classes.image}><img src = {Unlock} alt = "unlock" className = {classes.image}></img></ButtonBase>
                        <div className = {classes.textBox}>
                            <h3 className = {classes.text}><a target="_blank" className = {classes.hyperlink} href = "https://unlockhacks.carrd.co/">Unlock Hacks</a> was a beginner hackathon from Jan 7 to Jan 9 2022. My team and I organized this virtual event and gathered 173 participants and sponsored prizes from 5 companies. I also hosted beginner workshops on Java and competitive programming.</h3>
                        </div>
                        <div style = {{width: "100%"}}>
                            <Paper className = {classes.tech}><ButtonBase className = {classes.btnBase}>HTML</ButtonBase> &nbsp;<ButtonBase className = {classes.btnBase}>CSS</ButtonBase></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://unlock-hacks.devpost.com/"><ButtonBase className = {classes.view}><img src = {devpost} alt = "devpost" className = {classes.icon}></img>View on Devpost</ButtonBase></a></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://unlockhacks.github.io/UnlockHacksSite/"><ButtonBase className = {classes.view}> <img src = {Unlock} alt = "Unlock" className = {classes.icon}></img>View Website</ButtonBase></a></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://unlockhacks.carrd.co/"><ButtonBase className = {classes.view}> <img src = {exLink} alt = "ex" className = {classes.icon}></img>Other Links</ButtonBase></a></Paper>
                        </div>
                    </Paper>

                </Grid>


            </Grid>
            <br></br>   

            <Grid container direction = {width<=900 ? "column" : "row"} spacing={2}>

            <Grid item >
                    <Paper className = {classes.paper}>
                        <h2 className = {classes.subTitle}>dmojstats</h2>

                        <ButtonBase className = {classes.image}><img src = {DMOJSTATS} alt = "dmoj stats" className = {classes.image}></img></ButtonBase>
                        <div className = {classes.textBox}>
                            <h3 className = {classes.text}><a target="_blank" className = {classes.hyperlink} href = "https://dmojstats.herokuapp.com">dmojstats</a> is a search engine which was my first full stack project. Using the <a target="_blank" className = {classes.hyperlink} href = "https://docs.dmoj.ca/#/site/api">API</a> from dmoj.ca, dmojstats displays detailed user profile information including performance and percentile stats from rated contests for 100 000+ developers.</h3>
                        </div>
                        <div style = {{width: "100%"}}>
                            <Paper className = {classes.tech}><ButtonBase className = {classes.btnBase}> ReactJS </ButtonBase>&nbsp;<ButtonBase className = {classes.btnBase}> ExpressJS</ButtonBase>&nbsp; <ButtonBase className = {classes.btnBase}> NodeJS</ButtonBase></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://dmojstats.herokuapp.com/"><ButtonBase className = {classes.view}><img src = {DMOJSTATS} alt = "DMOJ" className = {classes.icon}></img>dmojstats</ButtonBase></a></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://github.com/stevenbai0724/dmojstats"><ButtonBase className = {classes.view}> <FaGithub className = {classes.icon}/>View Repository</ButtonBase></a></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://docs.dmoj.ca/#/site/api"><ButtonBase className = {classes.view}> <img src = {DMOJ} alt = "DMOJ" className = {classes.icon}></img>API Documentation</ButtonBase></a></Paper>
                        </div>
                                         

                    </Paper>

                </Grid>

                <Grid item >
                    <Paper className = {classes.paper}>
                        <h2 className = {classes.subTitle}>Troki</h2>

                        <ButtonBase className = {classes.image}><img src = {Troki} alt = "troki" className = {classes.image}></img></ButtonBase>
                        <div className = {classes.textBox}>
                            <h3 className = {classes.text}>Troki is a mobile app that connects eagar teen workers with busy adults in need of yard work. We used <a target="_blank" className = {classes.hyperlink} href = "https://developers.google.com/maps/documentation">Google Maps API</a> to gauge distance and maintained job listings on MongoDB. I worked on the frontend and design in React Native and Figma.</h3>
                        </div>
                        <div style = {{width: "100%"}}>
                            <Paper className = {classes.tech}><ButtonBase className = {classes.btnBase}> React Native</ButtonBase></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://www.youtube.com/watch?v=U8OCiQpYKeM"><ButtonBase className = {classes.view} > <img src = {YT} alt = "yt" className = {classes.icon}></img>Video pitch</ButtonBase></a> </Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://devpost.com/software/troki"><ButtonBase className = {classes.view}> <img src = {devpost} alt = "dev" className = {classes.icon}></img>View on Devpost</ButtonBase></a></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://github.com/stevenbai0724/Troki-App"><ButtonBase className = {classes.view}> <FaGithub className = {classes.icon}/>View Repository</ButtonBase></a></Paper>
                        </div>                 

                    </Paper>

                </Grid>



            </Grid>
            <br/>

            <Grid container direction = {width<=900 ? "column" : "row"} spacing={2}>

                <Grid item>
                    <Paper className = {classes.paper}>
                    <h2 className = {classes.subTitle}>iContribute Webapp</h2>

                    <ButtonBase className = {classes.image}><img src = {IC} alt = "IC" className = {classes.image}></img></ButtonBase>

                    <div className = {classes.textBox}>
                        <h3 className = {classes.text}>I converted mockups of pages and components into the frontend of a <a className = {classes.hyperlink} href = "https://icontribute-dev.web.app/" target = "_blank">web app</a> for organizations to recruit high school volunteers. There are currently 800+ iContribute users across mobile platforms!</h3>
                    </div>

                    <div style = {{width: "100%"}}>
                        <Paper className = {classes.tech}><ButtonBase className = {classes.btnBase}> Typescript React</ButtonBase>&nbsp;<ButtonBase className = {classes.btnBase}> CSS</ButtonBase> </Paper>    
                        <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://github.com/icontribute-founder/icontribute-webapp"><ButtonBase className = {classes.view} > <FaGithub className = {classes.icon} />View Repository</ButtonBase></a> </Paper>
                        <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://icontribute.community/#/"><ButtonBase className = {classes.view}> <img src = {exLink} alt = "in" className = {classes.icon}></img>Official Website</ButtonBase></a></Paper>
                        <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://www.linkedin.com/company/icontribute/"><ButtonBase className = {classes.view}> <img src = {IN} alt = "in" className = {classes.icon}></img>LinkedIn</ButtonBase></a></Paper>
                    </div>                              
                
                    </Paper>

                </Grid>

                <Grid item>
                    <Paper className = {classes.paper}>
                    <h2 className = {classes.subTitle}>Personal Website</h2>

                    <ButtonBase className = {classes.image}><img src = {reactLogo} alt = "IC" className = {classes.image}></img></ButtonBase>

                    <div className = {classes.textBox}>
                        <h3 className = {classes.text}>After learning frontend development at my first internship, I made this website from scratch, hosted with GitHub Pages on a custom domain. Here on my website you can find a short bio of me and some projects and blogs. </h3>
                    </div>

                    <div style = {{width: "100%"}}>
                        <Paper className = {classes.tech}><ButtonBase className = {classes.btnBase}> Typescript React</ButtonBase>&nbsp; <ButtonBase className = {classes.btnBase}> CSS</ButtonBase> </Paper>    
                        <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://github.com/stevenbai0724/personal-website"><ButtonBase className = {classes.view} > <FaGithub className = {classes.icon} />View Repository</ButtonBase></a> </Paper>
                        <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://stevenbai.ca/"><ButtonBase className = {classes.view}> <img src = {exLink} alt = "in" className = {classes.icon}></img>Home Page</ButtonBase></a></Paper>
                        <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://www.youtube.com/watch?v=xMNhDf5-hvk"><ButtonBase className = {classes.view}><img src = {YT} alt = "yt" className = {classes.icon}></img>Tutorial to Start a Website</ButtonBase></a></Paper>
                    </div> 
                    </Paper>

                </Grid>


            </Grid>
            <br/>
            <Grid container direction = {width<=900 ? "column" : "row"} spacing={2}>

                <Grid item >
                    <Paper className = {classes.paper}>
                        <h2 className = {classes.subTitle}>Easy Peacy</h2>

                        <ButtonBase className = {classes.image}><img src = {easyPeacy} alt = "EP" className = {classes.image}></img></ButtonBase>
                        <div className = {classes.textBox}>
                            <h3 className = {classes.text}>Easy Peacy is a 48-hour project for my first ever hackathon. Easy Peacy is mobile app designed by Figma that monitors mental health. I created a Java GUI model of the app as a placeholder.</h3>
                        </div>

                        <div style = {{width: "100%"}}>
                            <Paper className = {classes.tech}><ButtonBase className = {classes.btnBase}> Java</ButtonBase>&nbsp; <ButtonBase className = {classes.btnBase}> Figma</ButtonBase></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://github.com/stevenbai0724/mental_health_hacks"><ButtonBase className = {classes.view} > <FaGithub className = {classes.icon} />View Repository</ButtonBase></a> </Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://devpost.com/software/easy-peacy"><ButtonBase className = {classes.view}> <img src = {devpost} alt = "dev" className = {classes.icon}></img>View on Devpost</ButtonBase></a></Paper>
                            <Paper className = {classes.tab}><a target="_blank" className = {classes.link} href = "https://www.figma.com/proto/eHzgNia0aeGLfMtP8Zgd08/Mental-Health-Hacks-Project?node-id=14%3A14&scaling=scale-down&page-id=0%3A1"><ButtonBase className = {classes.view}> <img src = {figma} alt = "figma" className = {classes.icon}></img>View on Figma</ButtonBase></a></Paper>
                        </div>     

                    </Paper>

                </Grid>


            </Grid>

            </div>
     

            <div className = {classes.divFill}>
                <br></br>
            </div>

        </div>
    )

}

export default Projects;