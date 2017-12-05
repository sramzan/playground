import * as types from '../actions/actionsTypes';

export default function courseReducer(state = [], action){
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
        default:
            return state;
    }
}