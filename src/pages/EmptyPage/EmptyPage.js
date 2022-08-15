import React from "react";
import RegisterSuccessfull from "../../components/RegisterSuccessfull/RegisterSuccessfull";

function EmptyPage() {

	return(
		<RegisterSuccessfull />
	);

	/*
	// const response = fetch("api/v1/users/products?direction=ASC&field=title&page=3&pagesize=4", {
	// 	method: "GET",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// })
	// 	.then((x) => x.json())
	// 	.then(console.log);

	async function fetchAllProducts() {
        const data = { username: 'example' };
		const request = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
                'Accept': 'application/json',
			},
            // body: JSON.stringify(data),
			// body: JSON.stringify({ id: email.current.value, profile_picture: picture.current.value, name: name.current.value })
		};

		const response = await fetch("api/v1/users/products?direction=ASC&field=id&page=1&pagesize=9", request);
		const products = await response.json();
		console.log(products);
		// console.log(response.headers);
		// const myJSON = JSON.parse(products);
		// const myOtherJSON = JSON.stringify(myJSON);
		// var respons = JSON.parse(JSON.stringify(products));

		// console.log("myJSON", respons);

		// console.log("all products", products);
	}
	fetchAllProducts();

	return (
		<div>
			<p>this an empty page yo</p>
		</div>
	);*/
}

export default EmptyPage;
