import axios from "axios";
import React from "react";
const client = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default function InstanceWithAxios() {
	const [post, setPost] = React.useState(null);
	React.useEffect(() => {
		client.get("/1").then((response) => {
			setPost(response.data);
		});
	}, []);
	function deletePost() {
		client.delete("/1").then(() => {
			alert("Post deleted!");
			setPost(null);
		});
	}
	if (!post) return "No post!";
	return (
		<div>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			<button onClick={deletePost}>Delete Post</button>
		</div>
	);
}
