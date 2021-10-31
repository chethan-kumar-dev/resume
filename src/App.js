import React,{useState}  from "react";
import Basicinfo from "./Component/BasicInfo/Basicinfo";
import Education from "./Component/Education/Education";
import Workexperience from './containers/workexpCont/Workexperience';
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom'
import Skills from "./Component/Skill/Skills/Skills";
import Projects from "./Component/Project/Projects/Projects";
import Objective from "./Component/Objective/Objective";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Route component={Basicinfo} path='/' exact></Route>
        <Route component={Workexperience} path='/workexp' exact></Route>
        <Route component={Education} path='/education' exact></Route>
        <Route component={Skills} path='/skills' exact></Route>
        <Route component={Projects} path='/projects' exact></Route>
        <Route component={Objective} path='/objective' exact></Route>
      </Router>

    </div>
  );
}

export default App;
