import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import Sort from '../../components/Sort/Sort';
import Teste from '../../components/Teste/Teste';
import Product from '../../components/Product/Product';
import "./home.css";

function Home() {
    return (
        <>
            <Header />
            {/* <Sort /> */}
            <div className='product-list-container'>
                <Teste className="filter"/>
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

export default Home