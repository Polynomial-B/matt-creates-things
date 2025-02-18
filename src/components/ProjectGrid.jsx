import { Suspense } from "react";
import { projects } from "../assets/constants";
import ErrorBoundary from "./ErrorBoundary";

export default function ProjectGrid({ onProjectChange }) {
	const handleClick = (project) => {
		onProjectChange(project);
	};

	return (
		<ul className="project__grid">
			{projects.map((project) => {
				return (
					<li key={project.id} onClick={() => handleClick(project)}>
						<ErrorBoundary>
							<Suspense fallback={<div>Loading image...</div>}>
								<img
									src={project.imageSource}
									alt={project.altText}
								/>
							</Suspense>
						</ErrorBoundary>
					</li>
				);
			})}
		</ul>
	);
}
