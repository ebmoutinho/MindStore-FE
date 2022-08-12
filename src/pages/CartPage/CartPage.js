import React from 'react'
import { useState, useEffect } from "react"
import Header from '../../components/Header/Header';

function CartPage() {
    const [cartColor, setCartColor] = useState(false);

    useEffect( () => {
		setCartColor(true);
	}, []);


  return (
    <>
        <Header cartColor={cartColor} />
    </>
  )
}

export default CartPage