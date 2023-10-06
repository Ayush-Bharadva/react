import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
	const [amount, setAmount] = useState(0);
	const [amountConverted, setAmountConverted] = useState(0);
	const [from, setFrom] = useState("inr");
	const [to, setTo] = useState("usd");

	const currencyInfo = useCurrencyInfo(from);
	const currencyList = Object.keys(currencyInfo);

	const convertCurrency = () => {
		setAmountConverted(amount * currencyList[to]);
	};

	return (
		<div className="bg-blue-950 w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
			<div className="w-full">
				<h1 className="text-white text-3xl top-0 text-center my-4">
					Currency converter
				</h1>
				<div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}>
						<div className="w-full mb-1">
							<InputBox
								label="From"
								currencyOptions={currencyList}
							/>
						</div>
						<div className="relative w-full h-0.5">
							<button
								type="button"
								className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
								swap
							</button>
						</div>
						<div className="w-full mt-1 mb-4">
							<InputBox
								label="To"
								currencyOptions={currencyList}
								selectedCurrency="usd"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
							Convert
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
