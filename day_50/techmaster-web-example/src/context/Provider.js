import { useReducer } from 'react';
import authReducer, { initAuth } from 'store/authReducer';
import cartReducer, { initCart } from 'store/cartReducer';
import orderReducer, { initOrder } from 'store/orderReducer';
import userReducer, { initUsers } from 'store/userReducer';
import { courses, topics } from '../data/course-data';
import Context from './Context';

function Provider({ children }) {
    const [products, dispatchCart] = useReducer(cartReducer, initCart);
    const [auth, dispatchAuth] = useReducer(authReducer, initAuth);
    const [users, dispatchUser] = useReducer(userReducer, initUsers);
    const [orders, dispatchOrder] = useReducer(orderReducer, initOrder);

    const value = {
        courses,
        topics,
        users,
        dispatchUser,
        products,
        dispatchCart,
        auth,
        dispatchAuth,
        orders,
        dispatchOrder
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider