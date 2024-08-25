import '../App.css'


function Home() {
	return (
		<>
			<header id="splash">
				<h1 translate="no">Matt<br/>Lamb</h1>
                <div className="splash-container">
                <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt=""/>
                {/* <figcaption>&copy; Matt Lamb {new Date().getFullYear()}</figcaption> */}
                </div>
			</header>
            <section>
                <h2>About Me</h2>
                <p>A full-stack web developer, interested in building creative/innovative/smart/impactful applications.</p>
                <p>{"I've always had an interest in functionality. My professional journey has allowed me to engage deeply with the welfare state, espresso, all-weather lifeboats, cartography and linguistics. I love learning and deepening my understanding, especially when I can apply it practically. I'm drawn to Software Engineering for its vast applications and creativity. Most of all, I find it immensely satisfying to build something and understand how it works."}</p>
                <h2>Skills</h2>
                Tech Skills
				<ul>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li><img src="" alt=""/>HTML</li>
                    <li>CSS</li>
                    <li>TypeScript</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>PostgreSQL</li>
                    <li>Git/GitHub</li>
                    <li>MongoDB</li>
                    <li>Heroku</li>
                    <li>NPM/PIP</li>
                </ul>
                Languages
            </section>
            <section>
				<h2>Currently Learning...</h2>
				<ul>
                    <li>Next.js</li>
                </ul>
			</section>
			<section>
				<h2>Projects</h2>
				<h3>SynthSounds | 10 Days | Solo Project</h3>
                <span>GIF, slow enough to see, slow down on hover?</span>
                <p>React.js, Tone.js, Heroku, Django, PostgreSQL</p>
                <h3>Shirtify | 7 Days | Paired Project</h3>
                <p>MongoDB, Express.js, React.js, Node.js</p>
                <h3>MycoProject | 7 Days | Solo Project</h3>
                <p>MongoDB, Express.js, Node.js, EJS</p>
                <h3>Cosmic Ray | 7 Days | Solo Project</h3>
                <p>JavaScript, HTML and CSS</p>
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
                <h2>Currently...</h2>
                <ul>
                    <li>listening to / current playlist ... </li>
                    <li>reading Dawn by Octavia E. Butler</li>
                </ul>
			</section>
			<footer>
                <ul>
                    <li>
                        <a target="_blank" href="http://www.linkedin.com/in/matt-lamb-dev" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/Polynomial-B" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a target="_blank" href="mailto:m.lamb.dev@gmail.com" rel="noopener noreferrer">m.lamb.dev@gmail.com</a>
                    </li>
                </ul>
                App made using React.js
            </footer>
		</>
	);
}

export default Home;
