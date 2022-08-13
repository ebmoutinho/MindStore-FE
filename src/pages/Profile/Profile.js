import React, { useState, useEffect, useRef } from 'react'
import "./profile.css"
import "../Credentials/credentials.css"
import Header from "../../components/Header/Header"
import avatar from "../../assets/avatar.jpg"

function Profile() {
  const [profileColor, setProfileColor] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const dateOfBirth = useRef("");
  const address = useRef("");
  const phone = useRef("");
  const profilePhoto = useRef("");
  const [isVarTrue, setIsVarTrue] = useState(true);


  useEffect(() => {
    setProfileColor(true);
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

  function EditProfile() {
    if (editProfile) {
      return (
        <div className='container to-save'>
          <img src={avatar} alt="" className='profile-image' />

          <div className='title title-to-change'>
            <h2>Register</h2>
          </div>
          <form className='form' onSubmit={handleSaveProfileChanges}>
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
              <input type={isVarTrue ? "text" : "date"} onClick={handleVarClick} name="dateOfBirth" ref={dateOfBirth} required placeholder="Date of Birth" />
            </label>
            <label className='label'>
              <input type="text" name="address" ref={address} placeholder="Address" required />
            </label>
            <label className='label'>
              <input type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Phone Number" minLength={9} maxLength={9} ref={phone} required />
            </label>
            <label className='label'>
              <input type="url" name="url" id="url" placeholder="https://photo-example.com" pattern="https://.*" size="30" ref={profilePhoto} required></input>
            </label>
            <div className="btn-flex">
              <button className="button btn-cancel" onClick={handleCancelEditProfile}>Cancel</button>
              <button className="button btn-save" onClick={handleEditProfile}>Save Changes</button>
            </div>
          </form>
        </div>
      )
    }
    return (
      <div className="container non-edit-mode">
        <img src={avatar} alt="" className='profile-image' />

        <div className="title">
          <h2>Username</h2>
        </div>

        <button className="button" onClick={handleEditProfile}>Edit Profile</button>
      </div>
    )
  }

  return (
    <>
      <Header profileColor={profileColor} />
      <EditProfile />
    </>
  )
}

export default Profile