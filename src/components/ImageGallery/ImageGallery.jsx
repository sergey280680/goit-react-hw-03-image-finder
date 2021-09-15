import React, { Component } from "react";
import { Ul } from "./ImageGallery.styled";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
  render() {
    const { images, handleSelectImage } = this.props;

    return (
      <>
        {images && (
          <>
            <Ul>
              {images.map(({ webformatURL, largeImageURL, tags, id }) => (
                <ImageGalleryItem
                  webformatURL={webformatURL}
                  key={id}
                  largeImageUrl={largeImageURL}
                  tags={tags}
                  onClick={handleSelectImage}
                />
              ))}
            </Ul>
          </>
        )}
      </>
    );
  }
}
