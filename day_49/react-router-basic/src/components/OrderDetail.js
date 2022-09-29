import React from 'react'
import { useParams } from 'react-router-dom'

function OrderDetail() {
    const { orderId } = useParams()
    return (
        <h1>OrderDetail : Id - {orderId}</h1>
    )
}

export default OrderDetail