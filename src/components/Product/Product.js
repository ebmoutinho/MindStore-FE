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
			const response = await fetch(`/api/v1/users/products/${productProp.id}`);
			const json = await response.json();

			setProductData(json);
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
