import React from "react";
import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function MainComponent() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const themeStyles = {
		backgroundColor: theme === "light" ? "#fff" : "#333",
		color: theme === "light" ? "#333" : "#fff",
	};

	console.log("component rendered");
	return (
		<div style={themeStyles} className="main-component">
			<h1>Main Component</h1>
			<p>Current theme : {theme}</p>
			<button onClick={toggleTheme} className="theme-btn">
				Toggle theme
			</button>
		</div>
	);
}

export default MainComponent;
