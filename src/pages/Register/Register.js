// import React from "react";
// import { useRef, useState, useEffect } from "react";
// import Header from "../../components/Header/Header";

// function Register() {
// 	const name = useRef("");
// 	const email = useRef("");
// 	const password = useRef("");
// 	const dateOfBirth = useRef("");
// 	const address = useRef("");
// 	const phone = useRef("");
// 	const profilePhoto = useRef("");
//     const [registerColor, setRegisterColor] = useState(false);

// 	useEffect(() => {
//         setRegisterColor(true);
//     }, []);

// 	function handleRegisterNewUser(event) {
// 		event.preventDefault();
// 		console.log("User Registered with success!");
// 	}

// 	return (
// 		<>
// 			<Header registerColor={registerColor} />
// 			<h2>Register new user</h2>
// 			<form onSubmit={handleRegisterNewUser}>
// 				<label>
// 					<input type="text" name="name" ref={name} placeholder="Name" required />
// 				</label>
// 				<label>
// 					<input type="email" name="email" ref={email} placeholder="Email" required />
// 				</label>
// 				<label>
// 					<input type="password" name="password" ref={password} placeholder="Password" required />
// 				</label>
// 				<label>
// 					<input type="date" name="dateOfBirth" ref={dateOfBirth} required />
// 				</label>
// 				<label>
// 					<input type="text" name="address" ref={address} placeholder="Address" required />
// 				</label>
// 				<label>
// 					<input type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Phone Number" minLength={9} maxLength={9} ref={phone} required />
// 				</label>
// 				<label>
// 					{/* <input type="image" alt="Profile Image"
//                     src="/media/examples/login-button.png"></input> */}
// 					<input type="url" name="url" id="url" placeholder="https://photo-example.com" pattern="https://.*" size="30" ref={profilePhoto} required></input>
// 				</label>
// 				<button type="submit">Register</button>
// 			</form>
// 			<p>
// 				Already have an account?
// 				<a href="#"> Login here</a>
// 			</p>
// 		</>
// 	);
// }

// export default Register;
