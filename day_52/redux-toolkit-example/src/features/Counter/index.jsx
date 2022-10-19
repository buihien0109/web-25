import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTwo, decrement, getCounter, increment, getTodosActive } from "./counterSlice";

function Counter() {
    const counter = useSelector(getCounter);
    const dispatch = useDispatch();

    console.log(useSelector(getTodosActive));

    const handleAdd = () => {
        dispatch(increment());
    };

    const handleSubtract = () => {
        dispatch(decrement());
    };

    const handleAddTwo = () => {
        dispatch(addTwo(10));
    };
    return (
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>

            <button onClick={handleAddTwo}>Add 2</button>
        </>
    );
}

export default Counter;
