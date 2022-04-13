import React from 'react'
import line from '../images/line.png'
import mental from '../images/mhh.png'
import twitch from '../images/twitch.png'
import { HashLink as Link } from 'react-router-hash-link';

const FirstHackathon = () =>{
    return(
        <div>
            <h1 style = {h1Style}>First Hackathon Experience</h1>
            
            <h2 style = {h2Style}>July 2021 | 3 min read </h2>
   
            <a target="_blank" href="https://mentalhealthhacks.devpost.com/"><img style = {imgStyle} src={mental} alt="mental"></img></a>

            <h3 style = {h3Style}>During my Grade 11 online school year, I was getting really bored of school and I had some time on my hands so I joined a hackathon which spanned from May 21- May 23, 2021. My friend Luke and I are both looking to apply to Computer Science for university and we were inspired to start building projects to improve our application. As a result, we took the leap of faith and decided to join an online hackathon together (Mental Health Hacks) as complete beginners. </h3>

            <h2 style = {h2Title}>What is a Hackathon?</h2>

            <h3 style = {h3Style}>In short, a Hackathon is usually a 1-2 day competitive team building event where people get together and create a functioning software product such as an app. Ever since Grade 9,  I’ve talked to many university students and graduates in the computer science field and their tips on getting accepted into prestigious programs such as Waterloo CS. Almost all of them agreed that Hackathons look really great on the application and they shared their experiences on making apps, games and websites.</h3>
            
            <br></br>
            <br></br>

            <h3 style = {h3Style}> Luke and I were both extremely overwhelmed and had no idea how we could ever contribute to making a project with no experience. Honestly speaking, we joined only because we thought it would look good on our university application and the hackathon would be easy to figure out and just tag along. We did not know what a Hackathon would entail before we joined so not only were we worried about how we would contribute work in the hackathon, but we didn’t even know what a hackathon really was. This seriously made me reconsider joining in the first place. </h3>
            
            <br></br>
            <br></br>

            <h3 style = {h3Style}>I jokingly said to Luke that we needed to join a team of some professional software engineers and tag along and if our team wasn’t good enough then we do nothing and just ditch. We ended up building a team, but if we weren’t so lucky in making a team I think I might’ve actually ditched. Yikes.  For the team building, I went into the MLH (Major League Hacking) discord server and began recruiting people, saying we had 2 high schoolers who are both newbies. Miraculously, we found 2 other high schoolers who were also new and now we had a team of 4 people. One of them had decent experience in graphic design and the other one won a hackathon before and was competing for the 3rd time. Things were looking bright and we still had hope, with almost 48 hours left of hacking.</h3>
            
            <h2 style = {h2Title}>48 Hour Hacking Period</h2>

            <h3 style = {h3Style}>The official countdown started and I was glad that my teammates were cooperative. We ended up deciding on making an app that has a dashboard which monitors screen time, gives reminders, browses forums and provides other features which promote mental health and well-being during the pandemic (Details can be found under</h3><h3 style = {{textAlign: "left", fontWeight: "normal", fontSize: "19px", lineHeight: "1.75", display: "inline"}}><Link style = {{color: "#38fc94", textDecoration: "none", fontSize: "12pt"}} to="/Projects#top"> Projects</Link> </h3> <h3 style = {h3Style}>). There was no way we were going to publish a functioning mobile app with our incompetence in programming but regardless, we got to work and did our best. 2 of us worked on a figma mockup of the app, 1 of us worked on a chatting support bot with voiceflow and I worked on a Java GUI (which they taught us in school) as a lousy placeholder for the app and somehow in less than 2 days, we put together a decent first time project. </h3>

            <img style = {imgStyle} src={twitch} alt="twitch"></img>

            <h2 style = {h2Title}>Closing Remarks</h2>
            <h3 style = {h3Style}>In the end, this hackathon was really fun despite being held online. I loved the experience of meeting new people and it was a great exercise for teamwork and communication and applying programming knowledge to a functioning product. These skills are very useful in the workplace and I would recommend anyone who hasn’t done a hackathon before to register for any beginner friendly events. Even if you don’t have programming experience, there is always something you can contribute (video editing, writing, designing, etc) if you take the initiative. We didn’t end up winning any prizes during the closing ceremony. However, I did end up going onto the MLH twitch livestream to represent our team and tell everyone about our first time experience as high school students and the judges loved us.</h3>
        
            <br></br>
            <br></br>   
            <br></br>      
       

        </div>
    )
}
const h1Style: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '30pt',
}
const h2Style: React.CSSProperties = {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: '15pt',
}
const h3Style: React.CSSProperties = {
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: '12pt',
    lineHeight: '1.75',
    display: "inline",
    
}
const h2Title: React.CSSProperties = {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '15pt',
}
const imgStyle: React.CSSProperties = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: "40px",
    marginBottom: "40px",
    width: '100%',
}
export default FirstHackathon;