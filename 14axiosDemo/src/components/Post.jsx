import axios from "axios";
import React, { useEffect, useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function Post() {
	const [post, setPost] = useState({
		title: "Hello world",
		body: "This is a new post",
	});

	const createPost = () => {
		axios
			.post(baseUrl, {
				userId: 1,
				title: "Hello World!!",
				body: "This is a new post",
			})
			.then((response) => console.log(response.data));
		// .then((response) => console.log(response.config));
		// .then((response) => console.log(response.headers));
		// .then((response) => console.log(response.request));
		// .then((response) => console.log(response.status));
		// .then((response) => console.log(response.statusText));
		console.log("new post created");
	};

	const displayAllPosts = () => {
		axios.get(baseUrl).then((response) => console.log(response.data));
	};

	// useEffect(() => {
	// 	axios.get(baseUrl).then((response) => setPost(response.data));
	// }, []);

	// console.log("post :", post);

	return (
		<>
			<h1>Create POST </h1>
			<p>title : {post.title}</p>
			<p>body : {post.body}</p>
			<button onClick={createPost}>Create Post</button>
			<button onClick={displayAllPosts}>View All Posts</button>
		</>
	);
}

export default Post;
