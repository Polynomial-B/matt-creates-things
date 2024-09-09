import { Suspense } from "react";
import "../App.css";
import Image from "./Image";
import ErrorBoundary from "./ErrorBoundary";

function Project({name, description, technologies, imageSource, altText}) {


    return <>
    
    <div className="project-card">
							<div className="card-image">
								<ErrorBoundary>
									<Suspense>
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
									<p>
										{technologies}
									</p>
								</div>
							</div>
						</div>
    </>
}

export default Project;