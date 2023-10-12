import React, { createContext, useState } from "react";

// step 1 : creation of context, here ThemeContext
export const ThemeContext = createContext();

// step 2 : creation of contextProvider, here ThemeProvider
function ThemeProvider({ children }) {
	// variable to store current value of theme
	const [theme, setTheme] = useState("light");

	// toggle theme handler
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	// step 3 : returning context
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
