import React, { useRef } from 'react'
import Header from '../../components/Header/Header';
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
    const email = useRef();
    const password = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        // const request = {
        //     method: 'GET',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({email: email.current.value, password: password.current.value}),
        // }

        // // add async to function
        // const response = await fetch("", request);
        // const json = await response.json();


        console.log("Email: " + email.current.value);
        console.log("Password: " + password.current.value);
    }

    return (
        <>
            <Header />
            <div className='container'>
                <div className='title'>
                    <h2>Login</h2>
                </div>

                <form className='form' onSubmit={handleSubmit}>
                    <label className='label' htmlFor="login">
                        <input autoFocus autoComplete='off' type="text" name="login" placeholder="Email" ref={email} required/>
                    </label>

                    <label className='label' htmlFor="password">
                        <input type="password" name="password" placeholder="Password" ref={password} required/>
                    </label>
                    <button className="button" type="submit">Login</button>
                </form>
                <p className='footer-text'>
                    Don't have an account? &nbsp;
                    <Link to="/register" href="#">
                        Register Here
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Login;