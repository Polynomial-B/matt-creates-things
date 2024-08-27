import "../Nav.css";
import { useState } from "react";

function Nav() {
	const getTheme = () => {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		return prefersDark ? "dark-mode" : "light-mode";
	};

    const getLang = navigator.language
    console.log(getLang)

	const [isDark, setIsDark] = useState(getTheme);
    const [isEnglish, setIsEnglish] = useState(getLang)

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
			<nav>
				{/* <button>{isEnglish}</button> */}
				<button onClick={handleClick} className={isDark}>{isDark === "dark-mode" ? "🌞" : "🌑" }</button>
			</nav>
		</>
	);
}

export default Nav;
