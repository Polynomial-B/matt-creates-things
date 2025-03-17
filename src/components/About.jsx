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
					"Helping others is my motivation. I have been an advisor and provided mentorship in the public, charity and private sector for more than a decade. I'm a patient and compassionate person who is determined to find meaningful work in the world of software engineering."
				}
			</div>
		</section>
	);
}
