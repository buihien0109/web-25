import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: "",
    todos: []
}

const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {}
});

export const { } = todoSlice.actions

export default todoSlice.reducer
