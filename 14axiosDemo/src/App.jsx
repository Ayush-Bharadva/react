import "./App.css";
import GetAll from "./components/GetAll";
import GetById from "./components/GetById";
import Post from "./components/Post";
import Put from "./components/PUT";
import Delete from "./components/Delete";
// Get Url
const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
	return (
		<>
			<GetById baseUrl={baseUrl} />

			<Post baseUrl={baseUrl} />

			{/* <GetAll baseUrl={baseUrl} /> */}

			{/* <Put /> */}

			<Delete />
		</>
	);
}

export default App;
