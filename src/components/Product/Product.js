import React from "react";
import "./product.css";

function Product() {
	return (
		<>
			<div className="product-container">
				<div className="product-image">
					<a href="#">
						<img src="https://picsum.photos/id/237/200/300" alt="picsum" />
					</a>
					<button>likaaa bausssss</button>
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
