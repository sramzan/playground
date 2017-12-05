import * as types from './actionsTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function loadCourses(){
    // Make async call to api, handle promise, then dispatch action
    return function(dispatch){
        // Body of thunk
        return courseApi.getAllCourses().then((courses) => { // replace with django call
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

// export function createCourse(course){
//     return {
//         type: types.CREATE_COURSE, // TODO: Move to constant
//         course: course // passing course data... technically in ES6 we could just write course since the right and left match
//     };
// }