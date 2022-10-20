import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "../features/TodoList/todo.service";
import todoReducer from "../features/TodoList/todo.slice";

const store = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        todoList: todoReducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware)
})

export default store