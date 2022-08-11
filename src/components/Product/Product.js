import React from "react";
import "./product.css";
import heartEmpty from "../../assets/heart-empty.png";
import heartFull from "../../assets/heart-full.png";

function Product() {
	return (
		<>
			<div className="product-container">
				<div className="product-image">
					<a href="#">
						<img className="product-photo" src="https://picsum.photos/id/237/200/300" alt="picsum" />
					</a>
					<button className="product-button">
						<img src={heartEmpty} alt="" />
					</button>
				</div>
				<div className="product-description">
					<p className="product-name">Product name</p>
					<p className="product-price">125€</p>
				</div>
			</div>
		</>
	);
}

export default Product;
