import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import searchBar from "../../assets/search-bar.png";
import "./productlistpage.css";

function ProductListPage() {
	const [productPageColor, setProductPageColor] = useState(false);
	const [allProducts, setAllProducts] = useState([]);
	const inputSearch = useRef("");

	function handleEnterPress(event) {
		if (event.key === "Enter") {
			console.log(inputSearch.current.value, "enter press here! ");
		}
	}

	function handleIconClick() {
		console.log(inputSearch.current.value, "icon click here! ");
	}

	async function handleSortEvent(direction) {
		const response = await fetch(`/api/v1/users/products?direction=${direction}&field=title&page=1&pagesize=9`)
		const json = await response.json();
		setAllProducts([]);

		setAllProducts(json);
	}

	useEffect(() => {
		setProductPageColor(true);

		async function fetchAllProducts() {
			const response = await fetch("/api/v1/users/products?direction=DESC&field=title&page=1&pagesize=9");
			const products = await response.json();
			setAllProducts(products);

			console.log("all products", products);
		}
		fetchAllProducts();
	}, []);


	// useEffect(() => {
	// 	setProductPageColor(true);

	// 	async function fetchAllProducts() {
	// 		// const response = await fetch(`/api/v1/users/products?direction=${direction}&field=${field}&page=${page}&pagesize=${pageSize}`);
	// 		const response = await fetch(`/api/v1/users/products?direction=ASC&field=title&page=1&pagesize=9`);
	// 		const products = await response.json();
	// 		console.log(products)

	// 		setAllProducts(products);

	// 		console.log("all products from sort change", products);
	// 	}
	// 	fetchAllProducts();
	// }, [wasFilteredOrSorted]);














	const myArray = allProducts.map((product, index) => {
		return (
			<Link key={index} to={`/productlistpage/${product.id}`}>
				<Product key={product.id} productProp={product} /> o react precisa de saber cada copia individual para fazer
			</Link>
		)
	});

	return (
		<>
			<Header productPageColor={productPageColor} />

			<div className="product-list-container">

				<Sidebar className="sidebar" handleSortEvent={handleSortEvent} />


				<div className="first-grid">
					<div className="inner-search-div">
						<label className="label-flex">
							<input className="search-div" type="text" placeholder="Search" ref={inputSearch} onKeyPress={handleEnterPress} />
							<a href="#" onClick={handleIconClick}>
								<img className="search-icon" src={searchBar} alt="" />
							</a>
						</label>
						<div className="blank-div"></div>
						<div className="blank-div"></div>
						<div className="blank-div"></div>
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
