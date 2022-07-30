import React from 'react'
import { makeStyles} from "@material-ui/core";
import waterloo from "../images/waterloobig.jpg"
const useStyles = makeStyles((theme) =>  ({

    h1: {
      textAlign: "center",
      fontSize: "30pt",
    },
    h2: {
      textAlign: "center",
      fontSize: "15pt",
      fontWeight: "normal",
    },
    h2Title : {
      textAlign: "left",
      fontSize: "15pt",
      fontWeight: "bold",
    },
    h3 :{
      textAlign: "left",
      fontWeight: "normal",
      lineHeight: "1.75",
      display: "inline",
      fontSize: "12pt",
    },
    img: {
      width: "100%",
      marginTop: "40px",
      marginBottom: "40px",
      display: "block",
    },
    link : {
      textDecoration: "none",
      color: "#38fc94",
      fontSize: "12pt",
    }

}))
const Admissions = () =>{ 

  const classes = useStyles();

  return (
    <div style={{width: "100%"}}>
        <h1 className = {classes.h1}>Admissions 2022</h1>

        <h2 className = {classes.h2}>April 2022 | 5 min read</h2>

        <img className = {classes.img} src = {waterloo}></img>

        <h3 className = {classes.h3}>University admissions are highly anticipated for most high school students in their senior year. As of writing this blog, I am still waiting on most of my offers but I still think it is fun to document and reflect on the past few months of senior year so far. </h3>

        <h2 className = {classes.h2Title}>Backup Schools</h2>

        <h3 className = {classes.h3}>I applied to 8 programs from 5 schools in total (Waterloo, UofT, McMaster, Carleton and UOttawa), mostly consisting of computer science and engineering programs which are related to the career I hope to pursue in software. As I mentioned in my coding blog back in August 2021, computer science is becoming extremely competitive and most top-tier schools will require a supplementary application with an essay, form and/or interview process. This means that they will take time to process the applicants' submissions and give offers late in March - May. </h3>

        <br></br>
        <br></br>

        <h3 className = {classes.h3}>I was extremely anxious while waiting for these offers so it was a good idea to secure early offers from schools with easier requirements. As of April 2022, I've only heard back from 3 out of the 8 programs I applied to which goes to show how stressful the waiting would have been if I did not diversify my choices in programs/schools.</h3>

        <br></br>
        <br></br>

        <h3 className = {classes.h3}>I applied to schools only within Ontario and I received admissions a week after applying to UOttawa in November, and Carleton University in December. I was at least guaranteed a place to go next year after high school and it saved a lot of stress. </h3>

        <br></br>
        <br></br>

        <h2 className = {classes.h2Title}>Supplementary Applications</h2>

        <h3 className = {classes.h3}>This is the most draining and time consuming process of admissions. All supplementary applications are designed to scout students who are well-rounded and/or extremely dedicated to certain areas outside of school such as sports, music, work experience, STEM contests, and much more. Filling out forms or attending interviews is required for most, if not all, competitive programs. The only thing I regret is not doing my applications earlier, since it could have played a factor in securing early admissions (although I do not have a reliable source backing this up). <a href="https://uwaterloo.ca/future-students/admissions/admission-information-form" target = "_blank" className = {classes.link}>Here</a> is Waterloo's example of a supplementary application. </h3>

        <br></br>
        <br></br>

        <h3 className = {classes.h3}>Every school has different means of early acceptance rounds and there is rarely any reliable info on how they make such decisions. I submitted supplementaries for computer science at the University of Toronto and McMaster University very late (a few days before the deadline) and to this day, I missed all of the early rounds of admissions despite having around a 97% average (using some predicted marks, more on that later). There is every reason to submit supplementaries at least before the winter break to get it over with and avoid any regrets.</h3>

        <br></br>
        <br></br>

        <h3 className = {classes.h3}>My supplementary applications were thoroughly prepared for and well organized. I created this website and a LinkedIn profile to accumulate all of my extracurriculars, work/volunteer experience, projects and awards. This made my experiences more organized and much easier to talk about on the video interviews for Waterloo and McMaster. I was even able to directly link this website onto the Waterloo Admissions Information Form (AIF), which proved how useful it was to buy a website domain. However, It is unknown as to the degree of which they looked into my website and external links. </h3>

        <br></br>
        <br></br>

        <h3 className = {classes.h3}>It is also important to get others to edit responses on supplementary forms. I was lucky to have connections with upper-year students who once wrote strong supplementary applications that gave them acceptance offers. They were able to give crucial feedback on my writing to fully optimize the impression that I gave on my application. </h3>

        <br></br>
        <br></br>

        <h2 className = {classes.h2Title}>Do Grade 11 Marks Matter?</h2>

        <h3 className = {classes.h3}>This is a common question that I was always unsure about before Grade 12. As an Ontario applicant for strictly Ontario schools, the short answer is no. Universities will only look at your top 6 Grade 12 level (4U or 4M) which must include Grade 12 English and other courses depending on the program. These courses may be completed during Grade 11 (or even Grade 10 in some special cases) and midterm semester 2 marks may be used. </h3>
    
        <br></br>
        <br></br>

        <h3 className = {classes.h3}>The long answer is that performance in Grade 11 is what separates an average applicant from a competitive one. Not only are Grade 11 marks extremely useful for early admission, but strong performance in Grade 11 courses will make the Grade 12 equivalent course much easier. Grade 12 is supposed to be the most stressful year of high school but it can be extremely laid back if enough effort is put into Grade 11 and even earlier grades. I had a much lighter workload and 2 spare periods this year which allowed me to take it easy on my mental health and spend some of my spare time doing web development.</h3>

        <br></br>
        <br></br>

        <h3 className = {classes.h3}>Although Grade 11 marks do not matter in late rounds of admission (semester 2 of Grade 12), Grade 11 marks can be used to predict the Grade 12 equivalent of the same course if the mark is not yet determined. For example, I applied to computer engineering at UWaterloo which has Grade 12 chemistry as a prerequisite, meaning that I was forced to have chemistry in my top 6 average for that program. However, this course is scheduled for semester 2 on my timetable so Waterloo can't even see this mark until late April midterm reports. Regardless, I was accepted in March which meant that they must have used my Grade 11 Chemistry mark (100%) to predict how I would perform in the Grade 12 course. This may not have been possible if I didn't try hard enough in Grade 11.</h3>

        <br></br>
        <br></br>

        <h3 className = {classes.h3}>Unless offers are given, it is never good to get low marks in any grade. It is good practice to develop study habits by performing well in all courses, even if they aren't interesting or useful in the future. </h3>

        <br></br>
        <br></br>

        <h2 className = {classes.h2Title}>Final Remarks</h2>

        <h3 className = {classes.h3}>University offers have so far been amazing. I am very grateful to have received the earliest round of computer engineering offers from UWaterloo which I can definitely settle with. Not everyone gets offers early and there was incredible luck involved with getting such an early offer due to my current school's strong adjustment factor and my inflated virtual school marks from Grade 11. I wouldn't say it was entirely luck, because there were many things I worked very hard on over the years and I was able to display them on my AIF. This included my achievements in piano and swimming, as well as significant web development work from internships, hackathons and personal projects such as this website. Computer engineering @ Waterloo is my second choice (behind computer science @ Waterloo) and I am totally satisfied with it. Recently I have just been cruising with 80's in my classes and getting back into web development which I previously put on hold. I even started going to the gym with my friends, spending more time playing video games and enjoying myself in general without feeling guilty about wasting time. The relief from receiving a satisfying admission is totally worth the wait and the effort.
</h3>



    </div>
  )
}

export default Admissions