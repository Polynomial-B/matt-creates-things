import { Suspense } from "react";
import { projects } from "../assets/constants";
import ErrorBoundary from "./ErrorBoundary";
import Image from "./Image";

export default function ProjectGrid({ onProjectChange, activeProject }) {
	const handleClick = (project) => {
		onProjectChange(project);
	};

	return (
		<ul className="project__grid">
			{projects.map((project) => {
				return (
					<li
						key={project.id}
						onClick={() => handleClick(project)}
						className={
							activeProject === project ? "project__active" : ""
						}
					>
						<ErrorBoundary>
							<Suspense fallback={<div className="spinner" />}>
								<Image
									imageSource={project.imageSource}
									altText={project.altText}
									borderRadius={project.border}
								/>
							</Suspense>
						</ErrorBoundary>
					</li>
				);
			})}
		</ul>
	);
}
