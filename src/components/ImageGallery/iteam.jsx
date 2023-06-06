import React from 'react';
import styles from './ImagesGallery.module.css';

function ImageGalleryItem({ webformatURL, largeImageURL, onImageClick }) {
  function handleImageClick() {
    onImageClick(largeImageURL);
  }

  return (
    <li className="gallery-item">
      <img
        src={webformatURL}
        alt=""
        className="images"
        onClick={handleImageClick}
      />
    </li>
  );
}

export default ImageGalleryItem;
