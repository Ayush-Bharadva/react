import React from "react";
import { Route, Routes, useLoaderData } from "react-router-dom";
import Login from "../Login/Login";

function Github(props) {
	// useLoaderData is used to store data in a variable generated on calling loader Function

	const data = useLoaderData();

	return props.authed ? (
		<div className="text-center m-4 bg-slate-100 p-4 text-2xl ">
			Github : {data.name}
			<img
				src={data.avatar_url}
				alt="git profile picture"
				className="mx-auto my-2"
			/>
		</div>
	) : (
		<Login />
		// <Routes>
		// 	<Route path="login" element={<Login />} />
		// </Routes>
	);
}

export default Github;

export const githubInfo = async () => {
	const response = await fetch("https://api.github.com/users/Ayush-Bharadva");
	return response.json();
};
