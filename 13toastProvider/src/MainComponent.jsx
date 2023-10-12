import { useContext } from "react";
import { ToastContext } from "./ToastProvider";
import ChildComponent from "./ChildComponent";
import "./App.scss";

const MainComponent = () => {
	const { showToast } = useContext(ToastContext);

	const handleShowToast = (type) => {
		const message = `This is a ${type} toast!`;
		showToast(message, type);
	};

	return (
		<div className="main-component">
			<h1>Main Component</h1>
			<button onClick={() => handleShowToast("success")}>
				Show Success Toast
			</button>
			<button onClick={() => handleShowToast("error")}>
				Show Error Toast
			</button>
			<ChildComponent />
		</div>
	);
};

export default MainComponent;
