import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./productDetailPage.css"
import Header from '../../components/Header/Header'
import productImg from '../../assets/productImg.jpg'
import arrowLeft from '../../assets/arrow-left.png'
import starFull from '../../assets/star-full.png'
import starEmpty from '../../assets/star-empty.png'
import starHalf from '../../assets/star-half.png'


function ProductDetailPage() {
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
        <div>
            <Header />

            <div className="product-detail_container">
                <div className="product-detail_image-container">
                    <img src={productImg} alt="" className='product-detail_image' />
                </div>

                <div className="product-detail_body">
                    <Link to="/productlistpage" className='product-detail_link'>
                        <img src={arrowLeft} alt="" />
                        <span>&nbsp; Back to Product List</span>
                    </Link>
                    <p className='product-detail_category'>CATEGORY NAME</p>
                    <h1 className='product-detail_title'>
                        PRODUCT TITLE ALL FANCY AND THINGS LIKE
                        THAT WOOOOOO
                    </h1>
                    <div className="product-detail_rating">
                        <img src={starFull} alt="" className='rating-star' />
                        <img src={starFull} alt="" className='rating-star' />
                        <img src={starFull} alt="" className='rating-star' />
                        <img src={starHalf} alt="" className='rating-star' />
                        <img src={starEmpty} alt="" className='rating-star' />
                        <span>&nbsp; &nbsp; 3.5 (328 reviews)</span>
                    </div>

                    <p className='product-detail_description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id injjjj turpis lacus, rhoncus blandit. Quis amet, bibendum commodo. Molestie suscipit elementum id urna tempus leo solliaaaaaeros. Non sed neque tellus a aa
                    </p>

                    <div className="product-detail_cart-options">
                        <div className='product-detail_quantity'>
                            <button onClick={handleDecrement} className='input-btn'>-</button>
                            <input type="number" value={quantity} readOnly/>
                            <button onClick={handleIncrement} className='input-btn'>+</button>
                        </div>

                        <div>
                            <Link to="/cart" className="product-detail_cart-button">Add to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage;