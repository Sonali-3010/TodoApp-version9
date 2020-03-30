import * as actionTypes from './actionTypes'
import update from 'immutability-helper'

const tasks = JSON.parse(localStorage.getItem("tasksList2")) || []
const initalState = {
    tasks
}

const reducer = (state=initalState, action) => {
    let tasksList
    switch(action.type){

        case actionTypes.ADD_TASK: 
            const todo = {
                task: action.task,
                isComplete: false,
                isImportant: false
            }
            tasksList = update(state.tasks, {$push: [todo]});
            return {
                ...state,
                tasks: tasksList
            }

        case actionTypes.MARK_TASK_IMPORTANT:
            tasksList = update(state.tasks, {[action.index]: {isImportant: {$set: true}}}) 
            return {
                ...state,
                tasks: tasksList
            }

        case actionTypes.MARK_TASK_TRIVIAL:
            tasksList = update(state.tasks, {[action.index]: {isImportant: {$set: false}}}) 
            return {
                ...state,
                tasks: tasksList
            }

        case actionTypes.MARK_TASK_DONE:
            tasksList = update(state.tasks, {[action.index]: {isComplete: {$set: true}}}) 
            return {
                ...state,
                tasks: tasksList
            }

        case actionTypes.MARK_TASK_NOT_DONE:
            tasksList = update(state.tasks, {[action.index]: {isComplete: {$set: false}}})  
            return {
                ...state,
                tasks: tasksList
            }

        case actionTypes.DELETE_TASK:
            tasksList = update(state.tasks, {$splice: [[action.index,1]]})
            return {
                ...state,
                tasks: tasksList
            }

        case actionTypes.MARK_ALL_TASKS_DONE: 
            tasksList = JSON.parse(JSON.stringify(state.tasks))
            tasksList = tasksList.map((todo) => {
                return {
                    task: todo.task,
                    isComplete: true
                }
            })
            return {
                ...state,
                tasks: tasksList
            }

        case actionTypes.DELETE_INCOMPLETE_TASKS: 
            tasksList = JSON.parse(JSON.stringify(state.tasks))
            tasksList = tasksList.filter((todo) => todo.isComplete)
            return {
                ...state,
                tasks: tasksList
            }
        
        case actionTypes.DELETE_COMPLETED_TASKS: 
            tasksList = JSON.parse(JSON.stringify(state.tasks))
            tasksList = tasksList.filter((todo) => !todo.isComplete)    
            return {
                ...state,
                tasks: tasksList
            }
        
        case actionTypes.DELETE_ALL_TASKS: 
            tasksList = update(state.tasks, {$splice: [[0,state.tasks.length]]})
            return {
                ...state,
                tasks: tasksList
            }
        default: return state
    }
}

export default reducer