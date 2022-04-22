import dispatcher from "../appDispatcher";
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

export function saveCourse(course) { // Action Creator
    return courseApi.saveCourse(course).then( savedCourse => {
        // Hey dispatcher, go tell all the stores that a course was just created.
        dispatcher.dispatch({ // Action
            actionType: actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    });
}