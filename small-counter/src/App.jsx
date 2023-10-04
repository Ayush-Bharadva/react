import { useState } from "react";
import "./App.css";

function App() {
	let [count, setCounter] = useState(0);

	let incrementValue = () => {
		if (count < 20) {
			// all the below functions will count as one call
			setCounter(count + 1);
			setCounter(count + 1);
			setCounter(count + 1);
			setCounter(count + 1);
			setCounter(count + 1);

			// to make setCounter differential pass a callback in it(see below)
			setCounter((counter) => counter + 1);
			setCounter((counter) => counter + 1);
			setCounter((counter) => counter + 1);
			setCounter((counter) => counter + 1);
			setCounter((counter) => counter + 1);
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
