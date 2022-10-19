import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, deleteTodo, fetchTodos, updateTodo } from "./todoSlice";

function TodoList() {
    const todos = useSelector((state) => state.todoList.todos);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    const handleAdd = () => {
        const newTodo = {
            title,
            status: false,
        };
        dispatch(addNewTodo(newTodo));
        setTitle("");
    };

    const handleEdit = (id) => {
        const updatedTodo = {
            id,
            title: Math.random() + " title",
            status: Math.random() > 0.5,
        };
        dispatch(updateTodo(updatedTodo));
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <>
            <div style={{ padding: 50 }}>
                <h1>TodoList</h1>

                <input
                    type="text"
                    placeholder="Enter todo ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>

                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span
                                style={{ color: todo.status ? "red" : "black" }}
                            >
                                {todo.title}
                            </span>
                            <button onClick={() => handleEdit(todo.id)}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(todo.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;
