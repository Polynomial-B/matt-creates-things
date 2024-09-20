import { Suspense } from "react";
import "../App.css";
import Image from "./Image";
import ErrorBoundary from "./ErrorBoundary";

function Currently({text, imageSource, altText}) {
	return (
		<>
        <div className="currently">
			<ErrorBoundary>
				<Suspense>
					<Image imageSource={imageSource} altText={altText} />
				</Suspense>
			</ErrorBoundary>
            <div className="currently-text">{text}</div>
            </div>
        </>
	);
}

export default Currently;