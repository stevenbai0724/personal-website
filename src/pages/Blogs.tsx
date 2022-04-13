import React from 'react';
import line from '../images/line.png'
import { HashLink as Link } from 'react-router-hash-link';
import { makeStyles} from "@material-ui/core";
import {Grid, Paper, ButtonBase} from '@material-ui/core/';
import mental from '../images/mhh2.png'
import timeline from '../images/timeline.png'
import python from '../images/python sqr.jpg'
import waterloo from '../images/waterloo.jpg'
//might have to redo everything to fit into the screen
//grid is kind of acting weird champ

const useStyles = makeStyles((theme) =>  ({
    title: {
        textAlign: "center",
        fontSize: "30pt",
    },
    subTitle: {
        fontSize: "15pt",
        textAlign: "center",
        fontWeight: "normal",
        color: "white",
    },
    blogName:{
        fontSize: "15pt",
        fontWeight: "normal",
        color: "white",
        textAlign: "left",
    },
    date: {
        fontSize: "12pt",
        fontWeight: "normal",
        color: "white",
    },
    blogBox:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "200px",
        boxShadow: "0px 18px 53px 0px rgba(0,0,0,0.3)",
        marginBottom: "20px",
        textDecoration: "none",
        '&:hover' : {
          
            transform: "scale(1.01)",
        }
    },
    img :{
        height: "100%",
        width: "auto",
    },
    textbox:{
        marginLeft: "15px",
    },

    '@media only screen and (max-width: 550px)': {
        blogBox:{
            height: "35vw",
        },
    }
      
}));
const Blogs = () =>{ 
    const classes = useStyles();
    return(

        <div style = {{width: "100%", display: "flex", alignItems: "center", flexDirection: "column"}}>
            <h1 className = {classes.title}>Blogs</h1>
            <h2 className = {classes.subTitle}>Stories and experiences which I write about for fun</h2>

            
            <Link to="/Timeline#top" className = {classes.blogBox}>
                    <ButtonBase className = {classes.img}><img src = {timeline} alt = "line" className = {classes.img}></img></ButtonBase>

                    <div className = {classes.textbox}>
                        <h2 className = {classes.blogName}>Programming Timeline</h2>

                        <h3 className = {classes.date}>2019 - Present</h3>
                    </div>

              
            </Link>
            <Link to="/Admissions#top" className = {classes.blogBox}>
                    <ButtonBase className = {classes.img}><img src = {waterloo} alt = "loo" className = {classes.img}></img></ButtonBase>

                    <div className = {classes.textbox}>
                        <h2 className = {classes.blogName}>Admissions 2022</h2>

                        <h3 className = {classes.date}>April 2022</h3>
                    </div>

              
            </Link>
            <Link to="/ProgrammingJourney#top" className = {classes.blogBox}>
                    <ButtonBase className = {classes.img}><img src = {python} alt = "python" className = {classes.img}></img></ButtonBase>

                    <div className = {classes.textbox}>
                        <h2 className = {classes.blogName}>How I Started Coding</h2>

                        <h3 className = {classes.date}>August 2021</h3>
                    </div>

              
            </Link>
            <Link to="/FirstHackathon#top" className = {classes.blogBox}>
                    <ButtonBase className = {classes.img}><img src = {mental} alt = "mlh" className = {classes.img}></img></ButtonBase>

                    <div className = {classes.textbox}>
                        <h2 className = {classes.blogName}>First Hackathon Experience</h2>

                        <h3 className = {classes.date}>July 2021</h3>
                    </div>

              
            </Link>
        </div>
    )

}
export default Blogs;

    // //PC
    // img: {
    //     width: "100%",
    //     borderRadius: "10px",
    // },
    // btnBase: {
    //     width: "150px",
    //     height: "150px",
    // },
    // grid: {
    //     width: "100%",
    //     backgroundColor: "#38FC94",
    //     borderRadius: "10px",
    //     marginTop: "20px",

    //     '&:hover' : {
          
    //         transform: "scale(1.01)",
    //     }
    // },  
    // h1: {
    //     textAlign: "center",
    //     color: "white",
    // },
    // h2Title:{
    //     textAlign: 'center',
    //     fontWeight: 'normal',
    //     fontSize: '100%',
    //     color: 'white',
    // },
    // h2: {
    //     fontWeight: 'bold',
    //     fontSize: '25px',
    //     color: 'black',
    //     textAlign: "left",
      
    // },
    // h2Right: {
    //     fontWeight: 'bold',
    //     fontSize: '25px',
    //     color: 'black',
    //     textAlign: "right",
      
    // },

    // h3: {
    //     color: 'black',
    //     fontWeight: 'normal',
    //     fontSize: '20px',
    //     textAlign: "left",
    // },
    // h3Right: {
    //     color: 'black',
    //     fontWeight: 'normal',
    //     fontSize: '20px',
    //     textAlign: "right",
    // },
    // div: {
        
    //     justifyContent: "center",
    //     flexDirection: "column",
    //     display: "flex",
    //     padding: 5,
    //     width: 'calc(100% - 182px)',
 
    // },
    // divFill: {
    //     height: 'calc(100vh - 500px)',
        
    // },
    // //Phone
    // '@media only screen and (max-width: 600px)': {
    
    //     img: {
    //         width: "100%",
    //     },
    //     h2: {
    //         fontSize: '18px',
    //     },
    //     h2Right: {
    //         fontSize: '18px',
          
    //     },
    //     h3: {
    //         fontSize: '14px',
    //     },
    //     h3Right: {
    //         fontSize: '14px',
    //     },

    //     btnBase: {
    //         width: "120px",
    //         height: "120px",
    //     },
    //     div: {
        
    //         width: 'calc(100% - 152px)',
    
     
    //     },
    // },

    // //Very small phone, who even has these anyways????
    // '@media only screen and (max-width: 350px)': {
    //     div: {
        
    //         width: 'calc(100% - 112px)',
    //     },
    //      btnBase: {
    //         width: "80px",
    //         height: "80px",
    //     },
    //     h2: {
    //         fontSize: '14px',
    //     },
    //     h2Right: {
    //         fontSize: '14px',
          
    //     },
    //     h3: {
    //         fontSize: '12px',
    //     },
    //     h3Right: {
    //         fontSize: '12px',
    //     },
    // }
