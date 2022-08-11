import React, { useRef } from 'react'
import Header from '../../components/Header/Header';

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
                <div>
                    <h2>Login</h2>
                    <hr />
                </div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="login">
                        <input type="text" name="login" placeholder="Email" ref={email} required/>
                    </label>

                    <label htmlFor="password">
                        <input type="password" name="password" placeholder="Password" ref={password} required/>
                    </label>
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account?
                    <a href="#">
                        Register Here
                    </a>
                </p>
            </div>
        </>
    )
}

export default Login;