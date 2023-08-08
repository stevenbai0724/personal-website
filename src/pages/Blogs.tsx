import React from 'react';
import { makeStyles} from "@material-ui/core";
import mental from '../images/mhh2.png'
import timeline from '../images/timeline.png'
import python from '../images/python sqr.jpg'
import waterloo from '../images/waterloo.jpg'
import BlogThumbnail from '../components/BlogThumbnail';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const useStyles = makeStyles((theme) =>  ({
    title: {
        textAlign: "left",
        fontSize: "30pt",
        marginTop: "80px",
    },
    subTitle: {
        fontSize: "15pt",
        textAlign: "left",
        fontWeight: "normal",
        color: "white",
        marginBottom: "30px",
    },
      
}));
const Blogs = () =>{ 
    const classes = useStyles();
    return(

        <div style = {{width: "100%"}}>

            <AnimationOnScroll offset = {100} duration = {0.3} animateOnce={true} animateIn="animate__fadeInUp">
                <h1 className = {classes.title}>Blogs</h1>
                <h2 className = {classes.subTitle}>Stories and experiences which I write about for fun</h2>

            </AnimationOnScroll>
            <BlogThumbnail 
            
                thumbnail = {timeline}
                linkTo = "/Blogs/Timeline#top"
                title = "Programming Timeline"
                date = "May 2022"
            ></BlogThumbnail>

            <BlogThumbnail 
            
                thumbnail = {waterloo}
                linkTo = "/Blogs/Admissions#top"
                title = "Admissions 2022"
                date = "April 2022"
            ></BlogThumbnail>

            <BlogThumbnail 
            
                thumbnail = {python}
                linkTo = "/Blogs/ProgrammingJourney#top"
                title = "How I Started Coding"
                date = "August 2021"
            ></BlogThumbnail>

            <BlogThumbnail 
            
                thumbnail = {mental}
                linkTo = "/Blogs/FirstHackathon#top"
                title = "First Hackathon Experience"
                date = "July 2021"
            ></BlogThumbnail>

        </div>
    )

}
export default Blogs;
