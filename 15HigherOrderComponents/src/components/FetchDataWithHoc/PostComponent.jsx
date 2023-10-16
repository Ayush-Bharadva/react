import React from "react";

function PostComponent({ data, isLoading, error, myName }) {
	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	if (error) {
		return <p>Error : {error.message}</p>;
	}

	return (
		<>
			<h3>Posts titles</h3>
			<p>Extra Name Component : {myName}</p>
			<ul style={{ color: "white" }}>
				{data.map((item) => {
					return <li key={item.id}>{item.title}</li>;
				})}
			</ul>
		</>
	);
}

export default PostComponent;
