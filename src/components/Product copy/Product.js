import React from "react";
import "./product.css";
import { useState } from "react"
import heartEmpty from "../../assets/heart-empty.png";
import { useEffect } from "react";

function Product(props) {
	const { productProp } = props;
	const [productData, setProductData] = useState({});

	useEffect( () => {
		async function fetchASingleProduct() {
			const request = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					// 'Authorization': fetchedToken,
				},
			};
	
			const response = await fetch(`https://fakestoreapi.com/products/${productProp.id}`, request);
			const product = await response.json();

			setProductData(productProp);
			console.log("product: ", product); 
		};
		fetchASingleProduct();
	}, []);

	return (
		<>
			<div className="product-container">
				<div className="product-image-div">
					<a href="#">
						<img className="product-photo" src={productData.image} alt="picsum" />
					</a>
					<button className="product-button">
						<img src={heartEmpty} alt="" />
					</button>
				</div>
				<div className="product-description">
					<p className="product-name">{productData.title}</p>
					<p className="product-price">{productData.price}€</p>
				</div>
			</div>
		</>
	);
}

export default Product;
