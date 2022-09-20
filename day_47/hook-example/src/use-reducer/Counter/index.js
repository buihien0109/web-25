import React, { useReducer, useState } from 'react'

/*
1. initial state
2. action type
3. reducer
*/

// 1. initial state
const initialState = 0;

// 2. action type
const ADD_COUNT = "ADD_COUNT";
const SUBTRACT_COUNT = "SUBTRACT_COUNT";

// 3. Tạo reducer -> trả về state mới
// state : state hiện tại
// action : object chứa thông tin để thay đổi state
// - type : Kiểu hành động
// - payload : Dữ liệu gửi để xử lý state
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_COUNT: {
            return state + action.value;
        }
        case SUBTRACT_COUNT: {
            return state - action.value;
        }
        default: {
            // return state;
            throw new Error("Action invalid");
        }
    }
}

function Counter() {
    // count : state hiện tại
    // dispatch : là function gửi thông tin về action (object) cho reducer để thay đổi state
    const [count, dispatch] = useReducer(reducer, initialState);

    const handleAdd = () => {
        dispatch({ type: ADD_COUNT, value: 5 })
    }

    const handleSubtract = () => {
        dispatch({ type: SUBTRACT_COUNT, value: 3 })
    }

    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={handleAdd}>Cộng</button>
            <button onClick={handleSubtract}>Trừ</button>
        </>
    )
}

export default Counter