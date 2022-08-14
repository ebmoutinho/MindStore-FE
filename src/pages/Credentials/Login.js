import React, { useRef } from 'react'
import Header from '../../components/Header/Header';
import "./credentials.css";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';


//autoComplete='off'
function Login() {
    const username = useRef();
    const password = useRef();
    const [loginColor, setLoginColor] = useState(false);

	const [message, setMessage] = useState("");
	const [token, setToken] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        setLoginColor(true);
    }, []);


    async function handleSubmit(event) {
        event.preventDefault();

        // console.log(username, password);

		const request = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username: username.current.value, password: password.current.value }),
		};
        
        try {
            const response = await fetch("https://fakestoreapi.com/auth/login", request);
            const json = await response.json();
            console.log("user object: ", json);
            console.log(response.statusText);
            setStatus(response.status);

            setMessage("login successful!"); //devolve a msg OK ou ERRO do json login
			setToken(json.token); //devolve o token que é um ESTADO, e podemos imprimir no HTML {token}
			localStorage.setItem("token", json.token);
            console.log(json.token);
            console.log(response.status); //200


        } catch (e) {
            console.log("error message ", e.message);
            console.log("login failed resposta martelada")
	        setMessage("credentials failed"); //devolve a msg OK ou ERRO do json login
    		setToken(null);
            setStatus("401 martelado");
        }

	

        // if (response.status === 200) {
		// 	setMessage("login successful!"); //devolve a msg OK ou ERRO do json login
		// 	setToken(json.token); //devolve o token que é um ESTADO, e podemos imprimir no HTML {token}
		// 	// localStorage.setItem("token", json.token);
        //     console.log(json.token);
        //     console.log(response.status); //200
        // } else {
        //     console.log("login failed resposta martelada")
		// 	setMessage("credentials failed"); //devolve a msg OK ou ERRO do json login
		// 	setToken(null);
		// }

		// if (json.token === null) {
		// 	setMessage("credentials failed"); //devolve a msg OK ou ERRO do json login
		// 	setToken("");
		// } else {
		// 	setMessage("login successful!"); //devolve a msg OK ou ERRO do json login
		// 	setToken(json.token); //devolve o token que é um ESTADO, e podemos imprimir no HTML {token}
		// 	localStorage.setItem("token", json.token);
		// }

        // console.log("Username: " + username.current.value);
        // console.log("Password: " + password.current.value);
    }

    return (
        <>
           <Header loginColor={loginColor} />
            <div className='container'>
                <div className='title'>
                    <h2>Login</h2>
                </div>

                <form className='form' onSubmit={handleSubmit}>
                    <label className='label' htmlFor="login">
                        <input autoFocus autoComplete="off" type="text" name="login" placeholder="Email" ref={username} required/>
                    </label>

                    <label className='label' htmlFor="password">
                        <input type="password" name="password" placeholder="Password" ref={password} required/>
                    </label>
                    <button className="button" type="submit">Login</button>
                </form>
                <p>Login status: {message}</p>
                <p>Status: {status}</p>
                <p className='footer-text'>
                    Don't have an account?
                    <Link to="/register" href="#"> Register here</Link>
                </p>
            </div>
        </>
    )
}

export default Login;