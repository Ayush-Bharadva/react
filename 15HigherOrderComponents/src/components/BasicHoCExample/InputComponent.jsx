import React from "react";

// Simple Input Component

function InputComponent({ type, isHovered }) {
	return (
		<input
			type={type}
			value="ReadOnly Input"
			readOnly
			style={{ backgroundColor: isHovered ? "orange" : "green" }}
		/>
	);
}

export default InputComponent;
