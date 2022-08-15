import React from 'react'
import { useState } from "react";
import "./quantitybutton.css"

function QuantityButton() {
    const [quantity, setQuantity] = useState(1);

    function handleDecrement() {
        if (quantity === 1) {
            return;
        }
        setQuantity(quantity - 1);
    }

    function handleIncrement() {
        if (quantity === 10) {
            return;
        }
        setQuantity(quantity + 1);
    }

    return (
        <div className='product-detail_quantity'>
            <button onClick={handleDecrement} className='input-btn'>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement} className='input-btn'>+</button>
        </div>
    )
}

export default QuantityButton