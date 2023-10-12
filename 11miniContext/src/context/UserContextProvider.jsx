import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";

// creating a userContextProvider component that will keep track of its childrens
function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
