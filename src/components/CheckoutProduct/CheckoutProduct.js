import React from "react";
import QuantityButton from "../../components/QuantityButton/QuantityButton";
import "./checkoutproduct.css";

function CheckoutProduct(props) {
	const { handleRemove, product, index } = props;

		return (
			<>
				<div className="main-product-container">
					<div className="image-div">
						<a href="#">
							<img src={product.image} alt="product" />
						</a>
					</div>

					<div className="details-div">
						<p className="details-div_category">{product.category}</p>

						<h1 className="details-div_title">{product.title}</h1>
					</div>

					<div className="quantity-div">
						<QuantityButton />
					</div>

					<div className="price-div">{product.price} €</div>

					<div className="remove-div">
						<button className="remove-button" onClick={() => handleRemove(product.id)}>
							X
						</button>
					</div>
				</div>
			</>
		);
}

export default CheckoutProduct;
