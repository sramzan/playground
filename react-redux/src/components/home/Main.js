import React             from 'react';
import Home              from '../home/HomePage';
import About             from '../about/AboutPage';
import Courses           from '../course/CoursePage'; 
import ManageCoursePage from '../course/ManageCoursePage';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/courses" component={Courses}/>
      <Route path="/manage-course" component={ManageCoursePage}/>
      <Route path="/manage-course/:id" component={ManageCoursePage}/>
    </Switch>
  </main>
);

export default Main;