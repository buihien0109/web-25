import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants"

// Creator function -> Trả về object gọi trong dispatch function


export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}

export const editTodo = (newTodo) => {
    return {
        type: EDIT_TODO,
        payload: newTodo
    }
}