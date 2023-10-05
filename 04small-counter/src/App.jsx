import { useState } from "react";
import "./App.css";

function App() {
	console.log("rendered");

	let [count, setCounter] = useState(0);

	let incrementValue = () => {
		if (count < 20) {
			// all the below functions will count as one call
			setCounter(count + 1);

			// setCounter(count + 1);

			// setCounter(count + 1);

			// setCounter(count + 1);

			// setCounter(count + 1);
		}
	};

	let decrementValue = () => {
		if (count > 0) {
			setCounter(count - 1);
		}
	};

	return (
		<>
			<h1>counter : {count}</h1>
			<button onClick={incrementValue}>Add + </button>
			<button onClick={decrementValue}>Sub - </button>
		</>
	);
}

export default App;
