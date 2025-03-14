import { useImage } from "react-image";

function Image({ imageSource, altText, borderRadius }) {
	const { src, error } = useImage({
		srcList: imageSource,
		useSuspense: true,
	});

	if (error) {
		throw error;
	}

	return (
		<img
			src={src}
			draggable="false"
			alt={altText}
			style={{ borderRadius: borderRadius }}
		/>
	);
}

export default Image;
