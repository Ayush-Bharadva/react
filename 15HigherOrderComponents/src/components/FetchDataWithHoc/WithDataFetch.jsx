import React, { useState, useEffect } from "react";

// higher order component which takes PostComponent as paramenter and a method to fetch data and returns a new component.
// Naming-rule : name HoC starting from "With"

function WithDataFetch(WrappedComponent, fetchData) {
	return function (props) {
		const [data, setData] = useState(null);
		const [isLoading, setIsLoading] = useState(true);
		const [error, setError] = useState(null);

		useEffect(() => {
			const fetchWrapper = async () => {
				try {
					const data = await fetchData();
					setData(data);
					setIsLoading(false);
				} catch (error) {
					setError(error);
					setIsLoading(false);
				}
			};
			fetchWrapper();
		}, []);

		return (
			<WrappedComponent
				{...props}
				data={data}
				isLoading={isLoading}
				error={error}
			/>
		);
	};
}

export default WithDataFetch;
