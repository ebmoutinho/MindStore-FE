import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import cart from "../../assets/shopping-cart.png";

function Header(props) {
    const { loginColor, registerColor, profileColor, productPageColor, cartColor } = props;
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
                        <Link to="/login" className={loginColor ? "active" : ""}>Login</Link>
                        <Link to="/register" className={registerColor ? "active" : ""}>Register</Link>
                        <Link to="/profile" className={profileColor ? "active" : ""}>Profile</Link>
                        <Link to="/productlistpage" className={productPageColor ? "active" : ""}>Product</Link>
                        {/* <Link to="/cart" className={cartColor ? "active" : ""}>Cart</Link>*/}
                        <Link to="/cart" className={cartColor ? "pink-cart" : "black-cart"}></Link> 
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
