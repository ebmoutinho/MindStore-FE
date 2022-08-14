import React from "react";
import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import "./cart.css";

function CartPage() {
	const [cartColor, setCartColor] = useState(false);
	const [checkoutClicked, setCheckoutClicked] = useState(false);
	const [discountClicked, setDiscountClicked] = useState(false);
	const fullName = useRef("");
	const phoneNumber = useRef("");
	const email = useRef("");
	const address = useRef("");
	const discountCode = useRef("");
	const [remove, setRemove] = useState(false);

	useEffect(() => {
		setCartColor(true);
	}, []);

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
	function handleRemove() {
        setRemove(true);
        console.log("product removed");
    }

	return (
		<>
			<Header cartColor={cartColor} />
			<div className="cart-container">
				<div className="main-container">
					<div className="main-header">
						<h2>Shopping Cart</h2>
					</div>
					<div className="main-products">
					{/* <div className={remove === true ? "main-products" : "main-products-removed"}> */}
						<CheckoutProduct handleRemove={handleRemove} />
						<CheckoutProduct handleRemove={handleRemove} />
						<CheckoutProduct handleRemove={handleRemove} />
					</div>
					<div className="main-footer">
						<a href="/productlistpage">Back to Product List</a>
					</div>
				</div>

				<div className="secondary-container">

					<div className="payment-container">

						<div className="payment-header">
							<h4>Summary</h4>
							<p>Total: 369€</p>
						</div>

						<div>
							<form className="payment-form" onSubmit={handleCheckout}>
								<label htmlFor="full-name">
									<input type="text" name="full-name" ref={fullName} placeholder="Full Name" />
								</label>
								<label htmlFor="phone-number">
									<input type="text" name="phone-number" ref={phoneNumber} placeholder="Phone Number" />
								</label>
								<label htmlFor="email">
									<input type="text" name="email" ref={email} placeholder="Email" />
								</label>
								<label htmlFor="address">
									<input type="text" name="address" ref={address} placeholder="Address" />
								</label>
								<button type="submit">Checkout</button>
							</form>
						</div>

					</div>

					<div className="discount-container">
						<form onSubmit={handleDiscount}>
							<label htmlFor="discount-code">
								<input type="text" name="discount-code" ref={discountCode} placeholder="Enter your discount code" />
							</label>
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default CartPage;
