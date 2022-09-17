import React, { useEffect, useState } from 'react'

function Clock() {
    const [time, setTime] = useState(() => {
        let now = new Date();
        return now.toLocaleTimeString();
    })

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         console.log("inside interval");

    //         let now = new Date();
    //         setTime(now.toLocaleTimeString());
    //     }, 1000)

    //     // Clean up
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [])

    useEffect(() => {

        const handleScroll = () => {
            console.log("scroll")
        }

        window.addEventListener("scroll", handleScroll);

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div>
            <h1>Clock : {time}</h1>

            {console.log("render")}
        </div>

    )
}

export default Clock