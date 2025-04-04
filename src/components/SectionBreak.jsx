export default function SectionBreak({ isDark }) {
	return (
		<div
			style={{
				width: "100vw",
				marginLeft: "calc(-50vw + 50%)",
				height: "50px",
				overflow: "hidden",
				lineHeight: 0,
			}}
		>
			<svg
				viewBox="0 0 1200 50"
				preserveAspectRatio="none"
				style={{ display: "block", width: "100%", height: "100%" }}
			>
				<defs>
					<linearGradient
						id="gradient_break"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="0%"
					>
						<stop
							offset={isDark === "dark-mode" ? "20%" : "10%"}
							stopColor={
								isDark === "dark-mode" ? "#cf79ff" : "#0c2c59"
							}
						></stop>
						<stop
							offset={isDark === "dark-mode" ? "45%" : "15%"}
							stopColor={
								isDark === "dark-mode" ? "#85fcea" : "#512CBE"
							}
						></stop>
						<stop
							offset={isDark === "dark-mode" ? "48%" : "30%"}
							stopColor={
								isDark === "dark-mode" ? "#85fcea" : "#961796"
							}
						></stop>
						<stop
							offset={isDark === "dark-mode" ? "50%" : "35%"}
							stopColor={
								isDark === "dark-mode" ? "#85fcea" : "#961796"
							}
						></stop>
						<stop
							offset={isDark === "dark-mode" ? "52%" : "85%"}
							stopColor={
								isDark === "dark-mode" ? "#85fcea" : "#512CBE"
							}
						></stop>
						<stop
							offset={isDark === "dark-mode" ? "85%" : "95%"}
							stopColor={
								isDark === "dark-mode" ? "#cf79ff" : "#0c2c59"
							}
						></stop>
					</linearGradient>
				</defs>
				<path
					d="M0,30
                    C30,5 60,55 90,30
                    C120,10 150,50 180,30
                    C210,15 240,45 270,30
                    C300,5 330,55 360,30
                    C390,10 420,50 450,30
                    C480,5 510,55 540,30
                    C570,10 600,50 630,30
                    C660,5 690,55 720,30
                    C750,10 780,50 810,30
                    C840,5 870,55 900,30
                    C930,10 960,50 990,30
                    C1020,5 1050,55 1080,30
                    C1110,15 1140,45 1170,30
                    C1185,20 1190,40 1300,30"
					stroke="url(#gradient_break)"
					strokeWidth="5"
					fill="none"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	);
}
