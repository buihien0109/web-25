import { createSlice } from '@reduxjs/toolkit';
import { todoApi } from './todo.service';

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(todoApi.endpoints.getTodos.matchFulfilled, (state, action) => {
            state.todos = action.payload
        });
        builder.addMatcher(todoApi.endpoints.createTodo.matchFulfilled, (state, action) => {
            state.todos.push(action.payload)
        });
        builder.addMatcher(todoApi.endpoints.updateTodo.matchFulfilled, (state, action) => {
            let index = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos[index] = action.payload
        });
        builder.addMatcher(todoApi.endpoints.deleteTodo.matchFulfilled, (state, action) => {
            let index = state.todos.findIndex(todo => todo.id === action.payload);
            state.todos.splice(index, 1);
        });
    }
});

export const { } = todoSlice.actions

export default todoSlice.reducer
