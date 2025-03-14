import icons from "../assets/icons";

export default function Technologies() {
	return (
		<section>
			<h2>Technologies</h2>
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
			<h3>Learning</h3>
			<div className="skills-container">
				<span className="skill-element">
					Next.js
					<i className="devicon-nextjs-plain" />
				</span>
				<span className="skill-element">
					Kotlin
					<i className="devicon-kotlin-plain" />
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
	);
}
