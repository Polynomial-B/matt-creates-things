import "../Darklight.css";
import { useState } from "react";

function Darklight() {
	const getTheme = () => {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		return prefersDark ? "dark-mode" : "light-mode";
	};

    // const getLang = navigator.language
    // console.log(getLang)

	const [isDark, setIsDark] = useState(getTheme);
    // const [isEnglish, setIsEnglish] = useState(getLang)

	function handleClick() {
		setIsDark(previousState => {
			const newState = previousState === "dark-mode" ? "light-mode" : "dark-mode";
			if (newState === "light-mode") {
				document.body.classList.remove("dark-mode");
				document.body.classList.add("light-mode");
			} else {
				document.body.classList.remove("light-mode");
				document.body.classList.add("dark-mode");
			}
	
			console.log(newState);
			return newState;
		});
	}

	return (
		<>
			<nav className="dark-light">
				{/* <button>{isEnglish}</button> */}
				<button onClick={handleClick} id="toggle" className={isDark} title={`Activate ${isDark === "dark-mode" ? "light-mode" : "dark-mode"}`}>{isDark === "dark-mode" ? <img width="44" src="src/assets/mercury.png"></img> : "🌑" }</button>
			</nav>
		</>
	);
}

export default Darklight;
