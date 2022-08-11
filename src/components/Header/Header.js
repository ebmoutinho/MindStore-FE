import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
	const inputSearch = useRef("");


    function handleEnterPress(event) {
        if (event.key === 'Enter') {
            console.log(inputSearch.current.value, 'enter press here! ')
        }
    }

    // function handleLoginPageClick() {
    //     setIsClickedLogin(true);
    // }

    // function handleRegisterPageClick() {
    //     setIsClickedRegister(true);
    // }

    // function handleCartPageClick() {
    //     setIsClickedCart(true);
    // }


    return (
        <>
            <header>
                <nav>
                    <Link to="/" className="logo-div">Mind<span className="bold">Store</span></Link>
                    {/* <p className='logo-div'>Logo</p> */}
                    <label>
                        <input className="search-div" type="text" placeholder='Search' ref={inputSearch} onKeyPress={handleEnterPress} />
                    </label>
                    <div className='links-div'>
                        <Link to="/login" >Login</Link>
                        <Link to="/register" >Register</Link>
                        <Link to="/cart" >Cart</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
