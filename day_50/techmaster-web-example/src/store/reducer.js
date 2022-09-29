import { ADD_COUNT, SUBTRACT_COUNT, DELETE_PRODUCT } from "./constants";
import { cartItems } from "../data/shoppingcart-data";

// 1. Tạo state
export const initState = [...cartItems];

// 2. Tạo reducer
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_COUNT: {
            const { id } = action.payload;
            const newState = state.map(product => {
                if (product.id == id) {
                    return { ...product, count: product.count + 1 }
                }
                return product
            })
            return newState;
        }
        case SUBTRACT_COUNT: {
            const { id } = action.payload;
            const newState = state.map(product => {
                if (product.id == id) {
                    return { ...product, count: product.count - 1 }
                }
                return product
            })
            return newState;
        }
        case DELETE_PRODUCT: {
            const { id } = action.payload;
            return state.filter(product => product.id !== id);
        }
        default: {
            return state;
        }
    }
}

export default reducer;