import React from 'react'
import line from '../images/line.png'
import { makeStyles} from "@material-ui/core";
import YoutubeEmbed from "../components/YoutubeEmbed";
import python from '../images/python.jpg';
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles((theme) =>  ({

    
    h1: {
        textAlign: 'left',
        fontSize: "30pt",
        marginTop: "80px",
    },
    h2: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '15pt',
    },
    h2Title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '15pt',
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '12pt',
        lineHeight: '1.75',
        display: 'inline',
    },
    img: {
        display: 'block',
        width: '100%',
        borderRadius: "15px",
        marginBottom: "15px",
    },
    a: {
        color: '#38fc94',
        textDecoration: "none",
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
    mainContainer: {
        minHeight: "100vh", 
        width: "calc(100% - 50px)"
    },


}));
const ProgrammingJourney = () =>{
    const classes = useStyles();

    return (

    <div className={classes.mainContainer}>
        <h1 className = {classes.h1}>How I Started Coding</h1>

        <sub className = {classes.h2}>August 2021 | 5 min read </sub>


        

        <p>
            <img src = {python} className = {classes.img}></img>
            <sub className = {classes.h3}>Computer programming is a huge field of study that is becoming more and more popular in recent years. Many students who are my age (currently 17 years old) are constantly striving and working towards getting into a top computer science undergrad program in hopes of making a lot of money after graduation. Computer science is a highly competitive field! There are certainly younger or inexperienced audiences who merely have aspirations and have never written a single line of code before. That being said, I will share some of the advice from my programming journey I wish I knew earlier.</sub>
        </p>

        <p>
            <sub className = {classes.h2Title}> Stop Comparing Yourself to Others </sub>
        </p>

        <p>
            
            <sub className = {classes.h3}>To begin, I want to mention that for any skill in life (including programming), it is very unhealthy to compare yourself to others. Some students who are getting started in programming might find that they've started late and will envy others who've started much earlier and are excelling. This mindset will only slow you down and make you feel terrible about yourself. It is easier said than done especially if you are a competitive person, but you should focus on yourself rather than looking at others. No matter what you do in life, there will be people whom you will never surpass and it is okay to accept that. </sub> 
        </p>
        

        <p>
            <sub className = {classes.h3}>If you know people who are studying or already working in computer science, chances are that you will have heard about the money they make. It is acceptable to be jealous of that and I've also been there before. However, it is important to remember that you often don't see the work put into success of other people and it will be misleading to think that choosing to pursue computer science will guarantee a huge salary. The process is rough and you need patience, hard work and genuine interest to be a strong candidate for top-tier tech companies. I find that many of my peers are interested in the money, rather than computer science itself.</sub> 
        </p>

        <p>
            <sub className = {classes.h3}>I could ramble on about this for days so let's just dive straight into how I started this whole journey, but you can also see a more concise and complete list of my programming journey <Link style = {{color: "#38fc94", textDecoration: "none"}} to="/Blog/Timeline#top">here.</Link> </sub>
        </p>

        <p>
            <sub className = {classes.h2Title}>Introductory to Computer Science (ICS) - The Fundamentals</sub>
        </p>

        <p>
            <sub className = {classes.h3}>I would say that I started programming at a fairly early time, it was the second semester of Grade 9. I was in the pre-IB program (basically just a specialized program full of try-hards) and at my school we had the privilege to start the Grade 10 course a year in advance (ICS2O). We covered the fundamentals of Python, HTML and CSS. I ended up making a simple pong game and a website by the end of the course. I loved this class because it sparked my interest and gave me a huge head start in coding. I was always hopping on the bandwagon by saying that I wanted to do computer science for post-secondary, but after this experience I had the genuine interest.</sub> 
        </p>
        
        <p>
            <sub className = {classes.h3}> Even if you do not end up having a decent programming course in Grade 9, I would highly recommend you look at tutorials for Python which is a very beginner friendly language. There are many free videos and courses online and in my opinion it doesn't matter which one you use, but I ended up using <a className = {classes.a} href="https://www.sololearn.com/" target="_blank">Sololearn</a> after setting up Python simply with a youtube video. Sololearn is free, minimalistic and very easy to understand and I learned Java and C++ from it as well. During summer break after Grade 9, I did not make any projects or do anything significant with the programming that I learned. Summer break is a very good time to work on programming because there is 2 straight months of free time, and I regret not taking advantage of that. With my basic understanding of programming at the time, I could've easily started competitive programming or web development which I will discuss later.</sub>
        </p>

        <p>
            <sub className = {classes.h2Title}>Copying Code</sub>
        </p>

        <p>
            
            <sub className = {classes.h3}> Grade 10 programming class went smoothly for the most part, we began learning the Grade 11 course which was in Java (ICS3U). For the final project we had to code a game with a Java GUI from scratch. Most of us were very underprepared for this because we were not taught much of GUI in Java and most of it required self-guided learning and countless hours of stack overflow. The deadline was approaching after winter break and I still could not get a functioning project. </sub>
        </p>

   
        <p>
            <sub className = {classes.h3}>I'm not trying to justify myself, but because of this obstacle I tried to copy code from an existing project on stack overflow and alter it so I can have a functioning project. Unfortunately the teachers have been in this game for many years and they have sophisticated plagiarism detection even in coding and I was caught red handed. That was not a fun experience, but certainly an important one especially for anyone reading this who wishes to create software projects in the future. </sub> 
        </p>


        <p>
            <sub className={classes.h3}>The consequences would have been very serious in higher levels of education but I had this warning early in Grade 10. I was given 3 days to redo the project since I had performed relatively well throughout the course and not a big portion of the project was copied. I ended up with an 86 in the course. I would say that myself in Grade 10 wasn't very academically focused anyways (I was getting mid 80s on average) so this was a huge wake up call. A year later in Grade 11, I took the final course (ICS4U) and having all the knowledge and experience from before I passed effortlessly with a 100 in the course.</sub>
        </p>

        <p>
            <sub className = {classes.h2Title}>Competitive Programming (CP)</sub>
        </p>

        <p>
            <sub className = {classes.h3}>I started consistenly solving problems on <a className = {classes.a} href="https://dmoj.ca" target="_blank">DMOJ</a> in Grade 11 but I wish I started earlier when I began learning Python in Grade 9, and I would encourage anyone who wants to start coding to create an account on DMOJ and begin learning what competitive programming is. I highly recommend spending 15 mins to watch these videos which explains CP to a complete beginner. </sub>
        </p>

        <p>
            <YoutubeEmbed embedId = "ueNT-w7Oluw"></YoutubeEmbed>
        </p>

        <p>
            <YoutubeEmbed embedId = "bVKHRtafgPc"></YoutubeEmbed>
        </p>
        
        <p>
            <sub className = {classes.h3}>DMOJ is an online judge that you can use to solve CP problems by submitting code. Competitive programming isn't really a subject memorized from a book for the most part. You learn the vast majority of it from debugging and solving medium-hard problems outside your comfort zone which is why I think it is optimal to begin with DMOJ right away. After learning the very basic operations of your programming language (variables, conditions, math, etc), you can go ahead and solve these problems on DMOJ by clicking submit and pasting your code:</sub>
            <sub className = {classes.h3}><a href = "https://dmoj.ca/problem/helloworld" target="_blank" className = {classes.a}> helloworld, </a> </sub>
            <sub className = {classes.h3}><a href = "https://dmoj.ca/problem/aplusb" target="_blank" className = {classes.a}>aplusb, </a> </sub>
            <sub className = {classes.h3}><a href = "https://dmoj.ca/problem/ccc13j1" target="_blank" className = {classes.a}>ccc13j1, </a> </sub>    
            <sub className = {classes.h3}><a href = "https://dmoj.ca/problem/vpex1p0" target="_blank" className = {classes.a}>vpex1p0.</a></sub>
        </p>
        
        <p>
            <sub className = {classes.h3}>To find more problems, you can go under the problems tab and filter problems based on points, category and problem type. I would recommend <a href = "https://dmoj.ca/problems/?show_types=1&type=12&type=1&point_start=3&point_end=3" target = "_blank" className = {classes.a}>these filters</a> for starters. From here, you should continue with the basics on your online course and look for problems that you can solve on DMOJ. This would be a very solid start that I think a lot of beginners miss out on, and I think this is a sustainable path to progress your programming skills. As you get more and more advanced, you can start writing contests and using a <a href = "https://cses.fi/book/book.pdf" target = "_blank" className = {classes.a}>CP book</a>  or a <a href="https://usaco.guide/" className = {classes.a} target = "_blank">guide</a> to learn more algorithms if you find yourself invested into CP. I find myself doing CP quite often; as of Aug 2021 I have 750+ problems solved and 20+ contests written on DMOJ and CodeForces. CP is a helpful skill that sharpens critical thinking and problem solving skills and it will help you ace coding interviews, all of which look impressive to recruiters from tech companies. </sub>
        </p>

        <p>
            <sub className = {classes.h2Title}> Web Development </sub>
        </p>

        <p>
            <sub className = {classes.h3}>A website is the perfect first time project for beginners. Just like Python and other programming languages, there are countless tutorials and courses online for HTML and CSS which are the fundamentals of web development. Of course, you will need to set things up just like Python with the installations and everything but Youtube makes this process very simple these days. I learned HTML and CSS at school and created my <a href = "https://stevenbai0724.github.io/Civics-and-Careers-Project/index.html" target = "_blank" className = {classes.a}>first website </a>in Grade 9, but it isn't anything too fancy and I'm sure that anyone can learn from a “HTML/CSS website from scratch” quick Youtube search.</sub>
        </p>

        <p>
            <sub className = {classes.h3}>I began learning a lot of web development in late Grade 11 during my internship at <a className = {classes.a} href="https://icontribute.community/#/" target="_blank">iContribute</a> in March 2021. I actually landed the internship since the founders were impressed with my past experience in CP and my interpersonal skills as a high school student. They used TypeScript React which was a more advanced frontend technology and I did not know any of it. While applying to this position, I showed them all of my DMOJ contests and solves as well as my first HTML website and luckily they were very satisfied with my skills, so I was able to tag along and learn React on the job. I wasn't too aware at the time but projects and past experiences provide tremendous advantages when looking for a job/internship which is why it is good to start early to build these experiences. I was lucky to have all the competitive programming experience under my belt. </sub> 
        </p>

        <p>
            <sub className = {classes.h3}>After 3-4 months as a frontend web development intern, I launched this website as a project with everything I have learned from iContribute. The project was a success and it marked the start of my developer career. </sub>
        </p>
        
        
        <p>
            <sub className = {classes.h2Title}>Anyone Can Start Today!</sub>
        </p>

        <p>
            <sub className = {classes.h3}>In the end, programming is a very practical skill that opens a myriad of job opportunities in today's technologically advanced society. Anyone can learn how to code to a certain extent and it can be done at the comfort of your home with a plethora of free online resources. Coding can also be a very healthy pass time/hobby which sharply improves problem solving skills and creativity. Coding is used to solve modern real world problems and it is very fun and intriguing to explore.</sub>
        </p>

        

    </div>




    )

}

export default ProgrammingJourney;