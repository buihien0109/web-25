import { ADD_COUNT, ADD_ORDER, ADD_PRODUCT, CLEAR_CART, DELETE_PRODUCT, LOGIN, LOGOUT, SUBTRACT_COUNT, SYNC_AUTH, UPDATE_PROFILE } from "./constants"

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

export const clearCart = () => {
    return {
        type: CLEAR_CART
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

export const syncAuth = (data) => {
    return {
        type: SYNC_AUTH,
        payload: data // thông tin của user cần đồng bộ
    }
}

// User
export const updateProfile = (data) => {
    return {
        type: UPDATE_PROFILE,
        payload: data // thông tin của user cần cập nhật
    }
}

// Order
export const addOrder = (data) => {
    return {
        type: ADD_ORDER,
        payload: data // thông tin của đơn hàng
    }
}