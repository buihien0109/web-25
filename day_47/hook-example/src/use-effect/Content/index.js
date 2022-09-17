import React, { useEffect, useState } from 'react'

/*
Cú pháp : useEffect(callback, [deps])

1. useEffect(callback)
- Chạy sau mỗi khi component bị re-render

2. useEffect(callback, []) - Giống componentDidMount
- Chạy 1 lần duy nhất khi component mount

3. useEffect(callback, [deps])
- Mỗi khi deps thay đổi về mặt giá trị => chạy lại callback

Điểm chung : Đều được gọi sau lần mount đầu tiên

Clean up :
    - Được chạy 1 lần duy nhất trước khi component bị unmount
    - Chạy sau mỗi khi component bị re-render và trước hàm callback
*/
function Content() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    // 1. useEffect(callback)
    // useEffect(() => {
    //     console.log("useEffect")
    // })

    // 2. useEffect(callback, [])
    // useEffect(() => {
    //     console.log("useEffect []")
    // }, [])

    // 3. useEffect(callback, [deps])
    useEffect(() => {
        console.log("useEffect [deps]")
    }, [count])

    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add count</button>

            <h1>Counter 1 : {count1}</h1>
            <button onClick={() => setCount1(count1 + 1)}>Add count1</button>

            {console.log("render")}
        </>
    )
}

export default Content