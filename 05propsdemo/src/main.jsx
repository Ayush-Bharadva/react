import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Card from "./components/CardComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Card modelName="Macbook" />
		<Card modelName="Surface" />
		<Card />
	</React.StrictMode>
);
