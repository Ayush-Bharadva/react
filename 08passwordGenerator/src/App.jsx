import { useState, useCallback, useEffect, useRef } from "react";
// import "./App.css";

function App() {
	const [length, setLength] = useState(8);
	const [numbersAllowed, setNumbersAllowed] = useState(false);
	const [charsAllowed, setCharsAllowed] = useState(false);
	const [password, setPassword] = useState("");

	// useCallback Hook
	const passwordGenerator = useCallback(() => {
		let generatedPassword = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (numbersAllowed) {
			str += "0123456789";
		}
		if (charsAllowed) {
			str += "!@#$%^&*()_+";
		}

		for (let i = 0; i <= length; i++) {
			let randomIndex = Math.floor(Math.random() * str.length + 1);
			generatedPassword += str.charAt(randomIndex);
		}

		setPassword(generatedPassword);
	}, [length, numbersAllowed, charsAllowed]);

	// useRef hook
	const passwordRef = useRef(null);

	// useCallback + useRef
	// function to copy password to clipBoard
	const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current?.select();
		window.navigator.clipboard.writeText(password);
	}, [password]);

	// useEffect hook
	useEffect(() => {
		passwordGenerator();
	}, [length, numbersAllowed, charsAllowed]);

	return (
		<>
			<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-4 my-8 text-orange-500 bg-gray-800">
				<div className="flex shadow rounded-lg overflow-hidden mb-4">
					<input
						type="text"
						value={password}
						className="outline-none w-full py-1 px-3"
						placeholder="password.."
						ref={passwordRef}
						readOnly
					/>
					<button
						className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
						onClick={copyPasswordToClipboard}>
						copy
					</button>
				</div>
				<div className="flex text-sm gap-x-2">
					<div className="flex items-center gap-x-1">
						<input
							type="range"
							min={8}
							max={50}
							value={length}
							className="cursor-pointer"
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
						<label htmlFor="">Lenght : {length}</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							id="numberInput"
							defaultChecked={numbersAllowed}
							onChange={() => {
								setNumbersAllowed((check) => !check);
							}}
						/>
						<label htmlFor="numberInput">Numbers</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							id="characterInput"
							defaultChecked={charsAllowed}
							onChange={() => {
								setCharsAllowed((check) => !check);
							}}
						/>
						<label htmlFor="characterInput">Characters</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

/* 
return (
		<>
			<div className="container">
				<div className="fields">
					<input type="text" />
					<button>Copy</button>
				</div>
				<div className="selectors">
					<div className="field">
						<input type="range" name="" id="length" />
						<label htmlFor="length">Length({length})</label>
					</div>
					<div className="field">
						<input type="checkbox" id="numbers" />
						<label htmlFor="numbers">Numbers</label>
					</div>
					<div className="field">
						<input type="checkbox" id="characters" />
						<label htmlFor="characters">Characters</label>
					</div>
				</div>
			</div>
		</>
	);
*/
