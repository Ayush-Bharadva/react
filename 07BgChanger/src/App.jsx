import { useState } from "react";
import "./App.css";

function App() {
	let [color, setColor] = useState();

	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
					<button
						className="outline-none px-4 bg-red-700 text-white rounded-l shadow-lg"
						onClick={() => setColor("darkred")}>
						Red
					</button>
					<button
						className="outline-none px-4 bg-green-700 text-white rounded-l shadow-lg"
						onClick={() => setColor("darkgreen")}>
						Green
					</button>
					<button
						className="outline-none px-4 bg-purple-700 text-white rounded-l shadow-lg"
						onClick={() => setColor("purple")}>
						Purple
					</button>
					<button
						className="outline-none px-4 bg-blue-700 text-white rounded-l shadow-lg"
						onClick={() => setColor("darkblue")}>
						Blue
					</button>
					<button
						className="outline-none px-4 bg-sky-400 text-white rounded-l shadow-lg"
						onClick={() => setColor("lightblue")}>
						sky
					</button>
					<button
						className="outline-none px-4 bg-teal-600 text-white rounded-l shadow-lg"
						onClick={() => setColor("teal")}>
						teal
					</button>
					<button
						className="outline-none px-4 bg-yellow-500 text-white rounded-l shadow-lg"
						onClick={() => setColor("yellow")}>
						yellow
					</button>
					<button
						className="outline-none px-4 bg-orange-500 text-white rounded-l shadow-lg"
						onClick={() => setColor("darkorange")}>
						orange
					</button>
					<button
						className="outline-none px-4 bg-black text-white rounded-l shadow-lg"
						onClick={() => setColor("black")}>
						black
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
