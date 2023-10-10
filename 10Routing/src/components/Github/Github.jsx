import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
	// useLoaderData is used to store data in a variable generated on calling loader Function
	const data = useLoaderData();

	return (
		<div className="text-center m-4 bg-slate-100 p-4 text-2xl ">
			Github : {data.name}
			<img
				src={data.avatar_url}
				alt="git profile picture"
				className="mx-auto my-2"
			/>
		</div>
	);
}

export default Github;

export const githubInfo = async () => {
	const response = await fetch("https://api.github.com/users/Ayush-Bharadva");
	return response.json();
};
