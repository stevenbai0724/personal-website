
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import {Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import LinkBar from './components/LinkBar';
import Blogs from './pages/Blogs';

const App = () =>{
  return (
  <div className="App"> 
    <header className = "App-header">   
    <br></br>
    <Navbar></Navbar>

    <Route exact path="/"  component={Home}></Route>
    <Route exact path="/Projects"  component={Projects}></Route>  
    <Route exact path="/Blogs" component={Blogs}></Route>
    
    <LinkBar></LinkBar>

    <br></br>
    <br></br>
    

    </header>


  </div>
  )

}


export default App;
