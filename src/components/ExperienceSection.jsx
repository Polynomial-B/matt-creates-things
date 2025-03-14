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
	);
}
