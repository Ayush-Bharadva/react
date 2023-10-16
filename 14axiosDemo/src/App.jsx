import "./App.css";
import GetAll from "./components/GetAll";
import GetById from "./components/GetById";
import Post from "./components/Post";
import Put from "./components/PUT";
import Delete from "./components/Delete";
import HandleErrors from "./components/HandleErrors";
import InstanceWithAxios from "./components/InstanceWithAxios";
// import UseAxiosHook from "./components/UseAxiosHook";

// Get Url
const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
	return (
		<>
			<GetById baseUrl={baseUrl} />
			<hr />
			<Post baseUrl={baseUrl} />
			<hr />
			{/* <GetAll baseUrl={baseUrl} /> */}
			{/* <Put /> */}
			<Delete />
			<hr />
			<h2>Error Handling</h2>
			<HandleErrors />
			<hr />
			<h2>Instance Example</h2>
			<InstanceWithAxios />
			<hr />
			<h2>useAxios()</h2>
			{/* <UseAxiosHook /> */}
		</>
	);
}

export default App;
