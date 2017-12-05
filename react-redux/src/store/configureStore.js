import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){ // good way to intialize our store, especially for server side rendering
    return createStore(
        rootReducer, 
        initialState,
        applyMiddleware(reduxImmutableStateInvariant()) // Can place all middleware here to be used in app
    );
}