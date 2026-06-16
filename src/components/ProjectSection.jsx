import { Suspense } from "react";
import Project from "./Project";
// import ProjectGrid from "./ProjectGrid";
import ErrorBoundary from "./ErrorBoundary";
import { projects } from "../assets/constants";

export default function ProjectSection({
	projectsRef,
	handleSelectProject,
	project,
}) {
	return (
		<section id="project-section" ref={projectsRef}>
			<h2>Featured Projects</h2>
			<div className="project-container">
				<ErrorBoundary>
					<Suspense fallback={<div className="spinner" />}>
						{projects.map((project, key) => {
							return (
								<Project
									key={project.name}
									name={project.name}
									description={project.description}
									technologies={project.technologies}
									imageSource={project.imageSource}
									altText={project.altText}
									github={project.github}
									deployed={project.deployed}
								/>
							);
						})}
					</Suspense>
				</ErrorBoundary>
			</div>
		</section>
	);
}
