import React from "react";
import { Link } from "react-router-dom";

// /orders : Danh sách sản phẩm
// /orders/1 : Chi tiết sản phẩm
function Orders() {
    const orders = [
        { id: 1, name: "Sản phẩm 1" },
        { id: 2, name: "Sản phẩm 2" },
        { id: 3, name: "Sản phẩm 3" },
    ];
    return (
        <>
            <h1>Orders</h1>

            {orders.map((order) => (
                <Link
                    to={`/orders/${order.id}`}
                    key={order.id}
                    className="d-block"
                >
                    {order.name}
                </Link>
            ))}
        </>
    );
}

export default Orders;
