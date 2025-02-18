import { Suspense } from "react";
import Image from "./Image";
import ErrorBoundary from "./ErrorBoundary";

function Currently({ text, imageSource, altText, link, body, isDark }) {
	return (
		<>
			{link ? (
				<a href={link} target="_blank" draggable={false}>
					<div
						className={`currently currently-link ${
							!isDark ? "currently-light" : ""
						}`}
					>
						<ErrorBoundary>
							<Suspense fallback={<div>Loading...</div>}>
								<Image
									imageSource={imageSource}
									altText={altText}
								/>
							</Suspense>
						</ErrorBoundary>
						<div className="currently-text">{text}</div>
						<div className="currently-body">{body}</div>
						<div className="currently-image">♫</div>
					</div>
				</a>
			) : (
				<div
					className={`currently ${!isDark ? "currently-light" : ""}`}
				>
					<ErrorBoundary>
						<Suspense fallback={<div>Loading...</div>}>
							<Image
								imageSource={imageSource}
								altText={altText}
							/>
						</Suspense>
					</ErrorBoundary>
					<div className="currently-text">{text}</div>
					<div className="currently-body">{body}</div>
				</div>
			)}
		</>
	);
}

export default Currently;
