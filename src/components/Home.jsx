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

function Home() {
	const [activeProject, setActiveProject] = useState(projects[0]);
	const aboutRef = useRef();
	const projectsRef = useRef();
	const contactRef = useRef();
	const homeRef = useRef();

	const handleSelectProject = (project) => {
		setActiveProject(project);
		console.log(activeProject);
	};

	return (
		<>
			<nav className="links-container" ref={homeRef}>
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
				<Darklight />
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
						<Suspense>
							<Image
								imageSource={"/images/photo-1.png"}
								altText={"Portrait photo"}
							/>
						</Suspense>
					</ErrorBoundary>
				</div>
			</header>

			<main>
				<section>
					<h2 id="about" ref={aboutRef}>
						About
					</h2>

					<p>
						{
							"I am passionate about helping people. I have given in-person and remote advice and provided mentorship in different industries. I'm a patient and compassionate person with a good analytical side who is focused on finding meaningful work in the world of software engineering."
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
							Next.js
							<i className="devicon-nextjs-plain" />
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
				<section id="project-section">
					<h2 ref={projectsRef}>Selected Projects</h2>
					<div className="project-container">
						<ProjectGrid onProjectChange={handleSelectProject} />
						<Project
							name={activeProject.name}
							description={activeProject.description}
							technologies={activeProject.technologies}
							imageSource={activeProject.imageSource}
							altText={activeProject.altText}
							github={activeProject.github}
							deployed={activeProject.deployed}
						/>
					</div>
				</section>
				<section>
					<h2>Experience</h2>
					<ul className="experience">
						<li>
							<div>
								<ErrorBoundary>
									<Suspense>
										<Image
											imageSource={
												"/images/general-assembly-cog-logo.png"
											}
											altText={
												"Red mechanical cog with letters 'GA' inside"
											}
										/>
									</Suspense>
								</ErrorBoundary>
							</div>
							<Experience
								title="Sofware Engineering Bootcamp, General Assembly"
								dates="2024"
								list1="Experience with frontend and backend development, integrating APIs and managing databases."
								list2="Experience with debugging, code refactoring and problem-solving."
								list3="Daily standup, live classes, and practical labs."
							/>
						</li>
						<li>
							<div>
								<ErrorBoundary>
									<Suspense>
										<Image
											imageSource={"/images/logo.png"}
											altText={
												"isometric image of letters 'ML', with colour distortion"
											}
										/>
									</Suspense>
								</ErrorBoundary>
							</div>
							<Experience
								title="Private English Tutor"
								dates="2022 - present"
								list1="Managed personal brand: communication, marketing and self-promotion."
								list2="Created content, materials and curriculum: provided targets and activities."
								list3="Organised events: game events, workshops and outings."
							/>
						</li>
						<li>
							<div>
								<ErrorBoundary>
									<Suspense>
										<Image
											imageSource={
												"/images/RNLI-logo.png"
											}
											altText={
												"Flag with red cross and blue outline containing a gold crown, gold anchor and 'RNLI' in red"
											}
										/>
									</Suspense>
								</ErrorBoundary>
							</div>
							<Experience
								title="Lifeboat Operations Coordinator, RNLI"
								dates="2020 - 2022"
								list1="Managed annual tidal almanac distribution and updated physical and digital maps."
								list2="Circulated critical safety notices across the British Isles and provided on-call support for lifesaving teams."
								list3="Optimised database and intranet, ensuring content accuracy."
								list4="Trained staff, both in-person and remote."
							/>
						</li>
					</ul>
				</section>
				<section>
					<h2>Interests</h2>
					<div className="interests">
						<Currently
							text="Music"
							imageSource="/images/listening-to.jpg"
							altText="Four album covers"
							playlist="playlist"
							link="https://open.spotify.com/playlist/2CGZ5GkE9lrNpGjcGDySfP?si=lJlREEUhSk2RuODsMRjS7Q"
						/>
						<Currently
							text="Reading..."
							imageSource="/images/dawn-octavia-butler.jpg"
							altText="A book cover. Green red and yellow with a face obscured in the colours."
						/>
					</div>
				</section>
			</main>
			<footer>
				<section className="contact">
					<h2 id="contact" ref={contactRef}>
						Contact
					</h2>
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
				</section>
				<section className="legal">
					<button
						className="scroll-to-top link-hover"
						onClick={() =>
							homeRef.current?.scrollIntoView({
								behavior: "smooth",
							})
						}
					>
						<span>scroll to top</span>
					</button>
					{/* <div id="footer-email">m.lamb.dev@gmail.com</div> */}
					<div id="copyright">
						&copy; Matt Lamb {new Date().getFullYear()}
					</div>
				</section>
			</footer>
		</>
	);
}

export default Home;
