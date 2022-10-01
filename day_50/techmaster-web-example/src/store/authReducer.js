import { LOGIN, LOGOUT } from "./constants";

// 1. Tạo state
export const initAuth = JSON.parse(localStorage.getItem("auth")) || {};

// 2. Tạo reducer
const authReducer = (state, action) => {

    let newState = {};
    switch (action.type) {
        case LOGIN: {
            newState = { ...action.payload }
            break;
        }
        case LOGOUT: {
            newState = {}
            break;
        }
        default: {
            newState = { ...state };
            break;
        }
    }

    localStorage.setItem("auth", JSON.stringify(newState));
    return newState;
};

export default authReducer;
