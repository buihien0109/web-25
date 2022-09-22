import React from 'react'

function Content({ children }) {
    console.log(children)
    return (
        <div>{children}</div>
    )
}

export default Content