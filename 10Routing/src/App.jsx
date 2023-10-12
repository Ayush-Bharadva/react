import React from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfo } from "./components/Github/Github";
import ErrorElement from "./ErrorElement.jsx";

// 1st way to create router
// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Layout />,
// 		children: [
// 			{
// 				path: "",
// 				element: <Home />,
// 			},
// 			{
// 				path: "about",
// 				element: <About />,
// 			},
// 			{
// 				path: "contact",
// 				element: <Contact />,
// 			},
// 		],
// 	},
// ]);

// 2nd way to create router
console.time();

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<Home />} />
				{/* <Route path="about" element={<About />} />
				 */}
				<Route path="contact" element={<Contact />} /> // // loader will
				call a function before react renders a component and data from
				function can be used by useLoaderData method
				<Route
					loader={githubInfo}
					path="github"
					element={<Github authed={false} />}
				/>
				<Route path="user/:userid" element={<User />} /> // this route
				is for getting params from url, useParams is used to access
				values of "/:userid"
			</Route>
			<Route path="abuot" element={<About />} />
		</>
	)
);
console.timeEnd();

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
