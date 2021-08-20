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
import line from '../images/line.png'

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
  
const useStyles = makeStyles((theme) =>  ({

    paper: {
        backgroundColor: "#394680",
        padding: 12,
        margin: "auto",
        width: "350px",
    

    },
    tab: {
        width: "100%",
        height: "35px",
        backgroundColor: "#007bff",
        marginTop: "5px",
      

    },
    tech: {
        backgroundColor: "#26b410",
        height: "40px",
        width: "100%",
        
    },
    gridContainer: { 
        container: true,
        spacing: 2,
        
    },
    btnBase: {
        height: "100%",
        fontSize: "20px",
    },
    img: {
        width: "100%",
        borderRadius: "10px",
    },

    '@media only screen and (max-width: 900px)': {
        paper:{
            width: "85%",
        },
    }
      


}));
const Projects = () =>{ 
    const classes = useStyles();
    const {height, width} = useWindowDimensions();

    return(
        <div >
           
            <h1 style = {h1Style}>Projects</h1>

            <h2 style = {h2Style}>In progress and completed projects</h2>

            <br></br>
            
            <div>
            <Grid container direction = {width<=900 ? "column" : "row"} spacing={2}>
                <Grid item>
             
                    <Paper className = {classes.paper}>
                    
                        <h2 style = {h2Style}>Competitive Programming</h2>
                            
                        <ButtonBase style ={image}><img src = {CP} alt = "CP" style = {image}></img></ButtonBase>

                        <h3 style = {h3Style}>I particpate in programming contests on various platforms such as <a target="_blank" href = "https://dmoj.ca/user/stevenbai0724" style = {h3Style}>DMOJ</a> and <a target="_blank" href = "https://codeforces.com/profile/BLEACHUGGR" style = {h3Style}>CodeForces</a>. I like to solve programming problems that practice math, logic, algorithms and data structures mainly in C++.</h3>
                        <Paper className = {classes.tech}><h2 style = {h2Style}><ButtonBase className = {classes.btnBase}> C++</ButtonBase>, <ButtonBase className = {classes.btnBase}> Java</ButtonBase></h2></Paper>
                        <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://github.com/stevenbai0724"><ButtonBase style = {view} > <FaGithub style = {icon} />View on GitHub</ButtonBase></a> </Paper>
                        <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://dmoj.ca/user/stevenbai0724"><ButtonBase style = {view}> <img src = {DMOJ} alt = "DMOJ" style = {icon}></img>View on DMOJ</ButtonBase></a></Paper>
                        <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://codeforces.com/profile/BLEACHUGGR"><ButtonBase style = {view}> <img src = {CF} alt = "DMOJ" style = {icon}></img>View on CodeForces</ButtonBase></a></Paper>
                                        
                                        

                    </Paper>


                </Grid>   

                
                <Grid item >
                    <Paper className = {classes.paper}>
                        <h2 style = {h2Style}>Easy Peacy</h2>

                        <ButtonBase style ={image}><img src = {easyPeacy} alt = "EP" style = {image}></img></ButtonBase>
                        
                        <h3 style = {h3Style}>Easy Peacy is a 48-hour project for my first hackathon. Easy Peacy is an app that monitors mental health and well being, put together by a Figma mockup and a Java GUI. </h3>
                        <Paper className = {classes.tech}><h2 style = {h2Style}><ButtonBase className = {classes.btnBase}> Java</ButtonBase></h2></Paper>
                        <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://github.com/stevenbai0724/mental_health_hacks"><ButtonBase style = {view} > <FaGithub style = {icon} />View Repository</ButtonBase></a> </Paper>
                        <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://devpost.com/software/easy-peacy"><ButtonBase style = {view}> <img src = {devpost} alt = "dev" style = {icon}></img>View on Devpost</ButtonBase></a></Paper>
                        <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://www.figma.com/proto/eHzgNia0aeGLfMtP8Zgd08/Mental-Health-Hacks-Project?node-id=14%3A14&scaling=scale-down&page-id=0%3A1"><ButtonBase style = {view}> <img src = {figma} alt = "figma" style = {icon}></img>View on Figma</ButtonBase></a></Paper>
                                         

                    </Paper>

                </Grid>

            </Grid>
            <br></br>   

            <Grid container direction = {width<=900 ? "column" : "row"} spacing={2}>

                <Grid item>
                    <Paper className = {classes.paper}>
                    <h2 style = {h2Style}>iContribute Webapp</h2>

                    <ButtonBase style ={image}><img src = {IC} alt = "IC" style = {image}></img></ButtonBase>

                    <h3 style = {h3Style}>I am currently helping with the frontend of a webapp for organizations to post volunteer opportunities to recruit high school students. The iContribute mobile app currently has 500+ users!</h3>
                    <Paper className = {classes.tech}><h2 style = {h2Style}><ButtonBase className = {classes.btnBase}> Typescript</ButtonBase>, <ButtonBase className = {classes.btnBase}> React</ButtonBase>, <ButtonBase className = {classes.btnBase}> CSS</ButtonBase> </h2></Paper>    
                    <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://github.com/icontribute-founder/icontribute-webapp"><ButtonBase style = {view} > <FaGithub style = {icon} />View Repository</ButtonBase></a> </Paper>
                    <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://icontribute.community/#/"><ButtonBase style = {view}> <img src = {exLink} alt = "in" style = {icon}></img>Official Website</ButtonBase></a></Paper>
                    <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://www.linkedin.com/company/icontribute/"><ButtonBase style = {view}> <img src = {IN} alt = "in" style = {icon}></img> iContribute's LinkedIn</ButtonBase></a></Paper>
                                        
                                        
                                        
                                    

                    </Paper>

                </Grid>

                <Grid item>
                    <Paper className = {classes.paper}>
                    <h2 style = {h2Style}>Personal Website</h2>

                    <ButtonBase style ={image}><img src = {reactLogo} alt = "IC" style = {image}></img></ButtonBase>

                    <h3 style = {h3Style}>Using the technologies I learned from my internship, I built a personal website and hosted it here on GitHub Pages. Here on my personal website you can find a short bio of me and some projects and blogs. </h3>
                    <Paper className = {classes.tech}><h2 style = {h2Style}><ButtonBase className = {classes.btnBase}> Typescript</ButtonBase>, <ButtonBase className = {classes.btnBase}> React</ButtonBase>, <ButtonBase className = {classes.btnBase}> CSS</ButtonBase> </h2></Paper>    
                    <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://github.com/stevenbai0724/personal-website"><ButtonBase style = {view} > <FaGithub style = {icon} />View Repository</ButtonBase></a> </Paper>
                    <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://stevenbai0724.github.io/personal-website"><ButtonBase style = {view}> <img src = {exLink} alt = "in" style = {icon}></img>Home Page</ButtonBase></a></Paper>
                    <Paper className = {classes.tab}><a target="_blank" style = {link} href = "https://www.youtube.com/watch?v=xMNhDf5-hvk"><ButtonBase style = {view}><img src = {YT} alt = "yt" style = {icon}></img> Get started!</ButtonBase></a></Paper>
                                        
                                        
                                        
                                    

                    </Paper>

                </Grid>






            </Grid>

            </div>
     

            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
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
    color: 'white',
}
const h2Style: React.CSSProperties = {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: '25px',
    color: 'white',

}
const h3Style: React.CSSProperties = {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '2',
    color: 'white',
    
}
const image: React.CSSProperties = {
    width: 128,
    height: 128,
    color: "white",
    display: 'block',
    margin: 'auto',
    
}
const view: React.CSSProperties = {
    marginRight: "auto",
    marginLeft: "auto",
    color: "white",
    display: "flex",

}
const icon: React.CSSProperties = {
    width: 25,
    height: 25,
    color: "white",
    padding: 5,
}
const link: React.CSSProperties = {
    textDecoration: "none",
    
}


export default Projects;