import * as types from './actionsTypes';

export function createCourse(course){
    return {
        type: types.CREATE_COURSE, // TODO: Move to constant
        course: course // passing course data... technically in ES6 we could just write course since the right and left match
    };
}