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


	const [profileColor, setProfileColor] = useState(false);
	const [editProfile, setEditProfile] = useState(false);
	const firstName = useRef("");
	const lastName = useRef("");
	const email = useRef("");
	const password = useRef("");
	const dateOfBirth = useRef("");
	const address = useRef("");
	// const phone = useRef("");
	const profilePhoto = useRef("");
	const [isVarTrue, setIsVarTrue] = useState(true);
	const [userData, setUserData] = useState({});
	// console.log("lalala", userData);
	// console.log("id from api", fetchedId);

	useEffect(() => {
		setProfileColor(true);
		async function FetchProfile() {

			const request = {
			    method: 'GET',
			    headers: {
			        "Content-Type": "application/json",
			        'Authorization': adminToken,
			    },
			};

			const response = await fetch(`/api/v1/admins/users/${fetchedId}`, request);
			const json = await response.json();
			console.log("json :", json) //userId

			setUserData(json);
			// setMessage(json.message);
		};
		// console.log(fetchedToken);

		FetchProfile();

	}, []);



	function handleSaveProfileChanges() {
		//update user data
	}

	function handleVarClick() {
		setIsVarTrue(false);
	}

	function handleEditProfile() {
		setEditProfile(!editProfile);
	}

	function handleCancelEditProfile() {
		setEditProfile(false);
	}


	return (
		<>
			<Header profileColor={profileColor} />

			{
				editProfile ? (
					<>
						<div className="container to-save">
							<img src={avatar} alt="" className="profile-image" />

							<div className="title title-to-change">
								<h2>Profile</h2>
							</div>
							<form className="form" onSubmit={handleSaveProfileChanges}>
								<label className="label">
									<input autoFocus type="text" name="first-name" ref={firstName} placeholder={userData.firstName} required />
								</label>
								<label className="label">
									<input autoFocus type="text" name="last-name" ref={lastName} placeholder={userData.lastName} required />
								</label>
								<label className="label">
									<input type="email" name="email" ref={email} placeholder={userData.email} required />
								</label>
								<label className="label">
									<input type="password" name="password" ref={password} placeholder="Password" required />
								</label>
								<label className="label date">
									<input type={isVarTrue ? "text" : "date"} onClick={handleVarClick} name="dateOfBirth" ref={dateOfBirth} required placeholder={userData.dateOfBirth} />
								</label>
								<label className="label">
									<input type="text" name="address" ref={address} placeholder={userData.address} required />
								</label>
								{/* <label className="label">
									<input type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Phone Number" minLength={9} maxLength={9} ref={phone} required />
								</label> */}
								<label className="label">
									<input type="url" name="url" id="url" placeholder="https://add-your-profile-picture.com" pattern="https://.*" size="30" ref={profilePhoto} required></input>
								</label>
								<div className="btn-flex">
									<button className="button btn-cancel" onClick={handleCancelEditProfile}>
										Cancel
									</button>
									<button className="button btn-save" onClick={handleEditProfile}>
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
								{/* <h2>{name}</h2> */}
								<h2>{userData.firstName} {" "} {userData.lastName} </h2>
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
				)
			}
		</>
	);
}

export default Profile;
