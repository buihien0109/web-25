import React, { useCallback, useMemo, useState } from 'react'
import PostItem from './PostItem';

function Post() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [products, setProducts] = useState([
        { id: 1, name: "Ao thun", price: 100000 },
        { id: 2, name: "Quan dai", price: 200000 },
        { id: 3, name: "Quan au", price: 300000 },
    ])

    // function : object : reference
    // const handleClick = () => {
    //     console.log("Handle click")
    // }

    // useCallback : Tránh tạo lại function nếu không có sự thay đổi về deps
    // useCallback : const func = useCallback(callbackFunction, [deps])
    const handleClick = useCallback(() => {
        console.log("Handle click")
    }, [count])


    // useMemo : Tránh tính toán function nếu không có sự thay đổi về deps
    // useMemo : const value = useMemo(callbackFunction(), [deps])
    const total = useMemo(() => {
        let rs = products.reduce((total, product) => total + product.price, 0);
        console.log(rs);

        return rs;
    }, [products])

    // Thêm sản phẩm mới
    const addProduct = () => {
        setProducts([...products, {
            id: products.length + 1,
            title: "New product " + Math.random(),
            price: 500000
        }])
    }


    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>

            <h1>Counter1 : {count1}</h1>
            <button onClick={() => setCount1(count1 + 1)}>Add</button>

            <button onClick={addProduct}>Add Product</button>

            <hr />

            <PostItem handleClick={handleClick} />
        </>
    )
}

export default Post