import { Children } from "react";

function RowList({ children }) {
	return (
		<>
			<h1>Total rows : {Children.count(children)} </h1>

			{Children.map(children, (child) => (
				<h1>{child}</h1>
			))}
		</>
	);
}

export default RowList;
