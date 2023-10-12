import ThemeProvider from "./components/ThemeProvider";
import MainComponent from "./components/MainComponent";

function App() {
	return (
		<div className="parent">
			<ThemeProvider>
				<MainComponent />
			</ThemeProvider>
		</div>
	);
}

export default App;
