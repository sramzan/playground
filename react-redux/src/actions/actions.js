import * as types from './actionsTypes';

export function actions(attribute){
    return {
        type: types.ACTION,
        attribute
    };
}