import React, { useState } from 'react'

let numbers = [1, 2, 3, 4, 5];

function Counter() {
    // Xử lý phức tạp, cần nhiều thời gian để tính toán
    // const rs = numbers.reduce((a, b) => a + b, 0);
    // console.log(rs);

    const [count, setCount] = useState(0);

    const [total, setTotal] = useState(() => {
        const rs = numbers.reduce((a, b) => a + b, 0);
        console.log(rs);

        return rs;
    });

    // State với kiểu dữ liệu phức tạp (object, array-object);
    const [user, setUser] = useState({
        id: 1,
        name: "Bui Hien",
        email: "hien@gmail.com"
    })

    const [products, setProducts] = useState([
        { id: 1, name: "Ao thun", price: 100000 },
        { id: 2, name: "Quan dai", price: 200000 },
        { id: 3, name: "Quan au", price: 300000 },
    ])

    const addMutil = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    const changeName = () => {
        // REPLACING
        // setUser({ name: "abc@gmail.com" })
        setUser({ ...user, name: "abc@gmail.com" })
    }

    const changePrice = () => {
        let id = 1
        let newPrice = 500000

        let newProducts = products.map(product => {
            if (product.id === id) {
                return { ...product, price: newPrice };
            }
            return product;
        })
        setProducts(newProducts);
    }



    return (
        <>
            <h1>Total : {total}</h1>

            <hr />

            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={addMutil}>Add Mutil</button>

            <hr />

            <h1>User : {JSON.stringify(user)}</h1>

            {console.log("render")}
            <button onClick={changeName}>Change Name</button>

            <hr />
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.id} - {product.name} - {product.price}</li>
                ))}
            </ul>

            <button onClick={changePrice}>Change Price</button>
        </>
    )
}

export default Counter