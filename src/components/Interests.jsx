import { Suspense } from "react";
import Image from "./Image";
import ErrorBoundary from "./ErrorBoundary";

function Currently({text, imageSource, altText, playlist, link}) {
	return (
		<>
        {link ? <a href={link} target="_blank" id={playlist}>
        <div className="currently">
			<ErrorBoundary>
				<Suspense>
					<Image imageSource={imageSource} altText={altText} />
				</Suspense>
			</ErrorBoundary>
            <div className="currently-text link-hover">{text}</div>
            </div>
            </a> : <div className="currently">
			<ErrorBoundary>
				<Suspense>
					<Image imageSource={imageSource} altText={altText} />
				</Suspense>
			</ErrorBoundary>
            <div className="currently-text">{text}</div>
            </div>}
        </>
	);
}

export default Currently;