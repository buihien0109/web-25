import React, { useReducer } from 'react'
import Context from './Context'
import cartReducer, { initCart } from 'store/cartReducer';
import { courses, topics } from '../data/course-data';
import { users } from '../data/user-data';
import authReducer, { initAuth } from 'store/authReducer';

function Provider({ children }) {
    const [products, dispatchCart] = useReducer(cartReducer, initCart);
    const [auth, dispatchAuth] = useReducer(authReducer, initAuth);

    const value = {
        courses,
        topics,
        users,
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