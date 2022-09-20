import React, { useState } from 'react'
import ColorBox from './ColorBox';
import Shop from './Shop';
import useToggle from './useToggle';

function Content() {
    // const [isShow, setIsShow] = useState(true);

    // const handleToggle = () => {
    //     setIsShow(!isShow);
    // }

    const [isShow, handleToggle] = useToggle(true);

    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>

            {isShow && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia optio, pariatur vel dolore corrupti molestias iste minima dolor repellat perspiciatis nulla facilis. Distinctio qui ipsam suscipit voluptatem nihil quidem maiores.</p>}

            <Shop />

            <ColorBox />
        </div>
    )
}

export default Content