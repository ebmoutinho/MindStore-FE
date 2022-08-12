import React from 'react'
import "./profile.css"
import { useState, useEffect } from "react"
import Header from "../../components/Header/Header"

function Profile() {
    const [profileColor, setProfileColor] = useState(false);

    useEffect( () => {
		setProfileColor(true);
	}, []);


  return (
    <>
        <Header profileColor={profileColor} />
    </>
  )
}

export default Profile