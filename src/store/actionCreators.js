import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM
} from './actionTypes.js'

const getInputChangeAction = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
}

const getAddTodoItemAction = () => {
    return {
        type: ADD_TODO_ITEM
    }
}

const getDeleteTodoItemAction = (index) => {
    console.log('1')
    console.log(index)
    return {
        type: DELETE_TODO_ITEM,
        index
    }
}

export { getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction }
