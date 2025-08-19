import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Image from "./Image";

export default function About({ aboutRef }) {
	return (
		<section ref={aboutRef}>
			<h2>About</h2>
			<div className="about_contents">
				<div className="about_img">
					<ErrorBoundary>
						<Suspense fallback={<div className="spinner" />}>
							<Image
								imageSource={"/images/photo-1.png"}
								altText={"Portrait photo"}
							/>
						</Suspense>
					</ErrorBoundary>
				</div>
				{
					"With a background in human-centered roles, I love to develop software with a focus on accessibility. My decade of experience understanding diverse needs translates directly into my goal of building creative, practical and inclusive applications."
				}
			</div>
		</section>
	);
}
