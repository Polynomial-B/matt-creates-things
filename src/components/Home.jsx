import { useRef, useState } from "react";
import Darklight from "./Darklight";
import Titles from "./Titles";
import { projects } from "../assets/constants";
import About from "./About";
import Technologies from "./Technologies";
import ProjectSection from "./ProjectSection";
import ExperienceSection from "./ExperienceSection";
import InterestsSection from "./InterestsSection";
import Footer from "./Footer";
import SectionBreak from "./SectionBreak";
import IconHome from "./IconHome";

function Home() {
	const [activeProject, setActiveProject] = useState(projects[0]);
	const homeRef = useRef();
	const aboutRef = useRef();
	const projectsRef = useRef();
	const contactRef = useRef();
	const [isDark, setIsDark] = useState(() => {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		return prefersDark ? "dark-mode" : "light-mode";
	});

	const handleSelectProject = (project) => {
		setActiveProject(project);
	};

	function handleIsDark() {
		setIsDark((previousState) => {
			const newState =
				previousState === "dark-mode" ? "light-mode" : "dark-mode";
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
			<nav>
				<div className="links-container">
					<div className="link-top">
						<button
							className="link-hover home-icon"
							translate="no"
							onClick={() =>
								homeRef.current?.scrollIntoView({
									behavior: "smooth",
								})
							}
						>
							<IconHome />
						</button>
						<Darklight
							isDark={isDark}
							handleIsDark={handleIsDark}
						/>
					</div>
					<div className="link-routes">
						<button
							className="link-hover"
							onClick={() =>
								projectsRef.current?.scrollIntoView({
									behavior: "smooth",
								})
							}
						>
							projects
						</button>
						<button
							className="link-hover"
							onClick={() =>
								aboutRef.current?.scrollIntoView({
									behavior: "smooth",
								})
							}
						>
							about
						</button>

						<button
							className="link-hover"
							onClick={() =>
								contactRef.current?.scrollIntoView({
									behavior: "smooth",
								})
							}
						>
							contact
						</button>
					</div>
				</div>
			</nav>

			<header id="splash" ref={homeRef}>
				<div id="splash-container">
					<div id="splash-text">
						<h1 translate="no" id="splash-title">
							<span>Matt</span>
							<span>Lamb</span>
						</h1>
						<Titles />
					</div>
				</div>
				<SectionBreak isDark={isDark} />
			</header>

			<main>
				<ProjectSection
					projectsRef={projectsRef}
					handleSelectProject={handleSelectProject}
					activeProject={activeProject}
				/>
				<SectionBreak isDark={isDark} />
				<About aboutRef={aboutRef} />
				<Technologies />
				<SectionBreak isDark={isDark} />
				<ExperienceSection />
				<SectionBreak isDark={isDark} />
				<InterestsSection isDark={isDark} />
				<SectionBreak isDark={isDark} />
			</main>
			<Footer contactRef={contactRef} isDark={isDark} />
		</>
	);
}

export default Home;
