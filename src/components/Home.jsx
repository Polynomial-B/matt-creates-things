import { useRef, useEffect, useState, Suspense } from "react";
import Darklight from "./Darklight";
import Titles from "./Titles";
import icons from "../assets/icons";
import "../App.css";
import ProjectImage from "./ProjectImage";
import ErrorBoundary from "./ErrorBoundary";

function Home() {
	const aboutRef = useRef();
	const projectsRef = useRef();
	const contactRef = useRef();
	const homeRef = useRef();

	return (
		<>
			{/* <Darklight/> */}
			<header id="splash" ref={homeRef}>
				<div id="splash-container">
					<h1 translate="no" id="splash-title">
						Matt Lamb
					</h1>
					<Titles />
					<img
						src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
						alt=""
						draggable="false"
					/>
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
					</nav>
				</div>
			</header>

			<main>
				<section>
					<h2 id="about" ref={aboutRef}>
						About
					</h2>
					<p>
						A full-stack web developer, interested in building
						creative/innovative/smart/impactful applications.
					</p>
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
								<div className="skill-element" key={icon.name}>
									{icon.name}
									<i className={icon.icon} />
								</div>
							);
						})}
					</div>
					<h2>Learning</h2>
					<div className="skills-container">
						<div className="skill-element">
							Next.js
							<i className="devicon-nextjs-plain" />
						</div>
						<div className="skill-element">
							Jest
							<i className="devicon-jest-plain" />
						</div>
					</div>
					<h2>Languages</h2>
					<ul>
						<li>English (fluent)</li>
						<li>Spanish (conversational)</li>
						<li>Basque (beginner)</li>
					</ul>
				</section>
				<section id="project-section">
					<h2 id="projects" ref={projectsRef}>
						Projects
					</h2>
					<div className="project-container">
						<div className="project-card">
							<div className="card-image">
							<ErrorBoundary>
									<Suspense>
										<ProjectImage
											// imageSource={"src/assets/cosmic-ray-screenshot.png"}
											altText={"Space-themed arcade game with moving planets, asteroids and a manta ray"}
										/>
									</Suspense>
								</ErrorBoundary>
							</div>
							<div className="card-content">
								<h3 className="card-title">SynthSounds</h3>
								<div className="card-description">
									<p>10 Days | Solo Project</p>
									<p>
										React.js, Tone.js, Heroku, Django,
										PostgreSQL
									</p>
								</div>
							</div>
						</div>
						<div className="project-card">
							<div className="card-image">
							<ErrorBoundary>
									<Suspense>
										<ProjectImage
											// imageSource={"src/assets/cosmic-ray-screenshot.png"}
											altText={"Space-themed arcade game with moving planets, asteroids and a manta ray"}
										/>
									</Suspense>
								</ErrorBoundary>
							</div>
							<div className="card-content">
								<h3 className="card-title">Shirtify</h3>
								<div className="card-description">
									<p>7 Days | Paired Project</p>
									<p>
										MongoDB, Express.js, React.js, Node.js
									</p>
								</div>
							</div>
						</div>
						<div className="project-card">
							<div className="card-image">
							<ErrorBoundary>
									<Suspense>
										<ProjectImage
											// imageSource={"src/assets/cosmic-ray-screenshot.png"}
											altText={"Space-themed arcade game with moving planets, asteroids and a manta ray"}
										/>
									</Suspense>
								</ErrorBoundary>
							</div>
							<div className="card-content">
								<h3 className="card-title">MycoProject</h3>
								<div className="card-description">
									<p>7 Days | Solo Project</p>
									<p>MongoDB, Express.js, Node.js, EJS</p>
								</div>
							</div>
						</div>
						<div className="project-card">
							<div className="card-image">
								<ErrorBoundary>
									<Suspense>
										<ProjectImage
											imageSource={"src/assets/cosmic-ray-screenshot.png"}
											altText={"Space-themed arcade game with moving planets, asteroids and a manta ray"}
										/>
									</Suspense>
								</ErrorBoundary>
							</div>
							<div className="card-content">
								<h3 className="card-title">Cosmic Ray</h3>
								<div className="card-description">
									<p>7 Days | Solo Project</p>
									<p>JavaScript, HTML and CSS</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<h2>Experience</h2>
					<ul>
						<li>General Assembly, SEB - 2024</li>
						<li>Private English Tutor - dates</li>
						<li>Lifeboat Operations Coordinator, RNLI - dates</li>
					</ul>
				</section>
				<section>
					<h2>Interests</h2>
					<ul>
						<li>Sound design - visual elements</li>
						<li>Linguistics - visual elements</li>
					</ul>
					<h2>Currently</h2>
					<ul>
						<li>listening to / current playlist ... </li>
						<li>reading Dawn by Octavia E. Butler</li>
					</ul>
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
					<button
						className="scroll-to-top"
						onClick={() =>
							homeRef.current?.scrollIntoView({
								behavior: "smooth",
							})
						}
					>
						scroll to top
					</button>
				</section>
				<section className="legal">
					<div id="footer-email">m.lamb.dev@gmail.com</div>
					<div>&copy; Matt Lamb {new Date().getFullYear()}</div>
				</section>
			</footer>
		</>
	);
}

export default Home;
