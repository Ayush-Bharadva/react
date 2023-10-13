import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function GetById({ baseUrl }) {
	const [post, setPost] = useState({});

	// console.time();
	useEffect(() => {
		axios.get(baseUrl).then((response) => setPost(response.data));
	}, []);
	// console.timeEnd();

	return (
		<>
			<h1>GET By Id</h1>
			<h2>User Details</h2>
			<p>id : {post.id}</p>
			<p>userId : {post.userId}</p>
			<p>title : {post.title}</p>
			<p>body : {post.body}</p>
		</>
	);
}

export default GetById;
