import React, { useContext } from 'react'
import { ThemeContext } from '.'

function Paragraph() {
    const { theme, fontSize } = useContext(ThemeContext);

    return (
        <p className={theme} style={{ fontSize: fontSize }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia optio, pariatur vel dolore corrupti molestias iste minima dolor repellat perspiciatis nulla facilis. Distinctio qui ipsam suscipit voluptatem nihil quidem maiores.</p>
    )
}

export default Paragraph