import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import EmptyCheckoutProduct from "../../components/EmptyCheckoutProduct/EmptyCheckoutProduct";
import leftArrow from "../../assets/arrow-left.png";
import "./cart.css";

function CartPage() {
	const { id } = useParams();
	const [cartColor, setCartColor] = useState(false);
	const [checkoutClicked, setCheckoutClicked] = useState(false);
	const [discountClicked, setDiscountClicked] = useState(false);
	const [isCartEmpty, setCartEmpty] = useState(false);
	const [allProducts, setAllProducts] = useState([]);
	const fullName = useRef("");
	const phoneNumber = useRef("");
	const email = useRef("");
	const address = useRef("");
	const discountCode = useRef("");

	useEffect(() => {
		setCartColor(true);

		async function fetchAllProducts() {
			const request = {
				method: "GET",
				headers: {

					"Content-Type": "application/json",
					"Authorization": localStorage.getItem("token")
				},
			};

			const response = await fetch(`/api/v1/users/shoppingcart/${id}`, request);
			const products = await response.json();
			setAllProducts(products);
		}
		fetchAllProducts();
	}, []);


	const productArray = allProducts.map((product, index) => {
		return (
			//assumir que estava a chamar a funcao, estava a executar cada x que checkout product era chamado
			<CheckoutProduct key={index} handleRemove={() => { handleRemove(product.id) }} product={product} productList={allProducts} index={index} />
		);
	});

	function handleCheckout(event) {
		event.preventDefault();
		setCheckoutClicked(true);
		console.log("checkout clicked");
	}

	function handleDiscount(event) {
		event.preventDefault();
		setDiscountClicked(true);
		console.log("discount clicked");
	}


	async function handleRemove(productId) {

		const request = {
			method: "PATCH",
			headers: {

				"Content-Type": "application/json",
				"Authorization": localStorage.getItem("token")
			},
		};

		const response = await fetch(`/api/v1/users/removefromcart?userid=${id}&productid=${productId}`, request);
		console.log(response);
		const json = await response.json();
		console.log(json);

		// fazer set de acordo com restante list

		const oldProductsArray = [...allProducts];
		const newProductsArray = oldProductsArray; //CRIAR ESTA VARIÁVEL INTERMÉDIA
		// newProductsArray.splice(index, 1);
		// setAllProducts(newProductsArray);
		// console.log("newProductsArray ", newProductsArray.length, newProductsArray)
		// console.log("product removed");
		// setRemove(true); //NAO POSSO TER ISTO

		if (newProductsArray.length === 0) {
			setCartEmpty(true);
		}
	};

	return (
		<>
			<Header cartColor={cartColor} />
			<div className="cart-container">
				<div className="main-container">
					<div className="main-header">
						<h2>Shopping Cart</h2>
					</div>
					<div className="main-products">
						{isCartEmpty ?
							// <p>you fucking car is empty</p> 
							<EmptyCheckoutProduct />
							:
							productArray
						}
						{/* {productArray} */}

					</div>
					<div className="main-footer">
						<a href="/productlistpage">
							<img src={leftArrow} alt="" />
							<span>&nbsp; Back to Product List</span>
						</a>
					</div>
				</div>

				<div className="secondary-container">

					<div className="payment-container">

						<div className="payment-header">
							<h2>Summary</h2>
							<div className="payment-header-info">
								<p>Total:</p>
								<p>369€</p>

							</div>
						</div>

						<div>
							<form className="payment-form-cart" onSubmit={handleCheckout}>
								<label className="payment-label-cart" htmlFor="full-name">
									<input type="text" name="full-name" ref={fullName} placeholder="Full Name" />
								</label>
								<label className="payment-label-cart" htmlFor="phone-number">
									<input type="text" name="phone-number" ref={phoneNumber} placeholder="Phone Number" />
								</label>
								<label className="payment-label-cart" htmlFor="email">
									<input type="text" name="email" ref={email} placeholder="Email" />
								</label>
								<label className="payment-label-cart" htmlFor="address">
									<input type="text" name="address" ref={address} placeholder="Address" />
								</label>
								<button className="payment-button-cart" type="submit">Checkout</button>
							</form>
						</div>

					</div>

					<div className="discount-container">
						<form className="discount-container-form" onSubmit={handleDiscount}>
							<label className="discount-label-cart" htmlFor="discount-code">
								<input type="text" name="discount-code" ref={discountCode} placeholder="Enter your discount code" />
							</label>
							<button className="payment-submit-button" type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default CartPage;
