import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Product from '../../components/Product/Product';
import "./productlistpage.css";
import { useState, useEffect } from 'react';

function ProductListPage() {
    const [productPageColor, setProductPageColor] = useState(false);

    useEffect( () => {
		setProductPageColor(true);
	}, []);

    
    return (
        <>
            <Header productPageColor={productPageColor}/>
            <div className='product-list-container'>
                <Sidebar className="sidebar"/>
                <div className='product-grid'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductListPage