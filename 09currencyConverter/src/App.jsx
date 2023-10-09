import { useState, useRef, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
	const [amount, setAmount] = useState(0);
	const [convertedAmount, setConvertedAmount] = useState(0);
	const [fromCurrency, setFromCurrency] = useState("usd");
	const [toCurrency, setToCurrency] = useState("inr");

	// currency data from custom hook
	const currencyInfo = useCurrencyInfo(fromCurrency);

	useEffect(() => {
		convertCurrency();
	}, [amount, fromCurrency, toCurrency, currencyInfo]);

	// retreiving keys from currencyInfo
	const currencyOptions = Object.keys(currencyInfo);

	const convertCurrency = () => {
		let convertedCurrency = amount * currencyInfo[toCurrency];

		console.log("convertedCurrency :", convertedCurrency);
		setConvertedAmount(convertedCurrency);
	};

	// to swap currency
	const swap = () => {
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
		setAmount(convertedAmount);
		setConvertedAmount(amount);
	};

	const formRef = useRef(null);

	return (
		<>
			<div className="w-full h-screen bg-blue-400 flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
				<form
					ref={formRef}
					action=""
					onSubmit={(e) => {
						e.preventDefault();
						convertCurrency();
					}}>
					<div className="w-full">
						<h1 className="text-white text-3xl text-center top-0 my-4">
							Currency Converter
						</h1>
						<div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/20">
							<div className="w-full mb-2">
								<InputBox
									label="From"
									amount={amount}
									currencyList={currencyOptions}
									onAmountChange={(amount) =>
										setAmount(amount)
									}
									onCurrencyChange={(currency) =>
										setFromCurrency(currency)
									}
									selectedCurrency={fromCurrency}
								/>
							</div>
							<div className="relative w-full h-0.5">
								<input
									type="button"
									value={"swap"}
									className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-700 text-white px-2 py-1"
									onClick={swap}
								/>
							</div>
							<div className="w-full mb-2">
								<InputBox
									label="To"
									amount={convertedAmount || 0}
									currencyList={currencyOptions}
									selectedCurrency={toCurrency}
									onCurrencyChange={(currency) =>
										setToCurrency(currency)
									}
									fieldDisabled
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-blue-700 text-white px-4 py-3 rounded-lg"
								onClick={convertCurrency}>
								Convert {fromCurrency.toUpperCase()} to{" "}
								{toCurrency.toUpperCase()}
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default App;
