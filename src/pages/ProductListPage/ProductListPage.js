import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Product from '../../components/Product/Product';
import "./productlistpage.css";
import { useState, useEffect } from 'react';

function ProductListPage() {
    const [productPageColor, setProductPageColor] = useState(false);
    const [allProducts, setAllProducts] = useState([]);

    useEffect( () => {
		setProductPageColor(true);
	}, []);

    useEffect( () => {
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

        const myArray = allProducts.map( (product) => {
            return (
                <Product productProp={product}/> 
            )
        });

    return (
        <>
            <Header productPageColor={productPageColor}/>
            <div className='product-list-container'>
                <Sidebar className="sidebar"/>
                <div className='product-grid'>
                    {/* <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product /> */}
                    { myArray }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductListPage