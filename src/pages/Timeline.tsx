import react from 'react'
import line from '../images/line.png'
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>  ({

    h1: {
        textAlign: 'center',
    },
    h2: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: '25px',
    },
    h3: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '20px',
    },
    h2Left: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '25px',

    },
    h3Left: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    h4Left:{
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '17px',
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
      
}));
const Timeline = () => {
    const classes = useStyles();
    return (

        <div>
            <h1 className = {classes.h1}>Programming timeline</h1>
            <h2 className = {classes.h2}>2019 - Present</h2>
            <img className = {classes.img} src={line} alt="line"></img>

            <h2 className = {classes.h2Left}>2021</h2>
            
            <h3 className = {classes.h3Left}>November</h3>
            <h4 className = {classes.h4Left}>-Finished and deployed my first full stack web application, <a className={classes.a} target="_blank" href="https://dmojstats.herokuapp.com/">dmojstats</a></h4>

            <h3 className = {classes.h3Left}>October</h3>
            <h4 className = {classes.h4Left}>-Began work on a solo full stack project</h4>
            <h4 className = {classes.h4Left}>-500 DMOJ problems solved</h4>

            <h3 className = {classes.h3Left}>September</h3>
            <h4 className = {classes.h4Left}>-Started learning <a className={classes.a} target="_blank" href="https://expressjs.com/">Express</a> for backend development  </h4>
            <h4 className = {classes.h4Left}>-Built<a className={classes.a} target="_blank" href="https://devpost.com/software/troki"> Troki</a>, my first React Native mobile app, for Hack the North 2021</h4>

            <h3 className = {classes.h3Left}>August</h3>
            <h4 className = {classes.h4Left}>-Solved 5 problems on a <a className={classes.a} target="_blank" href="https://codeforces.com/contest/1560/standings/participant/118837552#p118837552">Div. 3 CodeForces Round</a>, (#271st place out of 27251 contestants)</h4>
            <h4 className = {classes.h4Left}>-Became a CodeForces specialist (aqua, Elo&ge;1400)  </h4>

            <h3 className = {classes.h3Left}>July</h3>
            <h4 className = {classes.h4Left}>-Launched <a className={classes.a} target="_blank" href="https://stevenbai.ca/">personal website</a>, made with a Typescript react app which I learned at my internship</h4>
            <h4 className = {classes.h4Left}>-Started solving on CodeForces everyday instead of DMOJ </h4>

            <h3 className = {classes.h3Left}>June</h3>
            <h4 className = {classes.h4Left}>-Wrote AP Calc and Mechanics. Did terrible on both.</h4>
            <h4 className = {classes.h4Left}>-Finished grade 11 and took a break from programming</h4>


            <h3 className = {classes.h3Left}>May</h3>
            <h4 className = {classes.h4Left}>-Became CodeForces pupil (green, Elo&ge;1200)</h4>
            <h4 className = {classes.h4Left}>-400 DMOJ problems solved</h4>
            <h4 className = {classes.h4Left}>-Attended first hackathon online <a className={classes.a} target="_blank" href="https://mentalhealthhacks.devpost.com/">(Mental Health Hacks)</a></h4> 



            <h3 className = {classes.h3Left}>April</h3>
            <h4 className = {classes.h4Left}>-Eighth <a className={classes.a} target="_blank" href="https://dmoj.ca/contest/dmopc20c5/ranking/#!stevenbai0724">DMOJ contest</a>, became a candidate master (purple, Elo&ge;1600)</h4>
            <h4 className = {classes.h4Left}>-Created first pull request</h4>

            <h3 className = {classes.h3Left}>March</h3>
            <h4 className = {classes.h4Left}>-Landed first <a className={classes.a} target="_blank" href="https://icontribute.community/#/">internship</a> until end of August</h4>
            <h4 className = {classes.h4Left}>-Started learning TypeScript React for frontend web development</h4>

            <h3 className = {classes.h3Left}>February</h3>
            <h4 className = {classes.h4Left}>-First Senior CCC, 34/75 (88th percentile, wasn't very happy)</h4>
            <h4 className = {classes.h4Left}>-300 DMOJ problems solved</h4>

            <h3 className = {classes.h3Left}>January</h3>
            <h4 className = {classes.h4Left}>-Third <a className={classes.a} target="_blank" href="https://dmoj.ca/contest/wac6/ranking/#!stevenbai0724">DMOJ contest</a>, became expert (blue, Elo&ge;1300)</h4>
            <h4 className = {classes.h4Left}>-200 DMOJ problems solved</h4>
            
            <br></br>
            <h2 className = {classes.h2Left}>2020</h2>
            <h3 className = {classes.h3Left}>December</h3>
            <h4 className = {classes.h4Left}>-Second <a className={classes.a} target="_blank" href="https://dmoj.ca/contest/dmopc20c2/ranking/#!stevenbai0724">DMOJ contest</a>, became amateur (green, Elo&ge;1000)</h4>

            <h3 className = {classes.h3Left}>November</h3>
            <h4 className = {classes.h4Left}>-First <a className={classes.a} target="_blank" href="https://codeforces.com/contest/1454/standings/participant/105905493#p105905493">Div. 3 CodeForces Round</a>, solved only 2 problems (#8457th place out of 21093 contestants)</h4>

            <h3 className = {classes.h3Left}>October</h3>
            <h4 className = {classes.h4Left}>-Switched to C++ from Java</h4>
            <h4 className = {classes.h4Left}>-100 DMOJ problems solved</h4>
            <h4 className = {classes.h4Left}>-First<a className={classes.a} target="_blank" href="https://dmoj.ca/contest/dmopc20c1/ranking/#!stevenbai0724"> DMOJ contest</a> , became newbie (gray, Elo&lt;1000)</h4>


            <h3 className = {classes.h3Left}>Septemeber</h3>
            <h4 className = {classes.h4Left}>-Began doing competitive programming again on DMOJ in Java, learning new algorithms taught by <a className={classes.aRed} target="_blank" href="https://dmoj.ca/user/kevinyang">kevinyang</a></h4>
            <h4 className = {classes.h4Left}>-Created CodeForces account and began solving more problems</h4>

            <h3 className = {classes.h3Left}>February</h3>
            <h4 className = {classes.h4Left}>-Wrote first junior CCC, 37/75 (worse than 50th percentile)</h4>
            <h4 className = {classes.h4Left}>-Took a long break from programming</h4>

            <h3 className = {classes.h3Left}>January</h3>
            <h4 className = {classes.h4Left}>-Created first <a className={classes.a} target="_blank" href="https://github.com/stevenbai0724/Java-GUI-Project">Java Application</a> (a huge disaster)</h4> 


            <br></br>
            <h2 className = {classes.h2Left}>2019</h2>

            <h3 className = {classes.h3Left}>September</h3>
            <h4 className = {classes.h4Left}>-Introduced to <a className={classes.a} target="_blank" href="https://dmoj.ca/">DMOJ</a> and competitve programming</h4>
            <h4 className = {classes.h4Left}>-Began solving on DMOJ in Java</h4>

            <h3 className = {classes.h3Left}>August</h3>
            <h4 className = {classes.h4Left}>-Began learning C++ and Java on <a className={classes.a} target="_blank" href="https://www.sololearn.com/">Sololearn</a> </h4>
            
            <h3 className = {classes.h3Left}>July</h3>
            <h4 className = {classes.h4Left}>-Created first <a className={classes.a} target="_blank" href="https://stevenbai0724.github.io/Civics-and-Careers-Project/">HTML website</a> for careers class. The <a className={classes.a} target="_blank" href="https://github.com/stevenbai0724/Civics-and-Careers-Project">repository</a> was hosted on GitHub Pages </h4> 
        
            <h3 className = {classes.h3Left}>May</h3>
            <h4 className = {classes.h4Left}>-Created first project: a <a className={classes.a} target="_blank" href="https://github.com/stevenbai0724/Python-Pygame-Project">pong game</a> in Python</h4>
            <h4 className = {classes.h4Left}>-Began learning HTML and CSS at school</h4> 

            <h3 className = {classes.h3Left}>February</h3>
            <h4 className = {classes.h4Left}>-Began learning fundamentals of Python at school</h4>

            {/*  */}
            {/* <h4 className = {classes.h4Left}></h4>  
            <h4 className = {classes.h4Left}> <a className={classes.a} target="_blank" href=""></a> </h4> 
            <h3 className = {classes.h3Left}>May</h3>*/}

        </div>
    )
}


export default Timeline;