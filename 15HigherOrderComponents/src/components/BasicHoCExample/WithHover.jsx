import React, { useState } from "react";

// Higher order function to detect the hover logic and what to do with it..

function WithHover(WrappedComponent) {
	return function (props) {
		const [isHovered, setIsHovered] = useState(false);

		const handleMouseEnter = () => {
			setIsHovered(true);
		};
		const handleMouseLeave = () => {
			setIsHovered(false);
		};

		return (
			<div
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<WrappedComponent {...props} isHovered={isHovered} />
			</div>
		);
	};
}

export default WithHover;
