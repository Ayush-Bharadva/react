import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useAxios } from "use-axios-client";

const baseURL = "https://jsonplaceholder.typicode.com/posts/5";

function Delete() {
	const [post, setPost] = useState({});

	// const { data, error, loading } = useAxios();

	useEffect(() => {
		axios.get(baseURL).then((response) => setPost(response.data));
	}, []);
	console.log("post :", post);

	const deletePost = () => {
		axios.delete(baseURL).then((response) => console.log(response.data));
	};

	return (
		<div>
			<h1>Delete Post</h1>
			<p>Title : {post.title}</p>
			<p>Body : {post.body}</p>
			<button onClick={deletePost}>Delete post</button>
		</div>
	);
}

export default Delete;
