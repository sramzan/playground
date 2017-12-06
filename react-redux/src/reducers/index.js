// Root Reducer
import {combineReducers} from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
    reducer // this impacts how this is accessed in react components
});

export default rootReducer;