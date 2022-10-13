import counterReducer from "./counterReducer.js";

const { combineReducers } = window.Redux;

const rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer