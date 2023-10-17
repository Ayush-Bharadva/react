import React, { useState } from "react";

function Login({ translate, language, changeLanguage }) {
	const [user, setUser] = useState("");
	const [age, setAge] = useState("");
	const [allUsers, setAllUsers] = useState([]);

	const handleDuplicated = () => {
		allUsers;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user !== null && (age > 0 || age < 120)) {
			console.log(user);
			console.log(age);
			setAllUsers((prevUsers) => [
				...prevUsers,
				{ username: user, age: age },
			]);
			console.log("allUsers :", allUsers);
		}
	};

	return (
		<div>
			<h2>{translate("Please Login")}</h2>
			<p>Current language : {language}</p>

			<form action="" onSubmit={handleSubmit}>
				<input
					style={{ fontSize: "1rem", margin: "0.5rem" }}
					type="text"
					placeholder="username"
					value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
				<br />
				<input
					style={{ fontSize: "1rem", margin: "0.5rem" }}
					type="number"
					placeholder="age"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>

			<p>Change language Below..</p>
			<button onClick={() => changeLanguage("francias")}>francias</button>
			<button onClick={() => changeLanguage("gujarati")}>gujarati</button>
			<button onClick={() => changeLanguage("hindi")}>hindi</button>
		</div>
	);
}

export default Login;
