import { ADD_COUNT, ADD_PRODUCT, DELETE_PRODUCT, LOGIN, LOGOUT, SUBTRACT_COUNT } from "./constants"

// Shopping cart
export const addCount = (id) => {
    return {
        type: ADD_COUNT,
        payload: { id }
    }
}

export const subtractCount = (id) => {
    return {
        type: SUBTRACT_COUNT,
        payload: { id }
    }
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: { id }
    }
}

export const addProduct = (item) => {
    return {
        type: ADD_PRODUCT,
        payload: item
    }
}

// Auth
export const login = (data) => {
    return {
        type: LOGIN,
        payload: data // thông tin của user login thành công
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}