import React, { useRef } from 'react'

function Login() {
    const username = useRef();
    const password = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        // const request = {
        //     method: 'GET',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({username: username.current.value, password: password.current.value}),
        // }

        // // add async to function
        // const response = await fetch("", request);
        // const json = await response.json();


        console.log("Username: " + username.current.value);
        console.log("Password: " + password.current.value);
    }

    return (
        <div className='container'>
            <div>
                <h1>Login</h1>
                <hr />
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="login">
                    <input type="text" name="login" placeholder="Username" ref={username} required/>
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
    )
}

export default Login;