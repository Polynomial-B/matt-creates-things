import { Suspense } from "react";
import Image from "./Image";
import ErrorBoundary from "./ErrorBoundary";

function Project({
	name,
	description,
	technologies,
	imageSource,
	altText,
	github,
	deployed,
}) {
	return (
		<>
			<div className="project-card">
				<div className="card-image">
					<ErrorBoundary>
						<Suspense fallback={<div className="spinner" />}>
							<Image
								imageSource={imageSource}
								altText={altText}
							/>
						</Suspense>
					</ErrorBoundary>
				</div>

				<div className="card-content">
					<h3 className="card-title">{name}</h3>
					<div className="card-description">
						<p>{description}</p>
						<div className="description-technologies">
							{technologies.map((item, index) => {
								return (
									<div
										className="description-technologies__item"
										key={index}
									>
										{item}
									</div>
								);
							})}
						</div>
					</div>
					<div className="project-links-container">
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="project-links link-hover"
						>
							Github ↗
						</a>
						{deployed && (
							<a
								href={deployed}
								target="_blank"
								rel="noopener noreferrer"
								className="project-links link-hover"
							>
								Website ↗
							</a>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;
