import react from 'react'
import line from '../images/line.png'
import { makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) =>  ({

    h1: {
        textAlign: 'left',
        fontSize: "30pt",
        marginTop: "80px",
    },
    h2: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: "15pt",
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '20px',
    },
    h2Left: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '16pt',

    },
    h3Left: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '15pt',
    },
    h4Left:{
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '12pt',
    },
    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
    },
    a: {
        color: '#38FC94',
        textDecoration: 'none',
    },
    aRed: {
        color: '#EE0000',
        textDecoration: 'none',
    },
    mainContainer: {
        minHeight: "100vh", 
        width: "calc(100% - 50px)"
    },
      
}));
const Timeline = () => {
    const classes = useStyles();
    return (

        <div className={classes.mainContainer}>
            
            <h1 className = {classes.h1}>Programming Timeline</h1>
            <h2 className = {classes.h2}>From start of programming to acceptance at Waterloo (February 2019 - May 2022)</h2>

            <p>
                <h2 className = {classes.h2Left}>2022</h2>

                <h3 className = {classes.h3Left}>May</h3>
                <h4 className = {classes.h4Left}>&#183; Accepted into Computer Science at University of Waterloo!</h4>
            </p>
            
            <p>
                <h3 className = {classes.h3Left}>April</h3>
                <h4 className = {classes.h4Left}>&#183; Burnout from school and programming</h4>
                <h4 className = {classes.h4Left}>&#183; Significant updates made to personal website, mostly cleaned up code</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>March</h3>
                <h4 className = {classes.h4Left}>&#183; Missed CCC honor roll by 1 point</h4>
                <h4 className = {classes.h4Left}>&#183; Accepted into Computer Engineering at University of Waterloo!</h4>
                <h4 className = {classes.h4Left}>&#183; Learned a little bit of <a className={classes.a} target="_blank" href="https://www.mongodb.com/">MongoDB</a> to maintain databases for future projects</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>February</h3>
                <h4 className = {classes.h4Left}>&#183; 700 DMOJ problems solved</h4>
                <h4 className = {classes.h4Left}>&#183; 400 DMOJ points</h4>
                <h4 className = {classes.h4Left}>&#183; Underperformed on CCC, 39/75 (~94th percentile) </h4>
                <h4 className = {classes.h4Left}>&#183; "Retired" from competitive programming </h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>January</h3>
                <h4 className = {classes.h4Left}>&#183; 1700 rating on DMOJ</h4>
                <h4 className = {classes.h4Left}>&#183; Organized and hosted <a className={classes.a} target="_blank" href="https://unlock-hacks.devpost.com/">Unlock Hacks</a> with 170+ participants</h4>
                <h4 className = {classes.h4Left}>&#183; Consistently hitting 1900+ performance on dmoj!</h4>
            </p>

            <br></br>

            <p>
                <h2 className = {classes.h2Left}>2021</h2>

                <h3 className = {classes.h3Left}>December</h3>
                
                <h4 className = {classes.h4Left}>&#183; 600 DMOJ problems solved</h4>
                <h4 className = {classes.h4Left}>&#183; Almost qualified for USACO Gold Division (1 subtask away!)</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>November</h3>
                <h4 className = {classes.h4Left}>&#183; Finished and deployed my first full stack web application, <a className={classes.a} target="_blank" href="https://github.com/stevenbai0724/dmojstats">dmojstats</a></h4>
                <h4 className = {classes.h4Left}>&#183; Did freelance work for a <a className = {classes.a} target="_blank" href = "https://github.com/LemonFace0309/productify-beta">DiscordJS bot</a> </h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>October</h3>
                <h4 className = {classes.h4Left}>&#183; Began work on a solo full stack project</h4>
                <h4 className = {classes.h4Left}>&#183; 500 DMOJ problems solved</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>September</h3>
                <h4 className = {classes.h4Left}>&#183; Started learning <a className={classes.a} target="_blank" href="https://expressjs.com/">Express</a> for backend development  </h4>
                <h4 className = {classes.h4Left}>&#183; Built<a className={classes.a} target="_blank" href="https://devpost.com/software/troki"> Troki</a>, my first React Native mobile app, for Hack the North 2021</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>August</h3>
                <h4 className = {classes.h4Left}>&#183; Solved 5 problems on a <a className={classes.a} target="_blank" href="https://codeforces.com/contest/1560/standings/participant/118837552#p118837552">Div. 3 CodeForces Round</a>, (#271st place out of 27251 contestants)</h4>
                <h4 className = {classes.h4Left}>&#183; Became a CodeForces specialist (aqua, rating&ge;1400)  </h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>July</h3>
                <h4 className = {classes.h4Left}>&#183; Launched <a className={classes.a} target="_blank" href="https://stevenbai.ca/">personal website</a>, made with a Typescript React app</h4>
                <h4 className = {classes.h4Left}>&#183; Started solving on CodeForces everyday instead of DMOJ </h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>June</h3>
                <h4 className = {classes.h4Left}>&#183; Wrote AP Calc and Mechanics. Did terrible on both.</h4>
                <h4 className = {classes.h4Left}>&#183; Finished Grade 11 and took a break from programming</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>May</h3>
                <h4 className = {classes.h4Left}>&#183; Became CodeForces pupil (green, rating&ge;1200)</h4>
                <h4 className = {classes.h4Left}>&#183; 400 DMOJ problems solved</h4>
                <h4 className = {classes.h4Left}>&#183; Attended first hackathon online <a className={classes.a} target="_blank" href="https://mentalhealthhacks.devpost.com/">(Mental Health Hacks)</a></h4> 
            </p>

            <p>
                <h3 className = {classes.h3Left}>April</h3>
                <h4 className = {classes.h4Left}>&#183; Eighth <a className={classes.a} target="_blank" href="https://dmoj.ca/contest/dmopc20c5/ranking/#!stevenbai0724">DMOJ contest</a>, became a candidate master (purple, rating&ge;1600)</h4>
                <h4 className = {classes.h4Left}>&#183; Created first pull request</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>March</h3>
                <h4 className = {classes.h4Left}>&#183; Landed first <a className={classes.a} target="_blank" href="https://icontribute.community/#/">internship</a> until end of August</h4>
                <h4 className = {classes.h4Left}>&#183; Started learning TypeScript React for frontend web development</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>February</h3>
                <h4 className = {classes.h4Left}>&#183; First Senior CCC, 34/75 (88th percentile, wasn't very happy)</h4>
                <h4 className = {classes.h4Left}>&#183; 300 DMOJ problems solved</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>January</h3>
                <h4 className = {classes.h4Left}>&#183; Third <a className={classes.a} target="_blank" href="https://dmoj.ca/contest/wac6/ranking/#!stevenbai0724">DMOJ contest</a>, became expert (blue, rating&ge;1300)</h4>
                <h4 className = {classes.h4Left}>&#183; 200 DMOJ problems solved</h4>
            </p>

            <br></br>

            <p>
                <h2 className = {classes.h2Left}>2020</h2>
                <h3 className = {classes.h3Left}>December</h3>
                <h4 className = {classes.h4Left}>&#183; Second <a className={classes.a} target="_blank" href="https://dmoj.ca/contest/dmopc20c2/ranking/#!stevenbai0724">DMOJ contest</a>, became amateur (green, rating&ge;1000)</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>November</h3>
                <h4 className = {classes.h4Left}>&#183; First <a className={classes.a} target="_blank" href="https://codeforces.com/contest/1454/standings/participant/105905493#p105905493">Div. 3 CodeForces Round</a>, solved only 2 problems (#8457th place out of 21093 contestants)</h4>
            </p>
            
            <p>
                <h3 className = {classes.h3Left}>October</h3>
                <h4 className = {classes.h4Left}>&#183; Switched to C++ from Java</h4>
                <h4 className = {classes.h4Left}>&#183; 100 DMOJ problems solved</h4>
                <h4 className = {classes.h4Left}>&#183; First<a className={classes.a} target="_blank" href="https://dmoj.ca/contest/dmopc20c1/ranking/#!stevenbai0724"> DMOJ contest</a> , became newbie (gray, rating&lt;1000)</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>Septemeber</h3>
                <h4 className = {classes.h4Left}>&#183; Began doing competitive programming again on DMOJ in Java, learning new algorithms taught by <a className={classes.aRed} target="_blank" href="https://dmoj.ca/user/kevinyang">kevinyang</a> (much appreciated)</h4>
                <h4 className = {classes.h4Left}>&#183; Created CodeForces account and began solving more problems</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>February</h3>
                <h4 className = {classes.h4Left}>&#183; Wrote first junior CCC, 37/75 (worse than 50th percentile)</h4>
                <h4 className = {classes.h4Left}>&#183; Took a long break from programming</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>January</h3>
                <h4 className = {classes.h4Left}>&#183; Created first <a className={classes.a} target="_blank" href="https://github.com/stevenbai0724/Java-GUI-Project">Java Application</a> (a huge disaster)</h4> 
            </p>

            <br></br>

            <p>
                <h2 className = {classes.h2Left}>2019</h2>

                <h3 className = {classes.h3Left}>September</h3>
                <h4 className = {classes.h4Left}>&#183; Introduced to <a className={classes.a} target="_blank" href="https://dmoj.ca/">DMOJ</a> and competitve programming</h4>
                <h4 className = {classes.h4Left}>&#183; Began solving on DMOJ in Java</h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>August</h3>
                <h4 className = {classes.h4Left}>&#183; Began learning C++ and Java on <a className={classes.a} target="_blank" href="https://www.sololearn.com/">Sololearn</a> </h4>
            </p>

            <p>
                <h3 className = {classes.h3Left}>July</h3>
                <h4 className = {classes.h4Left}>&#183; Created first <a className={classes.a} target="_blank" href="https://stevenbai0724.github.io/Civics-and-Careers-Project/">HTML website</a> for careers class. The <a className={classes.a} target="_blank" href="https://github.com/stevenbai0724/Civics-and-Careers-Project">repository</a> was hosted on GitHub Pages </h4> 
            </p>

            <p>
                <h3 className = {classes.h3Left}>May</h3>
                <h4 className = {classes.h4Left}>&#183; Created first project: a <a className={classes.a} target="_blank" href="https://github.com/stevenbai0724/Python-Pygame-Project">pong game</a> in Python</h4>
                <h4 className = {classes.h4Left}>&#183; Began learning HTML and CSS at school</h4> 
            </p>

            <p>
                <h3 className = {classes.h3Left}>February</h3>
                <h4 className = {classes.h4Left}>&#183; Began learning fundamentals of Python at school</h4>
            </p>
            
        </div>
    )
}


export default Timeline;