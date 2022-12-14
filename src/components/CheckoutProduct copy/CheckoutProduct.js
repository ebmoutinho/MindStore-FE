import React, { useEffect } from "react";
// import productImage from "../../assets/product-image.png";
import { useState } from "react";
import QuantityButton from "../QuantityButton/QuantityButton";
import "./checkoutproduct.css";

function CheckoutProduct(props) {
	const { handleRemove, product, productList, index } = props;

		return (
			<>
				<div className="main-product-container">
					<div className="image-div">
						<a href="#">
							<img src={product.image} alt="product" />
						</a>
					</div>

					<div className="details-div">
						<p>{product.category}</p>

						<p>{product.title}</p>
					</div>

					<div className="quantity-div">
						<QuantityButton />
					</div>

					<div className="price-div">{product.price} €</div>

					<div className="remove-div">
						<button className="remove-button" onClick={() => handleRemove(index)}>
							X
						</button>
					</div>
				</div>
			</>
		);
	

	//   return (
	//     <>
	//     <div className="main-product-container">

	//         <div className="image-div">
	//             <a href="#">
	//                 <img src={productImage} alt="product" />
	//             </a>
	//         </div>

	//         <div className="details-div">
	//             <p>CATEGORY NAME</p>
	//             <p>Product Title Here bla bla bla</p>
	//         </div>

	//         <div className="quantity-div">
	//             <QuantityButton />
	//         </div>

	//         <div className="price-div">
	//             123 €
	//         </div>

	//         <div className="remove-div">
	//             <button className="remove-button" onClick={handleRemove}>X</button>
	//         </div>

	//     </div>

	//     </>
	//   );
}

export default CheckoutProduct;
