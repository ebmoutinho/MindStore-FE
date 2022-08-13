import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Header from '../../components/Header/Header'
import arrowLeft from '../../assets/arrow-left.png'
import starFull from '../../assets/star-full.png'
import starEmpty from '../../assets/star-empty.png'
import starHalf from '../../assets/star-half.png'
import "./productDetail.css"

function ProductDetailPage() {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [productData, setProductData] = useState({});
    const [productRating, setProductRating] = useState({});

    useEffect(() => {
        async function fetchById() {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const json = await response.json();
            setProductData(json);
            setProductRating(json.rating);
        }
        fetchById();
    }, []);

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
                <img src={productData.image} alt="" className='product-detail_image' />


                <div className="product-detail_body">
                    <Link to="/productlistpage" className='product-detail_link'>
                        <img src={arrowLeft} alt="" />
                        <span>&nbsp; Back to Product List</span>
                    </Link>
                    
                    <p className='product-detail_category'>{productData.category}</p>
                    <h1 className='product-detail_title'>{productData.title}</h1>

                    <div className="product-detail_rating">
                        <img src={starFull} alt="" className='rating-star' />
                        <img src={starFull} alt="" className='rating-star' />
                        <img src={starFull} alt="" className='rating-star' />
                        <img src={starHalf} alt="" className='rating-star' />
                        <img src={starEmpty} alt="" className='rating-star' />
                        <span>&nbsp; &nbsp; {productRating.rate} ({productRating.count} reviews)</span>
                    </div>

                    <p className='product-detail_description'>{productData.description}</p>

                    <div className="product-detail_cart-options">
                        <div className='product-detail_quantity'>
                            <button onClick={handleDecrement} className='input-btn'>-</button>
                            <input type="number" value={quantity} readOnly />
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