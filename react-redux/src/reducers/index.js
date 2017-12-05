// Root Reducer
import {combineReducers} from 'redux';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
    courseReducer: courseReducer // this impacts how this is accessed in react components
});

export default rootReducer;