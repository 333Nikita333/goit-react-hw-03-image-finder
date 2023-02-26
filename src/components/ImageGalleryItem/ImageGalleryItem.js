import { ImageItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ smallImageURL, tags }) => {
  return (
    <ImageItem>
      <img src={smallImageURL} alt={tags} />
    </ImageItem>
  );
};

export default ImageGalleryItem;
