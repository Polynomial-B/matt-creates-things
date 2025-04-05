import Experience from "./Experience";

export default function ExperienceSection() {
	return (
		<section>
			<h2>Experience</h2>
			<ul className="experience">
				<li>
					<Experience
						title="Software Engineering Student, General Assembly"
						dates="2024"
						list1="Built solo and paired full-stack apps in short timeframes. Contributed to daily standup. Presented and showcased completed projects."
					/>
				</li>
				<li>
					<Experience
						title="Private English Tutor"
						dates="2022 - present"
						list1="Grew personal business. Taught classes and hosted events across Bilbao for children and adults."
					/>
				</li>
				<li>
					<Experience
						title="Lifeboat Operations Coordinator, RNLI"
						dates="2020 - 2022"
						list1="Provided critical on-call support for staff and volunteers. Worked as Data Protection officer. Cleaned data and updated staff intranet."
					/>
				</li>
			</ul>
		</section>
	);
}
