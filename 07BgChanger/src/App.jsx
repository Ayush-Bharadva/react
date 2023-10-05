import { useState } from "react";

function App() {
	let [color, setColor] = useState("lightgrey");

	return (
		<div className="w-full h-screen" style={{ backgroundColor: color }}>
			<h1 className="text-center text-xl font-bold text-white">Bg</h1>
		</div>
	);
}

export default App;
