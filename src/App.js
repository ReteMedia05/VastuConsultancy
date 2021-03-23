import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Aboutus from './Aboutus';
import Home from './screens/Home';
import Vaastuportfolio from './screens/Vaastuportfolio';
import Bookappointment from './screens/Bookappointment';
import Contact from './screens/Contact';
import Navbar from './components/Navbar';




function App() {
  return (
    // <div className="App">
    //   <h1>Hello</h1>
    // </div>
    <Router>
    <div className="App">
    <Navbar />
    </div>
    <Switch>
        <Route path = "/" exact component = {Home}/>;
        <Route path = "/aboutus" exact component = {Aboutus}/>;
        <Route path = "/contact" exact component = {Contact}/>;
        <Route path = "/bookappointment" component = {Bookappointment}/>;
        <Route path = "/vaastuportfolio" component = {Vaastuportfolio}/>;
      </Switch>
    </Router>
  )
}

export default App;
