// Root Reducer
import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorsReducer from './authorReducer';

const rootReducer = combineReducers({
    courseReducer, // this impacts how this is accessed in react components
    authorsReducer
});

export default rootReducer;