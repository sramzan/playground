import * as types from './actionsTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function createCourseSuccess(course){
    return {
        type: types.CREATE_COURSE_SUCCESS,
        course
    };
}

export function updateCourseSuccess(course){
    return {
        type: types.UPDATE_COURSE_SUCCESS,
        course
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

/**
 * Thunk for saving course data
 */
export function saveCourse(course){
    return function(dispatch, getState){ // getState is optional and allows us to get particular pieces of the state from the store
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) 
            : dispatch(createCourseSuccess(savedCourse));
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