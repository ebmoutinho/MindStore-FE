import React from "react";
import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import "./credentials.css";
import { Link }	 from "react-router-dom";

function Register() {
	const name = useRef("");
	const email = useRef("");
	const password = useRef("");
	const dateOfBirth = useRef("");
	const address = useRef("");
	const phone = useRef("");
	const profilePhoto = useRef("");
	const [isVarTrue, setIsVarTrue] = useState(true);

	function handleRegisterNewUser(event) {
		event.preventDefault();
		console.log("User Registered with success!");
	}

	function handleVarClick() {
		setIsVarTrue(false);
	}


	return (
		<>
			<Header />
			<div className='container'>
				<div className='title'>
						<h2>Register</h2>
					</div>
				<form className='form' onSubmit={handleRegisterNewUser}>
					<label className='label'>
						<input autoFocus type="text" name="name" ref={name} placeholder="Name" required />
					</label>
					<label className='label'>
						<input type="email" name="email" ref={email} placeholder="Email" required />
					</label>
					<label className='label'>
						<input type="password" name="password" ref={password} placeholder="Password" required />
					</label>
					<label className='label date'>
						<input type={isVarTrue ? "text" : "date"} onClick={handleVarClick}  name="dateOfBirth" ref={dateOfBirth} required placeholder="Date of Birth" />
					</label>
					<label className='label'>
						<input type="text" name="address" ref={address} placeholder="Address" required />
					</label>
					<label className='label'>
						<input type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Phone Number" minLength={9} maxLength={9} ref={phone} required />
					</label>
					<label className='label'>
						{/* <input type="image" alt="Profile Image"
						src="/media/examples/login-button.png"></input> */}
						<input type="url" name="url" id="url" placeholder="https://photo-example.com" pattern="https://.*" size="30" ref={profilePhoto} required></input>
					</label>
					<button className="button" type="submit">Register</button>
				</form>
				<p className='footer-text'>
					Already have an account?
					<Link to="/login"> Login here</Link>
				</p>

			</div>
		</>
	);
}

export default Register;
