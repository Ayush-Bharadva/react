import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyComponent from "./MyComponent.jsx";

const user = "world";

const ReactElement = React.createElement(
	"a",
	{ href: "https://google.com", target: "_blank" },
	"click to visit google ",
	user
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		<MyComponent />
		<p>random p tag {user}</p>
	</React.StrictMode>
	// ReactElement
);
