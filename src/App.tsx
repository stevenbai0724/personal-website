
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import LinkBar from './components/LinkBar';
import Blogs from './pages/Blogs';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import FirstHackathon from './pages/FirstHackathon';

const App = () =>{
  return (
  <Router>
  <div className="App"> 
    <header className = "App-header">   
    <br></br>
    <Navbar></Navbar>
    
    <div> 
    <Switch>
    <Route exact path="/personal-website"><Home />  </Route>
    <Route exact path="/Projects"> <Projects/></Route>  
    <Route exact path="/Blogs" component={Blogs}><Blogs /></Route>
    <Route exact path="/FirstHackathon"><FirstHackathon/></Route>


    </Switch>
    </div>

    <div>
    <LinkBar></LinkBar>
    </div>

    <br></br>
    <br></br>
    
    </header>


  </div>
  </Router>
  )

}


export default App;
