import React, { useReducer } from 'react'
import Context from './Context'
import reducer, { initState } from '../store/reducer'

function Provider({ children }) {
    const [products, dispatch] = useReducer(reducer, initState);

    const value = {
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