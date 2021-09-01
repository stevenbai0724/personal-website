import React from 'react';
import line from '../images/line.png'
import { HashLink as Link } from 'react-router-hash-link';
import { makeStyles} from "@material-ui/core";
import {Grid, Paper, ButtonBase} from '@material-ui/core/';
import mental from '../images/mhh2.png'
import timeline from '../images/timeline.png'
import python from '../images/python.jpg'

const useStyles = makeStyles((theme) =>  ({

    //PC
    img: {
        width: "100%",
        borderRadius: "10px",
    },
    btnBase: {
        width: "150px",
        height: "150px",
    },
    grid: {
        width: "100%",
        backgroundColor: "#38FC94",
        borderRadius: "10px",
        marginTop: "20px",

        '&:hover' : {
          
            transform: "scale(1.01)",
        }
    },  
    h1: {
        textAlign: "center",
    },
    h2Title:{
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: '25px',
        color: 'white',
    },
    h2: {
        fontWeight: 'bold',
        fontSize: '25px',
        color: 'black',
        textAlign: "left",
      
    },
    h2Right: {
        fontWeight: 'bold',
        fontSize: '25px',
        color: 'black',
        textAlign: "right",
      
    },

    h3: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: '20px',
        textAlign: "left",
    },
    h3Right: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: '20px',
        textAlign: "right",
    },
    div: {
        
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",
        padding: 5,

 
    },
    divFill: {
        height: 'calc(100vh - 500px)',
        
    },
    //Phone
    '@media only screen and (max-width: 600px)': {
    
        img: {
            width: "100%",
        },
        h2: {
            fontSize: '18px',
        },
        h2Right: {
            fontSize: '18px',
          
        },
        h3: {
            fontSize: '14px',
        },
        h3Right: {
            fontSize: '14px',
        },

        btnBase: {
            width: "125px",
            height: "125px",
        },
        div: {
        
           width: "150px",
    
     
        },
    },

    //Small phone
    '@media only screen and (max-width: 350px)': {
        div: {
        
            width: "120px",
         },
         btnBase: {
            width: "100px",
            height: "100px",
        },
        h2: {
            fontSize: '15px',
        },
        h2Right: {
            fontSize: '15px',
          
        },
        h3: {
            fontSize: '12px',
        },
        h3Right: {
            fontSize: '12px',
        },
    }
      
}));
const Blogs = () =>{ 
    const classes = useStyles();
    return(

        <div>
            <h1 className = {classes.h1}>Blogs</h1>
            
            <h2 className = {classes.h2Title}>Interesting stories and experiences worth sharing </h2>
            <img className = {classes.img} src={line} alt="line"></img>
            


            <Link to="/Timeline#top" style = {linkStyle}>
            <Grid container direction = "row" className = {classes.grid} spacing = {2}>
               
                <Grid item>
                    
                    <ButtonBase className = {classes.btnBase}><img src = {timeline} alt = "line" className = {classes.img}></img></ButtonBase>

                </Grid>
              
                    
                <div className = {classes.div}>

                <h2 className = {classes.h2}>Programming Timeline</h2>
                <h3 className = {classes.h3}>2019 - present</h3>

                </div>

            </Grid>
            </Link>

            <Link to="/FirstHackathon#top" style = {linkStyle}>
            <Grid container direction = "row-reverse" className = {classes.grid} spacing = {2} >
               
                <Grid item>
                    
                    <ButtonBase className = {classes.btnBase}><img src = {mental} alt = "MLH" className = {classes.img}></img></ButtonBase>

                </Grid>

                    
                    <div className = {classes.div}>
                        <h2 className = {classes.h2Right}>First hackathon experience</h2>

                        <h3 className = {classes.h3Right}>July 9 | 4 min read</h3>
                    </div>

            
                

            </Grid>
            </Link>
            
            <Link to="/ProgrammingJourney#top" style = {linkStyle}>
            <Grid container direction = "row" className = {classes.grid} spacing = {2} >
               
                <Grid item>
                    
                    <ButtonBase className = {classes.btnBase}><img src = {python} alt = "img" className = {classes.img}></img></ButtonBase>

                </Grid>

                    
                    <div className = {classes.div}>
                        <h2 className = {classes.h2}>How I got started with coding</h2>

                        <h3 className = {classes.h3}>coming soon!</h3>
                    </div>

            
                

            </Grid>
            </Link>
            
            <div className = {classes.divFill}>
                <br></br>
            </div>



        </div>
    )

}

const linkStyle: React.CSSProperties = {
    color : '#38FC94',
}

export default Blogs;