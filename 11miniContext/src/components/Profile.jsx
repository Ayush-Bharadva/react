import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
	const { user } = useContext(UserContext);

	if (!user) {
		return <h1>Please Login First</h1>;
	}
	return <h1>Welcome {user}</h1>;
}

export default Profile;
