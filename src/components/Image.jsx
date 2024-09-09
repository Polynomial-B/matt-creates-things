import { useImage } from 'react-image';

function Image({ imageSource, altText }) {
  const {src, error} = useImage({
    srcList: imageSource,
    useSuspense: true,
  });

  if (error) {
    throw error;
  }

  return <img src={src} draggable="false" alt={altText}/>
}

export default Image;