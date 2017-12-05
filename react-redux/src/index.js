import React           from 'react';
import configureStore  from './store/configureStore'; 
import App             from './components/App';
import {render}        from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// Higher order component that attaches our store to our react container component
import {Provider}      from 'react-redux';

// Creates instance of store for app
// Could pass intial state here (i.e. something from the server or equivalent)
const store = configureStore();

// The provider component wrap allows our application to access the redux store
render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
