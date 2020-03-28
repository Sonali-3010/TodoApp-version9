import * as actionTypes from './actionTypes'

export const addTask = () => {
    return {
        type: actionTypes.ADD_TASK,
        task: null
    }
}

export const markImportant = () => {
    return {
        type: actionTypes.MARK_TASK_IMPORTANT,
        index: null
    }
}

export const markTrivial = () => {
    return {
        type: actionTypes.MARK_TASK_TRIVIAL,
        index: null
    }
}

export const markDone = () => {
    return {
        type: actionTypes.MARK_TASK_DONE,
        index: null
    }
}
export const markNotDone = () => {
    return {
        type: actionTypes.MARK_TASK_NOT_DONE,
        index: null
    }
}
export const deleteTask = () => {
    return {
        type: actionTypes.DELETE_TASK,
        index: null
    }
}
export const markAllDone = () => {
    return {
        type: actionTypes.MARK_ALL_TASKS_DONE
    }
}
export const deleteIncomplete = () => {
    return {
        type: actionTypes.DELETE_INCOMPLETE_TASKS
    }
}
export const deleteCompleted = () => {
    return {
        type: actionTypes.DELETE_COMPLETED_TASKS
    }
}
export const deleteAll = () => {
    return {
        type: actionTypes.DELETE_ALL_TASKS
    }
}
