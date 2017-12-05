import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
// this reducer handles a list of courses, so we intialize the state
// to an empty array
    switch(action.type){
        case types.CREATE_COURSE: // Could do something other than a switch
            return [...state, //spreads our arary, creates new instance of our array
                    Object.assign({}, action.course)
            ];
            // this would seem like what you need to do, but state is immutable! Don't modify it!
            // state.push(action.course);
            // return state;
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}