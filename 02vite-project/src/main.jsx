import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

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
	</React.StrictMode>
);
