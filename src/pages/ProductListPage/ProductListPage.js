import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Product from '../../components/Product/Product';
import "./productlistpage.css";

function ProductListPage() {
    return (
        <>
            <Header />
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