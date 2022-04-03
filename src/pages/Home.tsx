import line from '../images/line.png'
import { makeStyles, ButtonBase, Button} from "@material-ui/core";
import steven from '../images/steven.png'
import React from 'react';

const useStyles = makeStyles((theme) =>  ({

    img: {
        width: "100%",
        display: "flex",
        borderRadius: "50%",
    },
    h1: {
        textAlign: 'left',
        fontSize: "30pt",
    },
    h2: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '15pt',
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        lineHeight: '1.75',
        fontSize: '12pt',
        
    },
    a: {

    },
    btn: {
        height: '200px',
        width: '200px',
      borderRadius: "50%",
       
    },
    divFlex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: "30px",
        
    },
    divFill: {
        height: 'calc(100vh - 500px)',
        
    },


    '@media only screen and (max-width: 500px)': {
        h1: {
            textAlign: 'center',
        },
        h2: {
            textAlign: 'center'
        },
        h3: {
            textAlign: 'left'
            
        },
        img: {
            width: "100%",
        },
        divFlex: {
            display: "block",
            
        },
        btn: {
            height: '170px',
            width: "170px",
            display: "block",
            margin: "auto",
            borderRadius: "50%",
            
        },
    }
    

}));

const Home = () =>{
    const classes = useStyles();

    return(
        <div style = {{minHeight: "100vh", width: "100%"}}>
            
            <div className = {classes.divFlex}>
            
                <div>
         
                    <h1 className = {classes.h1}>Steven Bai</h1>


                    <h2 className = {classes.h2}>Full Stack Developer | Competitive Programmer </h2>


                </div>
                    <ButtonBase className = {classes.btn}><img className = {classes.img} src = {steven}></img></ButtonBase>
            </div>

            <h3 className = {classes.h3}>Hello! My name is Steven and I am a Grade 12 student. My online names are stevenbai0724 and BLEACHUGGR. I was recently accepted into Computer Engineering at the University of Waterloo! I am open to messages on discord at bleachuggr#0733.</h3>
            <h3 className = {classes.h3}>I am working on web development with ReactJS, NodeJS, ExpressJS and MongoDB. I was previously a web development intern at <a href = "https://icontribute.community/#/" target = "_blank" style = {{textDecoration:"none", color:"#38fc94"}}>iContribute</a> and I have freelance experience with DiscordJS. I am open to internship opportunities in development. </h3>
            
            <h3 className = {classes.h3}>I am also an avid problem solver. I've competed in 50+ programming contests and solved 1100+ problems using algorithms and data structures in C++. In particular, I enjoy using <a href = "https://dmoj.ca/user/stevenbai0724" target = "_blank" style = {{textDecoration:"none", color:"#38fc94"}}>dmoj.ca</a>. </h3>

            <h3 className = {classes.h3}>Here on my personal website you can find some of my favourite coding projects as well as blogs which I sometimes write for fun.</h3>
                
            
        </div>
    )
}



export default Home;