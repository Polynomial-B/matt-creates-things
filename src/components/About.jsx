import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Image from "./Image";

export default function About({ aboutRef }) {
	return (
		<section ref={aboutRef}>
			<h2>About</h2>
			{/* <div className="about_contents">
				{
					"With a background in human-centered roles, I love to develop software, tools and APIs with a focus on accessibility and ease-of-use. My professional experience working in high-paced environments, where empathy is crucial, translates directly into my goal of building creative, practical and inclusive applications using modern tools."
				}
			</div> */}
		</section>
	);
}
