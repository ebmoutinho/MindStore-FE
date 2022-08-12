import React from 'react';
import heroImg from "../../assets/heroImg.jpg";
import bannerImg from "../../assets/bannerImg.jpg";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from "../../components/Product/Product";
import "./home.css";

function Home() {
    return (
        <>
            <Header />
            <div className="home-hero">
                <div className="hero-body">
                    <h1 className='hero-body-title'>On Sale <i>-50%</i></h1>
                    <p className='hero-body-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta saepe et dolorem corporis numquam? Quaerat quod quae sapiente ullam magnam consequuntur recusandae? Iste enim reprehenderit voluptatem ex laudantium ut?
                    </p>
                    <button className="hero-body-button">View Products</button>
                </div>

                <img src={heroImg} alt="" className='hero-img' />
            </div>

            <div className="home-products">

                <div className="home-product-gallery">
                    <div className="home-product-border">
                        <Product />
                    </div>
                    <div className="home-product-border">
                        <Product />
                    </div>
                    <div className="home-product-border">
                        <Product />
                    </div>
                    <div className="home-product-border">
                        <Product />
                    </div>
                </div>
            </div>

            <div className="home-banner">
                <div className="banner-body">
                    <h2 className='banner-body-title'><i>Trending Now</i></h2>
                    <button className="banner-body-button">View Products</button>
                </div>
                <img src={bannerImg} alt="" className="banner-img"/>
            </div>

            <Footer />
        </>
    )
}

export default Home