import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subtractCount } from "../../redux/actions/counterAction";

function Counter() {
    // Lấy ra dữ liệu từ state
    const { counter } = useSelector((state) => state);
    console.log(counter);

    // Dùng để dispatch action
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addCount());
    };

    const handleSubtract = () => {
        dispatch(subtractCount());
    };

    return (
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
        </>
    );
}

export default Counter;
