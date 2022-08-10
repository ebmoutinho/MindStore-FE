import React, { useRef } from "react";
//🛍

function Header() {
	const inputSearch = useRef("");

	function handleEnterPress(event) {
		if (event.key === "Enter") {
			console.log(inputSearch.current.value, "enter press here! ");
		}
	}

	return (
		<>
			<header>
				<nav>
					<div className="logo-div">Logo</div>
					<div className="search-div">
						<input type="text" placeholder="Search for a product" ref={inputSearch} onKeyPress={handleEnterPress} />
					</div>
					<div className="links-div">
						<a href="#">Login</a>
						<a href="#">Register</a>
						<a href="#">Cart</a>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Header;
