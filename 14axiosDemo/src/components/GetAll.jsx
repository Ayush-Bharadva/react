import React, { useEffect, useState } from "react";
import axios from "axios";

function GetAll({ baseUrl }) {
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => {
		axios
			.get(baseUrl.slice(0, baseUrl.length - 2))
			.then((response) => setAllPosts(response.data));
	}, []);

	return (
		<>
			<h1>GET All</h1>
			<h2>All User Details</h2>
			{allPosts.map((post) => (
				<div key={post.id}>
					<p>id : {post.id}</p>
					<p>userId : {post.userId}</p>
					<p>title : {post.title}</p>
					<p>body : {post.body}</p>
				</div>
			))}
		</>
	);
}

export default GetAll;
