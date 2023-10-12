import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
	const location = useLocation();

	if (location.pathname === "/about") {
		return <Outlet />;
	}

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
