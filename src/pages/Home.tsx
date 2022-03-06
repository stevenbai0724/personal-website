import React from 'react'
import line from '../images/line.png'
import { makeStyles, ButtonBase, Button} from "@material-ui/core";
import steven from '../images/steven.png'

const useStyles = makeStyles((theme) =>  ({

    img: {
        width: "100%",
        display: "flex",
        borderRadius: "50%",
    },
    h1: {
        textAlign: 'left',
    },
    h2: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '25px',
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '1.75',
        
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
            height: '150px',
            width: '150px',
            display: "block",
            margin: "auto",
            borderRadius: "50%",
            
        },
    }
    

}));

const Home = () =>{
    const classes = useStyles();
    return(
        <div style = {{minHeight: "100vh"}}>
            
            <div className = {classes.divFlex}>
            
                <div>
                    <h1 className = {classes.h1}>Steven Bai</h1>


                    <h2 className = {classes.h2}>Full Stack Developer | Competitive Programmer </h2>


                </div>
                    <ButtonBase className = {classes.btn}><img className = {classes.img} src = {steven}></img></ButtonBase>
            </div>

            <h3 className = {classes.h3}>Hello! My name is Steven and I am a grade 12 student. My online names are stevenbai0724 and BLEACHUGGR. I love creating applications in ReactJS and NodeJS. I was previously a web development intern at <a href = "https://icontribute.community/#/" target = "_blank" style = {{textDecoration:"none", color:"#38fc94"}}>iContribute</a>. I also did freelance work with discord.js and I'm also open to internship opportunities in development. </h3>
            
            <h3 className = {classes.h3}>I am also an avid problem solver. I've competed in 50+ programming contests and solved 1100+ problems using algorithms and data structures in C++. In particular, I enjoy using <a href = "https://dmoj.ca/user/stevenbai0724" target = "_blank" style = {{textDecoration:"none", color:"#38fc94"}}>dmoj.ca</a>. </h3>

            <h3 className = {classes.h3}>Here on my personal site you can find some of my favourite coding projects as well as blogs which I sometimes write for fun.</h3>
                
            
        </div>
    )
}



export default Home;