import React, { useReducer } from 'react'
import Context from './Context'
import cartReducer, { initCart } from 'store/cartReducer';
import { courses, topics } from '../data/course-data';
import authReducer, { initAuth } from 'store/authReducer';
import userReducer, { initUsers } from 'store/userReducer';

function Provider({ children }) {
    const [products, dispatchCart] = useReducer(cartReducer, initCart);
    const [auth, dispatchAuth] = useReducer(authReducer, initAuth);
    const [users, dispatchUser] = useReducer(userReducer, initUsers);

    const value = {
        courses,
        topics,
        users,
        dispatchUser,
        products,
        dispatchCart,
        auth,
        dispatchAuth
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider