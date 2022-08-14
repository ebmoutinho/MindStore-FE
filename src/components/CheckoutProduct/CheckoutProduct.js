import React from 'react'
import productImage from "../../assets/product-image.png";
import QuantityButton from "../../components/QuantityButton/QuantityButton";
import "./checkoutproduct.css";
import { useState } from "react";

function CheckoutProduct(props) {
    const { handleRemove } = props;
  
//     if(handleRemove === true) {
  return (
    <>
    <div className="main-product-container">


        <div className="image-div">
            <a href="#">
                <img src={productImage} alt="product" />
            </a>
        </div>

        <div className="details-div">
            <p>CATEGORY NAME</p>
            <p>Product Title Here bla bla bla</p>
        </div>

        <div className="quantity-div">
            <QuantityButton />
        </div>
        
        <div className="price-div">
            123 €
        </div>

        <div className="remove-div">
            <button className="remove-button" onClick={handleRemove}>X</button>
        </div>

    </div>

    </>
  );
};

export default CheckoutProduct