import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import "./productlistpage.css";
import { useState, useEffect, useRef } from "react";

function ProductListPage() {
	const [productPageColor, setProductPageColor] = useState(false);
	const [allProducts, setAllProducts] = useState([]);
	const inputSearch = useRef("");

	function handleEnterPress(event) {
		if (event.key === "Enter") {
			console.log(inputSearch.current.value, "enter press here! ");
		}
	}

	useEffect(() => {
		setProductPageColor(true);
	}, []);

	useEffect(() => {
		async function fetchAllProducts() {
			const request = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			};

			const response = await fetch("https://fakestoreapi.com/products/", request);
			const products = await response.json();

			setAllProducts(products);
			console.log("all products", products);
		}
		fetchAllProducts();
	}, []);

	const myArray = allProducts.map((product, index) => {
		return <Product key={index} productProp={product} />;
	});

	return (
		<>
			<Header productPageColor={productPageColor} />
			<div className="product-list-container">
				<Sidebar className="sidebar" />

				<div className="first-grid">



					<div className="inner-search-div">
						<label>
							<input className="search-div" type="text" placeholder="Search" ref={inputSearch} onKeyPress={handleEnterPress} />
						</label>
					</div>



					<div className="inner-product-grid">
					    {myArray}
                    </div>
				</div>



			</div>
			<Footer />
		</>
	);
}

export default ProductListPage;
