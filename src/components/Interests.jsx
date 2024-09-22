import { Suspense } from "react";
import Image from "./Image";
import ErrorBoundary from "./ErrorBoundary";

function Currently({text, imageSource, altText, playlist, link}) {
	return (
		<>
        <a href={link} target="_blank" id={playlist}>
        <div className="currently">
			<ErrorBoundary>
				<Suspense>
					<Image imageSource={imageSource} altText={altText} />
				</Suspense>
			</ErrorBoundary>
            <div className="currently-text">{text}</div>
            </div>
            </a>
        </>
	);
}

export default Currently;