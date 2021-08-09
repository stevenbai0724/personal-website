import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import CP from '../images/CP.png';
import { FaGithub } from 'react-icons/fa'
import DMOJ from '../images/DMOJ.png'
import CF from '../images/CF.png'
import { makeStyles} from "@material-ui/core";

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
        backgroundColor: "#9599ab",
        padding: 12,
        margin: "auto",
        width: "350px",
    },
    gridContainer: { 
        container: true,
        spacing: 2,
        

    },

    '@media only screen and (max-width: 1300px)': {
        paper:{
            width: "85%",
        }
    }
      


}));
const Projects = () =>{ 
    const classes = useStyles();
    const {height, width} = useWindowDimensions();

    return(
        <div>
            <h1 style = {h1Style}>{width}</h1>
            
      
            <br></br>

            <Grid container direction = {width<=1300 ? "column" : "row"} spacing={2}>
                <Grid item >
                    <Paper className = {classes.paper}>
                        <h2 style = {h2Style}>Competitive Programming</h2>

                    
                            
                            <Grid item>
                                <ButtonBase style ={image}><img src = {CP} alt = "CP" style = {image}></img></ButtonBase>
                            </Grid>

                            <Grid item xs>

                                <Grid item spacing={1}>

                                    <Grid item >
                                        
                                        <h3 style = {h3StyleLeft}>I particpate in programming contests on various platforms such as <a target="_blank" href = "https://dmoj.ca/user/stevenbai0724" style = {h3StyleLeft}>DMOJ</a> and <a target="_blank" href = "https://codeforces.com/profile/BLEACHUGGR" style = {h3StyleLeft}>CodeForces</a>. I like to solve programming problems that practice math, logic, algorithms and data structures.</h3>
                                    </Grid>

                                    <Grid item >
                                    
                                        <a target="_blank" style = {link} href = "https://github.com/stevenbai0724"><ButtonBase style = {view} > <FaGithub style = {icon} />GitHub</ButtonBase></a> 
                                        <a target="_blank" style = {link} href = "https://dmoj.ca/user/stevenbai0724"><ButtonBase style = {view}> <img src = {DMOJ} alt = "DMOJ" style = {icon}></img>DMOJ</ButtonBase></a>
                                        <a target="_blank" style = {link} href = "https://codeforces.com/profile/BLEACHUGGR"><ButtonBase style = {view}> <img src = {CF} alt = "DMOJ" style = {icon}></img>CodeForces</ButtonBase></a>
                                    </Grid>

                                </Grid>
                            
                            </Grid>




                    </Paper>
                </Grid>   


                <Grid item>
                    <Paper className = {classes.paper}>
                    <h2 style = {h2Style}>Competitive Programming</h2>

                        
                        <Grid item>
                            <ButtonBase style ={image}><img src = {CP} alt = "CP" style = {image}></img></ButtonBase>
                        </Grid>

                        <Grid item xs>

                            <Grid item spacing={1}>

                                <Grid item >
                                                    
                                    <h3 style = {h3StyleLeft}>I particpate in programming contests on various platforms such as <a target="_blank" href = "https://dmoj.ca/user/stevenbai0724" style = {h3StyleLeft}>DMOJ</a> and <a target="_blank" href = "https://codeforces.com/profile/BLEACHUGGR" style = {h3StyleLeft}>CodeForces</a>. I like to solve programming problems that practice math, logic, algorithms and data structures.</h3>
                                </Grid>

                                <Grid item >
                                        
                                            <a target="_blank" style = {link} href = "https://github.com/stevenbai0724"><ButtonBase style = {view} > <FaGithub style = {icon} />GitHub</ButtonBase></a> 
                                            <a target="_blank" style = {link} href = "https://dmoj.ca/user/stevenbai0724"><ButtonBase style = {view}> <img src = {DMOJ} alt = "DMOJ" style = {icon}></img>DMOJ</ButtonBase></a>
                                            <a target="_blank" style = {link} href = "https://codeforces.com/profile/BLEACHUGGR"><ButtonBase style = {view}> <img src = {CF} alt = "DMOJ" style = {icon}></img>CodeForces</ButtonBase></a>
                                </Grid>

                            </Grid>

                        </Grid> 

                    </Paper>

                </Grid>

            </Grid>
            <br></br>

            <Grid container direction = {width<=1300 ? "column" : "row"} spacing={2}>

                <Grid item>
                    <Paper className = {classes.paper}>
                    <h2 style = {h2Style}>Competitive Programming</h2>

                        
                        <Grid item>
                            <ButtonBase style ={image}><img src = {CP} alt = "CP" style = {image}></img></ButtonBase>
                        </Grid>

                        <Grid item xs>

                            <Grid item spacing={1}>

                                <Grid item >
                                                    
                                    <h3 style = {h3StyleLeft}>I particpate in programming contests on various platforms such as <a target="_blank" href = "https://dmoj.ca/user/stevenbai0724" style = {h3StyleLeft}>DMOJ</a> and <a target="_blank" href = "https://codeforces.com/profile/BLEACHUGGR" style = {h3StyleLeft}>CodeForces</a>. I like to solve programming problems that practice math, logic, algorithms and data structures.</h3>
                                </Grid>

                                <Grid item >
                                        
                                            <a target="_blank" style = {link} href = "https://github.com/stevenbai0724"><ButtonBase style = {view} > <FaGithub style = {icon} />GitHub</ButtonBase></a> 
                                            <a target="_blank" style = {link} href = "https://dmoj.ca/user/stevenbai0724"><ButtonBase style = {view}> <img src = {DMOJ} alt = "DMOJ" style = {icon}></img>DMOJ</ButtonBase></a>
                                            <a target="_blank" style = {link} href = "https://codeforces.com/profile/BLEACHUGGR"><ButtonBase style = {view}> <img src = {CF} alt = "DMOJ" style = {icon}></img>CodeForces</ButtonBase></a>
                                </Grid>

                            </Grid>

                        </Grid> 

                    </Paper>

                </Grid>

            </Grid>


     

            
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
    lineHeight: 0.5,
}
const h2StyleLeft: React.CSSProperties = {
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: '20px',
    color: 'white',
    
}
const h3StyleLeft: React.CSSProperties = {
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '2',
    color: 'white',
    
}
const paperStyle: React.CSSProperties = {
    backgroundColor: "#9599ab",
    padding: 12,
    margin: "auto",
    width: "350px",
}
const image: React.CSSProperties = {
    width: 128,
    height: 128,
    color: "white",
    display: 'block',
    margin: 'auto',
    
}
const view: React.CSSProperties = {
    marginRight: 20,
    color: "white",
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