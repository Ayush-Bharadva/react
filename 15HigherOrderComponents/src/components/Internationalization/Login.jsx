import React from "react";

function Login({ translate, language, changeLanguage }) {
	return (
		<div>
			<h2>{translate("Please Login")}</h2>
			<p>Current language : {language}</p>
			<p>Change language Below..</p>
			<button onClick={() => changeLanguage("francias")}>francias</button>
			<button onClick={() => changeLanguage("gujarati")}>gujarati</button>
			<button onClick={() => changeLanguage("hindi")}>hindi</button>
		</div>
	);
}

export default Login;
