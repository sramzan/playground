import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){ // good way to intialize our store, especially for server side rendering
    return createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant()) // Can place all middleware here to be used in app
    );
}

