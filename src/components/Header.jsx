import React, { useRef } from 'react'
import { Link } from "react-router-dom";
//🛍



function Header() {
    const inputSearch = useRef("");


    function handleEnterPress(event) {
        if (event.key === 'Enter') {
            console.log(inputSearch.current.value, 'enter press here! ')
        }
    }


    return (
        <>
            <header>
                <nav>
                    <div className='logo-div'>Logo</div>
                    <div className='search-div'>
                        <input type="text" placeholder='Search for a product' ref={inputSearch} onKeyPress={handleEnterPress} />
                    </div>
                    <div className='links-div'>
                        <Link to="/login">Login</Link>{/*url do site*/}
                        <Link to="/register">Register</Link>{/*url do site*/}
                        <Link to="/cart">Cart</Link>{/*url do site*/}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header