import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    return <div>TodoList</div>;
}

export default TodoList;
