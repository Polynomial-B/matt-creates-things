import "../App.css";
import "../index.css";
import "../Darklight.css";
import { useState } from "react";

function Darklight() {
	const getTheme = () => {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		return prefersDark ? "dark-mode" : "light-mode";
	};

	const [isDark, setIsDark] = useState(getTheme);

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
	
			return newState;
		});
	}

	return (
		<>
				{/* <button>{isEnglish}</button> */}
				<button onClick={handleClick} id={isDark} className="link-hover" title={`Activate ${isDark === "dark-mode" ? "light-mode" : "dark-mode"}`}>{isDark === "dark-mode" ? "lightmode" : "darkmode" }</button>
		</>
	);
}

export default Darklight;
