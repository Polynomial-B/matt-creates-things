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
						list1="Built solo and paired full-stack apps in short timeframes. Contributed to daily standup. Presented and showcased completed projects."
					/>
				</li>
				{/* <li>
					<Experience
						title="Private English Tutor"
						dates="2023 - 2025"
						list1="Grew personal business. Taught classes and hosted events across Bilbao for children and adults."
					/>
				</li> */}
				<li>
					<Experience
						title="Lifeboat Operations Coordinator, RNLI"
						dates="2020 - 2023"
						list1="Updated and distributed charts for British Isles. Supported central Operations Room in safety-critical role."
					/>
				</li>
			</ul>
		</section>
	);
}
