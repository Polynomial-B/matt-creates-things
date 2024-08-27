import "../Nav.css";
import { useState } from "react";

function Nav() {
	const getTheme = () => {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		return prefersDark ? "dark" : "light";
	};

    const getLang = navigator.language
    console.log(getLang)

	const [isDark, setIsDark] = useState(getTheme);
    const [isEnglish, setIsEnglish] = useState(getLang)

    function handleClick() {
        if (isDark === 'dark') {
            setIsDark('light');
            console.log(isDark)
        } else {
            setIsDark('dark');
            console.log(isDark)
        }
    }

	return (
		<>
			<nav>
				{/* <button>{isEnglish}</button> */}
				<button onClick={handleClick} className={isDark}>{isDark === "dark" ? "🌕" : "🌙"}</button>
			</nav>
		</>
	);
}

export default Nav;
