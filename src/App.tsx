
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import LinkBar from './components/LinkBar';
import Blogs from './pages/Blogs';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom'
import FirstHackathon from './pages/FirstHackathon';

const App = () =>{
  return (
  <Router>
  <div className="App"> 
    
    <header className = "App-header"> 
    <br></br>  
    <Navbar></Navbar>
    

    <Switch>
    <Route exact path="/" ><Home />  </Route>
    <Route exact path="/Projects"component={Projects}></Route>  
    <Route exact path="/Blogs" component={Blogs}><Blogs /></Route>
    <Route exact path="/FirstHackathon"component={FirstHackathon}></Route>


    </Switch>
  

    <LinkBar></LinkBar>


    
    </header>


  </div>
  </Router>
  )

}


export default App;
