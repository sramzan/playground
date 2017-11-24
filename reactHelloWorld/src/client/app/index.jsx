import React from 'react';
import AwesomeComponent from './components/AwesomeComponent.jsx';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return ( 
      <div>
        <p> Hello React Sean!</p>
        <AwesomeComponent/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));