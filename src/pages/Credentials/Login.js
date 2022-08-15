import React, { useRef } from 'react'
import Header from '../../components/Header/Header';
import "./credentials.css";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';


//autoComplete='off'
function Login() {
    const email = useRef();
    const password = useRef();
    const [loginColor, setLoginColor] = useState(false);

	const [message, setMessage] = useState("");
	const [token, setToken] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        setLoginColor(true);
    }, []);


    async function handleSubmit(event) {
        event.preventDefault();

        // console.log(email, password);

		const request = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: email.current.value, password: password.current.value }),
		};
        
        try {
            const response = await fetch("/login", request);
            // console.log("response", response.headers.get("Id"));
            // console.log("response", response.headers.get("Authorization"));
            // console.log("response", response.status);
            setMessage("Login successful");
            const givenToken = response.headers.get("Authorization");
            setToken(givenToken);
            const givenId = response.headers.get("Id");
            setId(givenId);
            console.log(token);
            console.log(id);

        } catch (e) {
            console.log("error message ", e.message);
            console.log("login failed resposta martelada")
	        setMessage("credentials failed"); //devolve a msg OK ou ERRO do json login
    		setToken(null);
        }

	
        // const json = await response.json();
        // console.log("user object: ", json);
        // console.log(response.statusText);
        // setStatus(response.status);

        // setMessage("login successful!"); //devolve a msg OK ou ERRO do json login
        // setToken(json.token); //devolve o token que é um ESTADO, e podemos imprimir no HTML {token}
        // localStorage.setItem("token", json.token);
        // // console.log(json.token);
        // // console.log(response.status); //200

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

        // console.log("email: " + email.current.value);
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
                        <input autoFocus autoComplete="off" type="text" name="login" placeholder="Email" ref={email} required/>
                    </label>

                    <label className='label' htmlFor="password">
                        <input type="password" name="password" placeholder="Password" ref={password} required/>
                    </label>
                    <button className="button" type="submit">Login</button>
                </form>
                <p>{message}</p>
                <p className='footer-text'>
                    Don't have an account?
                    <Link to="/register" href="#"> Register here</Link>
                </p>
            </div>
        </>
    )
}

export default Login;