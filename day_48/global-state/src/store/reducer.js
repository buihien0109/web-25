import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

// 1. initial state
export const initialState = [
    { id: 1, title: "Đi chơi", status: false },
    { id: 2, title: "Làm bài tập", status: true },
    { id: 3, title: "Đá bóng", status: false },
];

// 3. reducer
const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }
        case DELETE_TODO: {
            const { id } = action.payload;
            return state.filter(todo => todo.id != id);
        }
        case EDIT_TODO: {
            const { id, title } = action.payload;
            const newState = state.map(todo => {
                if (todo.id === id) {
                    return { ...todo, title }
                }
                return todo;
            })

            return newState;
        }
        default: {
            return state;
        }
    }
};

export default reducer;