// <div style = {{display: "flex", flexDirection: "column", alignItems:"center", width: "100%"}}>
// <h1 className = {classes.h1}>Blogs</h1>

// <h2 className = {classes.h2Title}>Interesting stories and experiences worth sharing</h2>

// <Link to="/Timeline#top" style = {linkStyle}>
//     {/* <Grid container direction = "row" className = {classes.grid} spacing = {2}>
    
//         <Grid item>
            
//             <ButtonBase className = {classes.btnBase}><img src = {timeline} alt = "line" className = {classes.img}></img></ButtonBase>

//         </Grid>
    
            
//         <div className = {classes.div}>

//             <h2 className = {classes.h2}>Programming Timeline</h2>
//             <h3 className = {classes.h3}>2019 - present</h3>

//         </div>

//     </Grid> */}

//     <div style = {{marginRight: "30px", width: "100%", height: "200px", display: "flex", flexDirection: "row-reverse", alignItems: "center"}}>

//     <ButtonBase className = {classes.btnBase}><img src = {python} alt = "img" className = {classes.img}></img></ButtonBase>

//     </div>
// </Link>

// <Link to="/Admissions#top" style = {linkStyle}>
//     <Grid container direction = "row-reverse" className = {classes.grid} spacing = {2} >
    
//         <Grid item>
            
//             <ButtonBase className = {classes.btnBase}></ButtonBase>

//         </Grid>

//         <div className = {classes.div}>
//             <h2 className = {classes.h2Right}>Admissions 2022</h2>
//             <h3 className = {classes.h3Right}>March 2022 </h3>
//         </div>


//     </Grid>
// </Link>

// <Link to="/ProgrammingJourney#top" style = {linkStyle}>
//     <Grid container direction = "row" className = {classes.grid} spacing = {2} >
    
//         <Grid item>
            
//             <ButtonBase className = {classes.btnBase}><img src = {python} alt = "img" className = {classes.img}></img></ButtonBase>

//         </Grid>

//         <div className = {classes.div}>
//             <h2 className = {classes.h2}>How I Started Coding</h2>
//             <h3 className = {classes.h3}>August 2021 | 5 min read</h3>
//         </div>


//     </Grid>
// </Link>
// <div style = {{width :"100%"}}>
// <Link to="/FirstHackathon#top" style = {linkStyle}>
//     <Grid container direction = "row-reverse"  className = {classes.grid} spacing = {2} >
    
//         <Grid  item>
            
//             <ButtonBase className = {classes.btnBase}><img src = {mental} alt = "MLH" className = {classes.img}></img></ButtonBase>

//         </Grid>

            
//         <div  className = {classes.div}>
//             <h2 className = {classes.h2Right}>First Hackathon Experience</h2>
//             <h3 className = {classes.h3Right}>July 2021 | 3 min read</h3>
//         </div>


//     </Grid>
// </Link>
// </div>
// <Paper style = {{width: "100%",height:"50px", backgroundColor: "red"}}></Paper>


// <br></br>
// <br></br>
// <br></br>


// </div>
// const linkStyle: React.CSSProperties = {
//     textDecoration: "none",
//     width : "100%",
//     textAlign: "center",
// }

