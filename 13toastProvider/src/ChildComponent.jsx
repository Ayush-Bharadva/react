import React from "react";
import "./App.scss";
import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

function ChildComponent() {
	const { showToast } = useContext(ToastContext);

	const handleShowMessage = (type) => {
		const message = `this is message of ${type} for child Component`;
		showToast(message, type);
	};

	return (
		<div className="child-component">
			<h1>ChildComponent</h1>
			<button onClick={() => handleShowMessage("success")}>
				Show success
			</button>
			<button onClick={() => handleShowMessage("error")}>
				Show error
			</button>
		</div>
	);
}

export default ChildComponent;
