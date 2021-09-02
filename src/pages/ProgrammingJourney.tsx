import React from 'react'
import line from '../images/line.png'
import { makeStyles} from "@material-ui/core";
import YoutubeEmbed from "../components/YoutubeEmbed";
import python from '../images/python.jpg';
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles((theme) =>  ({

    
    h1: {
        textAlign: 'center',
    },
    h2: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: '25px',
    },
    h2Title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '25px',
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '17px',
        lineHeight: '1.75',
    },
    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
    },
    a: {
        color: 'white',
    },
    divFill: {
        height: 'calc(100vh)',
        
    },
    video: {
        position: "relative",
        width: "100%",
        backgroundColor: "red",
        paddingTop: "56.25%",
    },


}));
const ProgrammingJourney = () =>{
    const classes = useStyles();

    return (

    <div>
        <h1 className = {classes.h1}>How I got started with coding</h1>

        <h2 className = {classes.h2}>August 2021 | 10 min read </h2>

        <img className = {classes.img} src={line} alt="line"></img>

        <img src = {python} className = {classes.img}></img>

        <br></br>

        <h2 className = {classes.h2Title}> Intro </h2>

        <h3 className = {classes.h3}>Computer programming is a massive field of study that is becoming more and more popular in recent years. To put it simply, programming is the process of giving instructions to a machine to do a certain task. Our generation of youths are heavily invested into computers and technology and major tech companies like Google or Apple. As a high school student, I can see that this is very prevalent among my peers who are always tirelessly striving to get into competitive Computer Science programs for University in hopes of accomplishing their dreams. However, this subject may seem very intimidating to younger and inexperienced audiences who merely have this aspiration and have never written a single line of code before. That being said, I will share some of the advice from my programming journey I wish I knew earlier, assuming you have minimal programming experience or have never taken a course before.</h3>
       
        <h2 className = {classes.h2Title}> Stop comparing yourself to others </h2>

        <h3 className = {classes.h3}>To begin, I want to mention that for any skill in life (including programming), it is very unhealthy to compare yourself to others. Some students who are getting started in programming might find that they’ve started late and will envy others who’ve started much earlier and are excelling. This mindset will only slow you down and make you feel terrible about yourself. It is easier said than done especially if you are a competitive person, but you should focus on yourself rather than looking at others because no matter what you do in life, there will be people who you will never surpass and it is okay to accept that. That being said, let’s dive into how I started this whole journey, but you can also see a more concise and complete list of my programming journey <Link to="/Timeline#top" className = {classes.a}>here.</Link> </h3>
        
        <h2 className = {classes.h2Title}>Introductory to Computer Science (ICS) - The Fundamentals</h2>

        <h3 className = {classes.h3}>I would say that I started programming at a fairly early time, it was the second semester of grade 9. I was in the pre-IB program and at my school we had the privilege to start the grade 10 course a year in advance (ICS2O) . We covered the fundamentals in Python, HTML & CSS and I ended up making a simple pong game and a website. I loved this class because it sparked my interest and gave me a huge head start in coding. I was always hopping on the bandwagon by saying that I wanted to do computer science for post-secondary, but after this experience I had genuine interest. Even if you do not end up having a decent programming course in grade 9, I would highly recommend you look at tutorials for Python which is a very beginner friendly language. There are many free videos and courses online and in my opinion it doesn’t matter which one you use, but I ended up using <a className = {classes.a} href="https://www.sololearn.com/" target="_blank">Sololearn</a> after setting up Python simply with a youtube video. Sololearn is free and very minimalistic and easy to understand, and I learned Java and C++ from it as well (not sponsored). During summer break after grade 9, I did not make any projects or do anything significant with the programming that I learned which was one of my biggest regrets, and I will later go into what I should have done instead.</h3>
        
        <h2 className = {classes.h2Title}>Introductory to Computer Science (ICS) - Copying Code</h2>

        <h3 className = {classes.h3}> Grade 10 programming class went smoothly for the most part, we began learning the grade 11 course which was in  Java (ICS3U). For the final project we had to code a game with a Java GUI from scratch. Most of us were very underprepared for this because we were not taught much of GUI in java and most of it required self-guided learning and countless hours of stack overflow. The deadline was approaching after winter break and I still could not get a functioning project. I’m not saying that anything will justify it, but because of this obstacle I tried to copy code from an existing project and alter it so I can have a functioning project. Unfortunately the teachers have been in this game for many years and they have very sophisticated plagiarism detection in coding and I was caught red handed. That was not a fun experience, but certainly an important one especially for anyone reading this who wishes to create software projects in the future. The consequences would have been very serious in higher levels of education but I had this warning early in grade 10. I was given 3 days to redo the project since I had performed relatively well throughout the course and not a big portion of the project was copied. I ended up with an 86 in the course. I would say that myself in grade 10 wasn’t very academically focused anyways (I was getting mid 80s on average) so this was a huge wake up call. A year later in grade 11, I took the final course (ICS4U) and having all the knowledge and experience from before I passed effortlessly with a 100 in the course.</h3>
        
        <h2 className = {classes.h2Title}>Competitive Programming (CP)</h2>

        <h3 className = {classes.h3}>I discovered <a className = {classes.a} href="https://dmoj.ca" target="_blank">DMOJ</a> in grade 10 during my early stages learning Java and C++,  but I wish I started earlier when I began learning Python in grade 9, and I would encourage anyone who wants to start coding to create an account on DMOJ and begin learning what competitive programming is. I highly recommend spending 15 mins to watch these videos which explains CP to a complete beginner. </h3>

        <YoutubeEmbed embedId = "ueNT-w7Oluw"></YoutubeEmbed>
        <br></br>
        <YoutubeEmbed embedId = "bVKHRtafgPc"></YoutubeEmbed>

        <h3 className = {classes.h3}>DMOJ is an online judge that you can use to solve CP problems by submitting code. Whether it’s CP or web development, programming isn’t really a subject memorized from a book for the most part. You learn the vast majority of it from debugging, solving problems and creating projects which is why I think it is optimal to begin with DMOJ right away. After spending around 1-2 hours learning the very basic syntax of your programming language, you can go ahead and try to solve these problems on DMOJ:</h3>
        <h3 className = {classes.h3}><a href = "https://dmoj.ca/problem/helloworld" target="_blank" className = {classes.a}>https://dmoj.ca/problem/helloworld</a> </h3>
        <h3 className = {classes.h3}><a href = "https://dmoj.ca/problem/aplusb" target="_blank" className = {classes.a}>https://dmoj.ca/problem/aplusb</a> </h3>
        <h3 className = {classes.h3}><a href = "https://dmoj.ca/problem/ccc13j1" target="_blank" className = {classes.a}>https://dmoj.ca/problem/ccc13j1</a> </h3>    
        <h3 className = {classes.h3}><a href = "https://dmoj.ca/problem/vpex1p0" target="_blank" className = {classes.a}>https://dmoj.ca/problem/vpex1p0</a> </h3>


        <h3 className = {classes.h3}>To find more problems, you can go under the problems tab and filter problems based on points, category and problem type. I would recommend <a href = "https://dmoj.ca/problems/?show_types=1&type=12&type=1&point_start=3&point_end=3" target = "_blank" className = {classes.a}>these filters</a> for starters. From here, you should continue with the basics on your online course and look for problems that you can solve on DMOJ. This would be a very solid start that I think a lot of beginners miss out on, and I think this is a sustainable path to create progress on your programming skills. As you get more and more advanced, you can start writing contests and using a <a href = "https://cses.fi/book/book.pdf" target = "_blank" className = {classes.a}>CP book</a>  or a <a href="https://usaco.guide/" className = {classes.a} target = "_blank">guide</a> to learn more algorithms if you find yourself invested into CP. I find myself doing CP quite often; I have 750+ problems solved and 20+ contests written on DMOJ and CodeForces. CP is a helpful skill that sharpens critical thinking and problem solving skills and it will help you ace coding interviews, all of which look impressive to recruiters from tech companies. </h3>

        <h2 className = {classes.h2Title}> Web Development </h2>

        <h3 className = {classes.h3}>A website is the perfect first time project for beginners. Just like Python and other programming languages, there are countless tutorials and courses online for HTML and CSS which are the fundamentals of web development. Of course, you will need to set things up just like Python with the installations and everything but Youtube makes this process very simple these days. I learned HTML and CSS at school and created my first website in grade 9, but it isn’t anything too fancy and I’m sure that anyone can learn from a “HTML/CSS website from scratch” quick Youtube search.  I haven’t worked on web development as much as CP and I only began to pick it up again in late grade 11 during my internship at iContribute in March 2021. They used TypeScript React which was a more advanced frontend technology and I did not know any of it. While applying to this position, I showed them all of my DMOJ contests and solves as well as my first HTML website and luckily they were very impressed, so I was able to tag along and learn React on the job. I wasn’t too aware at the time but projects and past experiences provide tremendous advantages when looking for a job/internship which is why it is good to start early to build these things and I was lucky to have all the competitive programming experience under my belt. After 3-4 months as a frontend web development intern, I launched this website as a project with everything I have learned from iContribute. The project was a success and it marked the start of my developer career. </h3>
        
        <h2 className = {classes.h2Title}>Anyone can start today!</h2>
        <h3 className = {classes.h3}>In the end, programming is a very practical skill that opens a myriad of job opportunities in today’s technologically advanced society. Anyone can learn how to code to a certain extent and it can be done at the comfort of your home with a plethora of free online resources. Coding can also be a very healthy pass time/hobby which sharply improves problem solving skills and creativity. Coding is used to solve modern real world problems and it is very fun and intriguing to explore.</h3>

        <div className = {classes.divFill}>
            <br></br>
        </div>

    </div>




    )

}

export default ProgrammingJourney;