import { addCount, subtractCount } from "./actions/counter.js";
import { addTodo } from "./actions/todo.js";
import store from "./store.js";

// console.log(store);
// console.log(store.getState());

// store.dispatch(addCount());

// store.subscribe(() => {
//     console.log("subscribe : ", store.getState());
// })

const counterEl = document.getElementById("counter");
const btnAdd = document.getElementById("btn-add");
const btnSubtract = document.getElementById("btn-subtract");

btnAdd.addEventListener("click", () => {
    store.dispatch(addCount());
})

btnSubtract.addEventListener("click", () => {
    store.dispatch(subtractCount());
})

// ==========================

const todoInputEl = document.getElementById("todo-input");
const todoListEl = document.getElementById("todo-list");

todoInputEl.addEventListener("keydown", e => {
    if (e.keyCode == 13) {
        let title = e.target.value;

        let newTodo = {
            id: store.getState().todos.length + 1,
            title
        }

        store.dispatch(addTodo(newTodo));
        todoInputEl.value = "";
    }
})

const renderTodo = arr => {
    todoListEl.innerHTML = "";

    let html = "";
    arr.forEach(e => {
        html += `<li>${e.title}</li>`
    });

    todoListEl.innerHTML = html;
}

renderTodo(store.getState().todos);


store.subscribe(() => {
    console.log("subscribe");

    const { counter, todos } = store.getState();
    counterEl.innerText = counter;
    renderTodo(todos);
})
