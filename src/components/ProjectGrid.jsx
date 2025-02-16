import { projects } from "../assets/constants";

export default function ProjectGrid({ onProjectChange }) {
	const handleClick = (project) => {
		onProjectChange(project);
	};

	return (
		<ul className="project__grid">
			{projects.map((project) => {
				return (
					<li key={project.name} onClick={() => handleClick(project)}>
						<img src={project.imageSource} alt={project.altText} />
					</li>
				);
			})}
		</ul>
	);
}
