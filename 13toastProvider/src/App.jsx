import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import ToastProvider from "./ToastProvider";
import MainComponent from "./MainComponent";

function App() {
	return (
		<>
			<div className="body">
				<ToastProvider>
					<MainComponent />
					<ToastContainer />
				</ToastProvider>
			</div>
		</>
	);
}

export default App;
