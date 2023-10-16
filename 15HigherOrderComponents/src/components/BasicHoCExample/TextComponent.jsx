// A component to change bg-color of hovered text.

// function TextComponent({ text }) {
// 	const [isHovered, setIsHovered] = useState(false);

// 	const handleMouseEnter = () => {
// 		setIsHovered(true);
// 	};
// 	const handleMouseLeave = () => {
// 		setIsHovered(false);
// 	};

// 	return (
// 		<div>
// 			<p
// 				style={{ backgroundColor: isHovered ? "orange" : "blue" }}
// 				onMouseEnter={handleMouseEnter}
// 				onMouseLeave={handleMouseLeave}>
// 				{text}
// 			</p>
// 		</div>
// 	);
// }

// Updated TextComponent with logic Of HigherOrderFunction i.e WithHover

function TextComponent({ text, isHovered }) {
	return (
		<p style={{ backgroundColor: isHovered ? "orange" : "blue" }}>{text}</p>
	);
}

export default TextComponent;
