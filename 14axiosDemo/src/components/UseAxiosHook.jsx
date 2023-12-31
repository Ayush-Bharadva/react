import { useAxios } from "axios-hooks";

export default function UseAxiosHook() {
	const { data, error, loading } = useAxios({
		url: "https://jsonplaceholder.typicode.com/posts/1",
	});
	if (loading || !data) return "Loading...";
	if (error) return "Error!";
	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.body}</p>
		</div>
	);
}
