import React, { useState } from 'react'
import useToggle from './useToggle';

function Shop() {
    // const [isShow, setIsShow] = useState(true);

    // const handleToggle = () => {
    //     setIsShow(!isShow);
    // }

    const [isShow, handleToggle] = useToggle(true);

    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>

            {isShow && <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia optio, pariatur vel dolore corrupti molestias iste minima dolor repellat perspiciatis nulla facilis. Distinctio qui ipsam suscipit voluptatem nihil quidem maiores.</h1>}
        </div>
    )
}

export default Shop