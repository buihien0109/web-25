import { useContext, useState, useRef } from "react";
import Context from "../context/Context";
import { addTodo, deleteTodo, editTodo } from "../store/actions";

function Todo() {
    const { todos, dispatch } = useContext(Context);
    const [value, setValue] = useState("");

    const inputRef = useRef();

    // Thêm công việc
    const handleAddTodo = () => {
        if (value == "") {
            alert("Tiêu đề không được để trống");
            return;
        }

        let newTodo = {
            id: todos.length + 1,
            title: value,
            status: false
        }

        dispatch(addTodo(newTodo))

        setValue("");
        inputRef.current.focus();
    }

    // Xóa công việc
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    // Sửa công việc
    const handleEditTodo = (id) => {
        // Lấy ra công việc hiện tại
        let editedTodo = todos.find(todo => todo.id === id);

        // Hiển thị popup cập nhật công việc
        let title = window.prompt("Cập nhật công việc", editedTodo.title)
        console.log(title)

        // Kiểm tra title
        if (title === null) return;
        if (title === "") {
            alert("Tiêu đề không được để trống");
            return;
        }

        let payload = {
            id,
            title
        }
        dispatch(editTodo(payload))
    }

    return (
        <div>
            <h1>TodoList</h1>

            <input
                ref={inputRef}
                placeholder="Enter todo ..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {todos.length > 0 &&
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span
                                style={{ color: todo.status ? "red" : "black" }}
                            >
                                {todo.title}
                            </span>
                            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}

                {todos.length == 0 && (
                    <p>Không có công việc nào trong danh sách</p>
                )}
            </ul>
        </div>
    );
}

export default Todo