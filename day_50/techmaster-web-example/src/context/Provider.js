import React, { useReducer } from 'react'
import Context from './Context'
import reducer, { initState } from '../store/reducer';
import { courses, topics } from '../data/course-data';
import { users } from '../data/user-data';

function Provider({ children }) {
    const [products, dispatch] = useReducer(reducer, initState);

    const value = {
        courses,
        topics,
        users,
        products,
        dispatch
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider