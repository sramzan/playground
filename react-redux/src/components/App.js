import React from 'react';
import Header from './home/Header';
import Main from './home/Main';

/**
 * Header is where the navigation is included
 * Main is where the other components are rendered
 */
const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default App;