import * as types   from '../actions/actionsTypes';
import initialState from './initialState';

export default function actions(state=[], action){
    switch (action.type){
        case types.ACTION:
            return null; // Default implementation only
        default:
            return state;
    }
}