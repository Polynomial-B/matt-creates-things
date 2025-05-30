import IconLight from "./IconLight";
import IconDark from "./IconDark";

function Darklight({ handleIsDark, isDark }) {
	return (
		<>
			<button
				onClick={handleIsDark}
				className="link-hover light-dark"
				title={`Activate ${
					isDark === "dark-mode" ? "light-mode" : "dark-mode"
				}`}
			>
				{isDark === "dark-mode" ? <IconLight /> : <IconDark />}
			</button>
		</>
	);
}

export default Darklight;
