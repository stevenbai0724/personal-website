import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import LinkBar from './components/LinkBar';
import Blog from './pages/Blog';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom'
import FirstHackathon from './pages/FirstHackathon';
import ProgrammingJourney from './pages/ProgrammingJourney';
import Timeline from './pages/Timeline';
import Admissions from './pages/Admissions'

window.onbeforeunload = function () { //scroll to the top of page after refresh
  window.scrollTo(0, 0);
}
const App = () =>{
  return (
  <Router>
    <div className="App"> 
    <Navbar
      first ="Home"
      second = "Projects"
      third = "Blog"
      fourth = "Resume"
    ></Navbar>
    <br></br>
    <br></br>
      <div className = "App-box"> 
                

        <Switch>
          <Route exact path="/" ><Home />  </Route>
          <Route exact path="/Projects"component={Projects}></Route>  
          <Route exact path="/Blog" component={Blog}></Route>
          <Route exact path="/Blog/FirstHackathon" component={FirstHackathon}></Route>
          <Route exact path="/Blog/ProgrammingJourney" component={ProgrammingJourney}></Route>
          <Route exact path="/Blog/Timeline" component={Timeline}></Route>
          <Route exact path="/Blog/Admissions" component={Admissions}></Route>
        </Switch>
      
        <br></br>
        


      </div>
      

      <LinkBar></LinkBar>
    </div>
  </Router>
  )

}


export default App;
