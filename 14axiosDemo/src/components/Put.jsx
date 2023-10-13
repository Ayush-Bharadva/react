import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/5";

function Put() {
	const [Post, setPost] = useState({});

	useEffect(() => {
		axios.get(baseURL).then((response) => setPost(response.data));
	}, []);

	console.log(Post);

	const updatePost = () => {
		axios
			.put(baseURL, {
				title: "updated post",
				body: "this is an updated post",
			})
			.then((response) => console.log(response.data));
	};

	return (
		<div>
			<h1>Update Post</h1>
			<button onClick={updatePost}>Update post</button>
		</div>
	);
}

export default Put;
