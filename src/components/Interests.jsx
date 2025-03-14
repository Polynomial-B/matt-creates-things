import { Suspense } from "react";
import Image from "./Image";
import ErrorBoundary from "./ErrorBoundary";

function Interests({ text, imageSource, altText, link, body, isDark }) {
	return (
		<>
			{link ? (
				<a href={link} target="_blank" draggable={false}>
					<div className={"currently currently-link"}>
						<div
							className={
								isDark !== "dark-mode" ? "interest_dark" : ""
							}
						>
							<ErrorBoundary>
								<Suspense fallback={<div>Loading...</div>}>
									<Image
										imageSource={imageSource}
										altText={altText}
									/>
								</Suspense>
							</ErrorBoundary>
						</div>
						<div className="currently-text">{text}</div>
						<div className="currently-body">{body}</div>
						<div className="currently-image">♫</div>
					</div>
				</a>
			) : (
				<div className={"currently"}>
					<div
						className={
							isDark !== "dark-mode" ? "interest_dark" : ""
						}
					>
						<ErrorBoundary>
							<Suspense fallback={<div>Loading...</div>}>
								<Image
									imageSource={imageSource}
									altText={altText}
								/>
							</Suspense>
						</ErrorBoundary>
					</div>
					<div className="currently-text">{text}</div>
					<div className="currently-body">{body}</div>
				</div>
			)}
		</>
	);
}

export default Interests;
