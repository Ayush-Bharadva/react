import "./App.css";
import TextComponent from "./components/BasicHoCExample/TextComponent";
import InputComponent from "./components/BasicHoCExample/InputComponent";
import WithHover from "./components/BasicHoCExample/WithHover";
import WithDataFetch from "./components/FetchDataWithHoc/WithDataFetch";
import PostComponent from "./components/FetchDataWithHoc/PostComponent";
import WithTranslation from "./components/Internationalization/WithTranslation";
import Login from "./components/Internationalization/Login";
import i18n from "./components/Internationalization/languages";

console.log("languages :", i18n);

// Example 1 : Using basic HoC
const TextComponentWithHover = WithHover(TextComponent); // New Text component with Hover functionality
const InputComponentWithHover = WithHover(InputComponent); // New Input With Hover functionality

// Example 2 : Using HoC with Async and Await

const fetchPosts = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await response.json();
	return data;
};

const PostComponentWithData = WithDataFetch(PostComponent, fetchPosts);

// Example 3 : Translation and Language Switching

const LoginComponentWithTransition = WithTranslation(Login, i18n);

function App() {
	return (
		<>
			<div>
				<LoginComponentWithTransition />
			</div>
			<hr />
			<div>
				<h2>Higher Order Components</h2>
				<TextComponentWithHover
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat."
				/>
				<InputComponentWithHover type="text" />
			</div>
			<hr />
			<div>
				<h2>Async-Await with HoC</h2>
				<PostComponentWithData myName="React" />
			</div>
			<hr />
		</>
	);
}

export default App;
