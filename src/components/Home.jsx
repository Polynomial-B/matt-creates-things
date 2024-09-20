import { useRef, Suspense } from "react";
import icons from "../assets/icons";
import "../App.css";
import Darklight from "./Darklight";
import Titles from "./Titles";
import Image from "./Image";
import ErrorBoundary from "./ErrorBoundary";
import Project from "./Project";
import Experience from "./Experience";
import Currently from "./Currently";

function Home() {
	const aboutRef = useRef();
	const projectsRef = useRef();
	const contactRef = useRef();
	const homeRef = useRef();

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
					<img
						src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
						alt=""
						draggable="false"
					/>
				</div>
			</header>

			<main>
				<section>
					<h2 id="about" ref={aboutRef}>
						About
					</h2>

					<p>
						{
							"UPDATE: I've always had an interest in functionality. My professional journey has allowed me to engage deeply with the welfare state, espresso, all-weather lifeboats, cartography and linguistics. I love learning and deepening my understanding, especially when I can apply it practically. I'm drawn to Software Engineering for its vast applications and creativity. Most of all, I find it immensely satisfying to build something and understand how it works."
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
					<h2 ref={projectsRef}>Projects</h2>
					<div className="project-container">
						<Project
							name="SynthSounds"
							description="9 Days (Solo Project)"
							technologies="React.js, Tone.js, Django, postgreSQL, Heroku"
							imageSource="src/assets/synth-screenshot.png"
							altText="A musical synthesiser with each key as a small square in a grid."
						/>
						<Project
							name="Shirtify"
							description="7 Days (Paired Project)"
							technologies="React.js, MongoDB, Express.js, Node.js"
							imageSource="src/assets/shirtify-home.png"
							altText="Large red text 'Shirtify', man in green t-shirt and hat, smiling."
						/>
						<Project
							name="MycoProject"
							description="7 Days (Solo Project)"
							technologies="MongoDB, Express.js, Node.js, EJS"
							imageSource="src/assets/myco-home.webp"
							altText="Colourful cartoon background. Grid showing 8 mushroom species, some with toxic symbols."
						/>
						<Project
							name="Cosmic Ray"
							description="7 Days (Solo Project)"
							technologies="JavaScript, HTML and CS"
							imageSource="src/assets/cosmic-ray-screenshot.webp"
							altText="Space-themed background with moving planets, asteroids and a manta ray, in an retro game machine style."
						/>
					</div>
				</section>
				<section>
					<h2>Experience</h2>
					<ul className="experience">
						<li>
							<div className="experience-img">
								<ErrorBoundary>
									<Suspense>
										<Image
											imageSource={
												"./src/assets/general-assembly-cog-logo.png"
											}
											altText={
												"Red mechanical cog with 'GA' inside"
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
							<div className="experience-img">
								<ErrorBoundary>
									<Suspense>
										<Image imageSource={""} altText={""} />
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
							<div className="experience-img">
								<ErrorBoundary>
									<Suspense>
										<Image
											imageSource={
												"./src/assets/RNLI-logo.png"
											}
											alt={
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
								list3="Optimized database and intranet, ensuring content accuracy, and trained new staff both in-person and remotely."
							/>
						</li>
					</ul>
				</section>
				<section>
					<h2>Currently</h2>
					<div className="interests">
						<Currently
							text="Listening to..."
							imageSource="src/assets/wham-last-christmas.jpg"
							altText=""
						/>
						<Currently
							text="Reading..."
							imageSource="src/assets/dawn-octavia-butler.jpg"
							altText=""
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
								rel="noopener noreferrer"
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
					<div id="footer-email">m.lamb.dev@gmail.com</div>
					<div id="copyright">
						&copy; Matt Lamb {new Date().getFullYear()}
					</div>
				</section>
			</footer>
		</>
	);
}

export default Home;
