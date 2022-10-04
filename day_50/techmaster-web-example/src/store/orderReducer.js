/* 
Cấu trúc của order
const orders = [
    {
        id : 1
        userId : 1,
        items : [
            {
                id : 1,
                title : "Sản phẩm 1",
                image : "",
                price : 200000
                count : 1
            }
        ],
        createdAt : 22-01-2022,
        paymentMethod : "Thanh toán trực tiếp"
        total : 1000000
    },
    {
        id : 2
        userId : 1,
        items : [
            {
                id : 1,
                title : "Sản phẩm 1",
                image : "",
                price : 200000
                count : 1
            },
            {
                id : 2,
                title : "Sản phẩm 2",
                image : "",
                price : 500000
                count : 3
            }
        ],
        createdAt : 24-01-2022, (new Date())
        paymentMethod : "Chuyển khoản"
        total : 2000000
    }
]
*/

import { ADD_ORDER } from "./constants";

// 1. Tạo state
export const initOrder = JSON.parse(localStorage.getItem("orders")) || [];

// 2. Tạo reducer
const orderReducer = (state, action) => {
    console.log({ state, action })

    let newState = [];
    switch (action.type) {
        case ADD_ORDER: {
            newState = [...state, action.payload]
            break;
        }

        default: {
            newState = [...state];
            break;
        }
    }

    localStorage.setItem("orders", JSON.stringify(newState));
    return newState;
};

export default orderReducer;
