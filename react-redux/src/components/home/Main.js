import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/HomePage';
import About from '../about/AboutPage';
import Courses from '../course/CoursePage'; 

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/courses" component={Courses}/>
    </Switch>
  </main>
);

export default Main;