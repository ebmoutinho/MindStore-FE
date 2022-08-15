import React, { useState, useEffect, useRef } from "react";
import "./profile.css";
import "../Credentials/credentials.css";
// import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import avatar from "../../assets/avatar.jpg";

function Profile() {
	// const { userId } = useParams();
	const fetchedToken = localStorage.getItem("token");
	const fetchedId = localStorage.getItem("Id");
	const adminToken = localStorage.getItem("adminToken");
	// console.log("admmintoknen", adminToken);
	// console.log("profile user token lala" , fetchedToken);

	const [profileColor, setProfileColor] = useState(false);
	const [editProfile, setEditProfile] = useState(false);
	const firstName = useRef("");
	const lastName = useRef("");
	const email = useRef("");
	const password = useRef("");
	const address = useRef("");
	const profilePhoto = useRef("");
	// const dateOfBirth = useRef("");
	// const phone = useRef("");
	// const [isVarTrue, setIsVarTrue] = useState(true);
	const [userData, setUserData] = useState({});
	const [newInfo, setNewInfo] = useState(false);
	// console.log("id from api", fetchedId);

	useEffect(() => {
		setProfileColor(true);
		async function FetchProfile() {
			const request = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: adminToken,
				},
			};

			const response = await fetch(`/api/v1/admins/users/${fetchedId}`, request);
			const json = await response.json();
			// console.log("json from GET:", json); //userId

			setUserData(json);
			// setMessage(json.message);
		}
		// console.log(fetchedToken);

		FetchProfile();
		
	}, [newInfo]);

	async function handleSaveProfileChanges(event) {
		console.log("INSIDE HANDLE SAVE PROFILE CHANGES");
		event.preventDefault();
		// console.log(firstName);

		let interFirst = "";
		let interLast = "";
		let interEmail = "";
		let interPassword = "";
		let interAddress = "";

		if (firstName.current === "" ) {
			interFirst = userData.firstName;
		} else {
			interFirst = firstName.current.value;
		}

		if (lastName.current === "") {
			interLast = userData.lastName;
		} else {
			interLast = lastName.current.value;
		}

		if (email.current === "") {
			interEmail = userData.email;
		} else {
			interEmail = email.current.value;
		}

		if (password.current === "") {
			interPassword = userData.password;
		} else {
			interPassword = password.current.value;
		}

		if (address.current === "") {
			interAddress = userData.address;
		} else {
			interAddress = address.current.value;
		}
		console.log(interFirst, interLast, interEmail, interPassword, interAddress);

		const request = {
			method: "PATCH",
			headers: { "Content-Type": "application/json", Authorization: fetchedToken },
			body: JSON.stringify({
				firstName: interFirst, //firstName.current.value, //ref que recebe do input
				lastName: interLast, //lastName.current.value,
				email: interEmail, //email.current.value,
				password: interPassword, // password.current.value,
				address: interAddress, //address.current.value,
			}),
		};
		// {(newInfo === true) ?
		// 	(firstName: firstName.current.value) :
		// 	(firstName: uName)}

		const response = await fetch(`/api/v1/users/${fetchedId}`, request);
		const json = await response.json();
		// console.log("editprofile response json", json);
		const newUserData = json;

		setNewInfo(true);
		setUserData(newUserData);
	};
	// console.log("userData after editProfile", userData);

	// function handleVarClick() {
	// 	setIsVarTrue(false);
	// }

	function handleEditProfile() {
		console.log("button edit profile");
		setEditProfile(!editProfile);
	}
	function handleSaveChangesButton() {
		console.log("button to Save Changes");
	}

	function handleCancelEditProfile() {
		setEditProfile(false);
	}
	function handleInputChanges() {}

	return (
		<>
			<Header profileColor={profileColor} />

			{editProfile ? (
				<>
					<div className="container to-save">
						<img src={avatar} alt="" className="profile-image" />

						<div className="title title-to-change">
							<h2>Profile</h2>
						</div>
						<form className="form" onSubmit={handleSaveProfileChanges}>
							<label className="label">
								<input autoFocus type="text" name="first-name" ref={firstName} placeholder={userData.firstName} />
							</label>
							<label className="label">
								<input autoFocus type="text" name="last-name" ref={lastName} placeholder={userData.lastName} />
							</label>
							<label className="label">
								<input type="email" name="email" ref={email} placeholder={userData.email} />
							</label>
							<label className="label">
								<input type="password" name="password" ref={password} placeholder="Password" />
							</label>
							{/* <label className="label date">
								<input type={isVarTrue ? "text" : "date"} onClick={handleVarClick} name="dateOfBirth" ref={dateOfBirth} required placeholder={userData.dateOfBirth} />
							</label> */}
							<label className="label">
								<input type="text" name="address" ref={address} placeholder={userData.address} />
							</label>
							{/* <label className="label">
									<input type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Phone Number" minLength={9} maxLength={9} ref={phone} required />
								</label> */}
							<label className="label">
								<input type="url" name="url" id="url" placeholder="https://add-your-profile-picture.com" pattern="https://.*" size="30" ref={profilePhoto}></input>
							</label>
							<div className="btn-flex">
								<button className="button btn-cancel" onClick={handleCancelEditProfile}>
									Cancel
								</button>
								<button type="submit" className="button btn-save" onClick={handleSaveChangesButton}>
									Save Changes
								</button>
							</div>
						</form>
					</div>
					<div className="footer-wrapper edit-footer">
						<Footer />
					</div>
				</>
			) : (
				<>
					<div className="container non-edit-mode">
						<img src={avatar} alt="" className="profile-image" />

						<div className="title title-profile">
							<h2>
								{userData.firstName} {userData.lastName}{" "}
							</h2>
							<h2>{userData.email}</h2>
							<h2>{userData.dateOfBirth}</h2>
							<h2>{userData.address}</h2>
						</div>

						<button className="button" onClick={handleEditProfile}>
							Edit Profile
						</button>
					</div>
					<div className="footer-wrapper non-edit-footer">
						<Footer />
					</div>
				</>
			)}
		</>
	);
}

export default Profile;

/*
	function handleSaveProfileChanges(event) {
		event.preventDefault();
		async function editProfile() {
			const request = {
				method: "PATCH",
				headers: { "Content-Type": "application/json", 
							"Authorization": fetchedToken },
				body: JSON.stringify({
					firstName: firstName.current.value, //ref que recebe do input
					lastName: lastName.current.value,
					email: email.current.value,
					password: password.current.value,
					address: address.current.value,
				}),
			};
	
			const response = await fetch(`/api/v1/users/${fetchedId}`, request);
			const json = await response.json();
			// console.log("editprofile response json", json);
			const newUserData = json;

			setUserData(newUserData);

		};
		editProfile();
	};
*/
