import React from "react";
import { useGetTodosQuery } from "./todo.service";

function TodoList() {
    const { data, isLoading } = useGetTodosQuery();
    console.log({ data, isLoading });

    if (isLoading) {
        return <>Loading ...</>;
    }
    
    return <div>TodoList</div>;
}

export default TodoList;
