import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { makeStyles} from "@material-ui/core";
import {ButtonBase} from '@material-ui/core/';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
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
interface BlogDetails{
    thumbnail: any;
    linkTo: string;
    title: string;
    date: string;
}
function BlogThumbnail(props:BlogDetails) {

    const classes = useStyles();
    return (
    <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp" style = {{width: "100%"}}>
        <Link to={props.linkTo} className = {classes.blogBox}>
            <ButtonBase className = {classes.img}><img src = {props.thumbnail} alt = "line" className = {classes.img}></img></ButtonBase>

            <div className = {classes.textbox}>
                <h2 className = {classes.blogName}>{props.title}</h2>

                <h3 className = {classes.date}>{props.date}</h3>
            </div>

        </Link>
    </AnimationOnScroll>
    
  )
}

export default BlogThumbnail