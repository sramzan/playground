import React             from 'react';
import Home              from '../home/HomePage';
import About             from '../about/AboutPage';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </main>
);

export default Main;