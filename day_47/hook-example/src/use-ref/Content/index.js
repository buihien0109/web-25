import React, { useState, useRef, useEffect } from "react";
import videotittok from "./video.mp4";

const colors = ["red", "blue", "green", "yellow"];

const randomColor = (currentColor) => {
    let newColor = currentColor;

    while (newColor == currentColor) {
        let index = Math.floor(Math.random() * colors.length);
        newColor = colors[index]
    }

    return newColor;
}

function Content() {
    const [value, setValue] = useState("");
    const [time, setTime] = useState(100);
    const [color, setColor] = useState("red");

    const inputRef = useRef();
    const countRef = useRef(0);
    const videoRef = useRef();
    const timeRef = useRef();
    const colorRef = useRef();

    countRef.current++;

    useEffect(() => {
        inputRef.current.focus();
        // countRef.current++; // 1
    })

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }

    const handleStart = () => {
        if (!timeRef.current) {
            timeRef.current = setInterval(() => {
                setTime(time => time - 1);
            }, 1000)
        }
    }

    const handleStop = () => {
        clearInterval(timeRef.current);
        timeRef.current = 0;
    }

    const handleChangeColor = () => {
        let newColor = randomColor(colorRef.current);
        console.log(newColor);

        colorRef.current = newColor;

        setColor(newColor);
    }

    return (
        <div>
            <div
                onClick={handleChangeColor}
                style={{ width: 200, height: 200, backgroundColor: color }}
            ></div>

            <hr />

            <h1>Đồng hồ bấm giờ : {time}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

            <hr />

            <h1>Render : {countRef.current}</h1>
            <input
                ref={inputRef}
                placeholder="Enter name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <hr />

            <video
                ref={videoRef}
                src={videotittok}
                width={300}
            />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>

            {/* {console.log("render")} */}
        </div>
    );
}

export default Content;
