import { useRef, Suspense, useState } from "react";
import icons from "../assets/icons";
import Darklight from "./Darklight";
import Titles from "./Titles";
import Image from "./Image";
import ErrorBoundary from "./ErrorBoundary";
import Project from "./Project";
import Experience from "./Experience";
import Currently from "./Interests";
import ProjectGrid from "./ProjectGrid";
import { projects } from "../assets/constants";
import { Break } from "./SVGImages";

function Home() {
	const [activeProject, setActiveProject] = useState(projects[0]);
	const aboutRef = useRef();
	const projectsRef = useRef();
	const contactRef = useRef();

	const handleSelectProject = (project) => {
		setActiveProject(project);
	};

	const getTheme = () => {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		return prefersDark ? "dark-mode" : "light-mode";
	};

	const [isDark, setIsDark] = useState(getTheme);

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
			<nav className="links-container">
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
						contactRef.current?.scrollIntoView({
							behavior: "smooth",
						})
					}
				>
					contact
				</button>
				<Darklight isDark={isDark} handleIsDark={handleIsDark} />
			</nav>
			<header id="splash">
				<div id="splash-container">
					<div id="splash-text">
						<h1 translate="no" id="splash-title">
							<span>Matt</span>
							<span>Lamb</span>
						</h1>
						<Titles />
					</div>
					<ErrorBoundary>
						<Suspense fallback={<div>Loading...</div>}>
							<Image
								imageSource={"/images/photo-1.png"}
								altText={"Portrait photo"}
							/>
						</Suspense>
					</ErrorBoundary>
				</div>
			</header>

			<main>
				<section ref={aboutRef}>
					<h2 id="about">About</h2>

					<p>
						{
							"Helping others is my motivation. I have been an advisor and provided mentorship in the public, charity and private sector for more than a decade. I'm a patient and compassionate person who is determined to find meaningful work in the world of software engineering."
						}
					</p>
				</section>
				<section>
					<h2>Skills</h2>
					<div className="skills-container">
						{icons.map((icon) => {
							return (
								<span className="skill-element" key={icon.name}>
									{icon.name}
									<i className={icon.icon} />
								</span>
							);
						})}
					</div>
					<h2>Learning</h2>
					<div className="skills-container">
						<span className="skill-element">
							Vue.js
							<i className="devicon-vuejs-plain" />
						</span>
						<span className="skill-element">
							Jest
							<i className="devicon-jest-plain" />
						</span>
					</div>
					<h2>Languages</h2>
					<ul className="languages">
						<li>
							<span className="language-header">English</span>
							<br />
							<span>native</span>
						</li>
						<li>
							<span className="language-header">Spanish</span>
							<br />
							<span>conversational</span>
						</li>
						<li>
							<span className="language-header">Basque</span>
							<br />
							<span>beginner</span>
						</li>
					</ul>
				</section>
				<section id="project-section" ref={projectsRef}>
					<h2>Projects</h2>
					<div className="project-container">
						<ErrorBoundary>
							<Suspense fallback={<div>Loading...</div>}>
								<ProjectGrid
									onProjectChange={handleSelectProject}
								/>
								<Project
									name={activeProject.name}
									description={activeProject.description}
									technologies={activeProject.technologies}
									imageSource={activeProject.imageSource}
									altText={activeProject.altText}
									github={activeProject.github}
									deployed={activeProject.deployed}
								/>
							</Suspense>
						</ErrorBoundary>
					</div>
				</section>
				<section>
					<h2>Experience</h2>
					<ul className="experience">
						<li>
							<Experience
								title="Software Engineering Student, General Assembly"
								dates="2024"
								list1="Learned full-stack technologies using SQL and NoSQL databases"
								list2="Contributed to daily standup, live classes and practical labs"
								list3="Worked on solo and paired projects within short timeframes"
								list4="Learned debugging, code refactoring and problem-solving"
							/>
						</li>
						<li>
							<Experience
								title="Private English Tutor"
								dates="2022 - present"
								list1="Managed personal brand: communication, marketing and self-promotion"
								list2="Created content, materials and curriculum: provided targets and activities"
								list3="Organised events: games, workshops and outings"
							/>
						</li>
						<li>
							<Experience
								title="Lifeboat Operations Coordinator, RNLI"
								dates="2020 - 2022"
								list1="Provided on-call support for lifeboats and lifeguards"
								list2="Trained and on-boarded staff, both in-person and remote"
								list3="Cleaned data and updated staff intranet"
								list4="Distributed physical and digital maps"
							/>
						</li>
					</ul>
				</section>
				<section>
					<h2>Interests</h2>
					<div className="interests">
						<Currently
							text="Producing"
							imageSource="/images/interest-image-three.svg"
							altText="Background, consisting of an imperfect circle with a gradient."
							body="I'm currently composing downtempo pop music using field-recordings and synthesisers"
						/>
						<Currently
							text="Music"
							imageSource="/images/interest-image-one.svg"
							altText="Background, consisting of an imperfect circle with a gradient."
							body="Click here for my current playlist"
							link="https://open.spotify.com/playlist/2CGZ5GkE9lrNpGjcGDySfP?si=lJlREEUhSk2RuODsMRjS7Q"
						/>
						<Currently
							text="Reading"
							imageSource="/images/interest-image-two.svg"
							altText="Background, consisting of an imperfect circle with a gradient."
							body="I'm currently reading 'A Ghost in the Throat' by Doireann Ní Ghríofa"
						/>
					</div>
				</section>
			</main>
			<footer>
				<div className="footer-container">
					<section className="contact" ref={contactRef}>
						<h2 id="contact">Contact</h2>
						<div id="footer-email">m.lamb.dev@gmail.com</div>
						<ul>
							<li className="contact-link">
								<a
									target="_blank"
									href="http://www.linkedin.com/in/matt-lamb-dev"
									rel="noopener noreferrer"
								>
									<figure>
										<figcaption>LinkedIn</figcaption>
										<i className="devicon-linkedin-plain" />
									</figure>
								</a>
							</li>
							<li className="contact-link">
								<a
									target="_blank"
									href="https://github.com/Polynomial-B"
									rel="noopener noreferrer"
								>
									<figure>
										<figcaption>GitHub</figcaption>
										<i className="devicon-github-original" />
									</figure>
								</a>
							</li>
							<li className="contact-link">
								<a
									target="_blank"
									href="mailto:m.lamb.dev@gmail.com"
								>
									<figure>
										<figcaption>E-mail</figcaption>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 448 512"
										>
											<path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144l256 0c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4 384 336c0 17.7-14.3 32-32 32L96 368c-17.7 0-32-14.3-32-32l0-125.6 136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z" />
										</svg>
									</figure>
								</a>
							</li>
						</ul>
						<div id="copyright">
							&copy; Matt Lamb {new Date().getFullYear()}
						</div>
						<div></div>
					</section>
					<div className="end">
						<Break isDark={isDark} />
					</div>
				</div>
			</footer>
		</>
	);
}

export default Home;
