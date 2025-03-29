import { Suspense } from "react";
import Project from "./Project";
import ProjectGrid from "./ProjectGrid";
import ErrorBoundary from "./ErrorBoundary";

export default function ProjectSection({
	projectsRef,
	handleSelectProject,
	activeProject,
}) {
	return (
		<section id="project-section" ref={projectsRef}>
			<h2>Projects</h2>
			<div className="project-container">
				<ErrorBoundary>
					<Suspense fallback={<div className="spinner" />}>
						<ProjectGrid onProjectChange={handleSelectProject} />
						<Project
							name={activeProject.name}
							description={activeProject.description}
							technologies={activeProject.technologies}
							imageSource={activeProject.imageSource}
							altText={activeProject.altText}
							github={activeProject.github}
							deployed={activeProject.deployed}
						/>
					</Suspense>
				</ErrorBoundary>
			</div>
		</section>
	);
}
