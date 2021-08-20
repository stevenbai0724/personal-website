import React from 'react';
import line from '../images/line.png'
import {Link} from 'react-router-dom'
import { makeStyles} from "@material-ui/core";
import {Grid, Paper, ButtonBase} from '@material-ui/core/';
import mental from '../images/mhh2.png'


const useStyles = makeStyles((theme) =>  ({

    
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
        fontWeight: 'normal',
        fontSize: '25px',
        color: 'black',
    },
    h3: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: '20px',
    },
    smallGrid:{
        
    },
    
    '@media only screen and (max-width: 600px)': {
    
        img: {
            width: "100%",
        },
        h2: {
            fontSize: '15px',
        },
        h3: {
            fontSize: '14px',
        },
        smallGrid:{
            width: '130px'
        },
        btnBase: {
            width: "125px",
            height: "125px",
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
            
            <br></br>
            <br></br>


            <Link to="/FirstHackathon" style = {linkStyle}>
            <Grid container direction = "row" className = {classes.grid} spacing = {2}>
               
                <Grid item>
                    
                    <ButtonBase className = {classes.btnBase}><img src = {mental} alt = "MLH" className = {classes.img}></img></ButtonBase>

                </Grid>

                <Grid item className = {classes.smallGrid} >
                    
                    
                    <h2 className = {classes.h2}>First hackathon experience</h2>
                    <h3 className = {classes.h3}>July 9 | 4 min read</h3>


                </Grid>

                

            </Grid>
            </Link>
            
            
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

const linkStyle: React.CSSProperties = {
    color : '#38FC94',
}

export default Blogs;