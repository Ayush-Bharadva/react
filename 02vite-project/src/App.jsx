import MyComponent from "./MyComponent";

const location = "this is App.jsx";

function App() {
	return (
		<>
			<h1>Inside App component : {location}</h1>
			<MyComponent />
		</>
	);
}

export default App;
