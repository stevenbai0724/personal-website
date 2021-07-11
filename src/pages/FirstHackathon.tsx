import React from 'react'
import line from '../images/line.png'
import mental from '../images/mhh.png'
import twitch from '../images/twitch.png'


const FirstHackathon = () =>{
    return(
        <div>
            <h1 style = {h1Style}>My first hackathon experience</h1>

            <h2 style = {h2Style}>July 9th, 2021 | 3 min read </h2>
            
            <img style = {imgStyle} src={line} alt="line"></img>
            <a href="https://mentalhealthhacks.devpost.com/"><img style = {imgStyle} src={mental} alt="mental"></img></a>

            <h3 style = {h3Style}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During my grade 11 online school year, I was getting really bored of school and I had some time on my hands so I joined a hackathon which spanned from May 21- May 23 2021. My friend Luke and I are both looking to apply to Computer Science for university and we were inspired to start building projects to improve our application. As a result, we took the leap of faith and decided to join an online hackathon together (Mental Health Hacks) as complete beginners. </h3>
            <br></br>
            <h3 style = {h3Style}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In short, a Hackathon is usually a 1-2 day competitive team building event where people get together and create a functioning software product such as an app. Ever since grade 9,  I’ve talked to many university students and graduates in the computer science field and their tips on getting accepted into prestigious programs such as Waterloo CS. Almost all of them agreed that Hackathons look really great on the application and they shared their experiences on making apps, games and websites. Luke and I were both extremely overwhelmed and had no idea how we could ever contribute to making a project with no experience. Honestly speaking, we joined only because we thought it would look good on our university application and the hackathon would be easy to figure out and just tag along. We did not know what a Hackathon would entail before we joined so not only were we worried about how we would contribute work in the hackathon, but we didn’t even know what a hackathon really was. This made me reconsider joining in the first place. I jokingly said to Luke that we needed to join a team of some professional software engineers and tag along and if our team wasn’t good enough then we do nothing and just ditch. We ended up building a team, but if we weren’t so lucky in making a team I think I might’ve actually ditched. Yikes.  For the team building, I went into the MLH (Major League Hacking) discord server and began recruiting people, saying we had 2 high schoolers who are both newbies. Miraculously, we found 2 other high schoolers who were also new and now we had a team of 4 people. One of them had decent experience in graphic design and the other one won a hackathon before and was competing for the 3rd time. Things were looking bright and we still had hope, with almost 48 hours left of hacking.</h3>
            <br></br>
            <h3 style = {h3Style}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was glad that my teammates were cooperative and we ended up deciding on making an app that has a dashboard which monitors screen time, gives reminders, browses forums and other features that promote mental health and well being during the pandemic (I will link the project at the bottom if you want to see details). There was no way we were going to publish a functioning mobile app with our incompetence in programming. Regardless, we got to work and the 2 of us worked on a figma mockup of the app , 1 of us worked on a chatting support bot with voiceflow and I worked on a Java GUI (which they taught us in school) as a lousy placeholder for the app and somehow in less than 2 days, we put together a decent first time project. </h3>
            <br></br>

            <img style = {imgStyle} src={twitch} alt="twitch"></img>

            <br></br>
            <h3 style = {h3Style}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the end, this hackathon was really fun despite being held online. I loved the experience of meeting new people and it was a great exercise for teamwork and communication and applying programming knowledge to a functioning product. These skills are very useful in the workplace and I would recommend anyone who hasn’t done a hackathon before to register for one on the MLH website for a beginner friendly event. Even if you don’t have programming experience, there is always something you can contribute (video editing, writing, designing, etc) if you take the initiative. We didn’t end up winning any prizes during the closing ceremony. However, I did end up going onto the MLH twitch livestream to represent our team and tell everyone about our first time experience as high schoolers and the judges loved us. I’d say I took a big W there. </h3>
        
            <br></br>   

            <a href = "https://mentalhealthhacks.devpost.com/" style={aStyle}> <h3 style = {h3Style}>Mental Health Hacks</h3></a>
            <a href = "https://devpost.com/software/easy-peacy" style={aStyle}> <h3 style = {h3Style}>Easy Peacy</h3></a>

        </div>
    )
}
const h1Style: React.CSSProperties = {
    textAlign: 'center',
}
const h2Style: React.CSSProperties = {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: '25px',
}
const h3Style: React.CSSProperties = {
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '1.5',
    
}
const imgStyle: React.CSSProperties = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
}
const aStyle: React.CSSProperties = {
    color: 'white',
}
export default FirstHackathon;