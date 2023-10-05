function customRender(reactElement, container) {
	/* version:1
	const domElement = document.createElement(reactElement.type);
	domElement.setAttribute("href", reactElement.props.href);
	domElement.setAttribute("target", reactElement.props.target);
	domElement.innerHTML = reactElement.content;
	container.appendChild(domElement); 
    */

	/* versin:2 */
	const domElement = document.createElement(reactElement.type);
	for (const prop in reactElement.props) {
		domElement.setAttribute(prop, reactElement.props[prop]);
	}
	domElement.innerHTML = reactElement.content;
	container.appendChild(domElement);
}

const reactElement = {
	type: "a",
	props: {
		href: "https://youtube.com",
		target: "_blank",
	},
	content: "Click to visit youtube.com",
};

const root = document.getElementById("root");

customRender(reactElement, root);
