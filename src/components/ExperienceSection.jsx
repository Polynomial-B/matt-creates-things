import Experience from "./Experience";

export default function ExperienceSection() {
	return (
		<section>
			<h2>Experience</h2>
			<ul className="experience">
				<li>
					<Experience
						title="Freelance Software Developer"
						dates="2025 - present"
						list1="Working with UI/UX designers to create applications for businesses using modern frameworks, including SvelteKit and Next.js."
					/>
				</li>
				<li>
					<Experience
						title="Software Engineering Student, General Assembly"
						dates="2024"
						list1="Built full-stack applications in an agile team environment, practising daily stand-ups and pair programming across projects including an experimental synthesizer (React, Django, JWT), a MERN e-commerce prototype, and a retro arcade game."
					/>
				</li>
				<li>
					<Experience
						title="Lifeboat Operations Coordinator, RNLI"
						dates="2020 - 2023"
						list1="Managed safety-critical operations including duty officer handovers, staff training, and the distribution of nautical charts to lifeboat stations across the British Isles. Optimised operational databases and intranet workflows while circulating safety-critical notices and coordinating yearly tidal almanac distribution."
					/>
				</li>
			</ul>
		</section>
	);
}
