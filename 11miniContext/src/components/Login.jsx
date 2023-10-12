import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import "../login.scss";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser([username + " ", password]);
	};

	return (
		<div>
			<h2>Login</h2>
			<input
				type="text"
				value={username}
				name=""
				id=""
				placeholder="username"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<br />
			<br />
			<input
				type="text"
				value={password}
				name=""
				id=""
				placeholder="surname"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<br />
			<br />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default Login;
