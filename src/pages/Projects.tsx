import React from 'react';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CP from '../images/CP.png';
import { FaGithub } from 'react-icons/fa'
import DMOJ from '../images/DMOJ.png'

const Projects = () =>{ 
    return(
        <div>
            <h1 style = {h1Style}>Projects </h1>
            <br></br>

            <Paper style = {paperStyle}>
                
                <Grid container spacing={3}>

                    <Grid item>
                        <ButtonBase style ={image}><img src = {CP} alt = "CP" style = {image}></img></ButtonBase>
                    </Grid>

                    <Grid item xs>

                        <Grid item spacing={1}>

                            <Grid item >
                                <h2 style = {h2StyleLeft}>Competitive Programming</h2>
                                <h3 style = {h3StyleLeft}>I particpate in programming contests on various platforms such as <a target="_blank" href = "https://dmoj.ca/user/stevenbai0724" style = {h3StyleLeft}>DMOJ</a>, <a target="_blank" href = "https://codeforces.com/profile/BLEACHUGGR" style = {h3StyleLeft}>CodeForces</a> and <a target="_blank" href = "https://atcoder.jp/users/stevenbai0724" style = {h3StyleLeft}>AtCoder</a>. I like to solve programming problems that practice math, logic, algorithms and data structures.</h3>
                            </Grid>

                            <Grid item >
                               
                                <a target="_blank" style = {link} href = "https://github.com/stevenbai0724"><ButtonBase style = {view} > <FaGithub style = {icon} />View on github</ButtonBase></a> 
                                <a target="_blank" style = {link} href = "https://dmoj.ca/user/stevenbai0724"><ButtonBase style = {view}> <img src = {DMOJ} alt = "DMOJ" style = {icon}></img>View on DMOJ</ButtonBase></a>
                            </Grid>

                        </Grid>
                    
                    </Grid>


                </Grid>

            </Paper>

            
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
    maxWidth: 600,
}
const image: React.CSSProperties = {
    width: 128,
    height: 128,
    color: "white",
}
const view: React.CSSProperties = {
    width: 125,
    height: 40,
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