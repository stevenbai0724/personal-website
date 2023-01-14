import React from 'react';
import { makeStyles} from "@material-ui/core";
import mental from '../images/mhh2.png'
import timeline from '../images/timeline.png'
import python from '../images/python sqr.jpg'
import waterloo from '../images/waterloo.jpg'
import BlogThumbnail from '../components/BlogThumbnail';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom'

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
      
}));
const Blogs = () =>{ 
    const classes = useStyles();
    return(

        <div style = {{width: "100%", display: "flex", alignItems: "center", flexDirection: "column"}}>
            <h1 className = {classes.title}>Blogs</h1>
            <h2 className = {classes.subTitle}>Stories and experiences which I write about for fun</h2>

            
            <BlogThumbnail 
            
                thumbnail = {timeline}
                linkTo = "/Blogs/Timeline#top"
                title = "Programming Timeline"
                date = "February 2019 - May 2022"
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
