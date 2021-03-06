import dispatcher from "../appDispatcher";
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

export function saveCourse(course) { // Action Creator
    return courseApi.saveCourse(course).then( savedCourse => {
        // Hey dispatcher, go tell all the stores that a course was just created.
        dispatcher.dispatch({ // Action
            actionType: course.id 
            ? actionTypes.CREATE_COURSE 
            : actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    });
}

export function loadCourses() {
    return courseApi.getCourses().then( courses => {
        dispatcher.dispatch({ 
            actionType: actionTypes.LOAD_COURSES,
            courses: courses
        });
    });
}

export function deleteCourse(id) {
    return courseApi.deleteCourse(id).then( () => {
        dispatcher.dispatch({ 
            actionType: actionTypes.DELETE_COURSE,
            id: id
        });
    });
}